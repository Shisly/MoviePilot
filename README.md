# 免责声明

- **请勿**在任何国内平台宣传 MoviePilot，MoviePilot 仅用于学习交流使用。
- **请勿**将 MoviePilot 用于商业用途。
- **请勿**将 MoviePilot 制作为视频内容，于境内视频网站(版权利益方)传播。
- **请勿**将 MoviePilot 用于任何违反法律法规的行为。
- **请勿**将本仓库教程在国内任何平台宣传，本仓库**只**作为官方仓库部署教程补充。

# 部署实例

## docker-cli 实例

```bash
docker run -itd \
    --name moviepilot \
    --hostname moviepilot \
    -v /media:/media \
    -v /moviepilot/config:/config \
    -v /moviepilot/core:/moviepilot/.cache/ms-playwright \
    -e 'PUID=1000' \
    -e 'PGID=1000' \
    -e 'UMASK=022' \
    -e 'TZ=Asia/Shanghai' \
    -e 'MOVIEPILOT_AUTO_UPDATE=true' \
    -e 'MOVIEPILOT_CN_UPDATE=false' \
    -e 'NGINX_PORT=3000' \
    -e 'SUPERUSER=admin' \
    -e 'SUPERUSER_PASSWORD=password' \
    -e 'API_TOKEN=moviepilot' \
    -e 'PROXY_HOST=' \
    -e 'TMDB_API_DOMAIN=api.themoviedb.org' \
    -e 'DOWNLOAD_PATH=/media/downloads' \
    -e 'DOWNLOAD_MOVIE_PATH=/media/downloads/movies' \
    -e 'DOWNLOAD_TV_PATH=/media/downloads/tv' \
    -e 'DOWNLOAD_SUBTITLE=false' \
    -e 'DOWNLOAD_CATEGORY=false' \
    -e 'DOWNLOADER_MONITOR=true' \
    -e 'REFRESH_MEDIASERVER=true' \
    -e 'SCRAP_METADATA=true' \
    -e 'TORRENT_TAG=MOVIEPILOT' \
    -e 'LIBRARY_PATH=/media' \
    -e 'LIBRARY_MOVIE_NAME=movies' \
    -e 'LIBRARY_TV_NAME=tv' \
    -e 'LIBRARY_CATEGORY=false' \
    -e 'TRANSFER_TYPE=link' \
    -e 'COOKIECLOUD_HOST=http://cookiecloud:8088/cookie' \
    -e 'COOKIECLOUD_KEY=xxxxxxxxxxxxxxxxx' \
    -e 'COOKIECLOUD_PASSWORD=xxxxxxxxxxxxxxxx' \
    -e 'COOKIECLOUD_INTERVAL=20' \
    -e 'USER_AGENT=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.102 Safari/537.36' \
    -e 'MESSAGER=telegram' \
    -e 'TELEGRAM_TOKEN=xxxxxxxxxxxxx' \
    -e 'TELEGRAM_CHAT_ID=xxxxxxxxxxxxx' \
    -e 'TELEGRAM_USERS=xxxxxxxxxxxxx' \
    -e 'TELEGRAM_ADMINS=xxxxxxxxxxxxx' \
    -e 'WECHAT_CORPID=' \
    -e 'WECHAT_APP_SECRET=' \
    -e 'WECHAT_APP_ID=' \
    -e 'WECHAT_TOKEN=' \
    -e 'WECHAT_ENCODING_AESKEY=' \
    -e 'WECHAT_ADMINS=' \
    -e 'WECHAT_PROXY=' \
    -e 'SLACK_OAUTH_TOKEN=' \
    -e 'SLACK_APP_TOKEN=' \
    -e 'SLACK_CHANNEL=' \
    -e 'DOWNLOADER=qbittorrent' \
    -e 'QB_HOST=http://qbittorrent:8080' \
    -e 'QB_USER=admin' \
    -e 'QB_PASSWORD=adminadmin' \
    -e 'TR_HOST=' \
    -e 'TR_USER=' \
    -e 'TR_PASSWORD=' \
    -e 'MEDIASERVER=emby' \
    -e 'EMBY_HOST=http://emby:8096' \
    -e 'EMBY_API_KEY=xxxxxxxxxxxxx' \
    -e 'JELLYFIN_HOST=' \
    -e 'JELLYFIN_API_KEY=' \
    -e 'PLEX_HOST=' \
    -e 'PLEX_TOKEN=' \
    -e 'AUTH_SITE=iyuu' \
    -e 'IYUU_SIGN=xxxxxxxxxxxxx' \
    -e 'BIG_MEMORY_MODE=false' \
    -e 'MOVIE_RENAME_FORMAT={{title}}{% if year %} ({{year}}){% endif %}/{{title}}{% if year %} ({{year}}){% endif %}{% if part %}-{{part}}{% endif %}{% if videoFormat %} - {{videoFormat}}{% endif %}{{fileExt}}' \
    -e 'TV_RENAME_FORMAT={{title}}{% if year %} ({{year}}){% endif %}/Season {{season}}/{{title}} - {{season_episode}}{% if part %}-{{part}}{% endif %}{% if episode %} - 第 {{episode}} 集{% endif %}{{fileExt}}' \
    --log-driver "json-file" \
    --log-opt "max-size=5m" \
    --restart always \
    jxxghp/moviepilot:latest
```

## docker-compose 实例

[docker-compose.yml](https://raw.githubusercontent.com/DDS-Derek/MoviePilot/docs/docker-compose.yml)

## UnRaid 配置模板

[Unraid-MoviePilot.xml](https://raw.githubusercontent.com/DDS-Derek/MoviePilot/docs/Unraid-MoviePilot.xml) by 群友支持

将此文件放入 `/boot/config/plugins/dockerMan/templates-user` 文件夹下即可使用，或者使用下面一键命令。

```bash
curl -sL https://raw.githubusercontent.com/DDS-Derek/MoviePilot/docs/Unraid-MoviePilot.xml -o /boot/config/plugins/dockerMan/templates-user/MoviePilot.xml
```

# 目录挂载解释

```bash
宿主机文件结构推荐：
media
├── downloads
│   ├── movies
│   └── tv
├── movies
└── tv

media/movies 和 media/tv 是硬链接后文件路径
media/downloads/movies 和 media/downloads/tv 是下载路径

moviepilot目录挂载及相关环境变量设置：
-v ./media:/media
-e DOWNLOAD_PATH=/media/downloads
-e DOWNLOAD_MOVIE_PATH=/media/downloads/movies
-e DOWNLOAD_TV_PATH=/media/downloads/tv
-e LIBRARY_PATH=/media
-e LIBRARY_MOVIE_NAME=/media/movies
-e LIBRARY_TV_NAME=/media/tv

下载器目录挂载：
-v ./media/downloads:/media/downloads
```