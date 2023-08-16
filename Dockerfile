FROM python:3.11.4-slim-bullseye
ENV LANG="C.UTF-8" \
    HOME="/moviepilot" \
    TERM="xterm" \
    TZ="Asia/Shanghai" \
    PUID=0 \
    PGID=0 \
    UMASK=000 \
    MOVIEPILOT_AUTO_UPDATE=true \
    MOVIEPILOT_CN_UPDATE=false \
    NGINX_PORT=3000 \
    CONFIG_DIR="/config" \
    API_TOKEN="moviepilot" \
    AUTH_SITE="iyuu" \
    DOWNLOAD_PATH="/downloads" \
    DOWNLOAD_CATEGORY="false" \
    TORRENT_TAG="MOVIEPILOT" \
    LIBRARY_PATH="" \
    LIBRARY_CATEGORY="false" \
    TRANSFER_TYPE="copy" \
    COOKIECLOUD_HOST="https://nastool.org/cookiecloud" \
    COOKIECLOUD_KEY="" \
    COOKIECLOUD_PASSWORD="" \
    MESSAGER="telegram" \
    TELEGRAM_TOKEN="" \
    TELEGRAM_CHAT_ID="" \
    DOWNLOADER="qbittorrent" \
    QB_HOST="127.0.0.1:8080" \
    QB_USER="admin" \
    QB_PASSWORD="adminadmin" \
    MEDIASERVER="emby" \
    EMBY_HOST="http://127.0.0.1:8096" \
    EMBY_API_KEY=""
WORKDIR "/app"
RUN apt-get update \
    && apt-get -y install \
        musl-dev \
        nginx \
        gettext-base \
        locales \
        procps \
        gosu \
        bash \
        wget \
        curl \
        busybox \
        dumb-init \
        git \
        gnupg \
    && curl -fsSL https://deb.nodesource.com/setup_18.x | bash - \
    && apt-get -y install nodejs \
    && \
    if [ "$(uname -m)" = "x86_64" ]; \
        then ln -s /usr/lib/x86_64-linux-musl/libc.so /lib/libc.musl-x86_64.so.1; \
    elif [ "$(uname -m)" = "aarch64" ]; \
        then ln -s /usr/lib/aarch64-linux-musl/libc.so /lib/libc.musl-aarch64.so.1; \
    fi \
    && node --version \
    && npm --version \
    && npm install -g yarn \
    && git clone -b main https://github.com/jxxghp/MoviePilot.git /app \
    && git clone -b main https://github.com/jxxghp/MoviePilot-Frontend.git /tmp/web \
    && cd /tmp/web \
    && yarn \
    && yarn build \
    && mv /tmp/web/dist /public \
    && cd /app \
    && cp -f /app/nginx.conf /etc/nginx/nginx.template.conf \
    && cp -f /app/update /usr/local/bin/mp_update \
    && chmod +x /entrypoint /usr/local/bin/mp_update \
    && mkdir -p ${HOME} \
    && groupadd -r moviepilot -g 911 \
    && useradd -r moviepilot -g moviepilot -d ${HOME} -s /bin/bash -u 911 \
    && apt-get install -y build-essential \
    && pip install --upgrade pip \
    && pip install -r requirements.txt \
    && playwright install-deps chromium \
    && python_ver=$(python3 -V | awk '{print $2}') \
    && echo "/app/" > /usr/local/lib/python${python_ver%.*}/site-packages/app.pth \
    && echo 'fs.inotify.max_user_watches=5242880' >> /etc/sysctl.conf \
    && echo 'fs.inotify.max_user_instances=5242880' >> /etc/sysctl.conf \
    && locale-gen zh_CN.UTF-8 \
    && apt-get autoremove -y \
    && apt-get clean -y \
    && rm -rf \
        /tmp/* \
        /moviepilot/.cache \
        /var/lib/apt/lists/* \
        /var/tmp/*
COPY --chmod=755 entrypoint /entrypoint
EXPOSE 3000
VOLUME ["/config"]
ENTRYPOINT [ "/entrypoint" ]