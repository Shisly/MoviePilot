
## UnRaid 配置模板

[Unraid-MoviePilot.xml](https://raw.githubusercontent.com/ UnRaid-MoviePilot.xml) by 群友支持

点击放大图片查看~

1.<img src=" " alt="步骤01" width="300">
打开Unraid的Web控制页面，右上角找到“终端”并打开

2.<img src=" " alt="步骤02" width="300">
复制如下一键命令，粘贴进“终端”并回车执行
  
**Github源**
```bash
curl -sL https://raw.githubusercontent.com/ /UnRaid-MoviePilot.xml -o /boot/config/plugins/dockerMan/templates-user/MoviePilot.xml
```
**国内加速源**
```bash
curl -sL https://ghproxy.com/https://raw.githubusercontent.com/ /UnRaid-MoviePilot.xml -o /boot/config/plugins/dockerMan/templates-user/MoviePilot.xml
```
  
3.<img src=" " alt="步骤03" width="300">
打开Docker页面，下方找到添加容器并点击
  
4.<img src=" " alt="步骤04" width="300">
在页面中找到“选择一个模板”，点开并选择“MoviePilot”
  
5.<img src=" " alt="步骤05" width="300">
依照MoviePilot项目中作者的说明进行修改并填写

**注意事项**
Qbt下载器需要映射一个与Moviepilot中DOWNLOAD_PATH变量一样的路径
举例:
假设Moviepilot中映射宿主机路径"/mnt/user/Files"至docker内路径"/Files"，DOWNLOAD_PATH变量填写路径为“/Files/Downloads”
（Downloads为Files下的二级目录，宿主机实际目录则为/mnt/user/Files/Downloads）
则Qbt下载器也需要映射一个相同的路径，即映射宿主机路径“/mnt/user/Files/Downloads”至QBT docker内路径“/Files/Downloads”

