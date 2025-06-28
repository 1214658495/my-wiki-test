---
sidebar_position: 2
title: Window System Integration
---

# Install Metavision SDK on Windows System with AMD64

This guide provides instructions for installing Metavision SDK on a Windows 11 system.

## 1. Preparation Document

**Required Plugin Files:**
- hal_plugin_sensing.dll 
- metavision_psee_hw_layer.dll

**Download Source:**
[https://autosensee.feishu.cn/drive/folder/LS9hffxYvl6fAXdF2wmcyIZCn2g?from=from_copylink](https://autosensee.feishu.cn/drive/folder/LS9hffxYvl6fAXdF2wmcyIZCn2g?from=from_copylink)

**Driver Tool:**
- zadig-2.7.exe

**Download Source:**
[https://autosensee.feishu.cn/drive/folder/B6kEf3ppClzTQzdpc8OcsuKin3f?from=from_copylink](https://autosensee.feishu.cn/drive/folder/B6kEf3ppClzTQzdpc8OcsuKin3f?from=from_copylink)

## 2. Install Dependent Packages

### (1) Install Python 3.8/3.9

**Download address:** 
[https://www.python.org/downloads/release/python-3810/](https://www.python.org/downloads/release/python-3810/)

After installing Python, install the required libraries through pip. Open a command prompt and execute the following commands:

```
$ python -m pip install pip --upgrade
$ python -m pip install "opencv-python==4.5.5.64" "sk-video==1.1.10" "fire==0.4.0" "numpy==1.23.4" pandas scipy h5py
$ python -m pip install jupyter jupyterlab matplotlib "ipywidgets==7.6.5"
```

### (2) Install FFMPEG Library

**Download address:** 
[https://www.gyan.dev/ffmpeg/builds/ffmpeg-release-full.7z](https://www.gyan.dev/ffmpeg/builds/ffmpeg-release-full.7z)

After installation, add the bin directory to the system environment variable.

## 3. Install Metavision SDK

**Download address:** 
[https://www.prophesee.ai/metavision-intelligence-sdk-download/](https://www.prophesee.ai/metavision-intelligence-sdk-download/)

Simply run the SDK installer and follow the instructions.

## 4. Install Plugin

Create a folder on disk C and copy the hal_plugin_sensing.dll and metavision_psee_hw_layer.dll files to this folder.

Add this path to the system environment variable:
- Variable: MV_HAL_PLUGIN_PATH
- Value: C:\evs_plugin

## 5. Connect Equipment Test

### 5.1 Connect Equipment

Connect the EVS camera to the USB 3.0 interface of the computer host through the USB cable, and view the device in the device manager. The name of the device is "SENSING_USB3_EVS_CAMERA" or other.

Run the provided zadig-2.7.exe tool to install the driver.

After installing the driver, the device can be recognized.

### 5.2 View Device Information

Open a command prompt and execute the following command:

```
$ metavision_platform_info.exe
```

This will display the METAVISION SYSTEMS INFORMATION including available systems, system information, and default biases.

### 5.3 Run Metavision Studio

Start Metavision Studio software and open a live camera by selecting the sensing_hal_plugin_evk4_connection option.

