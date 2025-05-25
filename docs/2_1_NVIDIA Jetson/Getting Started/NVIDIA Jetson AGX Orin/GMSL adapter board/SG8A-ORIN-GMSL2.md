---
sidebar_position: 1
---

# SG8A-ORIN-GMSL2

## Overview
SG8A-ORIN-GMSL2 adapter board, which allows up to 8 cameras to be connected to the Jetson AGX Orin module, 
is fully compatible with the NVIDIA Jetson AGX Orin Development Kit. 
As there are many different types of GMSL cameras available, the adapter board can be adaptively operated at different frequencies i.e. 
it is compatible with both GMSL and GMSL2 protocol interfaces through software configuration. 
The GMSL camera is powered by PoC (Power over Coax), so all data, control signals and power are sent over a 50 Ohm coaxial cable, 
making the camera's cable routing flexible and easy to install in automotive applications.


<!-- ![SG8A-ORIN-GMSL](/img/SG8A-ORIN-GMSL.png) -->

<!-- <img src={require('@site/static/img/SG8A-ORIN-GMSL.png').default} alt="SG8A-ORIN-GMSL" /> -->

<div style={{textAlign: 'center'}}>
    <img src="https://raw.githubusercontent.com/1214658495/myWikiFiles/main/Nvidia_jetson/SG8A-ORIN-GMSL2/SG8A-ORIN-GMSL.png" alt="SG8A-ORIN-GMSL" 
    style={{width: 450, height:'auto'}} />
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://sensing-world.com/en/h-pd-65.html?recommendFromPid=0&fromMid=898" target="_blank" rel="noopener noreferrer">
        <strong>
            <span style={{backgroundColor: '#f0f0f0', padding: '10px 20px', display: 'inline-block', borderRadius: '5px'}}>
                <font color={'000000'} size={"4"}> Buy Now</font>
            </span>
        </strong>
    </a>
</div>



## Getting Started
In this wiki, we will show you how to use the SG8A-ORIN-GMSL2 which supports NVIDIA Jetson AGX Orin.


### Specification

| Item              | Specification             |
|-------------------|---------------------------|
| Model             | SG8A-ORIN-GMSL2           |
| Dimension         | 104mm*74mm                |
| Weight            | 50g                       |
| Connector         | 1x120Pin High-density connectors |
| Camera input      | Camera*8(GMSL2/GMSL)     |
| Trigger In        | 12Pin Sync In             |
| Deserializer      | MAXIM(ADI) MAX9296A*4     |
| Camera Connector  | Fakra Z Code              |
| POC Power Supply  | DC 8-16V                  |
| DC Power Supply   | DC 12V                    |
| Operating Conditions| -20°C to +85°C          |
| Adaptation kit    | Jetson AGX Orin/Xavier    |


### Hardware Overview
<div style={{textAlign: 'left'}}>
    <img src="https://raw.githubusercontent.com/1214658495/myWikiFiles/main/Nvidia_jetson/SG8A-ORIN-GMSL2/SG8A-ORIN-GMSL2-overview.png" alt="SG8A-ORIN-GMSL2-overview" 
    style={{width: 760, height:'auto'}} />
</div>

### Block Diagram
:::caution Attention
（1）The I2C bus number is the hardware location (matching the connector J2 pin). The bus number does not necessarily correspond to what is listed in the software.

（2）The coaxial power supply is shared, but each GMSL line has its own filter.
:::

<br />
<div style={{textAlign: 'center'}}>
    <img src="https://raw.githubusercontent.com/1214658495/myWikiFiles/main/Nvidia_jetson/SG8A-ORIN-GMSL2/SG8A-ORIN-GMSL2-Block Diagram.png" alt="SG8A-ORIN-GMSL2-Block Diagram" 
    style={{width: 670, height:'auto'}} />
</div>



<br />
### Supported Camera List

<!-- Offline version -->
| No. | Camera                      | Output Data | Jetpack 5.1.2 | Jetpack 6.0DP | Jetpack 6.0 | Jetpack 6.1 | Jetpack 6.2 |
|-----| --------------------------- | ---- | ------------- | ------------- | ----------- | ----------- | ----------- |
| 1   | SG1-OX01F10C-GMSL-Hxxx      | YUV422  | YES           | YES           | YES         | \           | \           |
| 2   | SG1S-OX01F10C-G1G-Hxxx      | YUV422  | YES           | \             | \           | \           | \           |
| 3   | SG2-AR0231C-0202-GMSL-Hxxx  | YUV422  | YES           | YES           | YES         | \           | \           |
| 4   | SG2-AR0233C-5200-G2A-Hxxx   | YUV422  | YES           | YES           | YES         | \           | YES         |
| 5   | SG2-IMX390C-5200-G2A-Hxxx   | YUV422  | YES           | YES           | YES         | \           | YES         |
| 6   | SG2-OX03CC-5200-GMSL2F-Hxxx | YUV422  | YES           | YES           | YES         | \           | YES         |
| 7   | SG3S-ISX031C-GMSL2-Hxxx     | YUV422  | YES           | YES           | YES         | \           | YES         |
| 8   | SG3S-ISX031C-GMSL2F-Hxxx    | YUV422  | YES           | YES           | YES         | \           | YES         |
| 9   | SG3S-OX03JC-G2F-Hxxx        | YUV422  | YES           | YES           | YES         | \           | \           |
| 10  | SG5-IMX490C-5300-GMSL2-Hxxx | YUV422  | YES           | YES           | YES         | \           | YES         |
| 11  | SG5-OX05BC-4000-GMSL2-Hxxx  | YUV422  | YES           | \             | \           | \           | \           |
| 12  | SG8S-AR0820C-5300-G2A-Hxxx  | YUV422  | YES           | YES           | YES         | \           | YES         |
| 13  | SG8-OX08BC-5300-GMSL2-Hxxx  | YUV422  | YES           | YES           | YES         | \           | YES         |
| 14  | DMSBBFAN                    | YUV422  | YES           | \             | \           | \           | YES         |
| 15  | SG3S-IMX623C-G2F-Hxxx       | RAW12  | \             | \             | \           | \           | \           |
| 16  | SG8-IMX728C-G2G-Hxxx        | RAW12  | YES           | \             | YES         | \           | \           |


<br />
### Hardware Preparation

#### Parts List

| No.           | Product model                 | Quantity | Remark                |
|---------------|-------------------------------|----------|-----------------------|
| 1             | Power adapter                 | 1        | Standard configuration|
| 2             | Power switching harness       | 1        | Standard configuration|
| 3             | SG8A-ORIN-GMSL2 adapter board | 1        | Standard configuration|
| 4             | copper column , M2.5*16       | 3        | Standard configuration|
| 5             | screw, M2.5-F                 | 3        | Standard configuration|
| 6             | Jetson AGX Orin DK            | 1        | optional configuration|

<br />
#### Kit Contents
<div style={{textAlign: 'left'}}>
    <img src="https://raw.githubusercontent.com/1214658495/myWikiFiles/main/Nvidia_jetson/SG8A-ORIN-GMSL2/SG8A-ORIN-GMSL2-complete2.png" alt="SG8A-ORIN-GMSL2-complete" style={{width: 920, height:'auto'}} />
</div>
<br />

#### Follow the steps below to install the product:

1. Connect the GMSL camera to the SG8A-ORIN-GMSL2 board using the coaxial cable
2. Mount the SG8A-ORIN-GMSL2 board onto the Jetson AGX Orin module
3. Connect the power supply
4. Power on the system

<div style={{textAlign: 'center', position: 'relative', width: '95%', paddingBottom: '56.25%', marginBottom: '20px'}}>
    <iframe
        style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%'}}
        src="//player.bilibili.com/player.html?bvid=BV1gj5TzdEAo&page=1&high_quality=1&danmaku=0"
        scrolling="no"
        border="0"
        frameBorder="no"
        framespacing="0"
        allowFullScreen="true">
    </iframe>
</div>

<br />
### Software Preparation
**Step 1.** SDK Download

| Camera | JP version for customer NVIDIA devices | Driver pkg download link | Driver pkg download method |
|------------------------------|---------------------------------------|-----------------------------|-------------------------------|
| GMSL Camera (YUV Data)<br/>(e.g.: SG2-AR0231C-0202-GMSL-Hxxx) | JP5.1.2 | [Link](https://github.com/SENSING-Technology/nvidia-jetson-camera-drivers/tree/main/Jetson%20AGX%20Orin%20Devkit/SG8A-ORIN-GMSL2-F/JetPack5.1.2/SG8A_ORIN_GMSL2-F_V2_AGX_Orin_YUV_GMSL1_JP5.1.2_L4TR35.4.1) | Copy the full link address to [DownGit](https://minhaskamal.github.io/DownGit/#/home) to download |
| GMSL Camera (YUV Data)<br/>(e.g.: SG2-AR0231C-0202-GMSL-Hxxx) | JP6.0 | [Link](https://github.com/SENSING-Technology/nvidia-jetson-camera-drivers/tree/main/Jetson%20AGX%20Orin%20Devkit/SG8A-ORIN-GMSL2-F/JetPack6.0/SG8A_ORIN_GMSL2-F_V2_AGX_Orin_YUV_GMSL1_JP6.0_L4TR36.3.0) | Copy the full link address to [DownGit](https://minhaskamal.github.io/DownGit/#/home) to download |
| GMSL2 Camera (YUV Data)<br/>(e.g.: SG3S-ISX031C-GMSL2-Hxxx) | JP5.1.2| [Link](https://github.com/SENSING-Technology/nvidia-jetson-camera-drivers/tree/main/Jetson%20AGX%20Orin%20Devkit/SG8A-ORIN-GMSL2-F/JetPack5.1.2/SG8A_ORIN_GMSL2-F_V2_AGX_Orin_YUV_JP5.1.2_L4TR35.4.1) | Copy the full link address to [DownGit](https://minhaskamal.github.io/DownGit/#/home) to download |
| GMSL2 Camera (YUV Data)<br/>(e.g.: SG3S-ISX031C-GMSL2-Hxxx) | JP6.0 | [Link](https://github.com/SENSING-Technology/nvidia-jetson-camera-drivers/tree/main/Jetson%20AGX%20Orin%20Devkit/SG8A-ORIN-GMSL2-F/JetPack6.0/SG8A_ORIN_GMSL2-F_V2_AGX_Orin_YUV_JP6.0_L4TR36.3.0) | Copy the full link address to [DownGit](https://minhaskamal.github.io/DownGit/#/home) to download |
| GMSL2 Camera (RAW Data)<br/>(e.g.: SG2-AR0233C-GMSL2-Hxxx) | JP5.1.2 | [Link](https://github.com/SENSING-Technology/nvidia-jetson-camera-drivers/tree/main/Jetson%20AGX%20Orin%20Devkit/SG8A-ORIN-GMSL2-F/JetPack5.1.2/SG8A_ORIN_GMSL2-F_V2_AGX_Orin_RAW_JP5.1.2_L4TR35.4.1) | Copy the full link address to [DownGit](https://minhaskamal.github.io/DownGit/#/home) to download |
| GMSL2 Camera (RAW Data)<br/>(e.g.: SG2-AR0233C-GMSL2-Hxxx) | JP6.0 | [Link](https://github.com/SENSING-Technology/nvidia-jetson-camera-drivers/tree/main/Jetson%20AGX%20Orin%20Devkit/SG8A-ORIN-GMSL2-F/JetPack6.0/SG8A_ORIN_GMSL2-F_V2_AGX_Orin_RAW_JP6.0_L4TR36.3.0) | Copy the full link address to [DownGit](https://minhaskamal.github.io/DownGit/#/home) to download |

<br />

**Step 2.** Perform a system update on the NVIDIA Jetson device.<br />
We can use NVIDIA SDK Manager Linux Software or we can directly use the NVIDIA Linux Driver Package via Linux command line
 to flash JetPack OS into the NVIDIA Jetson device. 
For the beginners to NVIDIA Jetson, we highly recommand NVIDIA SDK Manager.

**Step 3.** Quick Bring Up.<br />
<div style={{textAlign: 'center'}}>
    <img src="https://raw.githubusercontent.com/1214658495/myWikiFiles/main/Nvidia_jetson/SG8A-ORIN-GMSL2/SG8A-ORIN-GMSL2-cmd.png" alt="SG8A-ORIN-GMSL2-complete" style={{width: 700, height:'auto'}} />
</div>

1. Copy the driver package to the working directory of the Jetson device, such as “/home/nvidia”

   ```
   /home/nvidia/SG8A_ORIN_GMSL2-F_V2_AGX_Orin_YUV_JP5.1.2_L4TR35.4.1
   ```
2. Enter the driver directory

   ```
   cd SG8A_ORIN_GMSL2-F_V2_AGX_Orin_YUV_JP5.1.2_L4TR35.4.1
   ```
3. Give executable permissions to the script "quick_bring_up.sh" and execute the script

   ```
   chmod a+x quick_bring_up.sh
   sudo ./quick_bring_up.sh
   ```
4. Select the camera type. This step will install Image and DTB, after the script run complete.
   You need to reboot the device to let the Image and DTB take effect.
   For example:

   ```
   This package is use for Sensing SG8A-ORING-GMSL on JetPack-5.1.2-L4T-35.4.1
   1.sgx-yuv-gmsl1
   2.sgx-yuv-gmsl2
   Press select your camera type:
   2
   ```

   At this point, you should type 1 to select your camera type and then hit Enter
5. After the device reboots, enter the driver directory and run the script "quick_bring_up.sh"

   ```
   sudo ./quick_bring_up.sh
   ```
6. Select the camera type. Select the sgx-yuv-gmsl2 camera type, then select SG2-IMX390C-5200-GMSL2,
   and finally enter 0-7 the camera port you are connected to to turn on the camera.

   ```
   This package is use for Sensing SG8A-ORING-GMSL on JetPack-5.1.2-L4T-35.4.1
   1.sgx-yuv-gmsl1
   2.sgx-yuv-gmsl2
   Press select your camera type:
   2
   Press select your yuv camera type:
   0:SG2-IMX390C-5200-GMSL2
   1:SG2-AR0233-5300-GMSL2
   2.SG2-OX03CC-5200-GMSL2F
   3.SG3-ISX031C-GMSL2F
   4.SG5-IMX490C-5200-GMSL2
   5.SG8-AR0820C-5300-GMSL2
   6.SG8-OX08BC-5300-GMSL2
   0
   Press select your camera port [0-7]:
   0
   ready bring up camera
   Use the following command to light the camera!
   gst-launch-1.0 v4l2src device=/dev/video0  ! xvimagesink -ev
   ```
7. Select one of the commands prompted above to light the camera.
   
<br />
#### Integration with SENSING Driver Source Code

1. Compile Image & dtb
   Refer to the following command to integrate Dtb and Kernel source code to your kernel

   ```
   cp camera-driver-package/source/hardware Linux_for_Tegra/source/public/$YourDir/hardware -r
   cp camera-driver-package/source/kernel Linux_for_Tegra/source/public/$YourDir/kernel -r
   ```
2. Go to the root directory of your source code and recompile

   ```
   cd  Linux_for_Tegra/source/public/$YourDir/
   export CROSS_COMPILE_AARCH64_PATH=toolchain-path
   export CROSS_COMPILE_AARCH64=toolchain-path/bin/aarch64-buildroot-linux-gnu-
   mkdir kernel_out
   ./nvbuild.sh -o $PWD/kernel_out
   ```
3. Install the newly generated Image and dtb to your nvidia device and reboot to let them take effect

   ```
   dtb:kernel_out/arch/arm64/boot/dts/nvidia/
   Image: kernel_out/arch/arm64/boot/Image
   ```
4. Install camera driver

   ```
   sudo insmod ./ko/max9295.ko
   sudo insmod ./ko/max9296.ko
   sudo insmod ./ko/sgx-yuv-gmsl2.ko
   ```
5. Bring up the camera

   ```
   gst-launch-1.0 v4l2src device=/dev/video0  ! xvimagesink -ev
   ```

<br />
## FAQ

For details, please click [here](../../../FAQ/FAQ_jetson)
