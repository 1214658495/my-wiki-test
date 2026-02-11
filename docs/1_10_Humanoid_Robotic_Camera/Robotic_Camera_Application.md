---
sidebar_position: 3
title: Robotic Camera Solutions
---

# Robotic Camera Solutions

## Humanoid Solution Based Jetson AGX Thor

<div style={{background: 'var(--ifm-background-color)', borderRadius: '10px', boxShadow: '0 2px 8px rgba(0,0,0,0.08)', padding: '1.5rem', marginBottom: '2rem'}}>
  <div style={{fontSize: '1.1em'}}>
    The <strong> SENSING TRD1 Jetson AGX Thor Vision Solution </strong> is a premier visual perception platform engineered by SENSING specifically for Embodied AI and humanoid robotics.  
    As an NVIDIA Elite Partner, SENSING integrates its proprietary high-performance camera modules with the latest NVIDIA Jetson AGX Thor computing platform to deliver a comprehensive, end-to-end solution—from sensing to computing.  
    Leveraging advanced multi-sensor fusion technology (featuring stereo cameras, high-frame-rate monocular cameras, and hand-mounted cameras), this system empowers robots with precise spatial localization, robust environmental perception, and fine manipulation guidance. It is perfectly tailored to meet the complex interactive and computational demands of next-generation humanoid robots.
  </div>
  <div style={{textAlign: 'center', marginTop: '1.5rem'}}>
    <img src="https://raw.githubusercontent.com/1214658495/myWikiFiles/main/Camera/1_10_Humanoid_Robotic_Camera/Solutions/Robotic_Camera_Solutions.png" alt="CCG3-8M Application Scenario" style={{maxWidth: '100%', height:'auto', borderRadius: '8px'}} />
  </div>
</div>

<!-- ## System Architecture

<div style={{background: 'var(--ifm-background-color)', borderRadius: '10px', boxShadow: '0 2px 8px rgba(0,0,0,0.06)', padding: '1.2rem', marginBottom: '2rem'}}>
  <ul style={{margin: 0, paddingLeft: '1.2em'}}>
    <li><strong>GMSL Cameras:</strong> Multiple high-resolution cameras are connected to the CoaxCapture card, which aggregates and synchronizes their video streams.</li>
    <li><strong>CoaxCapture Capture Card:</strong> Installed in the vehicle's IPC (industrial PC) via PCIe, the card receives camera data and synchronization signals, ensuring frame-level alignment across all channels.</li>
    <li><strong>GPS Module:</strong> Provides 1PPS (Pulse Per Second) and TOD (Time of Day) signals for global time reference.</li>
    <li><strong>Ethernet Switch:</strong> Supports PTP/gPTP (Precision Time Protocol/Generalized PTP) for time synchronization across LiDAR, radar, and other sensors.</li>
    <li><strong>LiDAR/External Devices:</strong> Provide TTL square wave signals to the CCG3-8M for hardware-level camera synchronization, ensuring precise timing alignment between camera captures and sensor measurements.</li>
    <li><strong>IPC (Industrial PC):</strong> Central processing unit that collects, processes, and stores synchronized data from all sensors.</li>
  </ul>
</div> -->

## System Architecture

The solution features a centralized high-performance computing unit connected to a distributed network of vision sensors. To ensure industrial-grade reliability, ultra-low latency, and high bandwidth, all camera modules are linked to the computing platform via **GMSL** interfaces.
<div style={{textAlign: 'center', marginTop: '1.5rem'}}>
    <img src="https://raw.githubusercontent.com/1214658495/myWikiFiles/main/Camera/1_10_Humanoid_Robotic_Camera/Solutions/Robotic_Camera_Connect.png" alt="Robotic_Camera_Connect" style={{maxWidth: '65%', height:'auto', borderRadius: '8px'}} />
  </div>


### Component Topology

*   **Core Computing (SOC)**
    *   NVIDIA Jetson AGX Thor Developer Kit
    *   SENSING TRD1 G2A Carrier Board（SG8-AGX-Thor-GMSL2）
*   **Head Vision**
    *   **Astra S56:**  2 * 5MP Stereo Camera (Depth & VLA)
    *   **Astra S36 (Optional):** 2 * 3MP Stereo Camera (Alternative Depth Solution)
    *   **SHW3H:** 3MP HDR 60fps Monocular Camera
*   **Hand Vision**
    *   **SHF3L (×4):** 3MP HDR 30fps Monocular Camera

### Camera Configuration

<!-- | Model | Type | Resolution | Shutter | FOV (H/V) | Role / Position | Qty | Docs |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Astra S56** | Stereo | 2 * 5MP | Global | [130°/102°] | **Head**: Depth Sensing & SLAM | 1 | [View Specs](https://wiki.sensing-world.com/docs/1_10_Humanoid_Robotic_Camera/Binocular_Camera/S56) |
| **SHW3H** | Monocular | 3MP | Rolling | [118°/92°] | **Head**: High-Frame-Rate Vision | 1 | [View Specs](https://wiki.sensing-world.com/docs/1_10_Humanoid_Robotic_Camera/Monocular_Camera/SHW3H) |
| **SHF3L** | Monocular | 3MP | Rolling | [196°/154°] | **Hands**: Fine Manipulation | 4 | [View Specs](https://wiki.sensing-world.com/docs/1_10_Humanoid_Robotic_Camera/Monocular_Camera/SHF3L) | -->

| Model | Type | Resolution | Shutter | Data Format | FOV (H) | Role / Position | Qty | Docs |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Astra S56** | Stereo | 2 * 5MP | Global | RAW | 120° | **Head**: Depth & VLA | 1 | [View Specs](https://wiki.sensing-world.com/docs/1_10_Humanoid_Robotic_Camera/Binocular_Camera/S56) |
| **Astra S36** (Optional) | Stereo | 2 * 3MP | Rolling | YUV | 120° | **Head**: Depth (Alt) | 1 | [View Specs](https://wiki.sensing-world.com/docs/1_10_Humanoid_Robotic_Camera/Binocular_Camera/S36) |
| **SHW3H** | Monocular | 3MP | Rolling | YUV | 120° | **Head**: HDR 60fps Monocular Camera | 1 | [View Specs](https://wiki.sensing-world.com/docs/1_10_Humanoid_Robotic_Camera/Monocular_Camera/SHW3H) |
| **SHF3L** | Monocular | 3MP | Rolling | YUV | 190° | **Hands**: HDR 30fps Monocular Camera | 4 | [View Specs](https://wiki.sensing-world.com/docs/1_10_Humanoid_Robotic_Camera/Monocular_Camera/SHF3L) |

### Computing Platform

| Component | Model | Description |
| :--- | :--- | :--- |
| **SOC** | NVIDIA Jetson AGX Thor | Next-gen AI computer for humanoid robots. |
| **Carrier Board** | SENSING TRD1 G2A （SG8-AGX-Thor-GMSL2） | Supports up to 8x GMSL camera inputs with hardware sync. |

<!-- ## Synchronization Workflow

<div style={{background: 'var(--ifm-background-color)', borderRadius: '10px', boxShadow: '0 2px 8px rgba(0,0,0,0.06)', padding: '1.2rem', marginBottom: '2rem'}}>
  <ol style={{margin: 0, paddingLeft: '1.2em'}}>
    <li>The GPS provides 1PPS and TOD signals to the time synchronization box, which then outputs PTP information via Ethernet to the capture cards and other devices.</li>
    <li>The CoaxCapture card uses these signals to synchronize all connected GMSL cameras, ensuring that each frame is timestamped accurately and aligned with other vehicle sensors.</li>
    <li>The Ethernet switch propagates PTP/gPTP signals to LiDAR, radar, and other devices, enabling system-wide time synchronization.</li>
    <li>All sensor data, including video, LiDAR, and radar, are collected by the IPC for real-time processing and recording.</li>
  </ol>
</div> -->


---

##  **Quick Bring Up**

### Installation Steps
<div style={{textAlign: 'center', marginTop: '1.5rem'}}>
    <img src="https://raw.githubusercontent.com/1214658495/myWikiFiles/main/Camera/1_10_Humanoid_Robotic_Camera/Solutions/Camera_Connect.png" alt="Camera_Connect" style={{maxWidth: '90%', height:'auto', borderRadius: '8px'}} />
</div>

:::note Quick Setup
1. Refer to the image labels and connect the GMSL cameras to the corresponding positions on the TRD1 G2A using coaxial cables.
2. Connect "CN7" to the power supply(DC 9-16V)
3. Power on the system(Jetson Thor)
:::

### SDK Download

:::note Driver Packages
Select the appropriate driver package based on your camera type and JetPack version:
:::

| Camera Type | JetPack Version | Download Link |
|-------------|-----------------|---------------|
| GMSL2 Camera (YUV) | JP7.0 | [Download](https://github.com/SENSING-Technology/nvidia-jetson-camera-drivers/tree/main/Jetson%20AGX%20Thor%20Devkit/TRD1_G2A/JetPack7.0/TRD1_G2A_AGX_THOR_GMSL2x8_JP7.0_L4TR38.2) |

:::tip Download Method
Copy the full link address to [DownGit](https://minhaskamal.github.io/DownGit/#/home) to download
:::


---

# Software Setup & Driver Configuration

This guide outlines the steps to configure the camera drivers, install the kernel, and verify the video stream for the SENSING TRD1 Vision Solution on Jetson AGX Thor.

### 1. Select Camera Configuration
Navigate to the driver directory and run the configuration script to select the connected camera modules.

```bash
# Enter the driver directory
cd TRD1_G2A_AGX_THOR_GMSL2x8_JP7.0_L4TR38.2

# Run the generation script
python3 generate_camera_overlay.py
```
<div style={{textAlign: 'center', marginTop: '1.5rem'}}>
    <img src="https://raw.githubusercontent.com/1214658495/myWikiFiles/main/Camera/1_10_Humanoid_Robotic_Camera/Solutions/bringUp_step1.png" alt="bringUp_step1" style={{maxWidth: '85%', height:'auto', borderRadius: '8px'}} />
</div>

> **Action Required:** Select the corresponding camera model based on the hardware port connection shown in the terminal prompt.
>
<!-- > ![Camera Overlay Selection](path/to/overlay_image.png) -->


### 2. Install Kernel & Drivers
Install the kernel image and the kernel modules (`.ko` files) corresponding to your selected cameras.

```bash
# Grant execution permissions and install
chmod a+x ./install.sh
./install.sh
```

### 3. Configure Device Tree (Jetson-IO)
Use the NVIDIA Jetson-IO tool to configure the CSI connector for the Sensing hardware.

```bash
sudo /opt/nvidia/jetson-io/jetson-io.py
```

**Follow these steps in the UI:**
1.  Select **"Configure Jetson AGX CSI Connector"**.
2.  Select **"Configure for compatible hardware"**.
3.  Select **"Jetson Sensing SG8A_AGTH_G2Y_A1 GMSL2x8"**.
4.  Select **"Save pin changes"**.
5.  Select **"Save and reboot to reconfigure pins"**.

*The system will reboot to apply the changes.*

### 4. Configure Trigger Mode
After rebooting, modify the `load_modules.sh` script to set the correct trigger mode and synchronization settings.

**Edit `load_modules.sh`:**
Ensure the script includes the following `v4l2-ctl` configurations (Setting `sensor_mode=1` and `trig_mode=0` for slave mode):

```bash
# ... existing code ...

# Configure sensor mode and trigger settings
v4l2-ctl -d /dev/video0 -c sensor_mode=1,trig_pin=0x00020007,trig_mode=0
v4l2-ctl -d /dev/video1 -c sensor_mode=1,trig_pin=0x00020007,trig_mode=0
v4l2-ctl -d /dev/video2 -c sensor_mode=1,trig_pin=0x00020007,trig_mode=0
v4l2-ctl -d /dev/video3 -c sensor_mode=1,trig_pin=0x00020007,trig_mode=0
v4l2-ctl -d /dev/video4 -c sensor_mode=1,trig_pin=0x00020007,trig_mode=0
v4l2-ctl -d /dev/video5 -c sensor_mode=1,trig_pin=0x00020007,trig_mode=0
v4l2-ctl -d /dev/video6 -c sensor_mode=1,trig_pin=0x00020007,trig_mode=0
v4l2-ctl -d /dev/video7 -c sensor_mode=1,trig_pin=0x00020007,trig_mode=0

green_print "Load modules done."
```

### 5. Load Drivers
Execute the modified script to load the drivers and apply settings.

```bash
sudo ./load_modules.sh
```

### 6. Install Argus Camera Tools
Install the NVIDIA Multimedia API and compile the Argus camera samples.

```bash
# Update and install dependencies
sudo apt update
sudo apt-get install nvidia-l4t-jetson-multimedia-api
cd /usr/src/jetson_multimedia_api/argus/
sudo apt-get install cmake build-essential pkg-config libx11-dev libgtk-3-dev libexpat1-dev libjpeg-dev libgstreamer1.0-dev

# Build the samples
sudo mkdir build && cd build
sudo cmake ..
sudo make -j8
sudo make install
```

### 7. Restart Argus Daemon
Restart the `nvargus-daemon` to ensure the ISP recognizes the new configuration. This is critical for RAW cameras.

```bash
sudo service nvargus-daemon stop
export NVCAMERA_NITO_PATH=CONFIG
sudo -E enableCamInfiniteTimeout=1 nvargus-daemon
```
*(Keep this terminal open if running in foreground, or run in background)*

### 8. Verification & Live Stream

#### 8.1 Testing Astra S56 (Stereo/RAW)
The S56 connects via RAW interface. Use `argus_camera` to view the stream.

```bash
# View Camera 0
argus_camera -d 0

# View Camera 1
argus_camera -d 1
```
<!-- > ![S56 Sample Image](path/to/s56_image.png) -->
<div style={{textAlign: 'center', marginTop: '1.5rem'}}>
    <img src="https://raw.githubusercontent.com/1214658495/myWikiFiles/main/Camera/1_10_Humanoid_Robotic_Camera/Solutions/bringUp_S56.png" alt="bringUp_S56" style={{maxWidth: '85%', height:'auto', borderRadius: '8px'}} />
  </div>

#### 8.2 Testing SHW3H & SHF3L (Monocular)
Use GStreamer to verify the SHW3H and SHF3L cameras. Replace `/dev/videoX` with the appropriate node.

**Example Command:**
```bash
gst-launch-1.0 v4l2src device=/dev/video2 ! xvimagesink -ev 
```
<!-- > ![Monocular Sample Image](path/to/mono_image.png) -->
<div style={{textAlign: 'center', marginTop: '1.5rem'}}>
    <img src="https://raw.githubusercontent.com/1214658495/myWikiFiles/main/Camera/1_10_Humanoid_Robotic_Camera/Solutions/bringUp_SHW3H.png" alt="bringUp_SHW3H" style={{maxWidth: '85%', height:'auto', borderRadius: '8px'}} />
  </div>

**Full Command List for All Ports:**
```bash
## CAM0
gst-launch-1.0 v4l2src device=/dev/video0 ! xvimagesink -ev

## CAM1
gst-launch-1.0 v4l2src device=/dev/video1 ! xvimagesink -ev

## CAM2
gst-launch-1.0 v4l2src device=/dev/video2 ! xvimagesink -ev

## CAM3
gst-launch-1.0 v4l2src device=/dev/video3 ! xvimagesink -ev

## CAM4
gst-launch-1.0 v4l2src device=/dev/video4 ! xvimagesink -ev

## CAM5
gst-launch-1.0 v4l2src device=/dev/video5 ! xvimagesink -ev

## CAM6
gst-launch-1.0 v4l2src device=/dev/video6 ! xvimagesink -ev

## CAM7
gst-launch-1.0 v4l2src device=/dev/video7 ! xvimagesink -ev
```

--- 

## Notes  
- Ensure all cameras are properly connected via coaxial cables before initializing the board.  
<!-- - If issues occur, check `/dev` directory for video device files and verify driver loading logs. -->
