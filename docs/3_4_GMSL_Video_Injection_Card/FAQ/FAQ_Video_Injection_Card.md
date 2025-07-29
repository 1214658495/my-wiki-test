---
sidebar_position: 1
---

# FAQs for CIG4-8H

This document contains frequently asked questions related to the CIG4-8H GMSL Video Injection Card.

<!-- ![SENSING Logo](/img/SENSING_logo_en2.png) -->

### Q1: How do I troubleshoot issues with CIG4-8H?

**A1:** Follow these systematic troubleshooting steps:
- Ensure all GMSL cables are properly connected
- Verify power supply connections (12V DC)
- Check LED status indicators on the card
- Confirm driver installation is complete
- Verify device recognition in system

### Q2: What are the key specifications of the video injection card?

**A2:** The CIG4-8H offers:
- **Maximum GMSL video output**: Industry-leading performance
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

### Q4: How does the video injection card handle synchronization?

**A4:** Advanced synchronization features:
- Real-time synchronization with no additional steps required
- Multi-sensor coordination between workstation and camera control
- Synchronized data transmission and collection in real-time

### Q5: Can external triggers and delays be configured?

**A5:** Yes, comprehensive trigger configuration is supported:
- External trigger sources or fixed-frequency triggers
- Complete simulation of camera trigger behavior
- Configurable timing intervals (minimum delay: < 1ms, example: 3ms)
- Default setting: 3000 (current: 600ms maximum)

Configuration file: `fun_fpga_cfg.sh` location: `/us`

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
- Precise timing coordination across all active channels

### Q7: Does the video injection card support camera I2C configuration?

**A7:** Yes, comprehensive I2C support:
- Full simulation of camera I2C addresses
- Configurable I2C communication speeds

### Q8: What Ubuntu system versions are supported?

**A8:** Supported Ubuntu versions:
- Ubuntu 18.04, 20.04, and later versions
- Optimized for kernel compatibility across supported versions

### Q9: What are the complete technical specifications?

**A9:** CIG4-8H technical specifications:
- **Interface**: PCIe Gen3 x8
- **Power consumption**: 25W maximum
- **Operating temperature**: -40°C to +85°C
- **Maximum channels**: 8 simultaneous GMSL channels
- **Resolution support**: Up to 8MP per channel
- **Frame rate**: Up to 30fps per channel
- **GMSL compatibility**: GMSL1 and GMSL2 support
- **Cable length**: Up to 15 meters over coaxial cable
- **Connector type**: FAKRA or SMA connectors

<!-- ![Technical Specifications](/img/SENSING_logo_Homepage.png) -->

### Q10: What advanced configuration options are available?

**A10:** Advanced configuration guidelines:
- **Multi-Card Scalability**: Ensure adequate PCIe lanes and power supply
- **Thermal management**: Proper cooling for multi-card configurations
- **Fault injection**: Built-in fault injection for testing robustness
- **Performance optimization**: Buffer management and CPU affinity configuration
- **Memory allocation**: Ensure sufficient system memory allocation

### Q11: Where can I find additional support and documentation?

**A11:** SENSING support resources:
- **Technical documentation**: Complete user manuals and API documentation
- **Software development kit**: Full SDK with examples and tutorials
- **Technical support**: Direct access to engineering support team
- **Community resources**: User forums and knowledge base

For immediate assistance, contact our technical support team or visit our documentation portal.

---

*This FAQ document is regularly updated to reflect the latest features and capabilities of the CIG4-8H Video Injection Card.*


