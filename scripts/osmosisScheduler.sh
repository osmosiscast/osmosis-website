#!/bin/bash

# Build website
curl -X POST ${OSMOSIS_BUILD_WEBHOOK}

# Notify episode release (discord)
episode_directory="/volume8/share/"
temporary_payload_list="/tmp/osmosisScheduler_payload_files.log"
find "${episode_directory}" -name "*.json" -exec grep -l "$(date '+%Y-%m-%d')" {} >| ${temporary_payload_list} \;
number_of_files=$(cat ${temporary_payload_list} | wc -l)
if [ "${number_of_files}" -eq "1" ]
then
  payload_file="$(cat ${temporary_payload_list})"
  curl -H "Content-Type: application/json" -X POST -d @${payload_file} ${EPISODE_RELEASE_WEBHOOK}
 else
  echo "Website built but no new episodes"
fi

