---
sidebar_position: 2
title: Getting Started with sgMIX 2.0
---

# Getting Started with sgMIX 2.0

## Overview

sgMIX provides a camera control SDK and tools for integration and debugging. Features include device and calibration data reads, capture and preview, image controls, distortion correction, and firmware or ISP tuning file updates for supported models.

This page covers installation, configuration, and your first preview. See the [GitHub README](https://github.com/SENSING-Technology/sgMIX/blob/master/Readme.md) for model requirements, complete command options, and API details.

:::info Version and environment
This page covers sgMIX 2.0. The current repository documentation primarily targets **Jetson AGX Thor DK / JetPack 7.2.0**, with V4L2 and SIPL driver frameworks. RAW cameras can also use Argus capture. Use matching SDK, camera driver, and BSP versions; confirm other environments with FAE.
:::

## Feature overview

| Feature | Capabilities | Requirements and scope |
| --- | --- | --- |
| Device and lens information | SN, stored resolution / frame rate / format, FOV, focal length, aperture, and more | Depends on model and programmed data; stored settings are separate from negotiated capture settings |
| Camera calibration reads | Intrinsics, distortion coefficients, optional right intrinsics, stereo extrinsics, and reprojection error | Reads existing calibration with the corresponding CRC validation |
| IMU calibration reads | Noise, bias, calibration matrices, camera–IMU transform, and time offset | Requires valid programmed data; does not provide live IMU capture |
| Basic image controls | Vertical flip, horizontal mirror, and test patterns | Model and access-route dependent; observe preview to verify visual effects |
| Capture and preview | V4L2 / Argus / SIPL frames, live preview, SIPL multi-port and dual-channel capture | Channels read independently without automatic stereo pairing or depth computation |
| Frame information and EBD | Frame sequence, timestamps, and driver-provided embedded data and exposure information | Available fields depend on camera, driver, and mode |
| Distortion correction | Pinhole / equidistant Fisheye correction | Requires VPI, valid intrinsics, and matching capture dimensions |
| Firmware and tuning updates | Supported firmware upgrades, NVIDIA ISP / NITO updates, and running firmware queries | Files must match hardware and framework; RAW OTA primarily refers to matching tuning files |

## Supported models and features

The following tables summarize the model matrices in the [README](https://github.com/SENSING-Technology/sgMIX/blob/master/Readme.md), preserving its feature column names and order. **●** means documented support subject to requirements; `-` denotes entries not marked as supported in the original tables. Scroll horizontally to view wide tables.

### V4L2 / Argus

YUV cameras use V4L2 capture; RAW cameras use Argus. Data reads and controls use the V4L2 configuration.

|  | Read Module Information | Read Lens Information | Read Module SN | Read Calibration | Flip/Mirror Control | Test Pattern | OTA | Video Capture | Frame Metadata Parsing | Distortion Correction |
| --- | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| SG3S-ISX031C-GMSL2F-Hxxx | ● | ● | ● | ● | ● | ● | Firmware | ● | ● | ● |
| SG3S-ISX031C-GMSL2-Hxxx | ● | ● | ● | ● | ● | ● | Firmware | ● | ● | ● |
| SG3S11AFLK | ● | ● | ● | ● | ● | ● | Firmware | ● | ● | ● |
| SHW5G | ● | ● | ● | ● | ● | ● | ISP / NITO | ● | - | ● |
| S36 | ● | ● | ● | ● | ● | ● | Firmware | ● | - | ● |
| S56 | ● | ● | ● | ● | ● | ● | ISP / NITO | ● | - | ● |
| SHF3L / SHF3H | ● | ● | ● | ● | ● | ● | Firmware | ● | ● | ● |

### SIPL

Every model requires a matching driver and JSON configuration. Multi-channel modules also require a module-local channel selection.

|  | Read Module Information | Read Lens Information | Read Module SN | Read Calibration | Flip/Mirror Control | Test Pattern | OTA | Video Capture | Frame Metadata Parsing | Distortion Correction |
| --- | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| SG3S-ISX031C-GMSL2F-Hxxx | ● | ● | ● | ● | ● | ● | Firmware | ● | - | ● |
| SG3S-ISX031C-GMSL2-Hxxx | ● | ● | ● | ● | ● | ● | Firmware | ● | - | ● |
| SG3S11AFLK | ● | ● | ● | ● | ● | ● | Firmware | ● | - | ● |
| SHW5G | ● | ● | ● | ● | ● | ● | NITO | ● | ● | ● |
| S36 | ● | ● | ● | ● | ● | ● | Firmware | ● | - | ● |
| S56 | ● | ● | ● | ● | ● | ● | NITO | ● | ● | ● |
| SDT2BCO1 | ● | ● | ● | ● | - | - | Firmware | ● | - | ● |
| SHF3L / SHF3H | ● | ● | ● | ● | ● | ● | Firmware | ● | - | ● |

**Support conditions:**

- **Information and calibration:** stored data must be valid. Right intrinsics, extrinsics, lens information, and IMU data depend on what was programmed.
- **Controls and firmware updates:** SIPL support depends on serializer routes, sensor mapping, and active channels. The S36 dual-ISX031 route needs a matching MAX9295D configuration; a model name alone does not establish support for every operation.
- **EBD:** V4L2 entries refer to supported ISX031 first-row extraction. SIPL raw EBD and parsed fields come from the driver; `-` does not rule out all frame metadata.
- **RAW and S56C:** the README separately documents SHW3G capture and tuning updates. SIPL configuration for S56C uses the `S56` model. Consult the full README for other models and detailed restrictions.

## 1. Prepare and install

### Obtain and install the SENSING camera driver

Select the package for your driver framework first. The sgMIX Chinese README links to the following two packages for **Jetson AGX Thor Devkit with the TRD1_G2A adapter board, JetPack 7.2 / L4T R39.2**:

| Driver framework | Driver package and link | Checks after installation |
| --- | --- | --- |
| V4L2 | [TRD1_G2A_GMSL2x8_JP7.2_L4TR39.2](https://github.com/SENSING-Technology/nvidia-jetson-camera-drivers/tree/main/Jetson%20AGX%20Thor%20Devkit/TRD1_G2A/JetPack7.2/TRD1_G2A_GMSL2x8_JP7.2_L4TR39.2) | Load the camera configuration according to the driver instructions and confirm actual `/dev/videoN` nodes. RAW capture through Argus also needs the corresponding Argus runtime environment |
| SIPL | [TRD1_G2A_AGX_THOR_SIPL_JP7.2_L4TR39.2](https://github.com/SENSING-Technology/nvidia-jetson-camera-drivers/tree/main/Jetson%20AGX%20Thor%20Devkit/TRD1_G2A/JetPack7.2/TRD1_G2A_AGX_THOR_SIPL_JP7.2_L4TR39.2) | Prepare the camera-specific JSON, HAL, and matching `libnvsipl.so` and `libnvsipl_query.so` runtime libraries |

Follow the README in the selected directory to install the driver and configure the cameras before installing sgMIX. Match the driver package to the actual camera, adapter board, and BSP. For other hardware or system versions, locate the corresponding directory in the [SENSING driver repository](https://github.com/SENSING-Technology/nvidia-jetson-camera-drivers) or confirm with FAE.

### Obtain and install the sgMIX SDK

Choose either method below and install on the target Jetson. Replace the package filename with the version you obtained.

**Method 1: Use an existing installation package**

Copy the `.deb` package obtained from the [sgMIX repository](https://github.com/SENSING-Technology/sgMIX) or FAE to the target device. Change to the directory containing the package and run:

```bash
sudo apt install ./SENSING_sgMIX_2.0.0.deb
```

**Method 2: Obtain and install through Git**

Clone the repository, fetch the installation package and libraries managed by Git LFS, then install the included `.deb` package:

```bash
git clone https://github.com/SENSING-Technology/sgMIX.git
cd sgMIX
sudo apt install git-lfs
git lfs install
git lfs pull
sudo apt install ./SENSING_sgMIX_2.0.0.deb
```

Both methods install the SDK under `/opt/sgMIX`, including headers, libraries, samples, and configuration tools. Query the installed version with:

```bash
dpkg-query -W -f='${Version}\n' sgmix-sdk
```

## 2. Configure the cameras

Run the configuration tool manually after installing or upgrading the SDK:

```bash
sudo /opt/sgMIX/bin/sgmix-config.py
```

After platform detection, select the framework and actual camera models, review the settings, and save to `/opt/sgMIX/etc/sgmix.conf`.

| Framework | Configuration | Device selection in tools |
| --- | --- | --- |
| V4L2 | Assign a model to each video node in use | `--v4l2 --video /dev/videoN` |
| SIPL | Select JSON and configuration name, assign actual models to ports, and enable links | `--sipl --cam N` |

### V4L2 configuration steps

1. Select the **V4L2** framework in the configuration tool.
2. Select the actual `/dev/videoN` node from the detected devices, such as `/dev/video6`.
3. Choose the actual camera model for that node. Configure each node you intend to use.
4. Enter `s` to review the settings and confirm saving when prompted. Wait for the saved-configuration message before running a capture tool.

### SIPL configuration steps

1. Select the **SIPL** framework, enter the camera JSON path supplied with the driver package, and select its matching configuration name.
2. Review the parsed port list and select the connected CAM port. For example, `7` selects CAM7 as shown by the tool.
3. Assign the actual camera model to enable its link. Repeat for other ports in use, leaving unused ports disabled.
4. Check the port-to-model assignments, then enter `s` to save and exit. Use `--cam N` to select an enabled port afterward; dual-channel capture also needs `--channel` or `--stereo`.

The tool does not start cameras or identify actual models through I²C probing. SIPL CAM numbers are zero-based; follow the port mapping shown by the configuration tool. Selecting a CAM does not enable a disabled link.

## 3. Build the sample tools

Run these commands on the ARM64 target with the SDK installed. Install build and preview dependencies, then build in your home directory:

```bash
sudo apt install build-essential cmake pkg-config \
  libgstreamer1.0-dev libgstreamer-plugins-base1.0-dev
cmake -S /opt/sgMIX -B "$HOME/sgmix-samples-build"
cmake --build "$HOME/sgmix-samples-build" -j6
cd "$HOME/sgmix-samples-build"
```

The default build includes four tools and eight minimal `basic_*` examples:

| Tool | Purpose |
| --- | --- |
| `camera_data_tool` | Read device information, SN, image configuration, camera calibration, and IMU calibration |
| `camera_frame_capture` | V4L2 / Argus / SIPL capture, live preview, and distortion correction |
| `camera_image_controls` | Preview and verify flip, mirror, and test-pattern interfaces, then attempt to restore initial settings |
| `camera_ota` | Firmware upgrades, ISP / NITO file updates, and running firmware version queries for supported models |

All four tools support `--help`. Run the following commands from the build directory, replace device numbers with your actual configuration, and use `sudo` if access permissions require it. Preview requires a working desktop display session on the board; Argus also needs matching NVIDIA GStreamer plugins.

## 4. Read data and start preview

### V4L2: YUV cameras

```bash
# Read SN and camera calibration
./camera_data_tool --v4l2 --video /dev/video6 get-sn
./camera_data_tool --v4l2 --video /dev/video6 get-calibration

# Live preview; press Ctrl+C to stop
./camera_frame_capture --v4l2 --video /dev/video6 --view
```

### Argus: RAW cameras

```bash
./camera_frame_capture --v4l2 --video /dev/video0 --argus --view
```

This tool derives the Argus `sensor-id` from the numeric suffix of `/dev/videoN`. Verify that both refer to the same camera in your BSP. Applications using the SDK directly must specify the Argus ID explicitly.

### SIPL: single and dual channels

```bash
# Enabled CAM7 with a single-channel camera
./camera_data_tool --sipl --cam 7 get-calibration
./camera_frame_capture --sipl --cam 7 --view

# Enabled CAM4 with a dual-channel camera
./camera_frame_capture --sipl --cam 4 --stereo --view

# Preview only channel 1 within CAM4
./camera_frame_capture --sipl --cam 4 --channel 1 --view
```

`--cam` selects a connector; `--channel` selects a capture channel within its camera module. Multi-channel modules require an explicit `--channel` or `--stereo`. Physical left/right mapping is defined by the driver.

Without `--view`, the default is 30 frames per channel with console logs. Use `--frames 100` to specify a count. The tool does not save image files. Dual-channel capture reads independently, without automatic exposure-time pairing or depth computation.

## 5. Common features

### Distortion correction

Add `--correct` to a preview command, for example:

```bash
./camera_frame_capture --v4l2 --video /dev/video6 --view --correct
./camera_frame_capture --sipl --cam 4 --stereo --view --correct
```

Correction requires a VPI-enabled SDK, a matching device VPI runtime, and valid Pinhole or equidistant Fisheye intrinsics for the selected channel. Capture dimensions must match calibration dimensions. The current JP7.2 SDK uses VPI 4.1.3. Corrected output is NV12; dual channels are corrected separately without stereo epipolar rectification.

### Image control validation

```bash
./camera_image_controls --v4l2 --video /dev/video6 image
./camera_image_controls --sipl --cam 4 --channel 0 image
```

The tool tests flip, mirror, and test patterns with live preview, then attempts to restore the initial settings. `PASS` covers interface calls, readback, and restoration checks; visual effects require observation.

### Firmware and ISP updates

Use `camera_ota` with an update file matched to the actual model. Stop other camera applications and all capture tasks first. After ISX031 / S36 firmware updates, power-cycle the camera and query the running version; verify both eyes for stereo cameras. Distinguish RAW camera NITO updates from camera firmware upgrades. Follow the detailed steps in the [README](https://github.com/SENSING-Technology/sgMIX/blob/master/Readme.md).

For models supporting running firmware version queries, use the saved configuration:

```bash
# V4L2: query the running firmware of the camera at the selected video node
./camera_ota --v4l2 --video /dev/video7 --get-version

# SIPL: query the running firmware of enabled CAM7
./camera_ota --sipl --cam 7 --get-version
```

Replace device numbers with your actual connections. For V4L2 S36, each query reads only the eye at the selected node; query both video nodes separately. SIPL S36 returns running versions for both `channel0` and `channel1` in one query. This command does not query NITO versions.

## 6. Troubleshooting

| Symptom | What to check |
| --- | --- |
| SIPL requires an explicit `siplChannel` | Add `--channel 0`, `--channel 1`, or `--stereo` for a multi-channel camera |
| Preview works but `--correct` fails | Check intrinsics, calibration dimensions, VPI, and the calibration storage route |
| SN / calibration reads report CRC errors | Check actual model, storage route, and programmed data; working capture does not establish valid calibration |
| Some reads in `all` fail | Inspect individual results; unprogrammed IMU calibration does not imply video capture failure |
| Preview cannot start | Check GStreamer build dependencies, runtime plugins, and the board display session |
| SIPL owner lock permission error | Check lock-file permissions and runtime identity; avoid mixing ordinary-user and `sudo` execution |

## Development and full reference

Applications use C++17 and `sgmix::CameraControl`. The typical capture sequence is `SG_Init → SG_StartCapture → SG_GetFrame → SG_StopCapture`. Public IMU interfaces read stored calibration data.

- [Full README](https://github.com/SENSING-Technology/sgMIX/blob/master/Readme.md): model requirements, configuration, complete commands, updates, and known issues.
- [Minimal examples](https://github.com/SENSING-Technology/sgMIX/tree/master/sample/basic): individual capture, calibration, and control tasks.
- [Public API](https://github.com/SENSING-Technology/sgMIX/blob/master/include/SG_CameraControl.h) and [data types](https://github.com/SENSING-Technology/sgMIX/blob/master/include/SG_CameraTypes.h): signatures, parameters, and usage constraints.
