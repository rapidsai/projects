#!/bin/bash
set -e

SPHINX_SEARCH_TERM='class="wy-side-nav-search"'
DOXYGEN_SEARCH_TERM='id="titlearea"'

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
  python update_sidebar.py ${FILE}
  echo "" # line break for readability
done
IFS="$OIFS"
