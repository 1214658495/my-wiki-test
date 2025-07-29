---
sidebar_position: 6
---

# FAQs for CCH3-8H

This document contains all the frequently asked questions related to the CCG3-8H. This will be very helpful if you are suffering from any issues when using the CCG3-8H.

## Common Issues and Solutions

### Q1: How to Resolve Script Execution Errors?

**Problem Description:**
When encountering step1 timeout errors during module loading, you may see error messages similar to:
```
Loading PCIe driver...insmod: ERROR: could not insert module ../xdma_v412/xdma.ko: Invalid module format
Error: PCIe driver did not load properly.
FAILED
```

**Solution:**
Execute the following commands in sequence to clean and rebuild:
```bash
make clean
make
```

**Additional Notes:**
- Ensure all dependencies are properly installed
- Verify kernel compatibility with the driver version
- Check system logs for detailed error information

---

### Q2: Camera Initialization Configuration for Different Camera Types

**Problem Description:**
When connecting different types of cameras, the initialization script parameters need to be configured according to the specific camera model.

**Solution:**
Modify the configuration file `pcie_init_cardx.sh` based on your camera type:

**Configuration Parameters:**
- `camera_serdes_type[0]` - Camera type identifier
- Values:
  - `0`: GMSL camera (indicates connected camera is GMSL type)
  - `1`: GMSL2(6G) camera (indicates connected camera is GMSL2 6G type)
  - `2`: GMSL2F(3G) camera (indicates connected camera is GMSL2F 3G type)

**Example Configuration:**
```bash
# For GMSL camera configuration
camera_serdes_type[0]=0
camera_serdes_type[1]=1
camera_serdes_type[2]=1
camera_serdes_type[3]=1
camera_serdes_type[4]=1
camera_serdes_type[5]=1
camera_serdes_type[6]=1
camera_serdes_type[7]=1
```

---

### Q3: How Do Image Capture Cards Achieve Synchronization?

<!-- **Answer:** -->

**Method 1 (Recommended):** For detailed instructions, please Refer to the links below

-[Network Topology Diagram1](https://autosensee.feishu.cn/docx/CKDYdlrlkoWvTpx39wvcSHzCnyf)

**Connection Requirements:**
1. **Primary Connection**: ETH0 on master node (IPC) connects to CCG3 capture card (slave)
2. **GPS Integration**: GPS module connects to the capture card for timing synchronization
3. **PTP Protocol**: Enables precise time synchronization between devices
<br/>

**Method 2:** For detailed instructions, please Refer to the links below
<!-- ```
GPS → Time Synchronization Box → GMSL Camera Array
 ↓                    ↓                    ↓
PTP →         Ethernet Switch  → Multiple Cameras
 ↓                    ↓                    ↓
Lidar →         PTP Sync       → Capture Card System
``` -->

-[Network Topology Diagram2](https://autosensee.feishu.cn/docx/ErBzdsOkFowOt0xTc5ecdAvgnqe)

<!-- **Additional Resources:**
- [PTP Configuration Guide](../guides/ptp-configuration.md)
- [Troubleshooting Network Issues](../guides/network-troubleshooting.md) -->

---
<!--
### Q4: Time Synchronization and PTP Configuration

**System Architecture Diagram:**

```
GPS → Time Synchronization Box → GMSL Camera Array
 ↓                    ↓                    ↓
PTP → Ethernet Switch → Multiple Cameras
 ↓                    ↓                    ↓
Lidar → PTP Sync → Capture Card System
```

**Configuration Steps:**

1. **Hardware Setup:**
   - Connect GPS to Time Synchronization Box
   - Connect cameras to GMSL interface
   - Establish PTP network through Ethernet switch
   - Connect Lidar with PTP synchronization

2. **Software Configuration:**
   - Configure PTP master/slave relationships
   - Set up timing parameters
   - Validate synchronization accuracy

**Key Points:**
- Ensure all devices support PTP protocol
- Verify timing accuracy requirements
- Monitor synchronization status regularly

--- -->

### Q4: PPS External Trigger Configuration

**TTL Trigger Usage Method 1:**
The capture card's [GPS] interface defines the following 2 interfaces (red and green) for connecting an external TTL trigger square wave, and configuring the corresponding script parameters.

**Pin Configuration Table:**

| Red Pin | White Pin | Green Pin | Blue Pin | Black Pin | Black Pin |
|------------|-------------|---------|---------|------------|----------|
| PPS Pin    | UART_RX     | GND     | -  | UART_TX    | GND |

**GPS Configuration Details:**

When using GPS as the timing source, configure the following parameters:

```bash
<file name：pcie_init_cardx.sh>
# Trigger mode config {0:no trigger; 1:reserved; 2:inner trigger; 3:external trigger}
card_trigger_signal_mode               "3"

# Card external signal input fps config.
# Camera external output fps config.
# The following two configurations are valid only when card_trigger_signal_mode is "3".
card_external_signal_input_fps         "1" Hz
camera_external_output_fps             "20" Hz

# Camera inner output fps config
camera_inner_output_fps                "30" Hz
```

**TTL Trigger Usage Method 2:**
If there is no external TTL trigger available, the capture card can internally generate a variable TTL trigger (only applicable for camera synchronization on a single capture card). These settings can be flexibly configured through script parameters (as shown in the red settings below: indicating the generation of a 30Hz synchronization TTL signal from within the capture card).

```bash
<file name：pcie_init_cardx.sh>
# Trigger mode config {0:no trigger; 1:reserved; 2:inner trigger; 3:external trigger}
card_trigger_signal_mode               "2"

# Card external signal input fps config.
# Camera external output fps config.
# The following two configurations are valid only when card_trigger_signal_mode is "3".
card_external_signal_input_fps         "1" Hz
camera_external_output_fps             "20" Hz

# Camera inner output fps config
camera_inner_output_fps                "30" Hz
```

---
