#!/bin/bash
#######################################
# Updates all symlink folders based on a given stable version number
#
# Positional Arguments:
#   1) STABLE_VERSION: current RAPIDS stable version (i.e. 12, 13, 14, etc.)
#######################################

PROJ_ROOT=$(PWD)
STABLE_VERSION=$1

STABLE_FOLDER=$(echo "0.$((${STABLE_VERSION})).0")
LEGACY_FOLDER=$(echo "0.$((${STABLE_VERSION} - 1)).0")
NIGHTLY_FOLDER=$(echo "0.$((${STABLE_VERSION} + 1)).0")


for FOLDER in */ ; do
  cd ${FOLDER}
  echo ""
  echo "${FOLDER}--------"
  SYMLINKS_CHANGED=0
  if [ -d "en" ]; then
    cd en
  fi


  if [ -d "${STABLE_FOLDER}" ]; then
    rm -rf stable latest
    ln -s ${STABLE_FOLDER} stable
    ln -s ${STABLE_FOLDER} latest
    SYMLINKS_CHANGED=1
    echo "stable & latest point to ${STABLE_FOLDER}"
  fi

  if [ -d "${LEGACY_FOLDER}" ]; then
    rm -rf legacy
    ln -s ${LEGACY_FOLDER} legacy
    SYMLINKS_CHANGED=1
    echo "legacy points to ${LEGACY_FOLDER}"
  fi

  if [ -d "${NIGHTLY_FOLDER}" ]; then
    rm -rf nightly
    ln -s ${NIGHTLY_FOLDER} nightly
    SYMLINKS_CHANGED=1
    echo "nightly points to ${NIGHTLY_FOLDER}"
  fi

  if [ $SYMLINKS_CHANGED = 0 ]; then
  echo "No symlinks added"
  fi
  echo "---------------"
  echo ""
  cd ${PROJ_ROOT}
done
