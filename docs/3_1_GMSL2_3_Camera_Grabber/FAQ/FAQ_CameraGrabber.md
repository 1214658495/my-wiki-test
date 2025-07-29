---
sidebar_position: 6
---

# FAQs for CCH3-8H

This document contains all the frequently asked questions related to the CCG3-8H. This will be very helpful if you are suffering from any issues when using the CCG3-8H.

## Common Issues and Solutions

### Q1: How to Resolve Step1 Timeout Issues?

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

### Q3: Network Card Connection Issues

**Problem Description:**
Issues with network card connectivity and proper cable connections.

**Network Topology Diagram:**

```
Master Node (ETH0)
├── CCC Capture Card (slave)
│   ├── ETH
│   └── GPS
└── Connection Details
```

**Connection Requirements:**
1. **Primary Connection**: ETH0 on master node connects to CCC capture card
2. **GPS Integration**: GPS module connects to the capture card for timing synchronization
3. **Cable Specifications**: Use appropriate Ethernet cables for stable connection

**Troubleshooting Steps:**
1. Verify physical cable connections
2. Check network interface status
3. Validate IP configuration
4. Test connectivity with ping commands

---

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

---

### Q5: PPS External Trigger Configuration

**Problem Description:**
Configuring external PPS (Pulse Per Second) triggers for precise timing control.

**Configuration Method:**
Use ITL trigger format with the following specifications:

**Pin Configuration Table:**

| Pin Number | Signal Name | Ground | Signal | Color Code | External |
|------------|-------------|---------|---------|------------|----------|
| PPS Pin    | UART_RX     | GND     | Signal  | UART_TX    | External |

**GPS Configuration Details:**

When using GPS as the timing source, configure the following parameters:

```bash
# Trigger mode configuration
card_trigger_signal_mode = "1"  # Enable external trigger

# Camera external signal input configuration
card_external_signal_input_fps = "25" Hz

# Camera external output configuration
camera_external_output_fps = "25" Hz

# Timer output configuration
camera_timer_output_fps = "30" Hz
```

**ITL Trigger Usage:**
- Connect external trigger source to designated ITL trigger pins
- Configure trigger signal parameters according to camera specifications
- Validate trigger timing accuracy and stability

**Important Notes:**
- Ensure proper grounding for signal integrity
- Use appropriate cable shielding for noise reduction
- Test trigger functionality before production deployment

---

### Q6: Graphics Card Compatibility Issues

**Problem Description:**
Compatibility issues between different graphics card models and the capture system.

**Solution Approach:**

**Method 1 - Single Card Configuration:**
For systems with single graphics card setup, refer to the CCC capture card configuration guide and follow the PTP timing synchronization setup.

**Method 2 - Multi-Card Setup:**
For detailed multi-card configuration with timing synchronization, refer to the comprehensive setup guide that includes:

**System Integration Diagram:**

```
Time Synchronization Box ──→ GMSL Camera Array
         │                           │
         ├── GPS Input               ├── Camera 1-8
         │                           │
         ├── PTP Distribution        ├── Ethernet Switch
         │                           │
         └── TTL Trigger ────────────┴── Capture Card System
                                           │
                                           ├── PCIe Interface
                                           │
                                           └── Host Computer
```

**Configuration Requirements:**
1. **Hardware Compatibility:**
   - Verify PCIe slot compatibility
   - Check power supply requirements
   - Ensure adequate cooling

2. **Driver Installation:**
   - Install latest graphics drivers
   - Configure capture card drivers
   - Validate driver compatibility

3. **Performance Optimization:**
   - Configure memory allocation
   - Set up DMA transfers
   - Optimize data throughput

**Troubleshooting Steps:**
1. Check hardware detection in system
2. Verify driver installation status
3. Test basic functionality
4. Monitor system performance
5. Validate data capture quality

---


*This FAQ document is regularly updated to reflect the latest features and capabilities of the CCG3-8H.*

