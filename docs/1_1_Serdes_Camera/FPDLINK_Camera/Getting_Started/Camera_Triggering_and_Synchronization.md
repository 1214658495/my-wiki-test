---
sidebar_position: 4
---

# Camera Triggering and Synchronization Guide

## 1. System Overview
The system consists of a Controller [including SoC and Deserializer], Cameras [including Serializer and Sensor], and other devices. SENSING's main product is the Camera.


<div style={{textAlign: 'center'}}>
    <img src="https://raw.githubusercontent.com/1214658495/myWikiFiles/main/Camera/Camera_Fsync.png" alt="Camera_Fsync" style={{width: 760, height:'auto'}} />
</div>

<br />
- An external Fsync signal is provided to the Controller. This signal is routed through the Controller's Deserializer and transparently forwarded to the Serializers of multiple cameras, enabling simultaneous hardware triggering. 
- Both the Deserializer and Serializers must be properly configured to support Fsync signal passthrough.
- The same Fsync signal can also be distributed to LiDAR or other sensors, achieving multi-sensor hardware-level synchronization.
- As this is a hardware-based synchronization, the propagation delay of the Fsync signal and data transmission latency are negligible (typically in the microsecond range).


## 2. Verifying Synchronization
- The recommended method is to print and compare timestamps for each frame on the camera or controller side.
- If the timestamps from multiple cameras are closely aligned (or identical), synchronization is considered successful.

<div style={{textAlign: 'center'}}>
    <img src="https://raw.githubusercontent.com/1214658495/myWikiFiles/main/Camera/TimeStemp.png" alt="Camera_Fsync" style={{width: 460, height:'auto'}} />
</div>

## 3. Fsync Signal Specifications
- The Fsync signal should meet specific requirements, including voltage level, pulse width, and frequency. Refer to your hardware documentation for detailed parameters.

<div style={{textAlign: 'center'}}>
    <img src="https://raw.githubusercontent.com/1214658495/myWikiFiles/main/Camera/TriggerFsync.png" alt="Camera_Fsync" style={{width: 460, height:'auto'}} />
</div>

## 4. Register Configuration Example
Below is a typical register configuration for enabling Fsync passthrough. Adjust addresses and values according to your hardware datasheet.  
- The following configuration transfer ub954-GPIO0 frameSync to ub953-GPIO0 and use ub954-GPIO0 as frameSync input.
```c
#!/bin/bash


# ub954 LinkA Initialization to pair with FPDLINK Serializers
#
# Use ub954's linkA input and port0 output
# ub954 I2C address: 0x3D(7Bit)Designed according to customer hardware
# ub953 I2C address: 0x18(7Bit)consistent


#Command description:
#i2cset -f -y 1 0x48 0x06 0xEF

# “1” represents the I2C bus number.It is subject to the actual situation 
#    of the customer's own platform.
# “0x48” represents the I2C address of the deserializer.
# “0x06” represents the register address of the deserializer
# “0xEF” represents the value corresponding to the deserializer register address.


#reset ub954
i2cset -f -y 1 0x3D 0x01 0x02
sleep 0.3
#choose port0
i2cset -f -y 1 0x3D 0x4c 0x01
i2cset -f -y 1 0x3D 0x20 0x20

#choose port1
#i2cset -f -y 1 0x3D 0x4c 0x12
#i2cset -f -y 1 0x3D 0x20 0x10

i2cset -f -y 1 0x3D 0x58 0x5E
#set ub954  I2C address alias
i2cset -f -y 1 0x3D 0x5C 0x30
#set camera  I2C address 
i2cset -f -y 1 0x3D 0x5D 0x20
#set camera  I2C address alias
i2cset -f -y 1 0x3D 0x65 0x20
#mipi lane rate 800Mbps
i2cset -f -y 1 0x3D 0x1F 0x02
#Enable mipi output, 4-lane, continuous clock mode
i2cset -f -y 1 0x3D 0x33 0x03
sleep 0.3

#reset ub953
i2cset -f -y 1 0x18 0x01 0x02
sleep 0.3
#4-lane, continuous clock mode
i2cset -f -y 1 0x18 0x02 0x73

#set GPIO0、GPIO1 outputEnable
i2cset -f -y 1 0x18 0x0E 0x3C
#GPIO0 output, remote control
i2cset -f -y 1 0x18 0x0D 0xD2
#transfer ub954-GPIO0 frameSync to ub953-GPIO0
i2cset -f -y 1 0x3D 0x0F 0x7F
sleep 0.3
i2cset -f -y 1 0x3D 0x10 0x00
i2cset -f -y 1 0x3D 0x18 0x84
i2cset -f -y 1 0x3D 0x6E 0x8A
```

> **Note:** Always consult your device's datasheet for the correct register addresses and configuration values.

:::tip
For additional configuration options or specific requirements, please contact our technical support team for assistance.
:::
