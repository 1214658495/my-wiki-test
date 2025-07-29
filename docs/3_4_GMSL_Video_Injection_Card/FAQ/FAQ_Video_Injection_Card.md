---
sidebar_position: 1
---

# FAQs for CIG4-8H

This document contains frequently asked questions related to the CIG4-8H GMSL Video Injection Card.

<!-- ![SENSING Logo](/img/SENSING_logo_en2.png) -->

### Q1: What to do when CIG4-8H has problems?

**A1:** Follow these systematic troubleshooting steps:
- Ensure all GMSL cables are properly connected
- Check LED status indicators on the card
- Confirm driver installation is complete
- Verify device recognition in system

### Q2: What are the key specifications of the video injection card?

**A2:** The CIG4-8H offers:
- **Maximum GMSL video output**: Supports up to 8 channels
- **Resolution and frame rate**: 8MP@30fps per channel
- **Video formats**: YUV422, RAW12, RAW10, RAW14
- **Serializer**: GMSL2 MAX9295A with customizable settings
- **Multi-card support**: Up to 2 or more cards for expanded capacity

### Q3: Which SOC platforms and deserializers are supported?

**A3:** Compatible platforms:

| SOC Vendor | SOC Model | Deserializer |
|------------|-----------|--------------|
| Nvidia | Jetson AGX Orin | MAX9296A |
| Nvidia | Jetson AGX Orin | MAX96712 |
| Nvidia | Drive Orin | MAX96712 |
| Horizon | J5 | MAX9296A |
| Horizon | J5 | MAX96712 |
| TI | TDA4VM | MAX96724 |
| Others | Various SOCs | Compatible Deserializers |

**Note:** Other SOCs and deserializers may also be compatible. Please contact technical support for specific compatibility verification and configuration assistance.

### Q4: How does the video injection card synchronize with other sensors?

**A4:**

• **Data Collection Phase:** Original sensor data (Camera RAW/YUV, LiDAR point clouds, CAN messages) are timestamped with UTC time for alignment.

• **Video injection card** typically operates based on video frame generation timestamps, while LiDAR has point cloud data with inherent timing information, and CAN bus messages also have their own temporal markers. To achieve precise synchronization, a unified time reference must be established.

• **Playback Phase:** Supports users reading each sensor's timestamp on the PC side, calculating playback timing based on absolute time.

### Q5: Can external triggers and delays be configured?

**A5:** Yes, comprehensive trigger configuration is supported:
- Supports external triggering or internal triggering at a fixed frame rate.
- The external triggering function fully simulates the camera's trigger.
- Supports adjustable trigger delay. How should the delay time be set?

Configuration file: `fun_fpga_cfg.sh` location: `/usr/local/bin/`

```bash
./tools/reg_rw /dev/xdma0_user 0x30044 w 100
./tools/reg_rw /dev/xdma0_user 0x30048 w 100
./tools/reg_rw /dev/xdma0_user 0x3004c w 100
./tools/reg_rw /dev/xdma0_user 0x30050 w 100
./tools/reg_rw /dev/xdma0_user 0x30054 w 100
./tools/reg_rw /dev/xdma0_user 0x30058 w 100
./tools/reg_rw /dev/xdma0_user 0x3005c w 100
./tools/reg_rw /dev/xdma0_user 0x30060 w 100
```

### Q6: What is the synchronization precision between video channels?

**A6:** Exceptional synchronization performance:
- Synchronization accuracy: Less than 1μs precision between multiple channels
<!-- - Precise timing coordination across all active channels -->

### Q7: Does the video injection card support camera I2C configuration?

**A7:** Yes, comprehensive I2C support:
- Full simulation of camera I2C addresses
- Supports reading and writing registers

### Q8: What Ubuntu system versions are supported?

**A8:** Supported Ubuntu versions:
- Ubuntu 18.04, 20.04, and later versions
- Optimized for kernel compatibility across supported versions

### Q9: What are the complete technical specifications?

**A9:** CIG4-8H technical specifications:
- **Interface**: PCIe Gen3 x8
- **Power consumption**: 12W maximum
- **Operating temperature**: -40°C to +85°C
- **Maximum channels**: 8 simultaneous GMSL channels
- **Resolution support**: Up to 8MP per channel
- **Frame rate**: Up to 30fps per channel
- **GMSL compatibility**: GMSL1 and GMSL2 support
- **Cable length**: Up to 15 meters over coaxial cable
- **Connector type**: FAKRA connectors

### Q10: Where can I find additional support and documentation?

**A10:** SENSING support resources:
- **Technical documentation**: Complete user manuals and API documentation
- **Software development kit**: Full SDK with examples and tutorials
- **Technical support**: Direct access to engineering support team
- **Community resources**: User forums and knowledge base

For immediate assistance, contact our technical support team or visit our documentation portal.

### Q11: What SDK and API interfaces are available for custom applications?

**A11:** Our API interfaces:
- **Send Interface**: `int send_one_frame(unsigned char* buffer);`
- **Register Read/Write Interface**: `static int reg_rw(int addr, int write, int value);`

These APIs enable direct implementation of video injection logic. Use the register read/write interface to configure and save register settings, then utilize the send interface to achieve video injection functionality.

### Q12: How does the simulation software work with GPU acceleration?

**A12:** The simulation software leverages GPU acceleration for data generation through virtual transmission channels, then efficiently transfers the processed data to CPU memory via optimized video injection APIs to achieve seamless video injection functionality.

---

*This FAQ document is regularly updated to reflect the latest features and capabilities of the CIG4-8H Video Injection Card.*


