---
sidebar_position: 1
---

# CoaxCapture II

## Overview
<div style={{background: 'var(--ifm-background-color)', borderRadius: '10px', boxShadow: '0 2px 8px rgba(0,0,0,0.08)', padding: '1.5rem', marginBottom: '2rem'}}>
  <div style={{textAlign: 'center'}}>
    <img src="https://raw.githubusercontent.com/1214658495/myWikiFiles/main/Data_collection/CCG3-8H/CCG3-8H_backup.png" alt="CCG3-8H" style={{maxWidth: '42%', height:'auto', borderRadius: '8px'}} />
  </div>
  <div style={{marginTop: '1rem', fontSize: '1.1em'}}>
    <strong>CCG3-8H</strong> is a high-speed image product based on FPGA independently developed by ShenZhen SENSING Technology Co.,Ltd. Compared with Gen1, Gen2 uses PCI-e Gen3 technology, doubling speed and bandwidth. It supports GMSL/GMSL2 cameras, features high frame rate, high speed, low latency, and is widely used in autonomous machines, vehicles, and data capture.
  </div>
  <div style={{textAlign: 'center', marginTop: '1.5rem'}}>
    <a class="get_one_now_item" href="https://sensing-world.com/en/Coaxcapture_Card/" target="_blank" rel="noopener noreferrer">
      <span style={{backgroundColor: '#f0f0f0', padding: '10px 20px', display: 'inline-block', borderRadius: '5px', color: '#000', fontWeight: 600, fontSize: '1.1em'}}>Learn More</span>
    </a>
  </div>
</div>

## Getting Started

### Key Specifications
<div style={{display: 'flex', flexWrap: 'wrap', gap: '1.5rem', marginBottom: '2rem'}}>
  <div style={{flex: 1, minWidth: 260, background: 'var(--ifm-background-color)', borderRadius: '10px', boxShadow: '0 2px 8px rgba(0,0,0,0.06)', padding: '1rem'}}>
    <strong>Model:</strong> CCG3-8H<br/>
    <strong>Camera Input:</strong> 8x GMSL2/GMSL<br/>
    <strong>Resolution:</strong> 1-8MP<br/>
    <strong>Bit Depth:</strong> 8/12/16-bit<br/>
    <strong>Data Bandwidth:</strong> 6Gbps/cable
  </div>
  <div style={{flex: 1, minWidth: 260, background: 'var(--ifm-background-color)', borderRadius: '10px', boxShadow: '0 2px 8px rgba(0,0,0,0.06)', padding: '1rem'}}>
    <strong>Processor:</strong> Xilinx ZU+<br/>
    <strong>PCIe:</strong> Gen3 x8<br/>
    <strong>OS:</strong> Linux 64-bit, Ubuntu 18.04/20.04<br/>
    <strong>SDK/API:</strong> V4L2, Documentation<br/>
    <strong>Trigger:</strong> TTL, PTP, GPS
  </div>
  <div style={{flex: 1, minWidth: 260, background: 'var(--ifm-background-color)', borderRadius: '10px', boxShadow: '0 2px 8px rgba(0,0,0,0.06)', padding: '1rem'}}>
    <strong>Operating Temp:</strong> -20°C ~ +70°C<br/>
    <strong>Storage Temp:</strong> -40°C ~ +80°C<br/>
    <strong>Power Output:</strong> 4W/9V per cable<br/>
    <strong>Connector:</strong> Min-fakra Dual<br/>
    <strong>Size:</strong> 167.64mm x 111.15mm
  </div>
</div>

### Block Diagram
<div style={{textAlign: 'center', marginBottom: '2rem'}}>
  <img src="https://raw.githubusercontent.com/1214658495/myWikiFiles/main/Data_collection/CCG3-8H/CCG3-8H_diagram.png" alt="CCG3-8H Block Diagram" style={{width: 480, height:'auto', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.08)'}} />
</div>

:::note Highlights
- 8 GMSL cameras input, up to 8MP@30fps
- PCI-e Gen3 x8 lane, ultra-high bandwidth
- Supports external trigger & PTP time sync
- Low latency, high reliability
:::

### Supported Camera List

| No. | Camera                      | Resolution | Output Data | Ubuntu18.04/20.04 |
|-----| --------------------------- | ---------- | ----------- | ------------- |
| 1   | SG1-OX01F10C-GMSL-Hxxx      | 1280H*720V | YUV422      | ✅           |
| 2   | SG1S-OX01F10C-G1G-Hxxx      | 1280H*960V | YUV422      | ✅           |
| 3   | SG2-AR0231C-0202-GMSL-Hxxx  | 1920H*1080V| YUV422      | ✅           |
| 4   | SG2-AR0233C-5200-G2A-Hxxx   | 1920H*1080V| YUV422      | ✅           |
| 5   | SG2-IMX390C-5200-G2A-Hxxx   | 1920H*1080V| YUV422      | ✅           |
| 6   | SG2-OX03CC-5200-GMSL2F-Hxxx | 1920H*1080V| YUV422      | ✅           |
| 7   | SG3S-ISX031C-GMSL2-Hxxx     | 1920H*1536V| YUV422      | ✅           |
| 8   | SG3S-ISX031C-GMSL2F-Hxxx    | 1920H*1536V| YUV422      | ✅           |
| 9   | SG3S-OX03JC-G2F-Hxxx        | 1920H*1536V| YUV422      | ✅           |
| 10  | SG5-IMX490C-5300-GMSL2-Hxxx | 2880H*1860H| YUV422      | ✅           |
| 11  | SG8S-AR0820C-5300-G2A-Hxxx  | 3840H*2160V| YUV422      | ✅           |
| 12  | SG8-OX08BC-5300-GMSL2-Hxxx  | 3840H*2160V| YUV422      | ✅           |
| 13  | SG8-IMX728C-G2G-Hxxx        | 3840H*2160V| RAW12       | ✅           |

### Hardware Preparation

#### Parts List
| No. | Product model                 | Quantity | Remark                |
|-----|-------------------------------|----------|-----------------------|
| 1   | Power connection wire         | 1        | Standard configuration|
| 2   | CCG3-8H capture card          | 1        | Standard configuration|
| 3   | Fakra one-divided-two switching line | 4 | Standard configuration|
| 4   | Aviation plug turn to network cable | 1 | Standard configuration|
| 5   | GPS connection wire           | 1        | Standard configuration|



#### Follow the steps below to install the product:

1. Connect the GMSL camera to the CCG3-8H using the coaxial cable
2. Insert the CCG3-8H into the PCIe slot of the host computer
3. Connect the power supply to the CCG3-8H
4. Power on the system

<div style={{textAlign: 'center', position: 'relative', width: '95%', paddingBottom: '56.25%', marginBottom: '20px'}}>
  <iframe
    style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%'}}
    src="//player.bilibili.com/player.html?bvid=BV1w6j2z8E16&page=1&high_quality=1&danmaku=0"
    scrolling="no"
    border="0"
    frameBorder="no"
    framespacing="0"
    allowFullScreen="true">
  </iframe>
</div>

---

## Software Preparation

### 1. SDK Download
| Camera | Linux system version | Driver pkg download link | Driver pkg download method |
|------------------------------|-------------------------|---------------------------|-------------------------------|
| GMSL2 Camera (YUV Data)<br/>(e.g.: SG3S-ISX031C-GMSL2-Hxxx) | Ubuntu 18.04/20.04 | [Link](https://github.com/SENSING-Technology/CoaxCapture-CCG3/tree/main/Driver) | Copy the full link address to [DownGit](https://minhaskamal.github.io/DownGit/#/home) to download |


<br />

**Step 2.** Quick Bring Up.<br />
#### 1. Compile the driver

Before using the driver, you need to compile it. The `Driver` directory contains a `Makefile` that can build both the driver and application programs. You can either build the entire project using the top-level `Makefile`, or you can navigate to individual directories and compile them separately.

To build the driver:

```
make
```

If you need to clean the build directory and rebuild from scratch:

```
make clean
make
```

#### 2. Usage Instructions

#### 2.1 Loading the Driver

To load the driver, you need to run the script `load_modules.sh` with administrator privileges. In the `bash` directory, execute the following command:

```
sudo ./load_modules.sh
```

If the driver loads successfully, you will see the following message:

```
Loading Pcie driver...
Pcie driver installed correctly.
Video devices were recognized.
DONE
```

Additionally, video devices and control interface files will be created in the `/dev` directory:

- `/dev/video0`, `/dev/video1`, `/dev/video2`, `/dev/video3` (video devices for each Capture card)
- `/dev/xdma0_bypass`, `/dev/xdma0_control`, `/dev/xdma0_user` (control interface devices for each Capture card)

Note: The numbers (0, 1, 2, etc.) correspond to the Capture card index. For example, `xdma0_bypass` corresponds to the first Capture card, `xdma1_bypass` to the second, and so on.

#### 2.2 Initializing Capture Cards

To initialize the first Capture card and configure the attached camera, use the following command:

```
sudo ./pcie_init_card0.sh
```

If the script fails, you may need to rebuild the driver and applications as described earlier.

#### 2.3 Image Testing

You can test the video stream from your camera using the open-source application `guvcview`. If it's not installed, you can install it with:

```
sudo apt-get install guvcview
```

To test the video streams, run the following commands for each video device:

```
guvcview -d /dev/video0
guvcview -d /dev/video1
```

You should be able to see live video from each connected camera.

#### 3. Configuring Capture Cards

There are two example scripts in this directory: `pcie_init_card0.sh` and `pcie_init_card1.sh`. These scripts are used to initialize Capture cards and configure the attached cameras. You can modify these scripts according to your camera's specifications.

#### Configuration Parameters

In the configuration scripts, the following parameters can be modified to customize the behavior of the Capture cards and cameras.

#### 3.1 Modify Card Number

In the script, the card number is specified at line 10:

```
set_card 0
```

The `0` refers to the first Capture card. Change this value to `1` for the second card, and so on.

#### 3.2 Camera anc config

Lines 27-34 in the script configure whether the camera has ANC (Ancillary) functionality. Set `0` to enable ANC or `1` to disable it. The `x` refers to the interface number (0-7 for the first card, 8-15 for the second card, and so on).

```
camera_anc_enable[x]
```

#### 3.3 Image Output Format

"The lines 38-45 correspond to the camera output format. RAW can be ignored, and incorrect configuration of YUYV or UYVY may cause image display issues.

The first parameter (shown as 0 below) indicates which interface to use. For the first Capture capture card, channels 1 to 8 correspond to 0-7, and for the second Capture capture card, channels 1 to 8 correspond to 8-15.

The second parameter specifies the camera's output image format, which can be either 'YUYV' or 'UYVY'."

```
video_output_yuv_format 0 "UYVY"
```

#### 3.4 Trigger Mode

Configure the trigger mode in the script. The options are:

- `0`: No trigger (master mode only, no external trigger needed).
- `1`: Reserved.
- `2`: Internal trigger (PCIE card triggers the camera at a specified frequency).
- `3`: External trigger (triggered by an external signal).

```
card_trigger_signal_mode       	"2"
```

#### 3.5 External Trigger Configuration

If you use an external trigger, configure the following parameters:

```
card_external_signal_input_fps 	"1" Hz
camera_external_output_fps     	"30" Hz
```

#### 3.6 Internal Trigger Configuration

When the `card_trigger_signal_mode` parameter is set to "2", the frequency of the internally generated trigger signal is configured through the `camera_inner_output_fps` on line 66, with the unit in Hz

```
camera_inner_output_fps        	"30" Hz
```

#### 3.7 Trigger Delay

You can set the trigger delay for each camera:

```
camera_triger_delay[x]=0
```

#### 3.8 Camera Resolution

Configure the resolution for each camera interface (e.g., for interface `0`, set a resolution of `1920x1080`):

```
camera_resolution 0 1920  1080
```

#### 3.9 Camera Initialization

The `camera_serdes_type` parameter initializes the camera sensor, serializer, and deserializer. For example:

```
camera_serdes_type[0]=1
```

Common YUYV or UYVY Configurations

| **Serializer** | ANC  | **Configuration Parameter** |
| -------------- | ---- | --------------------------- |
| MAX96705          | no   | 0                           |
| MAX9295           | no   | 1                           |
| MAX96717F         | no   | 2                           |
| MAX9295           | yes  | 3                           |
| MAX96717F         | yes  | 4                           |

Common RAW or RAW12 Configurations

| **Serializer** | **Sensor Model** | **Configuration Parameter** |
| -------------- | ---------------- | --------------------------- |
| MAX9295           | AR0233           | 102                         |
| MAX9295           | AR0820           | 103                         |
| MAX9295           | IMX390           | 104                         |
| MAX9295           | IMX490           | 105                         |
| MAX9295           | ISX031           | 11                          |
| MAX9295           | IMX728           | 106                         |
| MAX9295           | SC2331AT         | 108                         |
| MAX9295           | OX08D            | 109                         |
| MAX96717F         | IMX623           | 113                         |

## FAQ
<div style={{background: 'var(--ifm-background-color)', borderRadius: '10px', boxShadow: '0 2px 8px rgba(0,0,0,0.08)', padding: '1.2rem', marginBottom: '2rem', fontSize: '1.1em'}}>
For more information, please refer to the <a href="../FAQ/FAQ_CameraGrabber" style={{color: 'var(--ifm-color-primary)', textDecoration: 'underline'}}>FAQ section</a>.
</div>
