---
sidebar_position: 4
---


# FAQs for GMSL2 Camera Splitter

This document contains all the frequently asked questions related to GMSL2 Camera Splitter products. This will be very helpful if you are suffering from any issues when using the GMSL2 Camera Splitter.



#### Camera Not Working

**Q1**: Splitter with non-SENSING camera Instructions?  

1. You need to confirm the following information that needs to be adapted to the camera.

| # | Camera Specifications | reference |
|---|--------|-----------|
| 1 | Image output format | eg. RAW12、RAW16、YUV-422 |
| 2 | Embedded data | eg. Whether the camera outputs EBD data? YES/No |
| 3 | Cmos model | eg. AR0820、AR0233 |
| 4 | Serializer model | eg. MAX9295、MAX9671TF |
| 5 | Fsin pin | eg. MFP7、MFP8 |
| 6 | Reset pin | eg. MFP0 |

| # | Platform Controller | reference |
|---|-------------------|-----------|
| 1 | Deserializer model | eg. MAX9296、MAX9671Z |
| 2 | CSI output frequency | eg. lane rate |

2. The camera needs to be given to SENSING for adaptation verification.
3. After SENSING is adapted, you can use the camera and splitter according to the first point above.

**Q2**: Can the Splitter support poc reset?  

1. the Splitter is powered externally by default and cannot be powered through the backend POC.
2. If you need to reset the Splitter, you need to power off the Splitter first, and then power it on again.

**Q3**: Can the Splitter be connected to a GMSL(max96705) camera? 

1. By default, the Splitter should be connected to the GMSL2 camera. If it is connected to the GMSL(max96705) camera, the firmware of the Splitter needs to be updated. The firmware is specifically adapted to GMSL(max96705) camera.



For more technical support, visit the [SENSING Technical Forum](https://sensing-world.com/) or contact our technical 