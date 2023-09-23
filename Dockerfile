FROM jxxghp/moviepilot:latest
RUN set -ex \
    && apt-get update -y \
    && apt-get install -y git nano \
    && \
    if [ "$(uname -m)" = "aarch64" ]; \
        then apt-get install -y build-essential; \
    fi \
    && apt-get autoremove -y \
    && apt-get clean -y \
    && rm -rf \
        /tmp/* \
        /var/lib/apt/lists/* \
        /var/tmp/*
COPY --chmod=755 update /usr/local/bin/mp_update