---
sidebar_position: 1
title: NVIDIA Jetson 平台集成
---

# NVIDIA Jetson 平台集成

## 将 OpenEB 迁移到 NVIDIA Jetson 平台

本指南以 NVIDIA Orin JetPack 5.0.2（L4T 35.1）为例，说明如何将 OpenEB 迁移到 NVIDIA Jetson 平台。

### 参考文档
- [Prophesee 安装指南](https://docs.prophesee.ai/stable/installation/linux_open_from_source.html)

## 1. 准备文档

OpenEB 插件补丁文件：`sensing_imx646.diff`

可从以下地址下载：
[https://autosensee.feishu.cn/drive/folder/LS9hffxYvl6fAXdF2wmcyIZCn2g](https://autosensee.feishu.cn/drive/folder/LS9hffxYvl6fAXdF2wmcyIZCn2g)

## 2. 安装依赖包

### 系统依赖

```bash
$ sudo apt update
$ sudo apt -y install apt-utils build-essential software-properties-common wget unzip curl git cmake
$ sudo apt -y install libopencv-dev libboost-all-dev libusb-1.0-0-dev
$ sudo apt -y install libhdf5-dev hdf5-tools libglew-dev libgifw3-dev libgifww3-dev libcanberra-gtk-module ffmpeg
$ sudo apt-get install libprotobuf-dev protobuf-compiler
$ sudo apt -y install libgtest-dev libgmock-dev
```

### Python 库

```bash
$ sudo apt -y install python3-pip python3-distutils
$ sudo apt -y install python3.X-dev  # where X is 8, 9 or 10 depending on your Python version (3.8, 3.9 or 3.10)
$ python3 -m pip install pip --upgrade
$ python3 -m pip install "opencv-python==4.5.5.64" "sk-video==1.1.10" "fire==0.4.0" "numpy==1.23.4" pandas scipy h5py
$ python3 -m pip install jupyter jupyterlab matplotlib "ipywidgets==7.6.5" pytest command_runner
```

### 安装 pybind11（版本 >= 2.6.0）

```bash
$ wget https://github.com/pybind/pybind11/archive/v2.6.0.zip
$ unzip v2.6.0.zip
$ cd pybind11-2.6.0
$ mkdir build && cd build
$ cmake .. -DPYBIND11_TEST=OFF
$ cmake --build .
$ sudo cmake --build . --target install
```

### 安装 PyTorch 1.13.1

```bash
$ python3 -m pip install "numba==0.56.3" "profilehooks==1.12.0"
$ python3 -m pip install "pytorch_lightning==1.8.6" "tqdm==4.63.0" "kornia==0.6.8"
```

## 3. 编译并安装 OpenEB

下载 OpenEB 源代码。当前版本为 v4.3.0：

```bash
$ git clone https://github.com/prophesee-ai/openeb.git --branch 4.3.0
```

将补丁文件 `sensing_imx646.diff` 复制到 `hal_psee_plugins` 目录，并应用补丁：

```bash
$ git apply sensing_imx646.diff
```

编译并安装：

```bash
$ cd openeb
$ mkdir build && cd build
$ cmake .. -DCMAKE_BUILD_TYPE=Release -DBUILD_TESTING=OFF
$ cmake --build . --config Release -- -j 'nproc'
$ sudo cmake --build . --target install
```

将以下环境变量添加到 `~/.bashrc` 文件末尾：

```bash
export LD_LIBRARY_PATH=$LD_LIBRARY_PATH:/usr/local/lib
export HDF5_PLUGIN_PATH=$HDF5_PLUGIN_PATH:/usr/local/hdf5/lib/plugin
```

使环境变量生效：

```bash
$ source ~/.bashrc
```

## 4. 连接并测试设备

### 4.1 连接设备

通过 USB 线将 EVS 摄像头连接到 NVIDIA Orin 设备的 USB 端口。

通过 `lsusb` 命令查看设备：

```bash
$ lsusb
```

列表中应能看到包含 “SENSING USB3 EVS CAMERA” 的输出。

### 4.2 查看设备信息

```bash
$ metavision_platform_info
```

这将显示已连接摄像头的详细信息，包括：
- 可用的数据编码格式
- 当前数据编码格式
- 连接类型
- 摄像头构建日期和版本
- 传感器名称和序列号
- 可用的设备配置选项

### 4.3 运行示例查看器

```bash
$ metavision_viewer
```

这将启动 Metavision 查看器应用，用于可视化事件相机输出。

## 下一步

- 阅读 [SENSING 官方文档](https://sensing-world.com/en/)
