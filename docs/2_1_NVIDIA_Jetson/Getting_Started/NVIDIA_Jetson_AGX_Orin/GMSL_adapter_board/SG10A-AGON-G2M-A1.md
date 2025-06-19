---
sidebar_position: 3
---

# SG10A-AGON-G2M-A1

## Overview

<div className="row">
  <div className="col col--8">
    SG10A-AGON-G2M-A1 adapter board, which allows up to 10 cameras to be connected to the Jetson AGX Orin module, 
    is fully compatible with the NVIDIA Jetson AGX Orin Development Kit. 
    As there are many different types of GMSL cameras available, the adapter board can be adaptively operated at different frequencies i.e. 
    it is compatible with both GMSL and GMSL2 protocol interfaces through software configuration. 
    The GMSL camera is powered by PoC (Power over Coax), so all data, control signals and power are sent over a 50 Ohm coaxial cable, 
    making the camera's cable routing flexible and easy to install in automotive applications.
  </div>
  <div className="col col--4">
    :::note Key Features
    - 10 camera support
    - GMSL/GMSL2 compatible
    - PoC power supply
    - Easy installation
    :::
  </div>
</div>


<!-- ![SG8A-ORIN-GMSL](/img/SG8A-ORIN-GMSL.png) -->

<!-- <img src={require('@site/static/img/SG8A-ORIN-GMSL.png').default} alt="SG8A-ORIN-GMSL" /> -->

<div style={{textAlign: 'center'}}>
    <img src="https://raw.githubusercontent.com/1214658495/myWikiFiles/main/Nvidia_jetson/SG10A-AGON-G2M-A1/SG10A-AGON-G2M-A1.png" alt="SG10A-AGON-G2M-A1" 
    style={{maxWidth: '45%', height:'auto'}} />
</div>

<!-- <div style={{textAlign: 'center', marginBottom: '2rem'}}>
    <a href="https://sensing-world.com/en/h-pd-65.html?recommendFromPid=0&fromMid=898" target="_blank" rel="noopener noreferrer" 
       style={{backgroundColor: '#f0f0f0', padding: '10px 20px', display: 'inline-block', borderRadius: '5px', textDecoration: 'none'}}>
        <strong style={{color: '#000000', fontSize: '1.2em'}}>Buy Now</strong>
    </a>
</div> -->
<div style={{textAlign: 'center', marginBottom: '2rem'}}>
    <span style={{backgroundColor: '#f0f0f0', padding: '10px 20px', display: 'inline-block', borderRadius: '5px', textDecoration: 'none'}}>
        <strong style={{color: '#000000', fontSize: '1.2em'}}>coming soon</strong>
    </span>
</div>

## Getting Started

### Specification

<div className="row">
  <div className="col col--6">
    :::note Basic Info
    - Model: SG10A-AGON-G2M-A1
    - Dimension: 88mm*120mm
    - Weight: 50g
    - Connector: 1x120Pin High-density connectors
    - Camera input: Camera*10(GMSL2/GMSL)
    - Trigger In: 4Pin Sync In
    :::
  </div>
  <div className="col col--6">
    :::note Technical Specs
    - Deserializer: MAXIM(ADI) MAX9296A *3
                    MAXIM(ADI) MAX96712A *1
    - Camera Connector: Fakra Z Code
    - POC Power Supply: DC 9-16V
    - DC Power Supply: DC 12V
    - Operating Conditions: -20°C to +70°C
    - Adaptation kit: Jetson AGX Orin
    :::
  </div>
</div>

### Hardware Overview

<div style={{textAlign: 'center', marginBottom: '2rem'}}>
    <img src="https://raw.githubusercontent.com/1214658495/myWikiFiles/main/Nvidia_jetson/SG10A-AGON-G2M-A1/SG10A-AGON-G2M-A1_Hardware_Overview.png" alt="SG10A-AGON-G2M-A1-overview" style={{maxWidth: '70%', height: 'auto'}} />
</div>

### Block Diagram

:::caution Attention
（1）The I2C bus number is the hardware location (matching the connector). The bus number does not necessarily correspond to what is listed in the software.

（2）The coaxial power supply is shared, but each GMSL line has its own filter.
:::

<div style={{textAlign: 'center', marginBottom: '2rem'}}>
    <img src="https://raw.githubusercontent.com/1214658495/myWikiFiles/main/Nvidia_jetson/SG10A-AGON-G2M-A1/SG10A-AGON-G2M-A1_Block_Diagram.png" alt="SG10A-AGON-G2M-A1-Block Diagram" style={{maxWidth: '100%', height: 'auto'}} />
</div>

#### J19 Pin Define

<div style={{marginBottom: '2rem'}}>
  <table>
    <thead>
      <tr>
        <th colSpan="3">J19</th>
      </tr>
      <tr>
        <th>Pin NO</th>
        <th>NAME</th>
        <th>Remarks</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>GND</td>
        <td>/</td>
      </tr>
      <tr>
        <td>2</td>
        <td>SYNC1</td>
        <td>Trigger pins for U19 and U4</td>
      </tr>
      <tr>
        <td>3</td>
        <td>GND</td>
        <td>/</td>
      </tr>
      <tr>
        <td>4</td>
        <td>SYNC2</td>
        <td>Trigger pins for U13 and U3</td>
      </tr>
    </tbody>
  </table>
</div>

### Supported Camera List

:::note Camera Compatibility
Currently only JetPack 6.0 is supported.
:::

#### Camera Version Support

* Gemini 335Lg
* SHW3H(3MP/H120UA)
* SHF3L(3MP/H190XA)

#### Camera Mapping

| FAKRA | Video | Camera |
|-------|-------|--------|
| J21 | video0 | SHW3H |
| J22 | video1 | SHW3H |
| J27 | video2 | SHW3H |
| J28 | video3 | SHW3H |
| J29 | video4 | SHW3H |
| J30 | video5 | SHW3H |
| J25 | video6~video13 | Gemini 335Lg |
| J22 | video14~video21 | Gemini 335Lg |
| J22 | video22~video29 | Gemini 335Lg |
| J22 | video30~video37 | Gemini 335Lg |

<!-- | Camera | Output Data | Jetpack 5.1.2 | Jetpack 6.2 |
|--------|-------------|---------------|-------------|
| SG1-OX01F10C-GMSL-Hxxx | YUV422 | - | - |
| SG1S-OX01F10C-G1G-Hxxx | YUV422 | - | - |
| SG2-AR0231C-0202-GMSL-Hxxx | YUV422 | - | - |
| SG2-AR0233C-5200-G2A-Hxxx | YUV422 | ✅ | ✅ |
| SG2-IMX390C-5200-G2A-Hxxx | YUV422 | ✅ | ✅ |
| SG2-OX03CC-5200-GMSL2F-Hxxx | YUV422 | ✅ | ✅ |
| SG3S-ISX031C-GMSL2-Hxxx | YUV422 | ✅ | ✅ |
| SG3S-ISX031C-GMSL2F-Hxxx | YUV422 | ✅ | ✅ |
| SG3S-OX03JC-G2F-Hxxx | YUV422 | - | - |
| SG5-IMX490C-5300-GMSL2-Hxxx | YUV422 | ✅ | ✅ |
| SG5-OX05BC-4000-GMSL2-Hxxx | YUV422 | - | - |
| SG8S-AR0820C-5300-G2A-Hxxx | YUV422 | ✅ | ✅ |
| SG8-OX08BC-5300-GMSL2-Hxxx | YUV422 | ✅ | ✅ |
| DMSBBFAN | YUV422 | - | - |
| SG3S-IMX623C-G2F-Hxxx | RAW12 | - | - |
| SG8-IMX728C-G2G-Hxxx | RAW12 | - | - | -->

:::note JetPack Versions
NVIDIA JetPack (<strong style={{ color: 'var(--ifm-color-primary-light)' }}>Jetpack 5.1.2</strong> or <strong style={{ color: 'var(--ifm-color-primary-light)' }}>Jetpack 6.0</strong> ) is the official software development kit (SDK) for the Jetson series of development boards. It includes the operating system, drivers, CUDA, cuDNN, TensorRT, and other development tools and libraries. Each JetPack version typically corresponds to a specific Jetson Linux version (formerly known as L4T - Linux for Tegra). 
- 36.4.3: L4T R36.4.3 (Jetpack 6.2)
- 36.4: L4T R36.4 (Jetpack 6.1)
- 36.3: L4T R36.3 (Jetpack 6.0)
- 35.4.1: L4T R35.4.1 (Jetpack 5.1.2)

For more information, visit [NVIDIA's official Jetson Download Center](https://developer.nvidia.com/embedded/jetpack-archive).
:::

### Hardware Preparation

#### Kit Contents

<div style={{textAlign: 'center', marginBottom: '2rem'}}>
    <img src="https://raw.githubusercontent.com/1214658495/myWikiFiles/main/Nvidia_jetson/SG10A-AGON-G2M-A1/SG10A-AGON-G2M-A1_Kit_Contents.png" alt="SG10A-AGON-G2M-A1-Kit Contents" style={{maxWidth: '90%', height: 'auto'}} />
</div>

#### Parts List

<div style={{marginBottom: '2rem'}}>
  <table>
    <thead>
      <tr>
        <th colSpan="4">Parts list</th>
      </tr>
      <tr>
        <th>Serial number</th>
        <th>Product model</th>
        <th>quantity</th>
        <th>remark</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>Power adapter</td>
        <td>1</td>
        <td>Standard configuration</td>
      </tr>
      <tr>
        <td>2</td>
        <td>Power switching harness</td>
        <td>1</td>
        <td>Standard configuration</td>
      </tr>
      <tr>
        <td>3</td>
        <td>SG10A-AGON-G2M-A1 adapter board</td>
        <td>1</td>
        <td>Standard configuration</td>
      </tr>
      <tr>
        <td>4</td>
        <td>copper column, M2.5*12+5</td>
        <td>3</td>
        <td>Standard configuration</td>
      </tr>
      <tr>
        <td>5</td>
        <td>screw, M2.5-F</td>
        <td>3</td>
        <td>Standard configuration</td>
      </tr>
      <tr>
        <td>6</td>
        <td>Jetson AGX Orin DK</td>
        <td>1</td>
        <td>optional configuration</td>
      </tr>
      <tr>
        <td>7</td>
        <td>Trigger line</td>
        <td>1</td>
        <td>Standard configuration</td>
      </tr>
    </tbody>
  </table>
</div>

#### Installation Steps

:::note Quick Setup
1. Connect the GMSL camera to the SG10A-AGON-G2M-A1 board using the coaxial cable
2. Mount the SG10A-AGON-G2M-A1 board onto the Jetson AGX Orin module
3. Connect the power supply
4. Power on the system
:::

<div style={{textAlign: 'center', position: 'relative', width: '95%', paddingBottom: '56.25%', marginBottom: '2rem'}}>
    <iframe
        style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%'}}
        src="//player.bilibili.com/player.html?bvid=BV15SN4zaEc6&page=1&high_quality=1&danmaku=0"
        scrolling="no"
        border="0"
        frameBorder="no"
        framespacing="0"
        allowFullScreen="true">
    </iframe>
</div>

### Software Preparation

#### SDK Download

:::note Driver Packages
Select the appropriate driver package based on your camera type and JetPack version:
:::

| Camera Type | JetPack Version | Download Link |
|-------------|-----------------|---------------|
| GMSL2 Camera (YUV) | JP6.0 | [Download](https://github.com/SENSING-Technology/nvidia-jetson-camera-drivers/tree/main/Jetson%20AGX%20Orin%20Devkit/SG10A-AGON-G2M-A1/JetPack6.0/SG10A-AGON-G2M-A1-AGX_G335Lg_SHW3H%26SHF3L_JP6.0_L4TR36.3.0) |

:::tip Download Method
Copy the full link address to [DownGit](https://minhaskamal.github.io/DownGit/#/home) to download
:::

#### Quick Bring Up

:::note System Update
We can use NVIDIA SDK Manager Linux Software or directly use the NVIDIA Linux Driver Package via Linux command line to flash JetPack OS into the NVIDIA Jetson device. For beginners, we highly recommend NVIDIA SDK Manager.
:::

<!-- <div style={{textAlign: 'center', marginBottom: '2rem'}}>
    <img src="https://raw.githubusercontent.com/1214658495/myWikiFiles/main/Nvidia_jetson/SG8A-ORIN-GMSL2/SG8A-ORIN-GMSL2-cmd.png" alt="SG8A-ORIN-GMSL2-cmd" style={{maxWidth: '100%', height: 'auto'}} />
</div> -->

1. Copy the driver package to the working directory of the Jetson device, such as "/home/nvidia"

   ```
   /home/nvidia/SG10A-AGON-G2M-A1-AGX_G335Lg_SHW3H&SHF3L_JP6.0_L4TR36.3.0
   ```
2. Enter the driver directory,

   ```
   cd SG10A-AGON-G2M-A1-AGX_G335Lg_SHW3H&SHF3L_JP6.0_L4TR36.3.0
   chmod a+x ./install.sh
   ./install.sh
   ```
3. Use the "sudo /opt/nvidia/jetson-io/jetson-io.py" command to select the corresponding device

   ```
   sudo /opt/nvidia/jetson-io/jetson-io.py

   1.select "Configure Jetson AGX CSI Connector"
   2.select "Configure for compatible hardware"
   3.select "Jetson Orbbec Camera G335Lg And SH3"
   4.select "Save pin changes"
   5.select "Save and reboot to reconfigure pins"
   ```
4. reboot device

   ```
   sudo reboot
   ```
5. Install camera driver

   ```
   cd SG10A-AGON-G2M-A1-AGX_G335Lg_SHW3H&SHF3L_JP6.0_L4TR36.3.0
   chmod +x load_modules.sh
   ./load_modules.sh
   ```
6. Bring up the SHW3H camera (SHW3H camera is connected to the HDR Camera port, and SHF3L as well)

   ```
   ## CAM2
    gst-launch-1.0 v4l2src device=/dev/video0 ! xvimagesink -ev

   ## CAM3
    gst-launch-1.0 v4l2src device=/dev/video1 ! xvimagesink -ev

   ## CAM4
    gst-launch-1.0 v4l2src device=/dev/video2 ! xvimagesink -ev

   ## CAM5
    gst-launch-1.0 v4l2src device=/dev/video3 ! xvimagesink -ev

   ## CAM6
    gst-launch-1.0 v4l2src device=/dev/video4 ! xvimagesink -ev

   ## CAM7
    gst-launch-1.0 v4l2src device=/dev/video5 ! xvimagesink -ev
   ```
7. Bring up the Gemini 335Lg camera (Gemini 335Lg camera connected to D457 Camera port) 
  
   ```
   unzip OrbbecViewer_v2.0.18_202410190639_77d8dff_linux_aarch64.zip -d ./
   cd OrbbecViewer_v2.0.18_202410190639_77d8dff_linux_aarch64
   ./OrbbecViewer
   ```
8. After the program starts, you can select the device to open in the top-left corner
9. Click the Camera button on the left, then sequentially start the Color, Depth, IR Left, and IR Right 4 data streams.   

<br />
## FAQ

For details, please click [here](../../../FAQ/FAQ_jetson)
