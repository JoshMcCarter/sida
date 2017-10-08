#!/bin/bash

PID=$(pgrep -f "index.js")
node terminate_process.js $PID
