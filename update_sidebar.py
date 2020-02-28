from bs4 import BeautifulSoup
import re
import argparse

parser = argparse.ArgumentParser(
    description="Updates a given documentation HTML file to include version/lib selectors and remap Home button."
)
parser.add_argument("filepath")
args = parser.parse_args()

filepath = args.filepath
docs_home = "https://docs.rapids.ai/api"
stable_version = 12
versions = {
    "nightly": stable_version + 1,
    "stable": stable_version,
    "legacy": stable_version - 1,
}
libs = [
    "clx",
    "cudf",
    "cugraph",
    "cuml",
    "cuspatial",
    "cuxfilter",
    "libcudf",
    "libnvstrings",
    "nvstrings",
    "rmm",
]
library_container_id = "library-selector-container"
version_container_id = "version-selector-container"
script_tag_id = "selector-js"


def get_doc_version():
    """
    Determines if the current html document is for legacy, stable, or nightly versions
    based on the file path
    """
    match = re.search(r"0.\d{1,3}.0", filepath)
    version_number = int(match[0].split(".")[1])
    version_name = "legacy"
    if version_number == versions["nightly"]:
        version_name = "nightly"
    if version_number == versions["stable"]:
        version_name = "stable"
    return {"name": version_name, "number": version_number}


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
    doc_version = get_doc_version()

    for version_name, version_number in versions.items():
        if (
            doc_version["name"] is "legacy"
            and version_name is "legacy"
            and version_number is not doc_version["number"]
        ):
            version_number = doc_version["number"]
        option_el = soup.new_tag("option")
        option_el["value"] = version_name
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

    for lib in libs:
        option_el = soup.new_tag("option")
        option_el["value"] = lib
        option_el.string = lib
        if re.search(f"(^{lib}/|/{lib}/)", filepath):
            print(f"default lib: {lib}")
            option_el["selected"] = None
        library_selector.append(option_el)

    library_div.append(library_selector)
    return library_div


def create_script_tag(soup):
    """
    Creates a script tag with the contents of selector.js inside
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


def main():
    """
    Given the path to a documentation HTML file, this functin will
    parse the file and add library/version selectors to the sidebar
    and re-map the Home button to point to https://docs.rapids.ai/api
    """
    print(f"--- {filepath} ---")
    with open(filepath) as fp:
        soup = BeautifulSoup(fp, "html.parser")
    version_div = soup.select(".wy-side-nav-search div.version")[0]

    # Delete any existing added elements
    for element in [version_container_id, library_container_id, script_tag_id]:
        delete_element(soup, f"#{element}")

    # Update Home button
    update_home_btn(soup)

    # Create new elements
    version_selector = create_version_selector(soup)
    library_selector = create_library_selector(soup)
    script_tag = create_script_tag(soup)

    # Insert new elements
    version_div.insert_after(version_selector)
    version_div.insert_after(library_selector)
    soup.body.append(script_tag)

    with open(filepath, "w") as fp:
        fp.write(soup.prettify())


if __name__ == "__main__":
    main()
