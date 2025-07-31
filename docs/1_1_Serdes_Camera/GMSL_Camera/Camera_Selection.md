---
sidebar_position: 1
---

# GMSL Camera Selection Guide

## Introduction

GMSL (Gigabit Multimedia Serial Link) cameras are high-performance imaging solutions designed for demanding applications such as autonomous driving, robotics, and industrial automation. These cameras utilize SerDes technology to transmit high-resolution video, control signals, and power over a single coaxial cable at distances up to 15 meters.

## Selection Criteria

When selecting a GMSL camera for your application, consider these key factors:

- **Resolution**: Match the resolution to your specific requirements (720p to 4K)
- **Frame Rate**: Higher frame rates capture faster movements but require more bandwidth
- **Sensor Type**: Different manufacturers offer varying levels of sensitivity and performance
- **Output Format**: YUV422, RAW12, or other formats affect downstream processing
- **Physical Form Factor**: Consider mounting constraints in your application

## Product Table

<div style={{overflowX: 'auto'}}>
| No. | Products | Sensor | Resolution | Frame Rate | Output Data | Product Links |
|:---|:-----------------------------|:----------------------|:--------------|:----------|:--------------|:-----|
| 1 | SG1-OX01F10C-GMSL-Hxxx | OMNIVISION OX01F10 RGGB | 1280H*720V | 30fps | YUV422@8bit | [View Details](https://sensing-world.com/en/h-pd-15.html?recommendFromPid=0&fromMid=1546) |
| 2 | SG1S-OX01F10C-G1G-Hxxx | OMNIVISION OX01F10 RGGB | 1280H*960V | 30fps | YUV422@8bit | [View Details](https://sensing-world.com/en/h-pd-142.html?recommendFromPid=0&fromMid=1546) |
| 3 | SG2-AR0231C-0202-GMSL-Hxxx | ONSEMI AR0231 RGGB | 1920H*1080V | 22fps | YUV422@8bit | [View Details](https://sensing-world.com/en/h-pd-160.html?recommendFromPid=0&fromMid=1546) |
| 4 | SG2-AR0233C-5200-G2A-Hxxx | ONSEMI AR0233 RGGB | 1920H*1080V | 30fps | YUV422@8bit | [View Details](https://sensing-world.com/en/h-pd-18.html?recommendFromPid=0&fromMid=1544) |
| 5 | SG2-IMX390C-5200-G2A-Hxxx | SONY IMX390 RGGB | 1920H*1080V | 30fps | YUV422@8bit | [View Details](https://sensing-world.com/en/h-pd-156.html?recommendFromPid=0&fromMid=1544) |
| 6 | SG2S-OX03CC-G2F-Hxxx | OMNIVISION OX03C10 RGGB | 1920H*1080V | MAX 60fps | MIPI / RAW 12 | [View Details](https://sensing-world.com/en/h-pd-106.html?recommendFromPid=0&fromMid=1544) |
| 7 | SH2-N1B60-G2A-Hxxx | ONSEMI AR0233 RGGB | 1920H*1080V | 60fps | YUV422@8bit | [View Details](https://sensing-world.com/en/h-pd-182.html?recommendFromPid=0&fromMid=3596) |
| 8 | SH3-S11A60-G2A-Hxxx | SONY ISX031 RGGB | 1920H*1536V | 60fps | YUV422@8bit | [View Details](https://sensing-world.com/en/h-pd-183.html?recommendFromPid=0&fromMid=3596) |
| 9 | SG3S-ISX031C-GMSL2F-Hxxx | SONY ISX031 RGGB | 1920H*1536V | 30fps | YUV422@8bit | [View Details](https://sensing-world.com/en/h-pd-23.html?recommendFromPid=0&fromMid=1544) |
| 10 | SG3S-OX03JC-G2F-Hxxx | OMNIVISION OX03J10 RGGB | 1920H*1536V | 30fps | YUV422@8bit | [View Details](https://sensing-world.com/en/h-pd-136.html?recommendFromPid=0&fromMid=1544) |
| 11 | SG3S-IMX623C-G2F-Hxxx | SONY IMX623 RGGB | 1920H*1536V | MAX 60fps | MIPI / RAW 12 | [View Details](https://sensing-world.com/en/h-pd-108.html?recommendFromPid=0&fromMid=1544) |
| 12 | SG5-IMX490C-5300-GMSL2-Hxxx | SONY IMX490 RGGB | 2880H*1860V | 30fps | YUV422@8bit | [View Details](https://sensing-world.com/en/h-pd-24.html?recommendFromPid=0&fromMid=1544) |
| 13 | SG8S-AR0820C-5300-G2A-Hxxx | ONSEMI AR0820 RGGB | 3840H*2160V | 30fps | YUV422@8bit | [View Details](https://sensing-world.com/en/h-pd-26.html?recommendFromPid=0&fromMid=1544) |
| 14 | SG8-IMX728C-G2G-Hxxx | SONY IMX728 RGGB | 3840H*2160V | MAX 30fps | MIPI / RAW 12 | [View Details](https://sensing-world.com/en/h-pd-132.html?recommendFromPid=0&fromMid=1544) |
| 15 | SG8-ISX028C-G2G-Hxxx | SONY ISX028 RGGB | 3840H*2160V | 30fps | YUV422@8bit | [View Details](https://sensing-world.com/en/h-pd-274.html?recommendFromPid=0&fromMid=1544) |
</div>

## Sensor Manufacturer Comparison

Our GMSL cameras feature image sensors from three leading manufacturers:

- **Sony**: Excellent low-light performance and wide dynamic range
- **OMNIVISION**: Cost-effective solutions with solid overall performance
- **ONSEMI**: Well-balanced performance for automotive and industrial applications

## Integration Resources

After selecting your camera, refer to these resources:

<!-- - [Getting Started Guide](./Getting_Started/index.md) -->
- <a href="./List_of_Platform_Compatible_with_Camera" target="_blank" rel="noopener noreferrer">Platform Compatibility List</a>
- <a href="./Getting_Camera_Information" target="_blank" rel="noopener noreferrer">Getting Camera Information</a>

:::tip
- All product pages feature downloadable datasheets, 3D models, and SerDes configuration files
- All cameras support GMSL/GMSL2 protocol for reliable high-speed data transmission
- Table supports horizontal scrolling for better viewing on mobile devices
:::
