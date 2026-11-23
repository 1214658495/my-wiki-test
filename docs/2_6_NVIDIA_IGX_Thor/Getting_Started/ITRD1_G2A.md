---
sidebar_position: 1
---

# ITRD1 G2A


## Overview

<div className="row">
  <div className="col col--12">
    ITRD1 G2A is a Thor development kit that adds GMSL connectivity to the NVIDIA IGX THOR platform, enabling rapid integration of GMSL camera streams. Supports up to four GMSL cameras.
  </div>
</div>


<div style={{textAlign: 'center'}}>
    <img src="https://sgword-service.oss-cn-heyuan.aliyuncs.com/wiki-images/2_6_NVIDIA_IGX_Thor/ITRD1_G2A/ITRD1_G2A.png?x-oss-process=image/format,webp" alt="ITRD1_G2A"
    style={{maxWidth: '50%', height:'auto'}} />
</div>
<br />

<div style={{textAlign: 'center', marginBottom: '2rem'}}>
    <a href="https://www.sensing-world.com/h-pd-344.html" target="_blank" rel="noopener noreferrer"
       style={{backgroundColor: '#f0f0f0', padding: '10px 20px', display: 'inline-block', borderRadius: '5px', textDecoration: 'none'}}>
        <strong style={{color: '#000000', fontSize: '1.2em'}}>Product Page</strong>
    </a>
</div>

## Key Features and Application

<div style={{display: 'flex', flexWrap: 'wrap', gap: '1.5rem', marginBottom: '2rem'}}>
  <div style={{flex: 1, minWidth: 260, background: 'var(--ifm-background-color)', borderRadius: '10px', boxShadow: '0 2px 8px rgba(0,0,0,0.06)', padding: '1rem'}}>
    <strong>Features:</strong><br/>
    • Support NVIDIA IGX THOR Platform <br/>
    • Supported Camera Resolutions: Max 3840*2160 <br/>
    • Supported Camera Output Formats: RAW / YUV422 <br/>
    • Dimensions: L:243.12mm x W:112.4mm x H:56.88mm <br/>
    • Compatible Camera Types: GMSL / GMSL2 <br/>
    • Maximum Supported Cameras: 4 *GMSL <br/>
    • SOC: NVIDIA Jetson T5000 Module <br/>
    • AI Performance: 2070 TFLOPS <br/>
    • Memory: 128 GB 256-bit LPDDR5X
  </div>
  <div style={{flex: 1, minWidth: 260, background: 'var(--ifm-background-color)', borderRadius: '10px', boxShadow: '0 2px 8px rgba(0,0,0,0.06)', padding: '1rem'}}>
    <strong>Application:</strong><br/>
    • Robotics <br/>
    • Industrial <br/>
    • Medical<br/>
    • Inspection
  </div>
</div>

## Getting Started

### Hardware Overview

<div style={{textAlign: 'center', marginBottom: '2rem'}}>
    <img src="https://sgword-service.oss-cn-heyuan.aliyuncs.com/wiki-images/2_6_NVIDIA_IGX_Thor/ITRD1_G2A/ITRD1_G2A_Hardware_Overview.png?x-oss-process=image/format,webp" alt="ITRD1 G2A Hardware Overview" style={{maxWidth: '80%', height: 'auto'}} />
</div>

### Block Diagram

<div style={{textAlign: 'center', marginBottom: '2rem'}}>
    <img src="https://sgword-service.oss-cn-heyuan.aliyuncs.com/wiki-images/2_6_NVIDIA_IGX_Thor/ITRD1_G2A/ITRD1_G2A_Block_Diagram.jpg?x-oss-process=image/format,webp" alt="ITRD1 G2A Block Diagram" style={{maxWidth: '100%', height: 'auto'}} />
</div>

:::note
- The ITRD1 G2A uses **2 MAX96712 deserializers**, each supporting up to 4 camera ports.
- With the current IGX Thor driver package, cameras are connected to the **CN1** ports (CAM4–CAM7), with up to 4 cameras in total.
:::

### Supported Camera List

:::note Camera Compatibility
You may choose the following camera combinations to connect to the ITRD1 G2A.
:::

| Camera Combination | Number of Supported Cameras |
|--------|-------------|
| Comb. 1 | 2 *5MP/30FPS |
| Comb. 2 | 4 *3MP/30FPS |
| Comb. 3 | 1 *5MP/30FPS + 2 *3MP/30FPS |

The camera modules and combinations validated with the driver package `ITRD1_G2A_IGX_THOR_GMSL2x4_IGX2.0_L4TR38.5.0` are as follows:

| Camera Model | Resolution | Output | Interface | Max Devices | Frame Sync |
|---|---|---|---|---:|---|
| Astra S56C | 2560 × 1984 | RAW10 | GMSL2-6G | 1 | MFP7 |
| SHW5G | 2560 × 1984 | RAW10 | GMSL2-6G | 2 | MFP7 |
| SHF3L | 1920 × 1536 | YUV422 | GMSL2-6G | 2 | MFP7 |

| Combination | Cameras | Port Connection |
|---|---|---|
| Combination 1 | S56C ×1 + SHF3L ×2 | S56C: CAM4; SHF3L: CAM6 / CAM7 |
| Combination 2 | S56C ×1 + SHW5G ×2 | S56C: CAM4; SHW5G: CAM6 / CAM7 |

:::caution
The S56C stereo camera occupies two video nodes (`/dev/video0` and `/dev/video1`), so no camera can be connected to CAM5.
:::

:::note IGX Software Version
The current driver package is based on **NVIDIA IGX 2.0 SW** (Jetson Linux **L4T R38.5.0**). The IGX Thor Developer Kit runs IGX OS, which differs from the JetPack releases used on the Jetson AGX Thor Developer Kit, so the TRD1 G2A driver packages cannot be used directly.
:::

### Hardware Preparation

#### Parts List


| Serial number | Product model | Quantity | Remark |
|---|---|---:|---|
| 1 | 940-25160-0081-000-MIPI | 1 | Standard configuration |
| 2 | T4JC-JC-ZZZZ-0500L (Female to Female 0.5m) | 2 | Standard configuration |
| 3 | Trigger Cable | 1 | Standard configuration |
| 4 | Power Conversion Cable | 1 | Standard configuration |
| 5 | Power adapter | 1 | Standard configuration |
| 6 | Multi-functional conversion socket | 1 | optional configuration |


#### Kit Contents

<div style={{textAlign: 'center', marginBottom: '2rem'}}>
    <img src="https://sgword-service.oss-cn-heyuan.aliyuncs.com/wiki-images/2_6_NVIDIA_IGX_Thor/ITRD1_G2A/ITRD1_G2A_Kit_Contents.png?x-oss-process=image/format,webp" alt="ITRD1 G2A Kit Contents" style={{maxWidth: '90%', height: 'auto'}} />
</div>

#### Installation Steps

:::note Quick Setup
1. Connect the GMSL cameras to the CN1 ports of the ITRD1 G2A using the coaxial cable (up to 4 cameras, see the port connection table above)
2. Connect the DC 12V power supply (CN7)
3. Power on the system (IGX Thor)
:::

<div style={{textAlign: 'center', marginBottom: '2rem'}}>
    <img src="https://sgword-service.oss-cn-heyuan.aliyuncs.com/wiki-images/2_6_NVIDIA_IGX_Thor/ITRD1_G2A/ITRD1_G2A_Kit_Contents_Camera.png?x-oss-process=image/format,webp" alt="ITRD1 G2A Camera Connection" style={{maxWidth: '90%', height: 'auto'}} />
</div>


### Software Preparation

#### SDK Download

| IGX Version | Framework | Driver Package | Supported Cameras | Download Link |
|-------------|-----------|----------------|-------------------|---------------|
| IGX 2.0 SW (L4T R38.5.0) | V4L2 | `ITRD1_G2A_IGX_THOR_GMSL2x4_IGX2.0_L4TR38.5.0` | Astra S56C, SHW5G, SHF3L; (S56C ×1 + SHF3L ×2), (S56C ×1 + SHW5G ×2) | [Download](https://github.com/SENSING-Technology/nvidia-igx-camera-drivers/tree/main/IGX%20Thor%20Devkit/ITRD1_G2A_IGX_THOR_GMSL2x4_IGX2.0_L4TR38.5.0) |


:::tip Download Method
Copy the full link address to [DownGit](https://minhaskamal.github.io/DownGit/#/home) to download
:::

#### Quick Bring Up

The main steps are listed below. Please follow the `Readme.md` in the driver package for the complete commands.

1. **Update the bootloader configuration and re-flash**: CAM0_PWDN and CAM1_PWDN are occupied in the original firmware. Copy the files under `source/Linux_for_Tegra/` in the driver package over the corresponding files in `<work_path>/Linux_for_Tegra/bootloader/` of your BSP, then re-flash the device.
2. **Connect the cameras** according to the port connection table above.
3. **Install the driver**: copy the driver package to the IGX Thor (for example `/home/nvidia`), then run:

   ```bash
   cd ITRD1_G2A_IGX_THOR_GMSL2x4_IGX2.0_L4TR38.5.0
   chmod a+x *.sh
   sudo ./install.sh
   ```

4. **Select the camera overlay**: run `sudo /opt/nvidia/jetson-io/jetson-io.py`, select the device tree that matches your camera combination, save and reboot. If the overlay cannot be selected with jetson-io, run `sudo ./update_jetsonio.sh` instead.

   | Combination | Device Tree |
   |---|---|
   | Combination 1 | Jetson Sensing SG8A_AGTH_G2Y_A1 S56Cx1_SHF3Lx2 |
   | Combination 2 | Jetson Sensing SG8A_AGTH_G2Y_A1 S56Cx1_SHW5Gx2 |

5. **Load the modules** after reboot. The device nodes `/dev/video0` to `/dev/video3` are generated:

   ```bash
   sudo ./load_modules.sh
   ```

   | Port | DeviceTree Node | Device Node |
   |---|---|---|
   | CN1 (CAM4) | cam_0 | /dev/video0 |
   | CN1 (CAM5) | cam_1 | /dev/video1 |
   | CN1 (CAM6) | cam_2 | /dev/video2 |
   | CN1 (CAM7) | cam_3 | /dev/video3 |

6. **Bring up the cameras**: RAW cameras (S56C / SHW5G) use `nvargus-daemon` + `argus_camera -d <index>`; YUV cameras (SHF3L) can be previewed with `gst-launch-1.0 v4l2src device=/dev/video2 ! xvimagesink -ev`.
7. **Trigger sync (optional)**: set `trig_mode=1` for each device node in `load_modules.sh`, then use either an external trigger on CN4 (PIN1 CAM-FSYNC1, PIN6 GND, 3.3V, e.g. 30 Hz) or the PWM trigger generated by IGX Thor. See the Readme for the exact parameters.

:::tip Driver package notes
Each driver package contains its own `Readme.md` (bring-up steps) and `Version.md` (change log). Please follow the Readme of the package you download.
:::
