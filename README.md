# Projects

This repo holds all of the documentation generated by the RAPIDS libraries. It also contains some scripts and CSS/JS files required to customize the generated docs to includes RAPIDS styling.

The Jenkins jobs listed [here](https://gpuci.gpuopenanalytics.com/job/rapidsai/job/doc-builds/) are responsible for building and committing the documentation files.

# Documentation Customization

The documentation below describes how the scripts work to customize the generated HTML files. The scripts should be run in the order they appear in the table of contents.

## Table of Contents

- [Update Symlinks](#symlinks)
- [Generate Library Map](#generate-library-map)
- [Customize HTML File](#customize-html)
- [TL;DR](#TL;DR)

### Symlinks

For the doc customization to work correctly, all of the symlinks need to be up to date. The symlinks ultimately enable us to generate paths like `/cudf/en/stable/` that point to the latest RAPIDS release version folder (i.e. `/cudf/en/0.13.0/`).

[update_symlinks.sh](update_symlinks.sh) is a shell script that accepts the current RAPIDS stable version (i.e. `13`) as a positional parameter and updates each project's symlinks accordingly. It looks for the legacy, stable, and nightly version folders (i.e. `0.11.0`, `0.12.0`, etc.) and creates the corresponding symlinks if those folders exist.

**Usage:**

```
update_symlinks.sh 13
```

### Generate Library Map

One of the ways we customize the documentation files is by adding dropdown selectors to each doc page that allows visitors to select and navigate between RAPIDS libraries and their versions. In order to know what page a user will be directed to upon selection, a map of available libraries and versions needs to be generated. [lib_map.sh](lib_map.sh) generates this map.

`lib_map.sh` creates a JSON file that is used by `customize_docs.py` to populate the available options for the _libray_ and _version_ selectors.

An excerpt of the generated JSON file is shown below:

```json
{
  "clx": {
    "nightly": "/clx/en/nightly/api.html",
    "stable": "/clx/en/stable/api.html",
    "legacy": null
  },
  "cuml": {
    "nightly": "/cuml/en/nightly/api.html",
    "stable": "/cuml/en/stable/api.html",
    "legacy": "/cuml/en/legacy/api.html"
  },
  "cuxfilter": {
    "nightly": "/cuxfilter/en/nightly",
    "stable": null,
    "legacy": null
  },
  "libcudf": {
    "nightly": "/libcudf/nightly/namespacecudf.html",
    "stable": "/libcudf/stable/namespacecudf.html",
    "legacy": "/libcudf/legacy/namespacecudf.html"
  }
}
```

### Customize HTML

[customize_doc.py](customize_doc.py) is a Python script that uses [Beautiful Soup](https://www.crummy.com/software/BeautifulSoup/bs4/doc/) to theme Doxygen and Sphinx HTML documentation files. It adds the following elements to each documentation page:

- A _Home_ button that links to https://docs.rapids.ai/api
- A _library_ selector that enables navigation to different RAPIDS libraries
- A _version_ selector that enables navigation to the different versions of each RAPIDS library
- A `style` tag containing the contents of [rapids.css](rapids.css) in the file's `head`
- A `script` tag containing the contents of [rapids.js](rapids.js) at the end the file's `body`
- A `link` tag enabling [FontAwesome](https://fontawesome.com/) in the file's `head` (only for Doxygen files)

To use `customize_doc.py`, run:

> Before running the script, it is important that [update_symlinks.sh](update_symlinks.sh) and [lib_map.sh](lib_map.sh) have been run.

```sh
python customize_docs.py ${PATH_TO_HTML_FILE} ${CURRENT_RAPIDS_VERSION}
```

`customize_doc.py` can be safely run multiple times on a single file without adding duplicate elements to the page.

### TL;DR

To customize the docs, run:

```sh
CURRENT_RAPIDS_VERSION="12"

update_symlinks.sh ${CURRENT_RAPIDS_VERSION} # ensures symlink accuracy

lib_map.sh # generates a JSON file needed by customize_docs.py

for FILE in $(some_grep_command_to_find_doc__html_files); do
  python customize_docs.py ${FILE} ${CURRENT_RAPIDS_VERSION}
done

```
