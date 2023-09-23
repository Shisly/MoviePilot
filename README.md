# 重启更新最新前后端

fork本仓库docker分支，然后自己申请`Github Token`，打开仓库`Github Action`

启动容器时填写好`GITHUB_TOKEN`和`GITHUB_REPO`环境变量即可实时更新最新代码

`docker pull ddsderek/moviepilot:full` amd64 850M | arm64 1.1G

原理：Git拉取后端代码，安装更新pip库，调用`Github Action`构建前端，然后git拉取构建完成的前端代码，更新完成

# 前端字体更改

docker分支下面的 `frontend/src/font.woff2` 文件改为自己的字体文件即可自定义字体