#!/bin/bash
# Launches start jekyll server and opens the server with the safari browser, after closing the browser, the jekyll server is also stopped. 

shutdown() {
  # Get our process group id
  PGID=$(ps -o pgid= $$ | grep -o [0-9]*)

  # Kill it in a new new process group
  setsid kill -- -$PGID
  exit 0
}

trap "shutdown" SIGINT SIGTERM

bundle exec jekyll serve & 
sleep 3
open -WFn -a "Google Chrome" http://127.0.0.1:4000
ps aux |grep jekyll |awk '{print $2}' | xargs kill -9
