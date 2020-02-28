#!/bin/bash


for FILE in $(grep "wy-side-nav-search" -rl \
  --include=\*.html \
  --exclude-dir=stable \
  --exclude-dir=nightly \
  --exclude-dir=latest \
  --exclude-dir=legacy \
  . ); do
  python update_sidebar.py ${FILE}
  echo ""
done
