#!/bin/bash

ID=1
IFS=$'\n' # make newlines the only separator
for line in $(tail -n+2 dico_FR_SWB.csv); do
  LANGUAGE1=$(echo $line | cut -d"," -f1)
  LANGUAGE2=$(echo $line | cut -d"," -f2)
  WORD1=$(echo $line | cut -d"," -f3)
  WORD2=$(echo $line | cut -d"," -f4)
  CATEGORY=$(echo $line | cut -d"," -f5)

  echo "{"
  echo "\"id\": $ID,"
  echo "\"language1\": \"$LANGUAGE1\","
  echo "\"language2\": \"$LANGUAGE2\","
  echo "\"word1\": \"$WORD1\","
  echo "\"word2\": \"$WORD2\","
  echo "\"category\": \"$CATEGORY\","
  echo "},"
  ID=$(( ${ID} + 1))
done
