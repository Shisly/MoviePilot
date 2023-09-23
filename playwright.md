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