---
sidebar_position: 2
title: Windows 系统集成
---

# 在 AMD64 Windows 系统上安装 Metavision SDK

本指南介绍如何在 Windows 11 系统中安装 Metavision SDK。

## 1. 准备文档

**所需插件文件：**
- hal_plugin_sensing.dll
- metavision_psee_hw_layer.dll

**下载来源:**
[https://autosensee.feishu.cn/drive/folder/LS9hffxYvl6fAXdF2wmcyIZCn2g?from=from_copylink](https://autosensee.feishu.cn/drive/folder/LS9hffxYvl6fAXdF2wmcyIZCn2g?from=from_copylink)

**驱动工具：**
- zadig-2.7.exe

**下载来源:**
[https://autosensee.feishu.cn/drive/folder/B6kEf3ppClzTQzdpc8OcsuKin3f?from=from_copylink](https://autosensee.feishu.cn/drive/folder/B6kEf3ppClzTQzdpc8OcsuKin3f?from=from_copylink)

## 2. 安装依赖包

### (1) 安装 Python 3.8/3.9

**下载地址:**
[https://www.python.org/downloads/release/python-3810/](https://www.python.org/downloads/release/python-3810/)

安装 Python 后，通过 pip 安装所需库。打开命令提示符并执行以下命令：

```
$ python -m pip install pip --upgrade
$ python -m pip install "opencv-python==4.5.5.64" "sk-video==1.1.10" "fire==0.4.0" "numpy==1.23.4" pandas scipy h5py
$ python -m pip install jupyter jupyterlab matplotlib "ipywidgets==7.6.5"
```

### (2) 安装 FFMPEG 库

**下载地址:**
[https://www.gyan.dev/ffmpeg/builds/ffmpeg-release-full.7z](https://www.gyan.dev/ffmpeg/builds/ffmpeg-release-full.7z)

安装完成后，将 `bin` 目录添加到系统环境变量。

## 3. 安装 Metavision SDK

**下载地址:**
[https://www.prophesee.ai/metavision-intelligence-sdk-download/](https://www.prophesee.ai/metavision-intelligence-sdk-download/)

直接运行 SDK 安装程序，并按提示完成安装。

## 4. 安装插件

在 C 盘创建一个文件夹，并将 `hal_plugin_sensing.dll` 和 `metavision_psee_hw_layer.dll` 文件复制到该文件夹。

将此路径添加到系统环境变量：
- 变量：MV_HAL_PLUGIN_PATH
- 值: C:\evs_plugin

## 5. 连接并测试设备

### 5.1 连接设备

通过 USB 线将 EVS 摄像头连接到主机 USB 3.0 接口，并在设备管理器中查看设备。设备名称通常为 “SENSING_USB3_EVS_CAMERA” 或类似名称。

运行随附的 `zadig-2.7.exe` 工具安装驱动。

驱动安装完成后，设备即可被识别。

### 5.2 查看设备信息

打开命令提示符并执行以下命令：

```
$ metavision_platform_info.exe
```

该命令会显示 METAVISION SYSTEMS INFORMATION，包括可用系统、系统信息和默认 bias。

### 5.3 运行 Metavision Studio

启动 Metavision Studio 软件，并选择 `sensing_hal_plugin_evk4_connection` 选项打开实时摄像头。
