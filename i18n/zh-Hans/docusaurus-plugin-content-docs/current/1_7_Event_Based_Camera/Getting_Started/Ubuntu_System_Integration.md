---
sidebar_position: 3
title: Ubuntu 系统集成
---

# 在 AMD64 Ubuntu 系统上安装 Metavision SDK

本指南介绍如何在 Ubuntu 系统中安装 Metavision SDK（以 Ubuntu 20.04/22.04 为例）。

参考文档：[https://docs.prophesee.ai/stable/installation/linux.html](https://docs.prophesee.ai/stable/installation/linux.html)

## 1. 准备文档

**插件文件：** libhal_plugin_imx646_sensing.so

**下载来源:**
[https://autosensee.feishu.cn/drive/folder/LS9hffxYvl6fAXdF2wmcyIZCn2g?from=from_copylink](https://autosensee.feishu.cn/drive/folder/LS9hffxYvl6fAXdF2wmcyIZCn2g?from=from_copylink)

## 2. 安装依赖包

安装以下系统依赖包：

```
$ sudo apt update
$ sudo apt -y install libcanberra-gtk-module mesa-utils ffmpeg cmake libboost-program-options-dev libeigen3-dev
$ sudo apt-get install libprotobuf-dev protobuf-compiler
```

安装 Python 库：

```
$ sudo apt -y install python3-pip
$ sudo apt -y install python3.X-dev  # where X is 8, 9 or 10 depending on your Python version (3.8, 3.9 or 3.10)
$ python3 -m pip install pip --upgrade
$ python3 -m pip install "opencv-python==4.5.5.64" "sk-video==1.1.10" "fire==0.4.0" "numpy==1.23.4" pandas scipy h5py
$ python3 -m pip install jupyter jupyterlab matplotlib "ipywidgets==7.6.5"
```

安装 PyTorch 1.13.1：

```
$ python3 -m pip install "numba==0.56.3" "profilehooks==1.12.0" "pytorch_lightning==1.8.6" "tqdm==4.63.0" "kornia==0.6.8"
$ python3 -m pip install "llvmlite==0.39.1" "pycocotools==2.0.4" "seaborn==0.11.2" "torchmetrics==0.7.2" "pillow==9.3.0"
```

## 3. 安装 Metavision SDK

从以下链接下载 metavision APT 配置文件 metavision.list：
[https://www.prophesee.ai/metavision-intelligence-sdk-download/](https://www.prophesee.ai/metavision-intelligence-sdk-download/)

将 `metavision.list` 文件复制到 `/etc/apt/sources.list.d` 目录：

```
$ sudo cp metavision.list /etc/apt/sources.list.d
```

添加额外的 APT 仓库，以便在安装 SDK 时获取 OGRE 依赖：

```
$ sudo add-apt-repository -y ppa:s-schmeisser/ogre-1.12
```

更新软件包源：

```
$ sudo apt update
```

安装 Metavision SDK：

```
$ sudo apt -y install metavision-sdk
```

## 4. 安装插件

创建一个文件夹，并将 `libhal_plugin_imx646_sensing.so` 文件复制到该文件夹。
例如：/home/sensing/evs/plugin

```
sensing@ubuntu:$ ls /home/sensing/evs/plugin/
libhal_plugin_sensing.so  libmetavision_psee_hw_layer.so
```

安装 hdf5-plugin-ecf：

```
$ sudo apt -y install hdf5-plugin-ecf
```

设置环境变量，并将以下语句添加到 `~/.bashrc` 文件末尾：

Ubuntu 20.04:

```
export MV_HAL_PLUGIN_PATH=/home/sensing/evs/plugin
export HDF5_PLUGIN_PATH=$HDF5_PLUGIN_PATH:/usr/lib/x86_64-linux-gnu/hdf5/plugins
```

Ubuntu 22.04:

```
export MV_HAL_PLUGIN_PATH=/home/sensing/evs/plugin
export HDF5_PLUGIN_PATH=$HDF5_PLUGIN_PATH:/usr/lib/x86_64-linux-gnu/hdf5/serial/plugins
```

使环境变量生效：

```
$ source ~/.bashrc
```

## 5. 连接并测试设备

### 5.1 连接设备

通过 USB 线将 EVS 摄像头连接到主机的 USB 3.0 接口，并通过 `lsusb` 命令查看设备：

```
$ lsusb
Bus 004 Device 005: ID 04b4:00c4 Cypress Semiconductor Corp. SENSING_USB3_EVS_CAMERA
Bus 001 Device 003: ID 1d6b:0003 Linux Foundation 3.0 root hub
Bus 003 Device 004: ID 0e0f:0002 VMware, Inc. Virtual USB Hub
Bus 003 Device 003: ID 0e0f:0003 VMware, Inc. Virtual Mouse
Bus 003 Device 002: ID 0e0f:0002 VMware, Inc. Virtual USB Hub
Bus 001 Device 001: ID 1d6b:0002 Linux Foundation 2.0 root hub
Bus 002 Device 002: ID 0e0f:0002 VMware, Inc. Virtual USB Hub
Bus 002 Device 001: ID 1d6b:0001 Linux Foundation 1.1 root hub
```

### 5.2 查看设备信息

```
$ metavision_platform_info
```

该命令会显示 METAVISION SYSTEMS INFORMATION，包括可用系统、系统信息和默认 bias。

### 5.3 运行 Metavision Studio

```
$ metavision_studio
```
