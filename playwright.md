```bash
docker run -d \
    --name=playwright-downloader \
    -e PUID=1000 \
    -e PGID=1000 \
    -e UMASK=022 \
    -v /your/moviepilot/dir:/downloads \
    ddsderek/moviepilot:playwright
```

```yaml
version: '3.3'
services:
    moviepilot:
        container_name: playwright-downloader
        environment:
            - PUID=1000
            - PGID=1000
            - UMASK=022
        volumes:
            - '/your/moviepilot/dir:/downloads'
        image: 'ddsderek/moviepilot:playwright'
```

- `-e PUID` 与MP一致
- `-e PGID` 与MP一致
- `-e UMASK` 与MP一致
- `-v /downloads` 映射到主机的目录与MP的`/moviepilot`或者`/moviepilot/.cache/ms-playwright`映射到主机的目录一致

运行完成后即可删除容器和镜像