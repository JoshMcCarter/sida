#!/bin/bash

#This bash file is the script that starts different processes and node.

#Get the JSON Data from the JSON File containing user settings
declare -a SETTINGS = python JSONReader.py $0

#SETTINGS Array Format: Archtype, Template Name, Domain Name

#Check to make sure the requested files and folders exist

if [ ! -d "../BootstrapUtils/BootstrapTemplates/${SETTINGS[1]}" ]; then
	echo "[ERROR] Selected BootStrap Template does not exist!"
else
	cd ../
	FULLPATH=$(pwd) + "/BootstrapUtils/BootstrapTemplates/${SETTINGS[1]}"
	node main.js $FULLPATH
fi

