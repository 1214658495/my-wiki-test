---
sidebar_position: 1
---

# FAQs for NVIDIA Jetson AGX Thor

This document contains all the frequently asked questions related to NVIDIA Jetson AGX Thor products. This will be very helpful if you are suffering from any issues when using the NVIDIA Jetson AGX Thor.


#### Camera Not Working

**Q1**: Camera doesn't display image after driver installation?  

1. Check if the camera is properly connected
2. Confirm that you selected the correct camera model and port
3. Check if the drivers were successfully loaded using `dmesg | grep -i max`

#### System Performance Issues

**Q2**: System performance decreases when running multiple cameras?  

1. Check if cooling is adequate
2. Use the `sudo jetson_clocks` command to fix clock frequencies for best performance

For more technical support, visit the [SENSING Technical Forum](https://sensing-world.com/) or contact our technical support team.
