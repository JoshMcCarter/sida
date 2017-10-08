#!/bin/bash

#This bash file is the script that starts different processes and node.

#Get the JSON Data from the JSON File containing user settings
declare -a SETTINGS=($(python ../ServerStarter/JSONReader.py $1 | tr -d '[],'))

#SETTINGS Array Format: Archtype, Template Name, Domain Name

#Check to make sure the requested files and folders exist

TEMPLATE_NAME=${SETTINGS[1]//\'/}
echo $TEMPLATE_NAME
if [ ! -d "../BootstrapUtils/BootstrapTemplates/${TEMPLATE_NAME}" ]; then
	echo "[ERROR] Selected BootStrap Template does not exist!"
else
	cd ../
	FULLPATH="../BootstrapUtils/BootstrapTemplates/${TEMPLATE_NAME}"
	node ../sida/Website/main.js $FULLPATH
fi
