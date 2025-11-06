---
sidebar_position: 1
---

# HSBKITxM


## Overview

<div className="row">
  <div className="col col--12">
    HSBKITxM (Holoscan Sensor Bridge) provides a FPGA based interface for low-latency sensor data
processing using GPUs. Peripheral device data is acquired by the FPGA and sent via UDP
to the host system where ConnectX devices can write that UDP data directly into GPU
memory. 
This software package based on nvidia official HSB v2.2.1 package and add supports for SENSING HSB cameras with 
[Lattice Holoscan Sensor Bridge device](https://www.latticesemi.com/products/developmentboardsandkits/certuspro-nx-sensor-to-ethernet-bridge-board).
  </div>
</div>


<div style={{textAlign: 'center'}}>
    <img src="https://raw.githubusercontent.com/1214658495/myWikiFiles/main/2_5_NVIDIA_Holoscan_Sensor_Bridge/Sensing-HSBKIT01.png" alt="Sensing-HSBKIT01" 
    style={{maxWidth: '50%', height:'auto'}} />
</div>
<br />

<!-- <div style={{textAlign: 'center', marginBottom: '2rem'}}>
    <a href="https://sensing-world.com/en/RedFoxD3Gx.html?fromMid=1544#recommendFromPid=0" target="_blank" rel="noopener noreferrer" 
       style={{backgroundColor: '#f0f0f0', padding: '10px 20px', display: 'inline-block', borderRadius: '5px', textDecoration: 'none'}}>
        <strong style={{color: '#000000', fontSize: '1.2em'}}>Buy Now</strong>
    </a>
</div> -->

## Key Features and Application

<div style={{display: 'flex', flexWrap: 'wrap', gap: '1.5rem', marginBottom: '2rem'}}>
  <div style={{flex: 1, minWidth: 500, background: 'var(--ifm-background-color)', borderRadius: '10px', boxShadow: '0 2px 8px rgba(0,0,0,0.06)', padding: '1rem'}}>
    <strong>Features:</strong><br/>
    • Support Nvidia Holoscan Sensor Bridge（HSB） Platform <br/>
    • Output  Pixel：Max 3840*2160 <br/>
    • Support different focal length lens <br/>
    • Output format: RAW/YUV422 <br/>
    • Allow customization <br/>
    • Dimensions ：L:185mm x W:77mm x H:41mm <br/>
    • Compatible with AGX Thor and AGX Orin <br/>
  </div>
  <div style={{flex: 1, minWidth: 200, background: 'var(--ifm-background-color)', borderRadius: '10px', boxShadow: '0 2px 8px rgba(0,0,0,0.06)', padding: '1rem'}}>
    <strong>Application:</strong><br/>
    • Industrial <br/>
    • Robotics <br/>
    • Medical<br/>
    • Inspection
  </div>
</div>

## Getting Started

<!-- ### Specification

<div className="row">
  <div className="col col--6">
    :::note Basic Info
    - Model: SG8A-AGON-G2Y-A1
    - Dimension: 86.9mm * 55mm * 21.8mm
    - Weight: 50g
    - Connector: 1x120Pin High-density
    - Camera input: Camera*8(GMSL2/GMSL)
    - Trigger In: 6Pin Sync In
    :::
  </div>
  <div className="col col--6">
    :::note Technical Specs
    - Deserializer: MAXIM(ADI) MAX96712*2
    - Camera Connector: Fakra Z Code
    - POC Power Supply: DC 9-16V
    - DC Power Supply: DC 12V
    - Operating Conditions: -20°C to +70°C
    - Adaptation kit: Jetson AGX Orin
    :::
  </div>
</div> -->

### Hardware Overview

<div style={{textAlign: 'center', marginBottom: '2rem'}}>
    <img src="https://raw.githubusercontent.com/1214658495/myWikiFiles/main/2_5_NVIDIA_Holoscan_Sensor_Bridge/HSBKIT2M.png" alt="HSBKIT2M" style={{maxWidth: '80%', height: 'auto'}} />
    <p><em>Figure 1: HSBKIT2M</em></p>
</div>

<!-- <div style={{textAlign: 'center', marginBottom: '2rem'}}>
    <img src="https://raw.githubusercontent.com/1214658495/myWikiFiles/main/Nvidia_jetson/SG8A-AGON-G2Y-A1/SG8A-AGON-G2Y-A1_Hardware_Overview2.png" alt="SG8A-AGON-G2Y-A1-overview2" style={{maxWidth: '40%', height: 'auto'}} />
</div> -->

<!-- ### Block Diagram -->

<!-- :::caution Attention
（1）The coaxial power supply is shared, but each GMSL line has its own filter.
::: -->

<!-- <div style={{textAlign: 'center', marginBottom: '2rem'}}>
    <img src="https://raw.githubusercontent.com/1214658495/myWikiFiles/main/2_3_NVIDIA_Jetson_AGX_Thor/TRD1_G2A_Block_Diagram.png" alt="TRD1 G2A Block Diagram" style={{maxWidth: '80%', height: 'auto'}} />
</div> -->

### Recommended Package

:::note HSB KIT PURCHASE LIST 
You may choose the following Product model
:::

<!-- | Product model  | Parts  | Camera Key features |
|--------|-------------|---------------|
| SENSING-HSBKIT2M | Holoscan Sensor Bridge Kit *1pcs <br/> SG8-IMX678C-MIPI-H80K *2pcs | 8MP_MIPI RAW Camera（Rolling shutter） |
| SENSING-HSBKIT4M | Holoscan Sensor Bridge Kit *1pcs <br/> SG8-IMX678C-MIPI-H80K *2pcs <br/> SG2-AR0234C-MIPI-H60F *2pcs| 8MP_MIPI RAW Camera（Rolling shutter）<br/> 2MP_MIPI RAW Camera（Global shutter） |
| SENSING-HSBKIT6M | Holoscan Sensor Bridge Kit *1pcs <br/> SG8-IMX678C-MIPI-H80K *2pcs <br/> SG2-AR0234C-MIPI-H60F *2pcs <br/> SG3-ISX031C-MIPI-H100F1 *2pcs| 8MP_MIPI RAW Camera（Rolling shutter）<br/> 2MP_MIPI RAW Camera（Global shutter） <br/> 3MP_MIPI RAW Camera（Rolling shutter） | -->

<!-- | Product model  | Parts  | Camera Key features | Product Image |
|--------|-------------|---------------|---------------|
| SENSING-HSBKIT2M | Holoscan Sensor Bridge Kit *1pcs <br/> SG8-IMX678C-MIPI-H80K *2pcs | 8MP_MIPI RAW Camera（Rolling shutter） | [View Image](https://raw.githubusercontent.com/1214658495/myWikiFiles/main/2_5_NVIDIA_Holoscan_Sensor_Bridge/HSBKIT2M.png) |
| SENSING-HSBKIT4M | Holoscan Sensor Bridge Kit *1pcs <br/> SG8-IMX678C-MIPI-H80K *2pcs <br/> SG2-AR0234C-MIPI-H60F *2pcs| 8MP_MIPI RAW Camera（Rolling shutter）<br/> 2MP_MIPI RAW Camera（Global shutter） | [View Image](https://raw.githubusercontent.com/1214658495/myWikiFiles/main/2_5_NVIDIA_Holoscan_Sensor_Bridge/HSBKIT4M.png) |
| SENSING-HSBKIT6M | Holoscan Sensor Bridge Kit *1pcs <br/> SG8-IMX678C-MIPI-H80K *2pcs <br/> SG2-AR0234C-MIPI-H60F *2pcs <br/> SG3-ISX031C-MIPI-H100F1 *2pcs| 8MP_MIPI RAW Camera（Rolling shutter）<br/> 2MP_MIPI RAW Camera（Global shutter） <br/> 3MP_MIPI RAW Camera（Rolling shutter） | [View Image](https://raw.githubusercontent.com/1214658495/myWikiFiles/main/2_5_NVIDIA_Holoscan_Sensor_Bridge/HSBKIT6M.png) | -->



<!-- | Product model  | Parts  | Camera Key features | Product Image |
|--------|-------------|---------------|---------------|
| SENSING-HSBKIT2M | Holoscan Sensor Bridge Kit *1pcs <br/> SG8-IMX678C-MIPI-H80K *2pcs | 8MP_MIPI RAW Camera（Rolling shutter） | ![SENSING-HSBKIT2M](https://raw.githubusercontent.com/1214658495/myWikiFiles/main/2_5_NVIDIA_Holoscan_Sensor_Bridge/HSBKIT2M.png) |
| SENSING-HSBKIT4M | Holoscan Sensor Bridge Kit *1pcs <br/> SG8-IMX678C-MIPI-H80K *2pcs <br/> SG2-AR0234C-MIPI-H60F *2pcs| 8MP_MIPI RAW Camera（Rolling shutter）<br/> 2MP_MIPI RAW Camera（Global shutter） | ![SENSING-HSBKIT4M](https://raw.githubusercontent.com/1214658495/myWikiFiles/main/2_5_NVIDIA_Holoscan_Sensor_Bridge/HSBKIT4M.png) |
| SENSING-HSBKIT6M | Holoscan Sensor Bridge Kit *1pcs <br/> SG8-IMX678C-MIPI-H80K *2pcs <br/> SG2-AR0234C-MIPI-H60F *2pcs <br/> SG3-ISX031C-MIPI-H100F1 *2pcs| 8MP_MIPI RAW Camera（Rolling shutter）<br/> 2MP_MIPI RAW Camera（Global shutter） <br/> 3MP_MIPI RAW Camera（Rolling shutter） | ![SENSING-HSBKIT6M](https://raw.githubusercontent.com/1214658495/myWikiFiles/main/2_5_NVIDIA_Holoscan_Sensor_Bridge/HSBKIT6M.png) | -->


| Product model  | Parts  | Camera Key features | Product Image |
|--------|-------------|---------------|---------------|
| SENSING-HSBKIT2M | Holoscan Sensor Bridge Kit *1pcs <br/> SG8-IMX678C-MIPI-H80K *2pcs | 8MP_MIPI RAW Camera（Rolling shutter） | <img src="https://raw.githubusercontent.com/1214658495/myWikiFiles/main/2_5_NVIDIA_Holoscan_Sensor_Bridge/Sensing-HSBKIT01.png" alt="SENSING-HSBKIT2M" width="200" /> |
| SENSING-HSBKIT4M | Holoscan Sensor Bridge Kit *1pcs <br/> SG8-IMX678C-MIPI-H80K *2pcs <br/> SG2-AR0234C-MIPI-H60F *2pcs| 8MP_MIPI RAW Camera（Rolling shutter）<br/> 2MP_MIPI RAW Camera（Global shutter） | <img src="https://raw.githubusercontent.com/1214658495/myWikiFiles/main/2_5_NVIDIA_Holoscan_Sensor_Bridge/HSBKIT4M.png" alt="SENSING-HSBKIT4M" width="200" /> |
| SENSING-HSBKIT6M | Holoscan Sensor Bridge Kit *1pcs <br/> SG8-IMX678C-MIPI-H80K *2pcs <br/> SG2-AR0234C-MIPI-H60F *2pcs <br/> SG3-ISX031C-MIPI-H100F1 *2pcs| 8MP_MIPI RAW Camera（Rolling shutter）<br/> 2MP_MIPI RAW Camera（Global shutter） <br/> 3MP_MIPI RAW Camera（Rolling shutter） | <img src="https://raw.githubusercontent.com/1214658495/myWikiFiles/main/2_5_NVIDIA_Holoscan_Sensor_Bridge/HSBKIT6M.png" alt="SENSING-HSBKIT6M" width="200" /> |

<!-- :::note JetPack Versions
NVIDIA JetPack (<strong style={{ color: 'var(--ifm-color-primary-light)' }}>Jetpack 7.0</strong> ) is the official software development kit (SDK) for the Jetson series of development boards. It includes the operating system, drivers, CUDA, cuDNN, TensorRT, and other development tools and libraries. Each JetPack version typically corresponds to a specific Jetson Linux version (formerly known as L4T - Linux for Tegra). 
- 36.4.3: L4T R36.4.3 (Jetpack 6.2)
- 36.4: L4T R36.4 (Jetpack 6.1)
- 36.3: L4T R36.3 (Jetpack 6.0)
- 35.4.1: L4T R35.4.1 (Jetpack 5.1.2)

For more information, visit [NVIDIA's official Jetson Download Center](https://developer.nvidia.com/embedded/jetpack-archive).
::: -->

### Hardware Preparation

#### Parts List（only for HSBKIT2M）

| Serial number | Product model | Quantity | Remark |
|---|---|---:|---|
| 1 | Holoscan Sensor Bridge Kit  | 1 | up to 2 cameras at most |
| 2 | SG2A-HOLOSCAN-MIPI-A1 | 1 | Standard configuration |
| 3 | SG8-IMX678C-MIPI-H80K | 2 | Standard configuration |
| 4 | FPC_0.5mm_L-50mm | 2 | Standard configuration |
| 5 | M2.5*5 | 2 | Standard configuration |
| 6 | MPO to LC 10-Gigabit 1-to-4 Fiber Optic | 1 | Standard configuration |
| 7 | QSFP-100G Multimode Optical Transceiver Module | 1 | Standard configuration |
| 8 | 10-Gigabit Multimode Dual-Fiber Optical Transceiver Module | 2 | Standard configuration |
| 9 | Power adapter | 1 | Standard configuration |
| 10| Type-c data cable | 1 | Standard configuration |
| 11| JETSON AGX THOR DK | 1 | optional configuration |

<br />

<div style={{display: 'flex', justifyContent: 'center'}}>

| **Parameter** | **Specification** |
|---------------|-------------------|
| **Sensor** | SONY 8.29MP IMX678 RGGB |
| **ISP** | - |
| **Image Size** | 1/1.8 inch CMOS |
| **Output Pixels** | 3840H*2160V |
| **Frame Rate** | MAX 60fps |
| **Pixel Size** | 2.0μm × 2.0μm |
| **HDR Support** | Yes |
| **Output Data** | MIPI/RAW@10bit/12bit |
| **Power Supply** | 3.3V |
| **Current** | < 300mA @3.3VDC |
| **Camera Interface** | FPC |
| **Connector** | FH67-30S-0.5SV |
| **Operating Temperature Range** | -30°~+85°C |
| **Dimensions** | W: 20mm, L:35mm, H:25mm |
| **EFL** | 4.0mm |
| **F/NO** | 2.6 |
| **Optical Distortion** | 88% |
| **Field of View (FOV)** | HFOV76°/VFOV42° |
| **Lens Mount** | M12xP0.5（Supports the assembly of different lens） |
| **Weight** | < 50g |

</div>

<div style={{textAlign: 'center'}}>
    <p><em>SG8-IMX678C-MIPI-H80K Specification</em></p>
</div>


#### HSBKIT2M Kit Contents

<div style={{textAlign: 'center', marginBottom: '2rem'}}>
    <img src="https://raw.githubusercontent.com/1214658495/myWikiFiles/main/2_5_NVIDIA_Holoscan_Sensor_Bridge/HSB_Accessories_for_AGX_Thor.png" alt="TRD1 G2A Kit Contents" style={{maxWidth: '80%', height: 'auto'}} />
    <p><em>Figure 2: HSB Accessories for AGX Thor</em></p>
</div>

#### Installation Steps

:::note Quick Setup
1. Connect HSB MIPI Camera Onto Holoscan Sensor Bridge Board
2. Connect all to Jetson AGX Orin Devkit or Jetson AGX Thor Devkit
3. Connect the power supply(DC 12V)
4. Boot system and Bringup camera
:::

<div style={{textAlign: 'center', position: 'relative', width: '95%', paddingBottom: '56.25%', marginBottom: '2rem'}}>
    <iframe
        style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%'}}
        src="//player.bilibili.com/player.html?bvid=BV1cqazzVEc7&page=1&high_quality=1&danmaku=0"
        scrolling="no"
        border="0"
        frameBorder="no"
        framespacing="0"
        allowFullScreen="true">
    </iframe>
</div>
<!-- <div style={{textAlign: 'center', marginBottom: '2rem'}}>
    <img src="https://raw.githubusercontent.com/1214658495/myWikiFiles/main/2_3_NVIDIA_Jetson_AGX_Thor/TRD1_G2A_Kit_Contents_Camera.png" alt="TRD1 G2A Camera Connection" style={{maxWidth: '90%', height: 'auto'}} />
</div> -->


### Software Preparation

#### SDK Download

:::note SDK Packages
Select the appropriate SDK package based on your operating system and CIG4-8H hardware version:
:::

| Download Link | Download Tool |
|---------------|---------------|
| [SDKDownload](https://github.com/SENSING-Technology/Holoscan-Sensor-Bridge) | [DownGit](https://minhaskamal.github.io/DownGit/#/home) |

:::tip Download Tool Usage
**DownGit** allows you to download specific folders or files from GitHub repositories without cloning the entire repository:
1. Copy the GitHub repository URL from the "Download Link" column
2. Open [DownGit](https://minhaskamal.github.io/DownGit/#/home) in your browser
3. Paste the repository URL into the input field
4. Click "Download" to get a ZIP file containing the SDK
5. Extract the ZIP file to your desired location

This method is particularly useful when you only need the SDK files without the full Git history.
:::

#### Quick Bring Up

<!-- :::note System Update
We can use NVIDIA SDK Manager Linux Software or directly use the NVIDIA Linux Driver Package via Linux command line to flash JetPack OS into the NVIDIA Jetson device. For beginners, we highly recommend NVIDIA SDK Manager.
::: -->


    - Please first complete the "Host Setup" described on [extensive user guide](https://docs.nvidia.com/holoscan/sensor-bridge/latest/)
    - Clone this software package onto device
    - Enter the software package path and execute the command "sh docker/build.sh -igpu" to build the Holoscan Sensor Bridge container
    - Execute the following command at the device terminal to getinto the demo container
        ```
        xhost +
        sh docker/demo.sh
        ```
    - Execute the following command to bringup SENSING MIPI Camera
        
        - For sg2_ar0234c_mipi
            ```
            python3 examples/linux_sg2_ar0234c_mipi_player.py 
            ```
        - For sg3_isx031c_mipi
            
            *note* : only capturing image data and saving pictures are supported, and pictures will save to "captured_images" folder
            ```
            python3 examples/linux_sg3_isx031c_mipi_capture.py
            ```
        - For sg8_imx678c_mipi
            ```
            python3 examples/linux_sg8_imx678c_mipi_player.py
            ```

<br />


<!-- ## Accessories

### FPC Cable Options

The SG2-IMX662C-MIPI supports two FPC cable types for different connection requirements:

<div style={{textAlign: 'center', marginBottom: '1rem'}}>
    <img src="https://raw.githubusercontent.com/1214658495/myWikiFiles/main/Camera/mipi_csi_camera/mipi_csi_camera_FPC.png" alt="FPC Cable Options" 
    style={{maxWidth: '70%', height:'auto'}} />
</div> -->




## FAQ

<!-- For details, please click [here](../../../FAQ/FAQ_jetson) -->
