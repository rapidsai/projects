#!/bin/bash
cd ..
FILE_LIST=/tmp/themer
CUSTOM_CSS=theme/custom.css
CUSTOM_HEADER=`head -n 1 $CUSTOM_CSS`
CUSTOM_LC=`cat $CUSTOM_CSS | wc -l`

function logger() {
  TS=`date`
  echo "[$TS] $@"
}

logger "Getting files to update..."
grep -R "sphinx_rtd_theme" . | grep -v themer.sh | grep theme.css | tr ':' ' ' | awk '{ print $1 }' > $FILE_LIST

logger "Files found..."
cat $FILE_LIST

logger "Updating CSS..."
while read line; do
  logger ">>>>>>>> Checking for update in '$line'..."
  COMM_LINES=`awk 'NR==FNR{a[$1]++;next} a[$1]' $line $CUSTOM_CSS | wc -l`
  if [ "$COMM_LINES" == "$CUSTOM_LC" ]; then
    logger "[ PASS ] File already updated"
  else
    logger "[ FAIL ] File needs custom theme"
    cat $CUSTOM_CSS >> $line
  fi
done < $FILE_LIST