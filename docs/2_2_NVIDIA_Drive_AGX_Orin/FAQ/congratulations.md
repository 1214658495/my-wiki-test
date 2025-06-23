---
sidebar_position: 1
---

# FAQs for NVIDIA Drive AGX Orin

This document contains all the frequently asked questions related to NVIDIA Drive AGX Orin products. This will be very helpful if you are suffering from any issues when using the NVIDIA Drive AGX Orin.


#### Camera Not Working

**A1**: Camera doesn't display image after driver installation?  
**Solution**:
1. Check if the camera is properly connected
2. Confirm that you selected the correct camera model and port
3. Check if the drivers were successfully loaded using `dmesg | grep -i max`

#### System Performance Issues

**A2**: System performance decreases when running multiple cameras?  
**Solution**:
1. Check if cooling is adequate
2. Use the `sudo jetson_clocks` command to fix clock frequencies for best performance

For more technical support, visit the [SENSING Technical Forum](https://sensing-world.com/) or contact our technical support team.
