FROM jxxghp/moviepilot:latest
RUN apt-get update \
    && apt-get -y install git \
    && apt-get install -y build-essential \
    && apt-get autoremove -y \
    && apt-get clean -y \
    && rm -rf \
        /tmp/* \
        /moviepilot/.cache \
        /var/lib/apt/lists/* \
        /var/tmp/*
COPY --chmod=755 entrypoint /entrypoint
