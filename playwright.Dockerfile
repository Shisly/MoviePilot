FROM python:3.11.4-slim-bullseye

ENV PLAYWRIGHT_BROWSERS_PATH=/data

RUN pip install --upgrade pip && \
    pip install playwright~=1.34.0 && \
    playwright install chromium

COPY --chmod=755 playwright.sh /playwright.sh

ENTRYPOINT [ "/playwright.sh" ]