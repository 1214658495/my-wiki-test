---
sidebar_position: 1
title: Robotics
description: Comprehensive guide to advanced camera technologies and their applications in modern vision systems
keywords: [camera, vision, imaging, sensors, MIPI, Serdes, global shutter, event-based, low latency]
---

# Robotics Technologies Overview

<div style={{textAlign: 'center', marginBottom: '2rem'}}>
    <img src="/img/SENSING_WIKI.png" alt="SENSING Camera Technologies" style={{maxWidth: '100%', height: 'auto', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)'}} />
</div>

:::note Professional Vision Solutions
SENSING provides comprehensive camera technology solutions designed for demanding applications in robotics, autonomous systems, industrial automation, and advanced AI vision processing.
:::

## Introduction

Camera technologies serve as the critical foundation for modern vision-enabled systems across diverse industries. From autonomous vehicles requiring ultra-low latency processing to industrial automation demanding precise quality control, the selection of appropriate camera technology directly impacts system performance, reliability, and cost-effectiveness.

This comprehensive documentation explores the complete spectrum of camera technologies available in the SENSING ecosystem, providing detailed technical specifications, implementation guidelines, and application-specific recommendations to help engineers and system integrators make informed decisions for their vision system requirements.

---

## Binocular Camera

<div className="camera-grid">

### <span style={{color: 'var(--ifm-color-primary)'}}>Astra S56 </span>
**Astra S56** is a stereo camera designed for embodied AI applications, featuring dual 5MP global shutter sensors with a 60mm human-like baseline.

| Technical Specification | Performance |
|------------------------|-------------|
| **Resolution** | Dual 5MP (2560×1920) |
| **Shutter** | Global Shutter |
| **Baseline** | 60mm |
| **FOV** | 130° Horizontal |
| **Protection** | IP52 |
| **IMU** | Dual IMU support (SCHA634-D03 / BMI088) |
| **Interface** | GMSL2 |

**Primary Applications:** Humanoid robotics, embodied AI, teleoperation, 3D scanning.

---

### <span style={{color: 'var(--ifm-color-primary)'}}>Astra S36 </span>
**Astra S36** is a compact stereo camera for embodied intelligence applications with integrated 6-axis IMU.

| Technical Specification | Performance |
|------------------------|-------------|
| **Resolution** | Dual 3MP HDR |
| **Shutter** | Rolling Shutter (HDR) |
| **Baseline** | 60mm |
| **FOV** | 120° Horizontal |
| **Protection** | IP65 |
| **IMU** | Integrated 6-axis (BMI088) |
| **Interface** | GMSL2 |

**Primary Applications:** Humanoid robotics, legged robots, robotic arms.

</div>

---

## Monocular Camera

<div className="camera-grid">

### <span style={{color: 'var(--ifm-color-primary)'}}>SHF Series (Ultra Wide Angle)</span>

**SHF3G** — 3MP Global Shutter, 173° HFOV
| Specification | Value |
|--------------|-------|
| **Resolution** | 3MP |
| **Shutter** | Global Shutter |
| **FOV** | 173° Horizontal |
| **Frame Rate** | Up to 125fps |
| **Output** | RAW data |
| **Protection** | IP67 |

**SHF5G** — 5MP Global Shutter, 200° HFOV
| Specification | Value |
|--------------|-------|
| **Resolution** | 5MP |
| **Shutter** | Global Shutter |
| **FOV** | 200° Horizontal |
| **Frame Rate** | Up to 60fps |
| **Output** | RAW10 |
| **Protection** | IP69K |

**SHF3L** — 3MP HDR, 196° HFOV, 30fps
| Specification | Value |
|--------------|-------|
| **Resolution** | 3MP |
| **Shutter** | Rolling Shutter (HDR) |
| **FOV** | 196° Horizontal |
| **Frame Rate** | 30fps |
| **Output** | YUV422 (ISP built-in) |
| **Protection** | IP67 / IP69K lens |

**Primary Applications:** Fisheye perception for humanoid robots and legged robots.

---

### <span style={{color: 'var(--ifm-color-primary)'}}>SHW Series (Wide Angle)</span>

**SHW3G** — 3MP Global Shutter, 122° HFOV
| Specification | Value |
|--------------|-------|
| **Resolution** | 3MP |
| **Shutter** | Global Shutter |
| **FOV** | 122° Horizontal |
| **Frame Rate** | Up to 125fps |
| **Output** | RAW data |
| **Protection** | IP67 |

**SHW3H** — 3MP HDR, 118° HFOV, 60fps
| Specification | Value |
|--------------|-------|
| **Resolution** | 3MP |
| **Shutter** | Rolling Shutter (HDR) |
| **FOV** | 118° Horizontal |
| **Frame Rate** | 60fps |
| **Output** | YUV422 (ISP built-in) |
| **Protection** | IP67 |

**SHW5G** — 5MP Global Shutter, 130° HFOV
| Specification | Value |
|--------------|-------|
| **Resolution** | 5MP |
| **Shutter** | Global Shutter |
| **FOV** | 130° Horizontal |
| **Frame Rate** | Up to 60fps |
| **Output** | RAW10 |
| **Protection** | IP69K |

**Primary Applications:** Head/trunk vision for humanoid robots.

---

### <span style={{color: 'var(--ifm-color-primary)'}}>M Series (Mini)</span>

**M3A** — 3MP Mini HDR, 200° HFOV, 30fps
| Specification | Value |
|--------------|-------|
| **Resolution** | 3MP |
| **Shutter** | Rolling Shutter (HDR) |
| **FOV** | 200° Horizontal |
| **Frame Rate** | 30fps |
| **Output** | YUV422 (ISP built-in) |
| **Size** | Ultra compact (17mm×17mm) |

**Primary Applications:** Head/trunk of humanoid robots, data collection, legged robots.

</div>

---

## Vision Solution

<div className="camera-grid">

### <span style={{color: 'var(--ifm-color-primary)'}}>NRDCK — NVIDIA Robotics Data Collection Kit</span>

**NRDCK** is a multi-camera robot data collection kit based on Jetson AGX Orin with GMSL camera support.

| Component | Specification |
|-----------|--------------|
| **Platform** | Jetson AGX Orin (32GB/64GB) + JetPack 6.2 (L4T R36.4.3) |
| **Adapter Board** | SG10A-AGON-G2M-A1 (88mm × 120mm) |
| **Deserializer** | MAXIM MAX9296A / MAX96712A |
| **Camera Support** | Astra S56 (depth), SHF3L (hand HDR 30fps), SHW3H (head HDR 60fps) |
| **Max Channels** | Up to 10 GMSL cameras |

**Device Node Mapping (JetPack 6.2):**
- J27 → /dev/video0/1
- J29 → /dev/video2/3
- J21-J26 → /dev/video4-9

**Primary Applications:** Robot data collection, embodied AI training.

---

### <span style={{color: 'var(--ifm-color-primary)'}}>Robotic Camera Application — Jetson AGX Thor</span>

**SENSING TRD1 Jetson AGX Thor Vision Solution** is designed for embodied AI and humanoid robotics perception.

| Component | Specification |
|-----------|--------------|
| **Platform** | Jetson AGX Thor + TRD1 G2A Carrier Board |
| **Adapter Board** | SG8-AGX-Thor-GMSL2 |
| **Head Vision** | Astra S56 (depth+VLA), Astra S36 (optional), SHW3H (HDR 60fps) |
| **Hand Vision** | SHF3L ×4 for fine manipulation guidance |
| **Power** | DC 9-16V |

**Quick Start:** Connect cameras → Power on (DC 9-16V) → System boots

**Driver Configuration (8-step):**
1. Select camera config (`generate_camera_overlay.py`)
2. Install kernel and drivers (`./install.sh`)
3. Configure device tree (Jetson-IO → Jetson Sensing SG8A_AGTH_G2Y_A1 GMSL2x8)
4. Configure trigger mode (`load_modules.sh`: `sensor_mode=1`, `trig_mode=0`)
5. Load drivers (`./load_modules.sh`)
6. Install Argus camera tools (`jetson_multimedia_api`)
7. Restart Argus daemon
8. Verify with `argus_camera -d 0/1` or GStreamer

**Primary Applications:** Humanoid robotics, embodied AI, autonomous navigation.

</div>

---

## Technology Comparison Matrix


:::tip Selection Guide
Use this comprehensive comparison matrix to evaluate camera technologies based on your specific application requirements. Each technology is rated across key performance dimensions to facilitate informed decision-making.
:::


| Camera Series     | Resolution | Frame Rate | FOV Range  | Protection |
|------------------|------------|------------|------------|-----------|
| Astra S56 (Binocular) | ★★★★★ (5MP) | ★★★★☆     | 130°       | IP52      |
| Astra S36 (Binocular) | ★★★☆☆ (3MP) | ★★★☆☆     | 120°       | IP65      |
| SHF (FishEye)    | ★★★☆☆-★★★★☆ | ★★★☆☆-★★★★☆ | 173°-200°  | IP67-IP69K |
| SHW (Wide)       | ★★★☆☆-★★★★☆ | ★★★☆☆-★★★★☆ | 118°-130°  | IP67-IP69K |
| M (Mini)         | ★★★☆☆ (3MP) | ★★★☆☆     | 200°       | —         |

:::note
**Product Line Overview:** Astra (stereo), SHF (ultra-wide fish-eye), SHW (wide-angle), M (mini) — all use GMSL2 interface with MAXIM serializers.
:::


<!-- <div className="table-responsive">

| Camera Type | Resolution | Frame Rate | Latency | Low Light | Cost | Integration Complexity |
|-------------|------------|------------|---------|-----------|------|------------------------|
| Serdes      | ★★★★☆     | ★★★★☆     | ★★★★☆  | ★★★☆☆    | ★★★☆☆ | ★★★☆☆               |
| MIPI CSI-2  | ★★★★★     | ★★★★☆     | ★★★★★  | ★★★☆☆    | ★★☆☆☆ | ★★★★☆               |
| Global Shutter | ★★★★☆  | ★★★★★     | ★★★★☆  | ★★★☆☆    | ★★★★☆ | ★★★☆☆               |


| Low Latency | ★★★★☆     | ★★★★★     | ★★★★★  | ★★★☆☆    | ★★★★☆ | ★★★★☆               |
| Event-Based | ★★☆☆☆     | ★★★★★     | ★★★★★  | ★★★★★    | ★★★★★ | ★★★★★               |
| Night Vision| ★★★☆☆     | ★★★☆☆     | ★★★☆☆  | ★★★★★    | ★★★★☆ | ★★★☆☆               |
| Humanoid    | ★★★★☆     | ★★★★☆     | ★★★★☆  | ★★★★☆    | ★★★★★ | ★★★★★               |
| Cockpit     | ★★★★☆     | ★★★☆☆     | ★★★☆☆  | ★★★★☆    | ★★★★★ | ★★★★☆               |

</div> -->

<!-- :::note
Rating Scale: ★☆☆☆☆ (Basic) to ★★★★★ (Excellent)
::: -->


<!-- ## Key Considerations

When selecting a camera technology for your application, evaluate these critical factors:

<div className="considerations">

### Technical Specifications

- **Resolution**: Pixel density determining image detail (from VGA to 8K+)
- **Frame Rate**: Number of images captured per second (from 30fps to 1000fps+)
- **Interface**: Communication protocol and physical connection (Serdes, MIPI CSI-2, CoaXPress, GigE)
- **Shutter Type**: Global vs. Rolling shutter mechanisms and their impact on motion capture
- **Spectral Sensitivity**: Wavelength range the sensor can detect (visible, NIR, SWIR, etc.)

### Performance Factors

- **Dynamic Range**: Ability to capture both bright and dark areas simultaneously (measured in dB)
- **Latency**: Delay between capture and data availability (critical for real-time applications)
- **Signal-to-Noise Ratio**: Quality of the image signal relative to noise levels
- **Power Consumption**: Energy requirements, especially critical for mobile and battery-powered systems
- **Form Factor**: Physical size, weight, and mounting options compatibility

### Environmental Considerations

- **Operating Temperature Range**: Minimum and maximum temperatures for reliable operation
- **Ingress Protection (IP) Rating**: Resistance to dust and moisture
- **Vibration Resistance**: Ability to maintain performance under mechanical stress
- **Electromagnetic Compatibility**: Resistance to interference and emissions compliance

</div> -->


---

## Implementation Examples & Best Practices

### Professional Camera Integration Framework

The following examples demonstrate industry-standard approaches to camera system integration, featuring robust error handling, optimal performance patterns, and production-ready code structures.

#### **V4L2 Camera Initialization (Linux)**

```c
/* Example code for capturing camera frames */
#include "camera_api.h"

int main() {
    // Initialize camera
    camera_init();
    
    // Open camera device
    int fd = open("/dev/video0", O_RDWR);
    if (fd < 0) {
        perror("Failed to open camera device");
        return -1;
    }
    
    // Configure video capture format
    struct v4l2_format fmt = {0};
    fmt.type = V4L2_BUF_TYPE_VIDEO_CAPTURE;
    fmt.fmt.pix.width = 1920;
    fmt.fmt.pix.height = 1536;
    fmt.fmt.pix.pixelformat = V4L2_PIX_FMT_UYVY;
    
    if (ioctl(fd, VIDIOC_S_FMT, &fmt) < 0) {
        perror("Failed to set format");
        close(fd);
        return -1;
    }
    
    // Request and map buffers
    // ... (buffer setup code) ...
    
    // Start streaming
    // ... (streaming code) ...
    
    // Capture and process frames
    // ... (frame processing code) ...
    
    // Cleanup
    close(fd);
    return 0;
}

```

---
## Contact & Support
:::note Contact Information
    **Get in Touch with Our Team**:

    - **Email**: [support@sensing-world.com](mailto:support@sensing-world.com)
    - **Phone**: +86-755-28990915
    - **Website**: [www.sensing-world.com](https://sensing-world.com/en/)
    - **GitHub**: [SENSING-Technology](https://github.com/SENSING-Technology)

    **Business Hours**: Monday - Friday, 9:00 AM - 6:00 PM (GMT+8)
    :::

