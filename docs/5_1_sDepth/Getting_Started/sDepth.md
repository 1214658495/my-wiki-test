---
sidebar_position: 2
title: Getting Started with sDepth
---

# Getting Started with sDepth

## Overview

sDepth leverages cutting-edge neural networks to generate high-fidelity depth maps from stereo images, consistently delivering reliable depth estimation even in demanding conditions. Compared to traditional methods, sDepth achieves superior accuracy in texture-poor regions and low-light environments. These advantages make it ideal for autonomous robotics, Augmented Reality (AR), and large-scale 3D reconstruction applications where robust depth perception is critical.

sDepth SDK provides a suite of AI-driven depth modes, enabling you to fine-tune depth sensing configurations to meet your specific application requirements. Each mode offers a unique trade-off between spatial fidelity, sensing range, and computational efficiency, allowing you to prioritize accuracy, extend range, improve processing speed, or achieve a tailored balance based on your operational needs.

## Key Features

- **AI-Powered Depth Estimation**: Neural network-based depth estimation superior to traditional methods
- **Robust Performance**: Reliable accuracy in texture-poor regions and low-light environments
- **Flexible Modes**: Multiple depth modes with configurable trade-offs
- **Wide Applications**: Autonomous robots, AR, 3D reconstruction

## Supported Platforms

- NVIDIA Jetson AGX Orin
- NVIDIA Jetson AGX Thor

---

## Real-time Inference Performance

The following performance data was measured under indoor conditions using randomly collected scenes with real-time inference exceeding 3 minutes. Values represent average resource utilization and frame rates.

:::note
On the Jetson AGX Thor (128GB, Jetpack 7.0), camera output is limited to 30FPS, which caps the model inference speed at 30FPS.
:::

### Performance on Embedded Devices

| Camera | Edge Device | Interface Board | FPS | CPU Avg (%) | GPU Avg (%) |
|--------|-------------|-----------------|-----|-------------|-------------|
| S36 | Jetson AGX Orin (32GB, Jetpack 6.2) | 10-ch GMSL | 24 | 38.45 | 93.43 |
| S36 | Jetson AGX Orin (32GB, Jetpack 6.2) | 10-ch GMSL | 10 | 15.42 | 46.73 |
| S36 | Jetson AGX Thor (128GB, Jetpack 7.0) | 8-ch GMSL | 30 | 18.35 | 36.67 |
| S36 | Jetson AGX Thor (128GB, Jetpack 7.0) | 8-ch GMSL | 10 | 7.17 | 15.24 |

---

## Vertical Ranging Accuracy

Testing was conducted in an indoor environment using a laser rangefinder. Each depth distance was measured 10 times and compared against actual values.

:::note
All tests were performed on Jetson AGX Orin (32GB, Jetpack 6.2) with S36 camera at 24FPS in indoor conditions.
:::

---

## Display Settings

After running the SDK, you can switch between display modes using keyboard keys. Mode switching does not affect accuracy, only visual display effects.

### Visualization Page Switching

| Key | Function |
|-----|----------|
| `q` / `ESC` | Exit depth mode |
| `d` / `D` | Switch between depth map / disparity map |

### Color Mapping

| Key | Mode | Description |
|-----|------|-------------|
| `1` | Linear Normalization + TURBO | Suitable for short range |
| `2` | Power Function Normalization + TURBO | Enhanced color levels for long range |

### Parameter Adjustment (Mode 2 Only)

| Key | Function |
|-----|----------|
| `+` / `=` | Increase gamma value (reduces distant layer sensation) |
| `-` | Decrease gamma value (enhances distant depth perception) |

---

## sDepth SDK

The sDepth SDK provides core capabilities including calibration parameter loading and depth map generation, supporting both offline testing and real-time camera acquisition scenarios. It significantly reduces the barrier to developing and integrating binocular depth algorithms.

### SDK Download

| Resource | Link |
|----------|------|
| sDepth SDK | The SDK download link is currently under maintenance and will be updated soon |

:::caution
The SDK download link is currently under maintenance and will be updated soon.
:::

### File Structure

```
sDepth/
├── CMakeLists.txt
├── README.md
├── config/
│   ├── stereo_calibration.json
│   └── sDepth.enc
├── include/
│   ├── opencv4/
│   └── SG_StereoDepth_api.h
├── lib/
│   ├── opencv/
│   └── libsDepth.so
└── samples/
    └── main.cpp
```

---

## Quick Start

### 1. Install Dependencies

```bash
sudo apt install -y cmake build-essential v4l-utils nvidia-jetpack
```

### 2. Build

```bash
cd sDepth
mkdir build
cd build
cmake ..
make -j$(nproc)
```

### 3. Run

The executable `sDepth_Demo` is generated in the `sDepth/bin` directory.

---

## Parameter Reference

| Parameter | Description | Required |
|-----------|-------------|----------|
| `-mode` | SDK mode: `0`=offline (stereo images to depth), `1`=online YUV preview, `2`=online RAW preview | Yes |
| `-left` | Offline: left image file path; Online: left camera device number | Yes |
| `-right` | Offline: right image file path; Online: right camera device number | Yes |
| `-width` | Input image/stream width in pixels (must match input resolution) | Yes |
| `-height` | Input image/stream height in pixels (must match input resolution) | Yes |
| `-key` | Model license file | Yes |
| `-enc` | Depth model file (default: `sDepth/config/sDepth.enc`) | No |
| `-json` | Camera calibration file (default: `sDepth/config/stereo_calibration.json`) | No |

---

## Usage Examples

### Offline Mode

Input stereo images and output depth map:

```bash
./sDepth_Demo -mode 0 -left left.jpg -right right.jpg -width 1920 -height 1080 -key <keyfile_name>
```

### Online Mode

Real-time depth video stream preview:

```bash
./sDepth_Demo -mode 1 -left /dev/video0 -right /dev/video1 -width 1920 -height 1080 -key <keyfile_name>
```
