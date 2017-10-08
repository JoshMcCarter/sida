#This is the python script to read in JSON object data from the user choice JSON object.

#imports JSON library
import json

import sys

#Opens JSON file
def main():

	with(open(sys.argv[1], 'r')) as f:
		JSONDict = json.load(f)
	FinalList = []
	FinalList.append(JSONDict['arch'].encode('ascii'))
	FinalList.append(JSONDict['template'].encode('ascii'))
	FinalList.append(JSONDict['domain-name'].encode('ascii'))
	print(FinalList)
	return FinalList

main()
