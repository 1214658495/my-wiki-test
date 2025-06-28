---
sidebar_position: 3
title: Ubuntu System Integration
---

# Install Metavision SDK on Ubuntu System with AMD64

This guide provides instructions for installing Metavision SDK on Ubuntu system (Ubuntu 20.04/22.04 as example).

Reference documents: [https://docs.prophesee.ai/stable/installation/linux.html](https://docs.prophesee.ai/stable/installation/linux.html)

## 1. Preparation Documents

**Plugin document:** libhal_plugin_imx646_sensing.so

**Download Source:**
[https://autosensee.feishu.cn/drive/folder/LS9hffxYvl6fAXdF2wmcyIZCn2g?from=from_copylink](https://autosensee.feishu.cn/drive/folder/LS9hffxYvl6fAXdF2wmcyIZCn2g?from=from_copylink)

## 2. Install Dependent Packages

Install the following system dependency packages:

```
$ sudo apt update
$ sudo apt -y install libcanberra-gtk-module mesa-utils ffmpeg cmake libboost-program-options-dev libeigen3-dev
$ sudo apt-get install libprotobuf-dev protobuf-compiler
```

Install Python library:

```
$ sudo apt -y install python3-pip
$ sudo apt -y install python3.X-dev  # where X is 8, 9 or 10 depending on your Python version (3.8, 3.9 or 3.10)
$ python3 -m pip install pip --upgrade
$ python3 -m pip install "opencv-python==4.5.5.64" "sk-video==1.1.10" "fire==0.4.0" "numpy==1.23.4" pandas scipy h5py
$ python3 -m pip install jupyter jupyterlab matplotlib "ipywidgets==7.6.5"
```

Install PyTorch 1.13.1:

```
$ python3 -m pip install "numba==0.56.3" "profilehooks==1.12.0" "pytorch_lightning==1.8.6" "tqdm==4.63.0" "kornia==0.6.8"
$ python3 -m pip install "llvmlite==0.39.1" "pycocotools==2.0.4" "seaborn==0.11.2" "torchmetrics==0.7.2" "pillow==9.3.0"
```

## 3. Install Metavision SDK

Download the metavision APT configuration file metavision.list from the following link:
[https://www.prophesee.ai/metavision-intelligence-sdk-download/](https://www.prophesee.ai/metavision-intelligence-sdk-download/)

Copy the file metavision.list to the directory of /etc/apt/sources.list.d:

```
$ sudo cp metavision.list /etc/apt/sources.list.d
```

Add an extra APT repository to retrieve OGRE dependency during SDK install:

```
$ sudo add-apt-repository -y ppa:s-schmeisser/ogre-1.12
```

Update the source of the package:

```
$ sudo apt update
```

Install Metavision SDK:

```
$ sudo apt -y install metavision-sdk
```

## 4. Install Plugin

Create a folder and copy file of libhal_plugin_imx646_sensing.so to this folder.
For example: /home/sensing/evs/plugin

```
sensing@ubuntu:$ ls /home/sensing/evs/plugin/
libhal_plugin_sensing.so  libmetavision_psee_hw_layer.so
```

Install hdf5-plugin-ecf:

```
$ sudo apt -y install hdf5-plugin-ecf
```

Set the environment variable and add the following statement at the end of the "~/.bashrc" file:

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

Make environment variables effective:

```
$ source ~/.bashrc
```

## 5. Connect Equipment Test

### 5.1 Connect Equipment

Connect the EVS camera to the USB 3.0 interface of the computer host through the USB cable, and view the device through the lsusb command:

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

### 5.2 View Device Information

```
$ metavision_platform_info
```

This will display the METAVISION SYSTEMS INFORMATION including available systems, system information, and default biases.

### 5.3 Run Metavision Studio

```
$ metavision_studio
```

