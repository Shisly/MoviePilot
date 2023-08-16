FROM jxxghp/moviepilot:latest
RUN apt-get update \
    && apt-get -y install gnupg \
    && curl -fsSL https://deb.nodesource.com/setup_18.x | bash - \
    && apt-get -y install nodejs \
    && node --version \
    && npm --version \
    && npm install -g npm \
    && npm install -g yarn \
    && apt-get autoremove -y \
    && apt-get clean -y \
    && rm -rf \
        /tmp/* \
        /moviepilot/.cache \
        /var/lib/apt/lists/* \
        /var/tmp/*
COPY --chmod=755 entrypoint /entrypoint