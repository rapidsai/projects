from bs4 import BeautifulSoup
import re
import sys
import json

filepath = sys.argv[1]

docs_home = "https://docs.rapids.ai/api"
stable_version = 12
versions_dict = {
    "nightly": stable_version + 1,
    "stable": stable_version,
    "legacy": stable_version - 1,
}
with open("lib_map.json") as fp:
    lib_path_dict = json.load(fp)

library_container_id = "library-selector-container"
version_container_id = "version-selector-container"
script_tag_id = "selector-js"


def get_version_from_fp():
    """
    Determines if the current html document is for legacy, stable, or nightly versions
    based on the file path
    """
    match = re.search(r"0.\d{1,3}.0", filepath)
    version_number = int(match[0].split(".")[1])
    version_name = "legacy"
    if version_number == versions_dict["nightly"]:
        version_name = "nightly"
    if version_number == versions_dict["stable"]:
        version_name = "stable"
    return {"name": version_name, "number": version_number}


def get_lib_from_fp():
    """
    Determines the current RAPIDS library based on the file path
    """

    for lib in lib_path_dict.keys():
        if re.search(f"(^{lib}/|/{lib}/)", filepath):
            return lib
    raise Exception("Couldn't find valid library name in filepath.")


def update_home_btn(soup):
    """
    Updates the Home button text and href at the top of the sidebar.
    """
    home_btn = soup.select(".wy-side-nav-search .icon.icon-home")[0]
    home_btn["href"] = docs_home
    home_btn.string = "Home"


def create_version_selector(soup):
    """
    Creates and returns a div containing the "legacy", "stable", "nightly" selector
    """
    version_div = soup.new_tag("div", id=version_container_id)
    version_selector = soup.new_tag("select", id="version-selector")
    doc_version = get_version_from_fp()
    doc_lib = get_lib_from_fp()
    doc_is_extra_legacy = (  # extra legacy means the doc version is older then current legacy
        doc_version["name"] == "legacy"
        and versions_dict["legacy"] != doc_version["number"]
    )
    for version_name, version_path in [
        (_, path) for _, path in lib_path_dict[doc_lib].items() if path is not None
    ]:
        if doc_is_extra_legacy and version_name == "legacy":
            version_number = doc_version["number"]
        else:
            version_number = versions_dict[version_name]
        option_el = soup.new_tag("option")
        option_el["value"] = version_path
        option_el.string = f"{version_name} (0.{str(version_number)})"
        if version_name == doc_version["name"]:
            print(f"default version: {version_name}")
            option_el["selected"] = None
        version_selector.append(option_el)

    version_div.append(version_selector)
    return version_div


def create_library_selector(soup):
    """
    Creates and returns a div containing the library selector
    """
    library_div = soup.new_tag("div", id=library_container_id)
    library_selector = soup.new_tag("select", id="library-selector")
    doc_lib = get_lib_from_fp()

    for lib, lib_versions in lib_path_dict.items():
        if lib_versions["stable"]:
            option_value = lib_versions["stable"]
        elif lib_versions["nightly"]:
            option_value = lib_versions["nightly"]
        elif lib_versions["legacy"]:
            option_value = lib_versions["legacy"]
        else:
            continue
        option_el = soup.new_tag("option")
        option_el["value"] = option_value
        option_el.string = lib
        if lib == doc_lib:
            print(f"default lib: {lib}")
            option_el["selected"] = None
        library_selector.append(option_el)

    library_div.append(library_selector)
    return library_div


def create_script_tag(soup):
    """
    Creates and returns a script tag with the contents of selector.js inside
    """
    with open("selector.js") as fp:
        js = fp.read()
    script_tag = soup.new_tag("script", defer=None, id=script_tag_id)
    script_tag.string = js
    return script_tag


def delete_element(soup, selector):
    """
    Deletes element from soup object if it already exists
    """
    try:
        soup.select(f"{selector}")[0].extract()
    except:
        pass


def is_sphinx_or_doxygen(soup):
    """
    Identifies whether a given document is a Sphinx or Doxygen document
    by parsing the HTML. Returns a string identifier and reference element
    that is used for inserting the library/version selectors to the doc.
    """
    if soup.select(".wy-side-nav-search"):
        return "sphinx", soup.select(".wy-side-nav-search [role='search']")[0]

    if soup.select("#titlearea"):
        return "doxygen", soup.select("#titlearea")[0]

    raise Exception(f"Couldn't identify {filepath} as either Doxygen or Sphinx")


def main():
    """
    Given the path to a documentation HTML file, this function will
    parse the file and add library/version selectors to the sidebar
    and re-map the Home button to point to https://docs.rapids.ai/api
    """
    print(f"--- {filepath} ---")
    with open(filepath) as fp:
        soup = BeautifulSoup(fp, "html.parser")

    doc_type, reference_el = is_sphinx_or_doxygen(soup)

    # Delete any existing added/unnecessary elements
    for element in [
        f"#{version_container_id}",
        f"#{library_container_id}",
        f"#{script_tag_id}",
        "#titlearea > table",
    ]:
        delete_element(soup, element)

    # Update Home button
    if doc_type == "sphinx":
        update_home_btn(soup)

    # Create new elements
    version_selector = create_version_selector(soup)
    library_selector = create_library_selector(soup)
    script_tag = create_script_tag(soup)

    # Insert new elements
    if doc_type == "doxygen":
        reference_el.append(library_selector)
        reference_el.append(version_selector)
    elif doc_type == "sphinx":
        reference_el.insert_before(library_selector)
        reference_el.insert_before(version_selector)

    soup.body.append(script_tag)

    with open(filepath, "w") as fp:
        fp.write(soup.prettify())


if __name__ == "__main__":
    main()
