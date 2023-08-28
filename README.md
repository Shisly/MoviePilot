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
    -e 'AUTO_DOWNLOAD_USER='
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

[docker-compose.yml](https://raw.githubusercontent.com/DDS-Derek/MoviePilot/docs/examples/docker-compose.yml)

## UnRaid 配置模板

[Unraid-MoviePilot.xml](https://raw.githubusercontent.com/DDS-Derek/MoviePilot/docs/examples/Unraid-MoviePilot.xml) by 群友支持

1. <img src="https://raw.githubusercontent.com/DDS-Derek/MoviePilot/docs/img/1.png" alt="步骤01" width="600">
打开Unraid的Web控制页面，右上角找到“终端”并打开

2. <img src="https://raw.githubusercontent.com/DDS-Derek/MoviePilot/docs/img/2.png" alt="步骤02" width="600">
复制如下一键命令，粘贴进“终端”并回车执行

**Github源**
```bash
curl -sL https://raw.githubusercontent.com/DDS-Derek/MoviePilot/docs/examples/Unraid-MoviePilot.xml -o /boot/config/plugins/dockerMan/templates-user/MoviePilot.xml
```
**国内加速源**
```bash
curl -sL https://ghproxy.com/https://raw.githubusercontent.com/DDS-Derek/MoviePilot/docs/examples/Unraid-MoviePilot.xml -o /boot/config/plugins/dockerMan/templates-user/MoviePilot.xml
```

3. <img src="https://raw.githubusercontent.com/DDS-Derek/MoviePilot/docs/img/3.png" alt="步骤03" width="600">
打开Docker页面，下方找到添加容器并点击

4. <img src="https://raw.githubusercontent.com/DDS-Derek/MoviePilot/docs/img/4.png" alt="步骤04" width="600">
在页面中找到“选择一个模板”，点开并选择“MoviePilot”

5. <img src="https://raw.githubusercontent.com/DDS-Derek/MoviePilot/docs/img/5.png" alt="步骤05" width="600">
依照MoviePilot项目中作者的说明进行修改并填写

**注意事项：Qbt下载器需要映射一个与 MoviePilot 中 `DOWNLOAD_PATH` 变量一样的路径，下方是举例。**
> 假设 MoviePilot 中映射宿主机路径`/mnt/user/Files`至docker内路径`/Files`，`DOWNLOAD_PATH`变量填写路径为`/Files/Downloads`（`Downloads`为`Files`下的二级目录，宿主机实际目录则为`/mnt/user/Files/Downloads`）
> 则Qbt下载器也需要映射一个相同的路径，即映射宿主机路径`/mnt/user/Files/Downloads`至QBT docker内路径`/Files/Downloads`

## Win Docker Desktop 实例
[docker-desktop.yml](https://raw.githubusercontent.com/DDS-Derek/MoviePilot/docs/examples/docker-desktop.yml)
```yaml
# by 群友支持

    # 首先挂载目录，以F盘为例，只提需要注意的参数，其余参数均按照项目README填写

    volumes:
      - /F/:/F/ #建议直接挂载磁盘，否则-1报错
    
    environment:
      PUID: 1000
      PGID: 1000
      UMASK: 000
      DOWNLOAD_PATH: 'F:\downloads'   # Win下载器目录，必须与外置下载器目录一致，否则推送下载路径报错
      LIBRARY_PATH: '/F/media'    # 媒体目录
      TRANSFER_TYPE: 'link'           # 使用硬连接
      DOWNLOADER_MONITOR: false       # 设置参数关闭下载器监控，否则会转移两次，路径报错

      # 在插件内安装目录监控，监控 /F/downloads 等挂载进容器的下载目录
      # 转移模式选择兼容模式
```

# 目录挂载解释

## 实例一

```bash
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

![](https://raw.githubusercontent.com/DDS-Derek/MoviePilot/docs/img/hardlink_v_1.jpg)

## 实例二 by 群友支持

![](https://raw.githubusercontent.com/DDS-Derek/MoviePilot/docs/img/hardlink_v_2.jpg)

[docker-compose.yml](https://raw.githubusercontent.com/DDS-Derek/MoviePilot/docs/examples/docker-compose-hardlink.yml) 实例

# MoviePilot 图标地址

[https://raw.githubusercontent.com/jxxghp/MoviePilot-Frontend/main/public/logo.png](https://raw.githubusercontent.com/jxxghp/MoviePilot-Frontend/main/public/logo.png)
