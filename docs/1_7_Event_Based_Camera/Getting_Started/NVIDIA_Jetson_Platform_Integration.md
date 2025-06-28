---
sidebar_position: 1
title: NVIDIA Jetson Platform Integration
---

# NVIDIA Jetson Platform Integration

## Migrate OpenEB to Nvidia Jetson Platform

This guide demonstrates how to migrate OpenEB to Nvidia Jetson platform using Nvidia Orin Jetpack 5.0.2 (L4T 35.1) as an example.

### Reference Documents
- [Prophesee Installation Guide](https://docs.prophesee.ai/stable/installation/linux_open_from_source.html)

## 1. Preparation Document

The patch file of OpenEB plugin: `sensing_imx646.diff`

Download it from:
[https://autosensee.feishu.cn/drive/folder/LS9hffxYvl6fAXdF2wmcyIZCn2g](https://autosensee.feishu.cn/drive/folder/LS9hffxYvl6fAXdF2wmcyIZCn2g)

## 2. Install Dependent Packages

### System Dependencies

```bash
$ sudo apt update
$ sudo apt -y install apt-utils build-essential software-properties-common wget unzip curl git cmake
$ sudo apt -y install libopencv-dev libboost-all-dev libusb-1.0-0-dev
$ sudo apt -y install libhdf5-dev hdf5-tools libglew-dev libgifw3-dev libgifww3-dev libcanberra-gtk-module ffmpeg
$ sudo apt-get install libprotobuf-dev protobuf-compiler
$ sudo apt -y install libgtest-dev libgmock-dev
```

### Python Libraries

```bash
$ sudo apt -y install python3-pip python3-distutils
$ sudo apt -y install python3.X-dev  # where X is 8, 9 or 10 depending on your Python version (3.8, 3.9 or 3.10)
$ python3 -m pip install pip --upgrade
$ python3 -m pip install "opencv-python==4.5.5.64" "sk-video==1.1.10" "fire==0.4.0" "numpy==1.23.4" pandas scipy h5py
$ python3 -m pip install jupyter jupyterlab matplotlib "ipywidgets==7.6.5" pytest command_runner
```

### Install pybind11 (version >= 2.6.0)

```bash
$ wget https://github.com/pybind/pybind11/archive/v2.6.0.zip
$ unzip v2.6.0.zip
$ cd pybind11-2.6.0
$ mkdir build && cd build
$ cmake .. -DPYBIND11_TEST=OFF
$ cmake --build .
$ sudo cmake --build . --target install
```

### Install PyTorch 1.13.1

```bash
$ python3 -m pip install "numba==0.56.3" "profilehooks==1.12.0"
$ python3 -m pip install "pytorch_lightning==1.8.6" "tqdm==4.63.0" "kornia==0.6.8"
```

## 3. Compile and Install OpenEB

Download the OpenEB source code. The current version is v4.3.0:

```bash
$ git clone https://github.com/prophesee-ai/openeb.git --branch 4.3.0
```

Copy the patch file `sensing_imx646.diff` to `hal_psee_plugins` directory and apply the patch:

```bash
$ git apply sensing_imx646.diff
```

Compile and install:

```bash
$ cd openeb
$ mkdir build && cd build
$ cmake .. -DCMAKE_BUILD_TYPE=Release -DBUILD_TESTING=OFF
$ cmake --build . --config Release -- -j 'nproc'
$ sudo cmake --build . --target install
```

Add the following environment variables to the end of your `~/.bashrc` file:

```bash
export LD_LIBRARY_PATH=$LD_LIBRARY_PATH:/usr/local/lib
export HDF5_PLUGIN_PATH=$HDF5_PLUGIN_PATH:/usr/local/hdf5/lib/plugin
```

Make environment variables effective:

```bash
$ source ~/.bashrc
```

## 4. Connect and Test Equipment

### 4.1 Connect Equipment

Connect EVS camera to the USB port of NVidia Orin device via USB cable.

View the device through the lsusb command:

```bash
$ lsusb
```

You should see output containing "SENSING USB3 EVS CAMERA" in the list.

### 4.2 View Device Information

```bash
$ metavision_platform_info
```

This will display detailed information about the connected camera, including:
- Available data encoding formats
- Current data encoding format
- Connection type
- Camera build date and version
- Sensor name and serial number
- Available device configuration options

### 4.3 Run Sample Viewer

```bash
$ metavision_viewer
```

This will launch the Metavision viewer application where you can visualize the event-based camera output.

## What's next?

- Read the [SENSING Official Documentation](https://sensing-world.com/en/)

