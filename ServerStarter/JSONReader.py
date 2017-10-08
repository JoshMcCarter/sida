#This is the python script to read in JSON object data from the user choice JSON object.

#imports JSON library
import json

import sys

#Opens JSON file
def main():
	JSONDict = json.load(sys.argv[1])
	FinalList = [JSONDict['arch'], JSONDict['template'], JSONDict['domain-name']]
	return FinalList

main()

