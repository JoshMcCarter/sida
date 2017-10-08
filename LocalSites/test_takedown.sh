#!/bin/bash

PID=$(pgrep -f "main.js")
echo $PID
node terminate_process.js $PID
