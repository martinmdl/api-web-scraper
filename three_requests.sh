#!/bin/sh

SERVER=$1
PORT=$2
PARAM=$3

curl -X POST "$SERVER:$PORT?$PARAM=https%3A%2F%2Fwww.amazon.com%2Fgp%2Fproduct%2FB00SMBFZNG"
sleep $SLEEP_TIME
curl -X POST "$SERVER:$PORT?$PARAM=https%3A%2F%2Fwww.amazon.com%2Fgp%2Fproduct%2FB00TSUGXKE"
sleep $SLEEP_TIME
curl -X POST "$SERVER:$PORT?$PARAM=https%3A%2F%2Fwww.amazon.com%2Fgp%2Fproduct%2FB00TSUGXKE"
sleep $SLEEP_TIME