import sys,os,json
# if not os.listdir(CONST_BOOTSTRAP_PATH)[i].endswith(".")
CONST_BOOTSTRAP_PATH = "../BootstrapUtils/BootstrapTemplates/"
#CONST_BOOTSTRAP_PATH = "/home/josh/Desktop"
CONST_ARCH_TYPES = ["foo","Standard","MEAN","LAMP"]
#create JSON obj that holds required fields

def main():
	obj = {}
	obj['title'] = "title"
	archs = [{'name':CONST_ARCH_TYPES[i]} for i in range(1,len(sys.argv)) if int(sys.argv[i]) == 1]
	obj['arch_types'] = archs
	bootstraps = [{'name':os.listdir(CONST_BOOTSTRAP_PATH)[i]} for i in range(len(os.listdir(CONST_BOOTSTRAP_PATH)))]
	obj['bootstraps'] = bootstraps
	json_data = json.dumps(obj)
	json_file = open("options.json",'w')
	json_file.write(json_data)
main()
