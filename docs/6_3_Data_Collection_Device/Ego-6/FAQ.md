---
sidebar_position: 3
sidebar_label: FAQ
title: Ego-6 FAQ
description: Frequently asked questions and troubleshooting for the Ego-6 head-mounted six-camera data collection device
keywords: [Ego-6, FAQ, troubleshooting, EGOTool, SD card, MCAP, Foxglove]
---

# Ego-6 FAQ

## Connection and Preview

### EGOTool cannot connect to the device

1. Make sure the battery is attached and the LED indicator is on.
2. Make sure the Type-C data cable is connected and an "Unidentified network" adapter appears in the Windows network settings.
3. Make sure the adapter has a manual IP on the same subnet (for example `192.168.140.21`, subnet mask `255.255.255.0`).
4. In EGOTool, make sure the device IP is `192.168.140.20` and the port is `58889`, then click **Connect device**.

See [User Manual · Connecting EGOTool](/docs/6_3_Data_Collection_Device/Ego-6/User_Manual#connecting-egotool).

### The preview flickers or stutters

This happens when the PC cannot decode the live streams fast enough — **it is not a device fault**. Live preview is only for checking the image; the recording on the SD card is the source of truth and does not drop frames because of this.

### How do I know the device is on? What do the LED colors mean?

The LED indicator is next to the record button on the right side of the device. If it is lit, the device is powered on:

| LED color | Status |
|-|-|
| Purple | Recording |
| White | Recording stopped |

## SD Card and Recording

### The device does not record, or EGOTool cannot show the SD card space

This is most likely caused by a **fake or incompatible card**:

- Switch to a tested card: **MoveSpeed A1 V30**, **Biwin**, etc.
- Check the real capacity with **H2testw** before use.
- Format the SD card as **exFAT**; ≤ 256 GB is recommended.

Some SanDisk A1 / V10 consumer cards are known not to work with this device.

### How do I power off correctly?

**Stop recording first, wait until the recording is saved, then remove the battery.** Never cut power while recording, or data may be lost.

### The device will not charge

When the battery is **very low**, connecting a Type-C charger directly to the device will not charge it. Remove the magnetic battery and charge it with the **battery charging accessory**. A full charge lasts about 3 hours.

### Long recordings play back slowly or use a lot of memory

Keep individual recordings shorter, or split them by session.

## Viewing Data

### Foxglove Studio shows no image after opening a file

- An empty main view after opening a file is normal. Import the layout file `Ego-Foxglove-Layout.json` (layout button at the top right → Import from file…), or add image panels manually.
- Make sure you opened the `.mcap` file itself.
- Make sure you are using a recent version of Foxglove Studio (with H.265 support).

See [User Manual · Viewing Recordings in Foxglove Studio](/docs/6_3_Data_Collection_Device/Ego-6/User_Manual#viewing-recordings-in-foxglove-studio).

### Can I open recordings with VLC or another media player?

No. `.mcap` is a multi-sensor data container, not a regular video file. Use Foxglove Studio.

### What is an MCAP file?

MCAP is an open-source, modular container file format for robotics and autonomous driving, created by Foxglove. It packs multiple sensor streams — camera images, IMU data and more — by timestamp into a single file for playback and analysis. It serves the same purpose as ROS bags (`.bag` / `.db3`) but offers better read/write performance, has official SDKs for C++ / Python / Rust / Go, and is the default storage format of ROS 2 rosbag2.

The `.mcap` file you get from an Ego-6 session contains everything the device saw and sensed during that time. Open it in Foxglove Studio for algorithm debugging, data labeling and issue reproduction.

## Glossary

| Term | Meaning |
|-|-|
| **Egocentric capture** | Data collection from the wearer's first-person perspective. |
| **MCAP** | Multi-sensor recording container format natively supported by Foxglove, with embedded message schemas. |
| **IMU** | Inertial measurement unit; used here to record head pose. |

## Technical Support

If your question is not answered here, contact [support@sensing-world.com](mailto:support@sensing-world.com) or call +86-755-28990915.
