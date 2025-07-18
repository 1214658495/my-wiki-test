---
sidebar_position: 2
---

# SG4A-NONX-G2Y-A1

## Overview

<div className="row">
  <div className="col col--9">
    The SG4A-NONX-G2Y-A1 adapter board's MIPI interface is designed according to the NVIDIA standard 22Pin interface (see the CN8 pin definition), making it compatible with official and customer-designed development boards.
    
    The design features 4 coaxial FAKRA interfaces supporting up to 4 cameras, compatible with different types of GMSL cameras. The adapter board can be configured via software to work at different frequencies, making it compatible with both GMSL and GMSL2 protocol interfaces. Power for GMSL cameras is provided through PoC (Power over Coax), allowing all data, control signals, and power to be transmitted through a 50-ohm coaxial cable. This makes camera cable wiring flexible and easy to install in automotive applications.
  </div>
  <div className="col col--3">
    :::note Key Features
    - Support for 4 cameras
    - GMSL/GMSL2 protocol compatible
    - PoC power supply
    - Easy installation
    :::
  </div>
</div>

<div style={{textAlign: 'center', marginBottom: '2rem'}}>
    <img src="https://raw.githubusercontent.com/1214658495/myWikiFiles/main/Nvidia_jetson/NVIDIA_Jetson_Orin_Nano_NX/GMSL_adapter_board_developer_kit/SG4A-NONX-G2Y-A1/SG4A-NONX-G2Y-A1.png" alt="SG4A-NONX-G2Y-A1" style={{maxWidth: '30%', height: 'auto'}} />
</div>

<div style={{textAlign: 'center', marginBottom: '2rem'}}>
    <a href="https://sensing-world.com/en/h-pd-168.html?recommendFromPid=0&fromMid=962" target="_blank" rel="noopener noreferrer" 
       style={{backgroundColor: '#f0f0f0', padding: '10px 20px', display: 'inline-block', borderRadius: '5px', textDecoration: 'none'}}>
        <strong style={{color: '#000000', fontSize: '1.2em'}}>Buy Now</strong>
    </a>
</div>

## Getting Started

### Hardware Overview

<div style={{textAlign: 'center', marginBottom: '2rem'}}>
    <img src="https://raw.githubusercontent.com/1214658495/myWikiFiles/main/Nvidia_jetson/NVIDIA_Jetson_Orin_Nano_NX/GMSL_adapter_board_developer_kit/SG4A-NONX-G2Y-A1/SG4A-NONX-G2Y-A1_Hardware_Overview.png" alt="SG4A-NONX-G2Y-A1-Overview" style={{maxWidth: '80%', height: 'auto'}} />
</div>

### Basic Specifications

<div className="row">
  <div className="col col--6">
    :::note Basic Information
    - Model: SG4A-NONX-G2Y-A1
    - Dimensions: 74mm × 53mm
    - Weight: 50g
    - Connector: 1×22Pin, 1×28Pin(optional)
    - Camera input: 4 cameras (GMSL2/GMSL)
    - Trigger input: 3Pin Sync input
    :::
  </div>
  <div className="col col--6">
    :::note Technical Specifications
    - Deserializer: MAXIM(ADI) MAX96712GTB
    - Camera connector: Fakra Z coding
    - POC power: DC 9-16V
    - DC power: DC 12V
    - Operating environment: -20°C~70°C
    - Adaptation kit: Jetson Orin Nano/NX,Jetson AGX Orin(optional)
    :::
  </div>
</div>

### Block Diagram

:::caution Note
(1) The I2C bus number represents the hardware location (matching the connector). The bus number may not necessarily correspond to what is listed in the software.

(2) Coaxial power is shared, but each GMSL line has its own filter.
:::

<div style={{textAlign: 'center', marginBottom: '2rem'}}>
    <img src="https://raw.githubusercontent.com/1214658495/myWikiFiles/main/Nvidia_jetson/NVIDIA_Jetson_Orin_Nano_NX/GMSL_adapter_board_developer_kit/SG4A-NONX-G2Y-A1/SG4A-NONX-G2Y-A1_Block_Diagram.png" alt="SG4A-NONX-G2Y-A1-Block Diagram" style={{maxWidth: '90%', height: 'auto'}} />
</div>

### Interface Definitions

| No. | Model | Function | Remarks |
|-----|-------|----------|---------|
| CN8 | AFC07-S22ECA-00 | For Jetson Orin Nano/NX | Typically select this interface |
| CN1 | AFC07-S28ECA-00 | For Jetson AGX Orin | (optional) Different pin definitions |
| CN4 CN5 CN6 CN7 | Amphenol Fakra Z Code | Connect to camera | Software can configure any channel |
| CN2 | HCZZ0001-3 | FSYNC | Sync signal |
| CN3 | DC-005-2.5A-2.0 | Power | Power interface |


#### CN8 Interface Pin Definition

| Pin No. | Name | Remarks |
|---------|------|---------|
| 1 | GND | Ground |
| 2 | CSI2_D0N | Differential signal |
| 3 | CSI2_D0P | Differential signal |
| 4 | GND | Ground |
| 5 | CSI2_D1N | Differential signal |
| 6 | CSI2_D1P | Differential signal |
| 7 | GND | Ground |
| 8 | CSI2_CLKBN | Clock differential signal |
| 9 | CSI2_CLKBP | Clock differential signal |
| 10 | GND | Ground |
| 11 | CSI2_D2N | Differential signal |
| 12 | CSI2_D2P | Differential signal |
| 13 | GND | Ground |
| 14 | CSI2_D3N | Differential signal |
| 15 | CSI2_D3P | Differential signal |
| 16 | GND | Ground |
| 17 | PWDN | 3.3V LEVEL |
| 18 | NC | Not Connected |
| 19 | GND | Ground |
| 20 | I2C_SCL | 3.3V LEVEL |
| 21 | I2C_SDA | 3.3V LEVEL |
| 22 | VDD3V3 | Board power supply |

#### CN1 Interface Pin Definition(optional)

| Pin No. | Name | Remarks |
|---------|------|---------|
| 1 | VDD3V3 | Board power supply |
| 2 | VDD3V3 | Board power supply |
| 3 | MS | 3.3V LEVEL |
| 4 | ERRB | 3.3V LEVEL |
| 5 | MPF10 | 3.3V LEVEL |
| 6 | FSYNC | 3.3V LEVEL |
| 7 | GND | Ground |
| 8 | I2C_SDA | 3.3V LEVEL |
| 9 | I2C_SCL | 3.3V LEVEL |
| 10 | GND | Ground |
| 11 | NC | Not Connected |
| 12 | PWDN | 3.3V LEVEL |
| 13 | GND | Ground |
| 14 | CSI_D0N | Differential signal |
| 15 | CSI_D0P | Differential signal |
| 16 | GND | Ground |
| 17 | CSI_D1N | Differential signal |
| 18 | CSI_D1P | Differential signal |
| 19 | GND | Ground |
| 20 | CSI_CLKN | Clock differential signal |
| 21 | CSI_CLKP | Clock differential signal |
| 22 | GND | Ground |
| 23 | CSI_D2N | Differential signal |
| 24 | CSI_D2P | Differential signal |
| 25 | GND | Ground |
| 26 | CSI_D3N | Differential signal |
| 27 | CSI_D3P | Differential signal |
| 28 | GND | Ground |

#### CN3: 12V Power Input

| Pin No. | Name | Remarks |
|---------|------|---------|
| 1 | 12V-IN | Camera power supply |
| 2 | GND | Ground |

#### CN2: FSYNC Input

| Pin No. | Name | Remarks |
|---------|------|---------|
| 1 | FSYNC | 3.3V LEVEL |
| 2 | GND | 3.3V LEVEL |
| 3 | MPF10 | 3.3V LEVEL |


| Connector | Interface Definition |
|-----------|---------------------|
| FAKRA Z | +: POC signal / -: Ground |

## Supported Camera List

:::note Camera Compatibility
The following cameras are compatible with different JetPack versions:
:::

| Camera | Data Type | Jetpack 6.0 | Jetpack 6.1 | Jetpack 6.2 |
|--------------|-------------|---------------|-------------|-------------|
| SG1-OX01F10C-GMSL-Hxxx | YUV422 | - | - | - |
| SG1S-OX01F10C-G1G-Hxxx | YUV422 | - | - | - |
| SG2-AR0231C-0202-GMSL-Hxxx | YUV422 | ✅ | ✅ | ✅ |
| SG2-AR0233C-5200-G2A-Hxxx | YUV422 | ✅ | ✅ | ✅ |
| SG2-IMX390C-5200-G2A-Hxxx | YUV422 | ✅ | ✅ | ✅ |
| SG2-OX03CC-5200-GMSL2F-Hxxx | YUV422 | ✅ | ✅ | ✅ |
| SG3S-ISX031C-GMSL2-Hxxx | YUV422 | ✅ | ✅ | ✅ |
| SG3S-ISX031C-GMSL2F-Hxxx | YUV422 | ✅ | ✅ | ✅ |
| SG3S-OX03JC-G2F-Hxxx | YUV422 | - | - | - |
| SG5-IMX490C-5300-GMSL2-Hxxx | YUV422 | ✅ | ✅ | ✅ |
| SG5-OX05BC-4000-GMSL2-Hxxx | YUV422 | - | - | - |
| SG8S-AR0820C-5300-G2A-Hxxx | YUV422 | ✅ | ✅ | ✅ |
| SG8-OX08BC-5300-GMSL2-Hxxx | YUV422 | ✅ | ✅ | ✅ |
| DMSBBFAN | YUV422 | - | - | - |
| SG3S-IMX623C-G2F-Hxxx | RAW12 | - | - | - |
| SG8-IMX728C-G2G-Hxxx | RAW12 | - | - | - |

:::note JetPack Versions
NVIDIA JetPack (<strong style={{ color: 'var(--ifm-color-primary-light)' }}>Jetpack 5.1.2</strong> or <strong style={{ color: 'var(--ifm-color-primary-light)' }}>Jetpack 6.0</strong>) is the official software development kit (SDK) for the Jetson series of development boards. It includes the operating system, drivers, CUDA, cuDNN, TensorRT, and other development tools and libraries. Each JetPack version typically corresponds to a specific Jetson Linux version (formerly known as L4T - Linux for Tegra).
- 36.4.3: L4T R36.4.3 (Jetpack 6.2)
- 36.4: L4T R36.4 (Jetpack 6.1)
- 36.3: L4T R36.3 (Jetpack 6.0)
- 35.4.1: L4T R35.4.1 (Jetpack 5.1.2)

For more information, visit [NVIDIA's official Jetson Download Center](https://developer.nvidia.com/embedded/jetpack-archive).
:::

## Hardware Preparation

### Parts List

<div className="row">
  <div className="col col--6">
    :::note Standard Configuration
    - SG4A-NONX-G2Y-A1 adapter board
    - Power adapter
    - Trigger cable
    - Power switching cable
    - FPC
    :::
  </div>
  <div className="col col--4">
    :::note Optional Configuration
    - Jetson Orin Nano/NX Developer Kit
    :::
  </div>
</div>

### Installation Steps

<div style={{textAlign: 'center', marginBottom: '2rem'}}>
    <img src="https://raw.githubusercontent.com/1214658495/myWikiFiles/main/Nvidia_jetson/NVIDIA_Jetson_Orin_Nano_NX/GMSL_adapter_board_developer_kit/SG4A-NONX-G2Y-A1/SG4A-NONX-G2Y-A1_Application.png" alt="SG4A-NONX-G2Y-A1-Quick Setup" style={{maxWidth: '70%', height: 'auto'}} />
</div>

:::note Quick Setup
1. Connect the GMSL camera to the SG4A-NONX-G2Y-A1 board using coaxial cable
2. Mount the SG4A-NONX-G2Y-A1 board onto the Jetson Orin Nano/NX or Jetson AGX Orin module
3. Connect the power supply
4. Power on the system
:::

## Software Preparation

### SDK Download

:::note Driver Packages
Select the appropriate driver package based on your camera type and JetPack version:
:::

| Camera Type | JetPack Version | Download Link |
|-------------|-----------------|---------------|
| GMSL Camera (YUV) | JP6.0 | [Download](https://github.com/SENSING-Technology/nvidia-jetson-camera-drivers/tree/main/Jetson%20Orin%20Nano%26NX%20Devkit/SG4A-NONX-G2Y-A1/JetPack6.0/SG4A-NONX-G2Y-A1_ORIN_NANO_YUV_JP6.0_L4TR36.3) |
| GMSL Camera (YUV) | JP6.1 | [Download](https://github.com/SENSING-Technology/nvidia-jetson-camera-drivers/tree/main/Jetson%20Orin%20Nano%26NX%20Devkit/SG4A-NONX-G2Y-A1/JetPack6.1/SG4A-NONX-G2Y-A1_ORIN_NANO_YUV_JP6.1_L4TR36.4.2) |
| GMSL Camera (YUV) | JP6.2 | [Download](https://github.com/SENSING-Technology/nvidia-jetson-camera-drivers/tree/main/Jetson%20Orin%20Nano%26NX%20Devkit/SG4A-NONX-G2Y-A1/JetPack6.2/SG4A-NONX-G2Y-A1_ORIN_NANO_YUV_JP6.2_L4TR36.4.3) |


:::tip Download Method
Copy the full link address to [DownGit](https://minhaskamal.github.io/DownGit/#/home) to download
:::

### Quick Setup

:::note System Update
We can use NVIDIA SDK Manager Linux Software or directly use the NVIDIA Linux Driver Package via Linux command line to flash JetPack OS into the NVIDIA Jetson device. For beginners, we highly recommend NVIDIA SDK Manager.
:::

1. Copy the driver package to the working directory of the Jetson device, such as “/home/nvidia”

   ```
   /home/nvidia/SG4A_NONX_G2Y_A1_ORIN_NANO_YUV_JP6.2_L4TR36.4.3
   ```
2. Enter the driver directory

   ```
   cd SG4A_NONX_G2Y_A1_ORIN_NANO_YUV_JP6.2_L4TR36.4.3
   ```
3. Grant execute permissions to all scripts, then run the "install.sh" script

   ```
   chmod a+x *.sh
   ./install.sh
   ```
4. Use the "sudo /opt/nvidia/jetson-io/jetson-io.py" command to select the corresponding device

   ```
   sudo /opt/nvidia/jetson-io/jetson-io.py

   1.select "Configure Jetson 24pin CSI Connector"
   2.select Configure for compatible hardware
   3.select "Jetson Sensing YUV GMSLx4"
   4.select "Save pin changes"
   5.select "Save and reboot to reconfigure pins"
   ```
5. If step four cannot be executed, you can manually modify the extlinux.conf file to apply the device tree.

   ```
   sudo vi /boot/extlinux/extlinux.conf
   ```
6. Modify the file to the following content, then reboot.

   ```
   TIMEOUT 30
   DEFAULT JetsonIO

   MENU TITLE L4T boot options

   LABEL primary
         MENU LABEL primary kernel
         LINUX /boot/Image
         INITRD /boot/initrd
         APPEND ${cbootargs} root=PARTUUID=1171a64d-f038-4b7a-91a9-cb3d448d880c rw rootwait rootfstype=ext4 mminit_loglevel=4 console=ttyTCU0,115200 firmware_class.path=/etc/firmware fbcon=map:0 nospectre_bhb video=efifb:off console=tty0

   # When testing a custom kernel, it is recommended that you create a backup of
   # the original kernel and add a new entry to this file so that the device can
   # fallback to the original kernel. To do this:
   #
   # 1, Make a backup of the original kernel
   #      sudo cp /boot/Image /boot/Image.backup
   #
   # 2, Copy your custom kernel into /boot/Image
   #
   # 3, Uncomment below menu setting lines for the original kernel
   #
   # 4, Reboot

   # LABEL backup
   #    MENU LABEL backup kernel
   #    LINUX /boot/Image.backup
   #    INITRD /boot/initrd
   #    APPEND ${cbootargs}

   LABEL JetsonIO
         MENU LABEL Custom Header Config: <CSI Jetson Sensing YUV GMSLx4>
         LINUX /boot/Image
         FDT /boot/dtb/kernel_tegra234-p3768-0000+p3767-0005-nv.dtb
         INITRD /boot/initrd
         APPEND ${cbootargs} root=PARTUUID=1171a64d-f038-4b7a-91a9-cb3d448d880c rw rootwait rootfstype=ext4 mminit_loglevel=4 console=ttyTCU0,115200 firmware_class.path=/etc/firmware fbcon=map:0 nospectre_bhb video=efifb:off console=tty0
         OVERLAYS /boot/tegra234-camera-yuv-gmslx4-overlay.dtbo
   ```
7. After the device reboots, install v4l-utils plugins, then enter the driver directory and run the script "quick_bring_up.sh".

   ```
   sudo apt update
   sudo apt-get install v4l-utils
   sudo ./quick_bring_up.sh
   ```
8. You can configure the serializer type for each camera, then select Bring up one camera

   ```
   This package is use for Sensing SG4A-NONX-G2Y-A1 on JetPack-6.2-L4T-36.4.3
   Press select your frist camera type: (GMSL=0, GMSL2/6G=1, GMSL2/3G=2)
   1
   Press select your second camera type: (GMSL=0, GMSL2/6G=1, GMSL2/3G=2)
   1
   Press select your third camera type: (GMSL=0, GMSL2/6G=1, GMSL2/3G=2)
   1
   Press select your fourth camera type: (GMSL=0, GMSL2/6G=1, GMSL2/3G=2)
   1
   Press select your camera port [0-3]:
   0
   Press select your camera resolution:
   0:1920x1080
   1:1920x1536
   2:2880x1860
   3:3840x2160
   4:1280x720
   0
   ```
9. If you want to use the external trigger synchronization mode, you need to run the "camera_fsync_set.sh" script after starting the camera.  

   ```
   ./camera_fsync_set.sh
   ```  
10. The external trigger signal is input through the "CN2" port on the adapter board.   

#### Integration with SENSING Driver Source Code

1. Compile Image & dtb
   Refer to the following command to integrate Dtb and Kernel source code to your kernel

   ```
   cp camera-driver-package/source/hardware Linux_for_Tegra/source/hardware -r
   cp camera-driver-package/source/kernel Linux_for_Tegra/source/kernel -r
   cp camera-driver-package/source/nvidia-oot Linux_for_Tegra/source/nvidia-oot -r
   ```
2. Go to the root directory of your source code and recompile

   ```
   cd <install-path>/Linux_for_Tegra/source
   export CROSS_COMPILE_AARCH64=toolchain-path/bin/aarch64-buildroot-linux-gnu-
   export KERNEL_HEADERS=$PWD/kernel/kernel-jammy-src
   export INSTALL_MOD_PATH=<install-path>/Linux_for_Tegra/rootfs/
   make -C kernel
   make modules
   make dtbs
   sudo -E make install -C kernel

   cp kernel/kernel-jammy-src/arch/arm64/boot/Image <install-path>/Linux_for_Tegra/kernel/Image
   cp nvidia-oot/device-tree/platform/generic-dts/dtbs/* <install-path>/Linux_for_Tegra/kernel/dtb/
   ```
3. Install the newly generated Image and dtb to your nvidia device and reboot to let them take effect

   ```
   dtb:nvidia-oot/device-tree/platform/generic-dts/dtbs/
   Image: kernel/kernel-jammy-src/arch/arm64/boot/

   tegra-camera.ko:nvidia-oot/drivers/media/platform/tegra/camera/
   nvhost-nvcsi-t194.ko:nvidia-oot/drivers/video/tegra/host/nvcsi/
   ```
4. Copy the image,dtb,ko generated by the above compilation to the corresponding location of jetson

   ```
   sudo cp *.dtbo /boot/
   sudo cp Image /boot/Image
   sudo cp tegra-camera.ko /lib/modules/5.15.148-tegra/updates/drivers/media/platform/tegra/camera/
   sudo cp nvhost-nvcsi-t194.ko /lib/modules/5.15.148-tegra/updates/drivers/video/tegra/host/nvcsi/
   ```
5. Select the device tree you want to light

   ```
   sudo /opt/nvidia/jetson-io/jetson-io.py

   1.select "Configure Jetson 24pin CSI Connector"
   2.select Configure for compatible hardware
   3.select "Jetson Sensing YUV GMSLx4"
   4.select "Save pin changes"
   5.select "Save and reboot to reconfigure pins"
   ```
6. Install camera driver

   ```
   sudo insmod ./ko/max96712.ko
   sudo insmod ./ko/sgx-yuv-gmsl2.ko
   ```
7. Bring up the camera

   ```
   ## CAM0
    gst-launch-1.0 v4l2src device=/dev/video0 ! "video/x-raw, format=UYVY, width=1920, height=1080, framerate=30/1" ! xvimagesink

    ## CAM1
    gst-launch-1.0 v4l2src device=/dev/video1 ! "video/x-raw, format=UYVY, width=1920, height=1080, framerate=30/1" ! xvimagesink

    ## CAM2
    gst-launch-1.0 v4l2src device=/dev/video2 ! "video/x-raw, format=UYVY, width=1920, height=1080, framerate=30/1" ! xvimagesink

    ## CAM3
    gst-launch-1.0 v4l2src device=/dev/video3 ! "video/x-raw, format=UYVY, width=1920, height=1080, framerate=30/1" ! xvimagesink
   ```

<br />
## FAQ

<!-- For details, please click [here](../../../FAQ/FAQ_jetson) -->
