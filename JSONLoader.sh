#!/usr/bash

mean_stack=1
lamp_stack=1
standard_stack=1
constant_check=1

exists()
{
	command -v "$1" >/dev/null 2>&1
}

check(){
	constant_check=0
	if exists $1; then
		constant_check=1
	fi

}

standard_stack_check(){
	local iter=0
	bool_arr=(0 0)
	prog_arr=(nodejs npm)
	for i in "${prog_arr[@]}"
	do
		check $i
		bool_arr[iter]=$constant_check
		iter+=1
	done
	
	for j in "${bool_arr[@]}"
	do
		if [ $j = 0 ]; then
			echo ${bool_arr[@]}
			standard_stack=0
		fi
	done
}

standard_stack_check

python JSONLoader.py $standard_stack $mean_stack $lamp_stack