---
sidebar_position: 1
---

# Application Scenario
## Autonomous Driving Sensing Solution

In advanced autonomous driving systems, precise and reliable multi-sensor data acquisition and synchronization are critical for perception and decision-making. The CoaxCapture Capture Card (CCG3-4H/8H) is designed to address these requirements by providing high-performance, synchronized video capture from multiple GMSL cameras, and seamless integration with other vehicle sensors.
<div style={{textAlign: 'center'}}>
    <img src="https://raw.githubusercontent.com/1214658495/myWikiFiles/main/Data_collection/CCG3-8H/CCG3-8H_useGround1.png" alt="SG8A-ORIN-GMSL2-Block Diagram" 
    style={{width: 720, height:'auto'}} />
</div>

### System Architecture

The typical deployment includes:
- **GMSL Cameras**: Multiple high-resolution cameras are connected to the CoaxCapture card, which aggregates and synchronizes their video streams.
- **CoaxCapture Capture Card**: Installed in the vehicle's IPC (industrial PC) via PCIe, the card receives camera data and synchronization signals, ensuring frame-level alignment across all channels.
- **GPS Module**: Provides 1PPS (Pulse Per Second) and TOD (Time of Day) signals for global time reference.
- **Ethernet Switch**: Supports PTP/gPTP (Precision Time Protocol/Generalized PTP) for time synchronization across LiDAR, radar, and other sensors.
- **IPC (Industrial PC)**: Central processing unit that collects, processes, and stores synchronized data from all sensors.

### Synchronization Workflow
- The GPS module outputs 1PPS and TOD signals, which are distributed to both the CoaxCapture card and the Ethernet switch.
- The CoaxCapture card uses these signals to synchronize all connected GMSL cameras, ensuring that each frame is timestamped accurately and aligned with other vehicle sensors.
- The Ethernet switch propagates PTP/gPTP signals to LiDAR, radar, and other devices, enabling system-wide time synchronization.
- All sensor data, including video, LiDAR, and radar, are collected by the IPC for real-time processing and recording.

### Key Benefits
- **Multi-camera synchronization**: Achieves hardware-level frame alignment for up to 8 GMSL cameras.
- **Unified time base**: Leverages GPS and PTP/gPTP to synchronize all vehicle sensors, supporting high-precision sensor fusion.
- **Scalable architecture**: Easily integrates additional sensors or cameras as system requirements evolve.
- **Reliable data acquisition**: PCIe interface and robust hardware design ensure high throughput and low latency.

This architecture is ideal for autonomous driving, ADAS development, and any application requiring precise, synchronized multi-sensor data acquisition.
