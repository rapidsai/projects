#!/bin/bash
set -e

SPHINX_SEARCH_TERM='class="wy-side-nav-search"'
DOXYGEN_SEARCH_TERM='id="titlearea"'
CURRENT_STABLE_VERSION="12"

# IFS is changed due to cuxfilter docs having spaces in their filenames
OIFS="$IFS"
IFS=$'\n'
for FILE in $(grep "${SPHINX_SEARCH_TERM}\|${DOXYGEN_SEARCH_TERM}" -rl \
  --include=\*.html \
  --exclude-dir=stable \
  --exclude-dir=nightly \
  --exclude-dir=latest \
  --exclude-dir=legacy \
  . ); do
  python customize_doc.py ${FILE} ${CURRENT_STABLE_VERSION}
  echo "" # line break for readability
done
IFS="$OIFS"
