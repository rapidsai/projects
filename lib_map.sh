#!/bin/bash
#
# This script generates a lib_map.json file that maps each RAPIDS library
# to its default documentation page for each version (legacy, stable, nightly).
# i.e.
# { "libcudf": {
#     "stable": "/libcudf/stable/namespacecudf.html",
#     "nightly": "/libcudf/nightly/namespacecudf.html",
#     "legacy": "/libcudf/legacy/namespacecudf.html"
#   }
#   "cuspatial": {
#     "stable": null,
#     "nightly": "/cuspatial/en/nightly/api.html",
#     "legacy": null
#    }, ...}


PROJ_ROOT=$(PWD)
FOLDER_MAP="{}"

for FOLDER in */ ; do
  # Skip theme folder
  if [ ${FOLDER} = "theme/" ]; then
    continue
  fi

  LIB=$(echo ${FOLDER} | sed 's:/*$::') # remove trailing slash
  DEFAULT_PATH=${LIB}
  cd ${FOLDER}

  if [ -d "en" ]; then
    DEFAULT_PATH+="/en"
    cd en
  fi

  FOLDER_MAP=$(echo ${FOLDER_MAP} | jq ". + {${LIB}: {}}") # initialize empty JSON object for lib

  LIB_ROOT=${DEFAULT_PATH}
  for VERSION in "nightly" "stable" "legacy"; do
    DEFAULT_PATH=${LIB_ROOT}
    FOLDER_MAP=$(echo ${FOLDER_MAP} | jq ".${LIB}.${VERSION} = null")

    if [ -d "${VERSION}" ]; then
      DEFAULT_PATH+="/${VERSION}"

      if [[ "${LIB}" =~ ^(rmm|libnvstrings)$ ]]; then
        DEFAULT_PATH+="/annotated.html"

      elif [ "${LIB}" = libcudf ]; then
        DEFAULT_PATH+="/namespacecudf.html"

      elif [ -f "${VERSION}/api.html" ]; then
        DEFAULT_PATH+="/api.html"
      fi

      FOLDER_MAP=$(echo ${FOLDER_MAP} | jq ".${LIB}.${VERSION} = \"/${DEFAULT_PATH}\"") # Add version entry to lib object
    fi
  done

  cd ${PROJ_ROOT}
done


echo ${FOLDER_MAP} | jq '.' > lib_map.json
# echo ${FOLDER_MAP} | jq '.'
