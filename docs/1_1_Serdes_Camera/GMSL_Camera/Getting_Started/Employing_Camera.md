---
sidebar_position: 3
---

# Employing Camera

This guide describes different scenarios for employing our cameras in various platforms and systems. Each integration method has its specific requirements and technical considerations.


## 1. Camera Integration with NVIDIA Platform

SENSING provides NVIDIA platform products that are pre-adapted for our cameras. This integration ensures optimal performance and reliability.
<div style={{textAlign: 'center'}}>
    <img src="https://raw.githubusercontent.com/1214658495/myWikiFiles/main/Nvidia_jetson/nvidia_jetson_agx_orin.png" alt="SG8A-ORIN-GMSL2-complete" 
    style={{maxWidth: '90%', height:'auto'}} />
</div>

### Available Solutions
- **[NVIDIA Jetson Series](https://sensing-world.com/en/h-col-142.html)**: Compatible with Jetson AGX Xavier, Jetson NX, and Jetson Nano. 
- **[NVIDIA DRIVE Series](https://sensing-world.com/en/h-col-146.html)**: Compatible with DRIVE AGX Orin. 

### Technical Specifications
- **Interface**: GMSL2/GMSL
- **Data Rate**: Up to 6Gbps per lane
- **Operating Temperature**: -40°C to +85°C
- **Power Supply**: 12V DC

### Integration Steps
- e.g.: [Camera Integration with NVIDIA Jetson AGX Orin GMSL Adapter Board Documentation](/docs/2_1_NVIDIA_Jetson/Getting_Started/NVIDIA_Jetson_AGX_Orin/GMSL_adapter_board/SG8A-ORIN-GMSL2)

1. **Hardware Connection**
   - Connect the camera to the GMSL interface
   - Ensure proper power supply connection
   - Check signal integrity

2. **Software Setup**
   - Install NVIDIA drivers
   - Configure camera parameters
   - Verify image quality


:::tip
Our NVIDIA platform solutions are pre-configured and tested, ensuring seamless integration with our cameras.
:::

For more details:
- Browse our official github website: [SENSING Github Website](https://github.com/SENSING-Technology/nvidia-jetson-camera-drivers)

## 2. Camera Integration with GMSL Camera Grabber

SENSING offers GMSL camera grabber products that are pre-adapted for our cameras, providing a flexible solution for various applications.
<div style={{textAlign: 'center'}}>
    <img src="https://raw.githubusercontent.com/1214658495/myWikiFiles/main/Data_collection/CCG3-8H/CCG3-8H_useGround1.png" alt="CCG3-8H-complete" 
    style={{maxWidth: '90%', height:'auto'}} />
</div>

- Visit our official website: [GMSL Camera Grabber](https://sensing-world.com/en/Coaxcapture_Card/)

### Product Features
- **Input**: 1-8 GMSL cameras
- **Protocol**: PCI-e Gen3.0
- **Resolution**: Up to 4K@30fps
- **Operating System**: Linux

### Technical Requirements
- **Power Supply**: PCI-e
- **Driver Support**: Ubuntu 18.04/20.04

### Integration Process
- e.g.: [Camera Integration with GMSL Camera Grabber Documentation](/docs/3_1_GMSL2_3_Camera_Grabber/Getting_Started/CCG3-8H)
1. **Hardware Setup**
   - Connect cameras to grabber
   - Connect grabber to host system
   - Power on the system

2. **Software Configuration**
   - Install drivers
   - Configure camera parameters
   - Test camera functionality

:::tip
Our GMSL grabber solutions are designed for easy integration and optimal performance.
:::

For more information:
- Browse our official github website: [SENSING Github Website](https://github.com/SENSING-Technology/CoaxCapture-CCG3)

## 3. Camera Integration with Third-party AI Box

When integrating with third-party AI box products, careful consideration of compatibility and technical requirements is essential.

### Step 1: Check Camera Compatibility
Contact the AI Box manufacturer to confirm their "Compatible Camera List". For example:
- MiiVii's AI Box [Camera Compatibility List](https://doc.miivii.com/Apex-AD10-User-Manual-EN/wiki/Apex-AD10-GMSL-Camera-Compatibility-List.html) - "GMSL CAMERA SUPPORT" section
- Other manufacturers' AI Boxs follow similar documentation

### Step 2: If Camera is in Compatibility List
If our camera model is listed in the AI Box's compatibility list:
- Follow the AI Box manufacturer's user manual for setup
- Contact the manufacturer's FAE for technical support
- These models have been pre-adapted and should work out of the box

### Step 3: If Camera is Not in Compatibility List
If our camera model is not listed, a three-party collaboration is required:

1. **Initial Setup**
   - Create a group chat including:
     - AI Box manufacturer
     - SENSING technical team
     - Customer
   - Share technical specifications
   - Define integration requirements

2. **Technical Adaptation Process**
   - SENSING provides:
     - Register configuration for the camera module
     - I2C communication protocol details
     - Power sequence requirements
   - AI Box manufacturer:
     - Integrates configurations into driver code
     - Implements power management
     - Tests camera functionality

:::note
This process ensures proper integration and optimal performance of the camera with the AI Box.
:::

## 4. Camera Integration with Customer's Self-developed Platform

For customers with their own deserializer who want to adapt our camera (serializer) to their platform, detailed technical coordination is required.
<div style={{textAlign: 'center'}}>
    <img src="https://raw.githubusercontent.com/1214658495/myWikiFiles/main/Camera/Camera_SOC_connect.png" alt="SG8A-ORIN-GMSL2-complete" style={{width: 730, height:'auto'}} />
</div>

### Step 1: Link Register initialization
SENSING will provide:
- **Serializer and Deserializer Configuration**
   - Register configuration for the camera module-[Getting Camera Information](/docs/1_1_Serdes_Camera/GMSL_Camera/Getting_Camera_Information)
   - I2C communication protocol details
   - Power sequence requirements
- **Link Status Troubleshooting Guide**
  - Link training parameters
  - Error detection settings
  - Power management

### Step 2: Data Processing
After receiving the module data through the MIPI CSI interface:
- **Data Reception**
  - MIPI CSI-2 protocol implementation
  - Data rate configuration
  - Clock synchronization
- **Image Processing**
  - Raw/YUV data parsing
  - Image format conversion
  - Display configuration

### Technical Support
- **Documentation**
  - Detailed register descriptions
  - Timing diagrams
  - Power sequence diagrams
- **Engineering Support**
  - Technical consultation
  - Debug assistance
  - Performance optimization

:::tip
For technical support during integration, please contact our technical team.
:::

