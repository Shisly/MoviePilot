#!/bin/bash

shopt -s dotglob

if [ -f /downloads/.cache ]; then
    mkdir -p /downloads/.cache/ms-playwright
    mv /data/* /downloads/.cache/ms-playwright
    ls -al /downloads/.cache/ms-playwright
else
    rm -rf /downloads/*
    mv /data/* /downloads
    ls -al /downloads
fi

shopt -u dotglob

tail -f /dev/null