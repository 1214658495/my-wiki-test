---
sidebar_position: 2
title: SG3S11AFSK (3MP HDR 30fps)
---

# SG3S11AFSK (3MP HDR 30fps)

## Overview

SG3S11AFSK is the 196° horizontal field-of-view model in the SG3S11AFxK family. It combines a Sony ISX031 sensor with a built-in ISP and a MAX96717F serializer to deliver uncompressed 8-bit YUV422 at 1920(H) × 1536(V) and 30fps over GMSL2. It supports HDR, LED flicker mitigation (LFM), external triggering, and multi-camera synchronization.

[SG3S11AFxK series datasheet](/pdf-viewer?file=datasheet/huojiaDatasheet/SG3S11AFxK.pdf)

## Specifications

| Parameter | Value |
|---|---|
| Sensor | Sony ISX031, 2.95MP RGGB, 1/2.42-inch CMOS |
| Pixel size | 3.0 × 3.0µm |
| Output resolution and frame rate | 1920(H) × 1536(V) @ 30fps |
| Output format | Uncompressed YUV422, 8bit |
| ISP | Built-in |
| HDR / LFM | Supported |
| Optical resolution | Center ≥800 LW/PH |
| Serializer and link | MAX96717F, GMSL2 at 3Gbps |
| Power supply | 9–16V PoC, &lt;200mA at 12V DC |
| Connector | Amphenol Fakra Z code |
| Operating temperature | −40 to +85°C |
| Enclosure protection | IP67 |
| Footprint / weight | 25 × 25mm / &lt;50g |

> **Note**　The datasheet confirms compliance with the center optical resolution criterion only.

## Lens and Mechanical Dimensions

| HFOV / VFOV | F-number | EFL | Focus distance | Depth of field | Max. optical distortion | Lens protection / assembly |
|---|---|---|---|---|---|---|
| 196° / 154° | 2.0 | 1.51mm | 0.4m | 0.13m to infinity | −155% | IP67 / active alignment (AA) |

The [SG3S11AFSK mechanical drawing on page 6](https://sgword-service.oss-cn-heyuan.aliyuncs.com/datasheet/huojiaDatasheet/SG3S11AFxK.pdf#page=6) shows the front, side and rear views, orientation mark, and mounting dimensions.

## Hardware and Integration

| Function | Setting |
|---|---|
| Serializer I2C address | `0x80` (8bit) |
| Sensor/ISP I2C address | `0x34` (8bit) |
| Frame synchronization | MAX96717F MFP7 |
| Sensor reset | MAX96717F MFP0 |
| Sensor error signal | MAX96717F MFP5 |

The built-in ISP outputs YUV. Configure the host SerDes for a 3Gbps GMSL2 link and an 8-bit YUV422 stream. The [system block diagram on page 3](https://sgword-service.oss-cn-heyuan.aliyuncs.com/datasheet/huojiaDatasheet/SG3S11AFxK.pdf#page=3) shows the CSI-2, PoC and control signal paths.

## Camera Usage

### NVIDIA Jetson Integration

SG3S11AFSK uses GMSL2 at 3Gbps and outputs 1920(H) × 1536(V) @ 30fps in YUV422 (UYVY). Some packages list it under the `SG3S11AFxK` series. Select the package for your board, JetPack version and capture interface.

| Jetson platform | Adapter / carrier board | JetPack | Interface | Driver and installation guide |
|---|---|---|---|---|
| Jetson AGX Orin | [SG8A-AGON-G2Y-A1](/docs/2_1_NVIDIA_Jetson/Getting_Started/NVIDIA_Jetson_AGX_Orin/GMSL_adapter_board/SG8A-AGON-G2Y-A1) | 6.2 | V4L2 | [Driver package](https://github.com/SENSING-Technology/nvidia-jetson-camera-drivers/tree/main/Jetson%20AGX%20Orin%20Devkit/SG8A-AGON-G2Y-A1/JetPack6.2/SG8A_AGON_G2Y_A1_AGX_Orin_GMSL2x8_JP6.2_L4TR36.4.3) · [Installation guide](https://github.com/SENSING-Technology/nvidia-jetson-camera-drivers/blob/main/Jetson%20AGX%20Orin%20Devkit/SG8A-AGON-G2Y-A1/JetPack6.2/SG8A_AGON_G2Y_A1_AGX_Orin_GMSL2x8_JP6.2_L4TR36.4.3/Readme_yuv_raw.md) |
| Jetson AGX Orin | [SG8A-AGON-G2Y-A1](/docs/2_1_NVIDIA_Jetson/Getting_Started/NVIDIA_Jetson_AGX_Orin/GMSL_adapter_board/SG8A-AGON-G2Y-A1) | 6.2.1 | V4L2 | [Driver package](https://github.com/SENSING-Technology/nvidia-jetson-camera-drivers/tree/main/Jetson%20AGX%20Orin%20Devkit/SG8A-AGON-G2Y-A1/JetPack6.2.1/SG8A_AGON_G2Y_A1_AGX_Orin_GMSL2x8_JP6.2.1_L4TR36.4.4) · [Installation guide](https://github.com/SENSING-Technology/nvidia-jetson-camera-drivers/blob/main/Jetson%20AGX%20Orin%20Devkit/SG8A-AGON-G2Y-A1/JetPack6.2.1/SG8A_AGON_G2Y_A1_AGX_Orin_GMSL2x8_JP6.2.1_L4TR36.4.4/Readme.md) |
| Jetson AGX Orin | [SG8A-AGON-G2Y-A1](/docs/2_1_NVIDIA_Jetson/Getting_Started/NVIDIA_Jetson_AGX_Orin/GMSL_adapter_board/SG8A-AGON-G2Y-A1) | 7.2 | V4L2 | [Driver package](https://github.com/SENSING-Technology/nvidia-jetson-camera-drivers/tree/main/Jetson%20AGX%20Orin%20Devkit/SG8A-AGON-G2Y-A1/JetPack7.2/SG8A_AGON_G2Y_A1_AGX_Orin_GMSL2x8_JP7.2_L4TR39.2) · [Installation guide](https://github.com/SENSING-Technology/nvidia-jetson-camera-drivers/blob/main/Jetson%20AGX%20Orin%20Devkit/SG8A-AGON-G2Y-A1/JetPack7.2/SG8A_AGON_G2Y_A1_AGX_Orin_GMSL2x8_JP7.2_L4TR39.2/Readme_yuv_raw.md) |
| Jetson AGX Orin | [SG8A-AGON-G2Y-A1](/docs/2_1_NVIDIA_Jetson/Getting_Started/NVIDIA_Jetson_AGX_Orin/GMSL_adapter_board/SG8A-AGON-G2Y-A1) | 7.2 | SIPL | [Driver package](https://github.com/SENSING-Technology/nvidia-jetson-camera-drivers/tree/main/Jetson%20AGX%20Orin%20Devkit/SG8A-AGON-G2Y-A1/JetPack7.2/SG8A_AGON_G2Y_A1_AGX_ORIN_SIPL_JP7.2_L4TR39.2) · [Installation guide](https://github.com/SENSING-Technology/nvidia-jetson-camera-drivers/blob/main/Jetson%20AGX%20Orin%20Devkit/SG8A-AGON-G2Y-A1/JetPack7.2/SG8A_AGON_G2Y_A1_AGX_ORIN_SIPL_JP7.2_L4TR39.2/Readme.md) |
| Jetson AGX Orin | SG10A-AGON-G2M-A4 | 7.2 | V4L2 | [Driver package](https://github.com/SENSING-Technology/nvidia-jetson-camera-drivers/tree/main/Jetson%20AGX%20Orin%20Devkit/SG10A-AGON-G2M-A4/JetPack7.2/SG10A_AGON_G2M_A4_AGX_ORIN_GMSL2x10_JP7.2_L4TR39.2) · [Installation guide](https://github.com/SENSING-Technology/nvidia-jetson-camera-drivers/blob/main/Jetson%20AGX%20Orin%20Devkit/SG10A-AGON-G2M-A4/JetPack7.2/SG10A_AGON_G2M_A4_AGX_ORIN_GMSL2x10_JP7.2_L4TR39.2/Readme.md) |
| Jetson AGX Thor | [TRD1 G2A](/docs/2_4_NVIDIA_Jetson_AGX_Thor/Getting_Started/TRD1_G2A) | 7.2 | SIPL | [Driver package](https://github.com/SENSING-Technology/nvidia-jetson-camera-drivers/tree/main/Jetson%20AGX%20Thor%20Devkit/TRD1_G2A/JetPack7.2/TRD1_G2A_AGX_THOR_SIPL_JP7.2_L4TR39.2) · [Installation guide](https://github.com/SENSING-Technology/nvidia-jetson-camera-drivers/blob/main/Jetson%20AGX%20Thor%20Devkit/TRD1_G2A/JetPack7.2/TRD1_G2A_AGX_THOR_SIPL_JP7.2_L4TR39.2/Readme.md) |

1. Connect the camera to the GMSL2 port specified in the package guide and check the power and port mapping.
2. For **V4L2**, configure the device tree and capture port using the matching installation guide.
   - **SG8A-AGON-G2Y-A1, JetPack 6.2 / 7.2** — Enable 3Gbps on the connected port and select `SG3S11AFxK(3G)` in `raw_yuv_quick_bring_up.sh`.
   - **SG8A-AGON-G2Y-A1, JetPack 6.2.1** — Select `sgx-yuv-gmsl2` in the overlay tool. In `camera_config.sh`, enable 3Gbps and set sensor mode 1 for the connected port.
   - **SG10A-AGON-G2M-A4, JetPack 7.2** — Set `sensor_mode=2` and `gmsl_mode=1` for the connected port.
3. **SIPL.** Follow the SGX-YUV-GMSL2 guide for your platform. Select `SGX_YUV_GMSL2_3M_3G`, configure the connected port and run `nvsipl_camera`. [AGX Orin configuration](https://github.com/SENSING-Technology/nvidia-jetson-camera-drivers/blob/main/Jetson%20AGX%20Orin%20Devkit/SG8A-AGON-G2Y-A1/JetPack7.2/SG8A_AGON_G2Y_A1_AGX_ORIN_SIPL_JP7.2_L4TR39.2/docs/sgx_yuv_gmsl2.md) · [AGX Thor configuration](https://github.com/SENSING-Technology/nvidia-jetson-camera-drivers/blob/main/Jetson%20AGX%20Thor%20Devkit/TRD1_G2A/JetPack7.2/TRD1_G2A_AGX_THOR_SIPL_JP7.2_L4TR39.2/docs/sgx_yuv_gmsl2.md)
4. Use the package's capture example to verify output at 1920(H) × 1536(V) @ 30fps.

### Integration with Custom Platforms

Use a deserializer that supports GMSL2 at 3Gbps. Configure PoC, the SerDes link and I2C mapping according to the block diagram. Set the host CSI receiver to 1920(H) × 1536(V) @ 30fps and 8-bit YUV422. For external frame synchronization, configure MAX96717F MFP7 as shown in the hardware table.

> **Note**　The series datasheet also lists the PANDA PG2 single-camera USB converter (Windows) and CoaxCapture II CCG3-4H/8H capture cards. Verify model compatibility, link rate and driver requirements for the selected device.
