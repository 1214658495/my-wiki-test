---
sidebar_position: 2
sidebar_label: User Manual
title: EgoSense H6 User Manual
description: How to power on, record, connect EGOTool, export data and play back recordings in Foxglove Studio with the EgoSense H6 head-mounted six-camera data collection device
keywords: [EgoSense H6, user manual, EGOTool, Foxglove, MCAP, SD card]
---

import AnnotatedImage from '@site/src/components/AnnotatedImage';

export const IMG = 'https://sgword-service.oss-cn-heyuan.aliyuncs.com/wiki-images/6_3_Data_Collection_Device/Ego-6/img';
export const SRC = 'https://sgword-service.oss-cn-heyuan.aliyuncs.com/wiki-images/6_3_Data_Collection_Device/Ego-6/source';

# EgoSense H6 User Manual

This manual is for device operators. A single **Windows PC** (with EGOTool and Foxglove Studio installed) is all you need to record, view and export data — **no command line, Python or Linux required**.

## Package Contents

| No. | Item |
|-|-|
| 1 | EgoSense H6 device (a Micro SD card is pre-installed) |
| 2 | EgoSense magnetic battery |
| 3 | Charger |
| 4 | Charging cable |
| 5 | Battery charging accessory |

:::tip You will also need
- A Windows PC with **EGOTool** and **Foxglove Studio** installed
- A USB Type-C data cable (for live preview on the PC)
- A card reader (for exporting data)
:::

## Getting to Know the Device

<div style={{background: '#fff', borderRadius: 8, padding: 12, marginBottom: 16}}>
  <img src={`${IMG}/ego6_overview_en.png`} alt="EgoSense H6 device overview and parts" style={{display: 'block', width: '100%'}} />
</div>

| Part | Description |
|-|-|
| **Six cameras** | Two front-facing lenses (stereo) plus two lenses on each side, capturing 6 video streams. Keep the lenses clean and unobstructed while wearing the device. |
| **Head pose sensor (IMU)** | Records head orientation and rotation. No operation needed. |
| **Record button** (capture button) | On the right side of the headband. Starts / stops recording, with a voice prompt. |
| **LED indicator** | Next to the record button. Lights up when powered on; **purple while recording, white after recording stops**. |
| **SD card slot** (TF card slot) | At the rear of the device. Recordings are saved to the Micro SD card (pre-installed at the factory). |
| **USB Type-C port** | At the rear of the device. Connect to a Windows PC for live preview and control with EGOTool. |
| **Magnetic battery** | Snap-on magnetic battery; the device powers on as soon as it is attached. |
| **Volume up/down buttons** | On the opposite side from the record button. Adjust the voice prompt volume. |

Device status (battery level, temperature, SD card usage, etc.) can be viewed in EGOTool.

## SD Card Selection and Preparation

A Micro SD card is included with the device, and **an SD card must be inserted to record**. If you replace it, note the following:

- **File system**: format as **exFAT**.
- **Capacity**: **≤ 256 GB** recommended.
- **Choosing a card**: counterfeit and low-grade cards are common. **Fake or incompatible cards can cause the SD card not to be detected or the device not to record.**
  - ✅ Tested and working: **MoveSpeed A1 V30**, **Biwin**, etc. Buy from reputable sellers.
  - ❌ Known incompatible: some **SanDisk A1 / V10** consumer cards do not work with this device.
- **Verify real capacity (recommended)**: before first use, check new cards with **H2testw** on Windows to confirm the real capacity and avoid corrupted recordings caused by fake-capacity cards.

## Power On, Record and Power Off

1. Make sure the SD card is inserted.
2. Attach the magnetic battery. The device powers on and the LED lights up.
3. (Optional) Connect the device to a Windows PC with a Type-C data cable and open EGOTool for live preview — see [Connecting EGOTool](#connecting-egotool).
4. Press the record button. A voice prompt announces that recording has started and **the LED turns purple**. You can also click the **Start Recording** button in EGOTool.
5. When finished, press the record button again. A voice prompt announces that recording has stopped and **the LED turns white**. Wait until the recording is saved, then remove the battery.

<div className="row">
<div className="col col--6">

<AnnotatedImage
  src={`${IMG}/ego6_led_recording.jpg`}
  alt="LED is purple while recording"
  caption="Recording"
  items={[{at: [64.4, 53.2], label: [80, 78], text: 'LED is purple'}]}
/>

</div>
<div className="col col--6">

<AnnotatedImage
  src={`${IMG}/ego6_led_stopped.jpg`}
  alt="LED is white after recording stops"
  caption="Recording stopped"
  items={[{at: [65.2, 53.8], label: [80, 78], text: 'LED is white'}]}
/>

</div>
</div>

:::warning Always stop recording before powering off
Stop recording and wait until the file is saved before removing the magnetic battery. **Never cut power while recording**, or the data being written may be lost.
:::

## Charging

- A fully charged battery lasts about **3 hours**.
- When the battery is **very low**, connecting a Type-C charger directly to the device **will not charge it**. Remove the battery and charge it with the **battery charging accessory**.

## Connecting EGOTool

EgoSense H6 uses the Windows host software EGOTool for live preview and recording control.

### Install EGOTool

- Package: **`EGOTool_V1.0.5.zip`** (see [Downloads](#downloads)).
- Unzip it — no installation needed — and double-click **`EGOTool.exe`** to run it.

:::info EGOTool language
Starting with V1.0.5, EGOTool offers both **English and Simplified Chinese** interfaces. Switch languages from the drop-down in the top-right corner of the window. The screenshots on this page show the V1.0.5 English interface.
:::

### Configure the PC Network

Over USB Type-C, the device appears on the PC as a virtual network adapter. Give this adapter a static IP address on the same subnet as the device.

1. Attach the battery to power on the device, and connect the device to the PC with a Type-C data cable.
2. On Windows, open **Settings → Network & internet → Ethernet** and find the newly added network.
3. Change the adapter's IP assignment to **Manual** and enter:

   | Item | Value |
   |-|-|
   | IPv4 address | `192.168.140.21` (any unused address on the same subnet, but not the device IP `192.168.140.20`) |
   | Subnet mask | `255.255.255.0` |

<AnnotatedImage
  src={`${IMG}/ego6_network_ip_en.png`}
  alt="Configure the virtual network adapter IP"
  maxWidth={640}
  items={[
    {box: [2.2, 13, 21.5, 8.8], text: 'The device adapter shows as "Unidentified network, No Internet" — this is normal'},
    {box: [4, 43.6, 47.5, 15.4], text: 'Set IP assignment to Manual and enter the IPv4 address and subnet mask'},
  ]}
/>

### Connect to the Device

Open EGOTool, check the device IP and port on the **Communication** tab, then click the connect button:

<AnnotatedImage
  src={`${IMG}/ego6_egotool_main_en.jpg`}
  alt="EGOTool connect to device"
  items={[
    {box: [69.3, 8.5, 29.5, 6.3], text: 'Device IP (selectable from the drop-down) and port 58889'},
    {box: [69.4, 16.2, 29.2, 3.7], text: 'Connect to the device. Once connected the button reads Disconnect; click it again to disconnect'},
  ]}
/>

## Live Preview and Recording

Once connected, EGOTool shows the six live camera views and the device status. The video below walks through the EGOTool interface:

<video
  src={`${SRC}/EGOTool_app_UI_en.mp4`}
  poster={`${IMG}/ego6_egotool_main_en.jpg`}
  controls
  muted
  playsInline
  preload="metadata"
  style={{width: '100%', borderRadius: 8, marginBottom: 16}}
/>

### EGOTool Interface Glossary

<AnnotatedImage
  src={`${IMG}/ego6_egotool_main_en.jpg`}
  alt="EGOTool main window glossary"
  items={[
    {box: [1.2, 5.6, 66.7, 94], text: 'Live view of the six cameras (View 1 ~ 6)'},
    {box: [79.4, 0, 8.5, 2.8], text: 'Interface language: English / Simplified Chinese'},
    {box: [69.4, 4.8, 20.4, 2.8], text: 'Communication / Start Stream tabs'},
    {box: [69.3, 8.5, 29.5, 6.3], text: 'Device IP and port'},
    {box: [69.4, 16.2, 29.2, 3.7], text: 'Connect / Disconnect'},
    {box: [69.4, 31.8, 13.9, 3.7], text: 'Start / stop recording'},
    {box: [84.8, 31.8, 13.9, 3.7], text: 'Set System Time'},
    {box: [69.3, 36.8, 27.2, 3], text: 'Tabs: Storage Settings / Factory Capture / Log'},
    {box: [69.7, 40.8, 28.5, 3.6], text: 'Recorded views: All, or channels 1 ~ 6 individually'},
    {box: [69.7, 44.9, 28.5, 3.4], text: 'Record IMU / Record Audio'},
    {box: [69.7, 48.9, 28.5, 3.5], text: 'Recording resolution: width × height (default 1600 × 1300)'},
    {box: [69.7, 52.9, 28.5, 3.5], text: 'Bitrate (Kbps) / FPS'},
    {box: [69.7, 56.9, 28.5, 3.4], text: 'Segment time: recordings are split into a new file every N minutes'},
    {box: [69.7, 60.9, 28.5, 3.5], text: 'Codec (H.265) / Container (Foxglove)'},
    {box: [69.7, 65.9, 28.7, 3.3], text: 'Save the storage settings'},
    {box: [68.9, 71.9, 30.5, 27.2], text: 'Device information: device name, software version, device SN, battery level, temperature, SD card used, system time'},
  ]}
/>

There are two ways to **control recording**:

1. Press the **record button** on the right side of the device to start / stop recording; a voice prompt confirms each action.
2. Click **Start Recording** in EGOTool.

EGOTool tabs:

| Tab | Description |
|-|-|
| **Storage Settings** | Select which views (1 ~ 6) to record and whether to record the IMU and audio; set the recording resolution (default 1600 × 1300), bitrate, frame rate, segment time, codec (H.265) and container, then click **Save**. |
| **Factory Capture** | Enter task, location, notes and operator, then click **Apply**. The information is written into the **next** recording. |
| **Log** | View the device log. |

:::info
Live preview is only for **checking the image, focus and framing** — it is not saved. The recording on the SD card is the source of truth.
:::

## Exporting Data to a PC

Recordings are saved to the SD card as **`.mcap`** files.

1. After stopping the recording, remove the battery to power off the device, then take the SD card out from the rear of the device.
2. Connect the SD card to a Windows PC with a **card reader**.
3. Copy the **`.mcap`** files to the PC. We recommend one folder per recording session.

:::tip
After copying and checking the data, **delete the exported recordings from the SD card** to free up space for new recordings.
:::

## Viewing Recordings in Foxglove Studio

`.mcap` files are viewed with **Foxglove Studio** — no command line needed.

:::note
The Foxglove screenshots below were taken with the Chinese interface. The English interface has the same layout.
:::

1. Download and install the Foxglove Studio desktop app from [foxglove.dev](https://foxglove.dev/download). You need to **sign up and sign in with an email address** the first time you use it.
2. On the framework selection screen, choose **ROS 2**:

<AnnotatedImage
  src={`${IMG}/ego6_foxglove_framework.png`}
  alt="Select ROS 2 in Foxglove"
  maxWidth={720}
  items={[{box: [43, 28.6, 14.6, 23.6], text: 'Select ROS 2'}]}
/>

3. Switch to the tab for playing back recorded data, click **Open** and select the copied `.mcap` file (or drag the file into the window):

<AnnotatedImage
  src={`${IMG}/ego6_foxglove_open.png`}
  alt="Open an MCAP file in Foxglove"
  maxWidth={720}
  items={[
    {box: [18.8, 19.8, 15.8, 9.2], text: 'Switch to the recorded-data playback tab'},
    {box: [56.5, 86.2, 10, 8.4], text: 'Click Open and select the .mcap file'},
  ]}
/>

4. The main view is empty after the file opens. **Import the layout file** `Ego-Foxglove-Layout.json` (see [Downloads](#downloads)): click the layout button at the top right and choose **Import from file…**:

<AnnotatedImage
  src={`${IMG}/ego6_foxglove_import_layout.png`}
  alt="Import a layout file in Foxglove"
  maxWidth={520}
  items={[
    {box: [71.5, 6.8, 19.2, 7.6], text: 'Click the layout button at the top right'},
    {box: [41, 31, 49.8, 7.2], text: 'Choose Import from file… and select Ego-Foxglove-Layout.json'},
  ]}
/>

5. After importing, the six camera views appear, and the data topics in the recording are listed on the left:

<AnnotatedImage
  src={`${IMG}/ego6_foxglove_playback.jpg`}
  alt="Six-camera playback in Foxglove"
  items={[
    {box: [0.2, 10.4, 13.4, 66], text: 'Topic list (6 cameras + IMU)'},
    {box: [77, 0.6, 14.6, 3.6], text: 'Current layout'},
  ]}
/>

Topics in the recording:

| Topic | Message type | Description |
|-|-|-|
| `/camera/middle-1/h265`, `/camera/middle-2/h265` | `foxglove.CompressedVideo` | Front stereo cameras |
| `/camera/left-1/h265`, `/camera/left-2/h265` | `foxglove.CompressedVideo` | Two left-side cameras |
| `/camera/right-1/h265`, `/camera/right-2/h265` | `foxglove.CompressedVideo` | Two right-side cameras |
| `/imu` | `foxglove.IMU` | 6-axis IMU data |

:::note
- Foxglove Studio decodes H.265 natively; no plugin is needed.
- You can skip the layout file, but you will need to add panels manually.
- Foxglove Studio is for **recorded** `.mcap` files; use EGOTool for the live view.
:::

## Downloads

| File | Size | Description |
|-|-|-|
| <a href={`${SRC}/EGOTool_V1.0.5.zip`}>EGOTool_V1.0.5.zip</a> | ~69 MB | Ego host software for Windows. Unzip and double-click `EGOTool.exe` |
| <a href={`${SRC}/Ego-Foxglove-Layout.json`}>Ego-Foxglove-Layout.json</a> | ~7 KB | Foxglove Studio layout file, imported via Import from file… |
| <a href={`${SRC}/2026-08-20_11-15-40.zip`}>2026-08-20_11-15-40.zip</a> | ~183 MB | Sample recording (`.mcap`) you can explore in Foxglove Studio before purchasing |

If you have trouble downloading, contact technical support: [support@sensing-world.com](mailto:support@sensing-world.com).

## FAQ

If you run into problems, see the [EgoSense H6 FAQ](/docs/6_3_Data_Collection_Device/EgoSense-H6/FAQ).
