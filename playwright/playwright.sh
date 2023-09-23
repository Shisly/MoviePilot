#!/bin/bash

Green="\033[32m"
Red="\033[31m"
Yellow='\033[33m'
Font="\033[0m"
INFO="[${Green}INFO${Font}]"
ERROR="[${Red}ERROR${Font}]"
WARN="[${Yellow}WARN${Font}]"
function INFO() {
echo -e "${INFO} ${1}"
}
function ERROR() {
echo -e "${ERROR} ${1}"
}
function WARN() {
echo -e "${WARN} ${1}"
}

umask ${UMASK}

shopt -s dotglob

if [ -f /downloads/.cache ]; then
    mkdir -p /downloads/.cache/ms-playwright
    mv /data/* /downloads/.cache/ms-playwright
    ls -al /downloads/.cache/ms-playwright
    INFO '浏览器内核下载成功'
else
    rm -rf /downloads/*
    mv /data/* /downloads
    ls -al /downloads
    INFO '浏览器内核下载成功'
fi

INFO '设置权限中...'
chown -R ${PUID}:${PGID} /downloads
INFO '权限设置成功'

shopt -u dotglob

tail -f /dev/null