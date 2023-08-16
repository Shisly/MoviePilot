目录挂载解释

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

docker-compose 实例

https://raw.githubusercontent.com/DDS-Derek/MoviePilot/docs/docker-compose.yml
