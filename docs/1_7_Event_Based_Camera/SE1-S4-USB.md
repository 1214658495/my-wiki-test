---
sidebar_position: 1
title: SE1-S4-USB
---

# SE1-S4-USB

## Overview

<div className="row">
  <div className="col col--12">
    SE1-S4-USB is an EVS camera jointly developed by SENSING ,PROPHESEE and Sony. The camera uses SONY IMX646 EVS image sensor and outputs USB3.0 interface. It is fully compatible with MetaVision software and is widely used in industrial detection, auxiliary driving and aviation fields.
  </div>
</div>


<div style={{textAlign: 'center'}}>
    <img src="https://raw.githubusercontent.com/1214658495/myWikiFiles/main/Camera/1_7_Event_Based_Camera/Event_Based_Camera.png" alt="Event_Based_Camera" 
    style={{maxWidth: '30%', height:'auto'}} />
</div>
<br />

<div style={{textAlign: 'center', marginBottom: '2rem'}}>
    <a href="https://sensing-world.com/en/h-col-133.html" target="_blank" rel="noopener noreferrer" 
       style={{backgroundColor: '#f0f0f0', padding: '10px 20px', display: 'inline-block', borderRadius: '5px', textDecoration: 'none'}}>
        <strong style={{color: '#000000', fontSize: '1.2em'}}>Learn More</strong>
    </a>
</div>

## Technical Specifications

### Key Features

| Characteristic | Value |
|----------------|-------|
| Sensor          | Sony  IMX646 (HD)     |
| Image Size        | 1/2.5 inch CMOS     |
| Resolution (px) | 1280 x 720 |
| Pixel size (μm) | 4.86 x 4.86 |
| Interface (data output) | USB 3.0 |
| Latency (μs) | 800 μs @ 1000lux | 
| Camera Max. Bandwidth (Gbps) | 1.6 |
| Trigger In | 4Pin Connector |
| Dynamic Range (dB) | > 110* | 
| Camera power (W) | < 3 |
| Sync In/Out | 4Pin Connector |
| Nominal contrast threshold (%) | 25 | 
| Readout throughput | 20Mevents/s (default, setting changeable) |
| Part number | SE1-S4-USB-HxxxC<br/>SE1-S4-USB-HxxxM<br/>xxx is HFOV, C is CS mount of lens, M is M12 mount of lens |
| Dimensions | 35mm x 35mm x 35mm |
| Weight | 80g (excl. optic) |
| DFOV | Please consult the manufacturer for details |
| VFOV | Please consult the manufacturer for details |
| Power | Via USB |

\*5 lux is the minimum light condition that guarantees imaging characteristics.  
DR >120 dB can be reached based on low light cutoff measurement being: 0.08 lux (imaging characteristics not guaranteed).


### Physical Dimensions

<div style={{textAlign: 'center'}}>
    <img src="https://raw.githubusercontent.com/1214658495/myWikiFiles/main/Camera/1_7_Event_Based_Camera/SE1-S4-USB-HxxxM.png" alt="SE1-S4-USB Dimensions" 
    style={{maxWidth: '100%', height:'auto'}} />
    <p>SE1-S4-USB-HxxxM</p>
</div>

<div style={{textAlign: 'center'}}>
    <img src="https://raw.githubusercontent.com/1214658495/myWikiFiles/main/Camera/1_7_Event_Based_Camera/SE1-S4-USB-HxxxC.png" alt="SE1-S4-USB Dimensions" 
    style={{maxWidth: '100%', height:'auto'}} />
    <p>SE1-S4-USB-HxxxC</p>
</div>


## Model and Lens Options

<div style={{display: 'flex', justifyContent: 'left'}}>

| Part Number    | Model               | HFOV | VFOV | F.No | EFL  | Lens Interface |
|----------------|---------------------|------|------|------|------|---------------|
| 190300-0003    | SE1-S4-USB-H70FM    | 66   | 35   | F1.6 | 5.8  | M12           |
| 190300-0002    | SE1-S4-USB-H110FM   | 110  | 58   | F1.6 | 3.55 | M12           |
| 190300-0601    | SE1-S4-USB-H130LM   | 131  | 72   | F2.8 | 2.8  | M12           |
| 190300-0005    | SE1-S4-USB-H40LC    | 44   | 25   | F1.8 | 8    | CS            |
| 190300-0004    | SE1-S4-USB-H130LC   | 134  | 72   | F2.0 | 2.6  | CS            |

</div>

## Hardware Integration

<!-- ### System Architecture

<div style={{textAlign: 'center'}}>
    <img src="https://raw.githubusercontent.com/1214658495/myWikiFiles/main/Camera/1_7_Event_Based_Camera/SE1-S4-USB_Block_Diagram.png" alt="SE1-S4-USB Block Diagram" 
    style={{maxWidth: '100%', height:'auto'}} />
</div> -->

### 4-Pin Connector Definitions

<div style={{textAlign: 'center'}}>
    <img src="https://raw.githubusercontent.com/1214658495/myWikiFiles/main/Camera/1_7_Event_Based_Camera/EVS_Back_View.png" alt="SE1-S4-USB Back View" 
    style={{maxWidth: '40%', height:'auto'}} />
    <p>Back View</p>
</div>

<div style={{display: 'flex', justifyContent: 'center'}}>

| No. | Color  | Definition           | I/O   | Voltage | Remark                                                           |
|-----|--------|---------------------|-------|---------|------------------------------------------------------------------|
| 1   | Red    | External Trigger    | INPUT | 3.3V    | The external trigger function outputs the timing when the EXTRIG pin changes to High or Low as an event to the outside with a time stamp. |
| 2   | Yellow | Clock Synchronization | I/O   | 3.3V    | Timestamp clock synchronization                                   |
| 3   | Black  | GND                 | GND   | /       |                                                                  |
| 4   | White  | Pixel Matrix Reset  | INPUT | 3.3V    | The pixel reset function resets the pixels with changed brightness |

</div>


## Installation Guide

### Quick Setup
<div style={{textAlign: 'center'}}>
    <img src="https://raw.githubusercontent.com/1214658495/myWikiFiles/main/Camera/1_7_Event_Based_Camera/EVS_Installation_Jetson.png" alt="SE1-S4-USB Installation on Jetson" 
    style={{maxWidth: '50%', height:'auto'}} />
    <p>Example: SE1-S4-USB Installation on NVIDIA Jetson</p>
</div>

:::note Installation Steps
1. Connect the USB cable to the SE1-S4-USB
2. Mount the camera onto the NVIDIA Jetson Orin Nano/NX Developer Kit
3. Power on the system and configure software drivers
:::

<!-- <div style={{textAlign: 'center'}}>
    <img src="https://raw.githubusercontent.com/1214658495/myWikiFiles/main/Camera/1_7_Event_Based_Camera/EVS_Installation_Jetson.png" alt="SE1-S4-USB Installation on Jetson" 
    style={{maxWidth: '40%', height:'auto'}} />
    <p>SE1-S4-USB Installation on Jetson</p>
</div> -->

## Software & Driver Support

### Getting Started

To get started with your SE1-S4-USB event-based camera, follow these integration guides:

<!-- - [Getting Started Guide](./Getting_Started/index.md) -->
- [NVIDIA Jetson Platform Integration](./Getting_Started/NVIDIA_Jetson_Platform_Integration.md)
- [Window System Integration](./Getting_Started/Window_System_Integration.md)
- [Ubuntu System Integration](./Getting_Started/Ubuntu_System_Integration.md)

<!-- :::tip
- All product pages feature downloadable datasheets, 3D models, and SerDes configuration files
- All cameras support GMSL/GMSL2 protocol for reliable high-speed data transmission
- Table supports horizontal scrolling for better viewing on mobile devices
::: -->


## Accessories

<!-- ### Camera Mount Adapters -->

<div style={{textAlign: 'center', marginBottom: '1rem'}}>
    <img src="https://raw.githubusercontent.com/1214658495/myWikiFiles/main/Camera/1_7_Event_Based_Camera/CS_to_M12mount.png" alt="CS to M12mount" 
    style={{maxWidth: '20%', height:'auto'}} />
</div>

<div style={{display: 'flex', justifyContent: 'center'}}>

| Part Number | Description | Quantity |
|------------|-------------|-----------|
| 311060-0055 | CS to M12mount | 1 |

</div>

<div style={{textAlign: 'center', marginBottom: '1rem'}}>
    <img src="https://raw.githubusercontent.com/1214658495/myWikiFiles/main/Camera/1_7_Event_Based_Camera/EVS_tripod_mounting.png" alt="EVS Tripod Mounting" 
    style={{maxWidth: '20%', height:'auto'}} />
</div>

<div style={{display: 'flex', justifyContent: 'center'}}>

| Part Number | Description | Quantity |
|------------|-------------|-----------|
| 311099-0019 | EVS tripod mounting bracket | 1 |
| 311070-0049 | M3*8 hexagon socket head cap screws | 2 |

</div>

