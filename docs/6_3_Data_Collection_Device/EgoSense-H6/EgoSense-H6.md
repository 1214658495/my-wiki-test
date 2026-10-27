---
sidebar_position: 1
title: EgoSense H6 Head-Mounted 6-Camera Data Collection Device
description: "EgoSense H6 head-mounted egocentric data collection device: six global shutter cameras, 270° field of view and synchronized multi-modal capture, producing data ready for embodied AI training"
keywords: [EgoSense H6, EgoSense, head-mounted, six-camera, egocentric, first-person, data collection, embodied AI, calibration, synchronization, MCAP, IMU]
---

export const IMG = 'https://sgword-service.oss-cn-heyuan.aliyuncs.com/wiki-images/6_3_Data_Collection_Device/Ego-6/img';
export const SRC = 'https://sgword-service.oss-cn-heyuan.aliyuncs.com/wiki-images/6_3_Data_Collection_Device/Ego-6/source';

export const Stat = ({value, label}) => (
  <div style={{flex: '1 1 140px', padding: '14px 12px', border: '1px solid var(--ifm-color-emphasis-300)', borderRadius: 8, textAlign: 'center'}}>
    <div style={{fontSize: '1.6rem', fontWeight: 700, color: 'var(--ifm-color-primary)', lineHeight: 1.2}}>{value}</div>
    <div style={{fontSize: '0.85rem', color: 'var(--ifm-color-emphasis-700)', marginTop: 4}}>{label}</div>
  </div>
);

# EgoSense H6 Head-Mounted 6-Camera Data Collection Device

<div style={{textAlign: 'center'}}>
  <img src={`${IMG}/ego6_hero.png`} alt="EgoSense H6 Head-Mounted 6-Camera Data Collection Device" style={{width: '100%', maxWidth: '560px', borderRadius: '8px'}} />
</div>

**Put it on and start collecting — take embodied AI data collection into real-world scenes.**

EgoSense H6 is a head-mounted, six-camera egocentric data collection device developed by SENSING. Six global shutter cameras cover a 270° field of view and record what the wearer sees, together with head pose from the IMU and sound from the microphones, all in sync. The device records offline: no laptop tethered to the operator and no motion capture studio to set up.

<div style={{display: 'flex', flexWrap: 'wrap', gap: 12, margin: '20px 0'}}>
  <Stat value="6" label="Global shutter cameras" />
  <Stat value="270°" label="Combined field of view" />
  <Stat value="< 30 µs" label="Measured stereo sync offset" />
  <Stat value="350 g" label="Device weight" />
  <Stat value="~3 h" label="Runtime per battery" />
  <Stat value="256 GB" label="On-device storage" />
</div>

<video src={`${SRC}/%E8%A6%86%E7%9B%96%E7%9A%84%E5%8C%BA%E5%9F%9F.mp4`} controls muted playsInline preload="metadata" style={{width: '100%', borderRadius: 8, marginBottom: 8}} />

<p style={{textAlign: 'center', fontSize: '0.9rem', color: 'var(--ifm-color-emphasis-700)'}}>All six streams recorded by EgoSense H6 during a tabletop task</p>

## Why Egocentric Data Collection

| Approach | Limitation |
|-|-|
| Fixed cameras / motion capture studio | Hand details are hard to see, and the setting is far from real environments |
| Robot teleoperation | High hardware cost and low output per operator |
| Simulation | Sim-to-real gap |
| **EgoSense H6** | **Records exactly what the wearer sees, works in real homes, factories, hospitals and stores, and scales out with many devices in parallel** |

## What's in a Recording

Each session produces one `.mcap` file that contains all of the following:

| Data | Details |
|-|-|
| **Six image streams** | 1600 × 1300 @ 30 fps, global shutter with no rolling-shutter distortion in motion; H.265 encoded |
| **IMU** | 6-axis, 200 Hz, for head pose |
| **Audio** | Microphone audio, for voice commands and ambient sound analysis |
| **Timestamps** | Every image frame and every IMU sample is timestamped |
| **Calibration** | Every unit is factory calibrated; intrinsics, extrinsics and camera-IMU calibration are written to the camera EEPROM and can be read out directly using the standard OTP definition ([see calibration specs](#factory-calibration)) |

Want to see the data first? Download a sample recording from [User Manual · Downloads](/docs/6_3_Data_Collection_Device/EgoSense-H6/User_Manual#downloads) and open it directly in Foxglove Studio.

## Calibration and Accuracy

### Factory Calibration

Every unit is calibrated individually before shipping. Calibration data is written directly to the camera EEPROM, so the device is ready to use out of the box.

| Item | Specification |
|-|-|
| Camera intrinsics | Reprojection error < 0.5 px |
| Front stereo extrinsics | Baseline error < 1.5 mm; extrinsic reprojection error < 0.5 px |
| Extrinsics across the six cameras | Calibrated between each pair of adjacent cameras |
| Camera-IMU joint calibration | Extrinsic translation error < 4 mm in each of Tx / Ty / Tz; time offset < 6 ms |
| Calibration data storage | Camera EEPROM, stored according to the SENSING standard OTP definition |
| Reading calibration data | The OTP definition document is provided, so calibration data can be read directly from the EEPROM |

### Synchronization Accuracy

We filmed an LED timing panel (the next LED lights up every 1 ms) and compared the two front stereo streams frame by frame in Foxglove Studio:

- **Identical images**: in the same frame, both cameras capture exactly the same lit LED position, so the exposure timing difference is below the 1 ms resolution of the panel.
- **Matching timestamps**: the timestamps of the two images in the same frame differ by less than **30 µs** (14 ~ 27 µs in the frames sampled in the video).

<video src={`${SRC}/%E7%9B%B8%E6%9C%BA%E5%90%8C%E6%AD%A5%E7%B2%BE%E5%BA%A6-%E7%A7%91%E5%AD%A6%E7%9A%84%E8%A7%86%E9%A2%91%E8%AF%81%E6%98%8E.mp4`} controls muted playsInline preload="metadata" style={{width: '100%', borderRadius: 8, marginBottom: 16}} />

| Synchronized streams | Measured offset |
|-|-|
| Front stereo pair | < 30 µs |
| Across all six cameras | < 1 ms |

### Field of View Designed for Manipulation

<div style={{background: '#fff', borderRadius: 8, padding: 12, marginBottom: 16}}>
  <img src={`${IMG}/Camera_Module_Tilt_Design.png`} alt="EgoSense H6 camera tilt design" style={{display: 'block', width: '100%'}} />
</div>

The front stereo pair looks straight ahead (0° tilt), while the other four cameras tilt 20° downward. When the wearer looks down to work, both hands and the work surface stay in view, so hand motion is not lost when the wearer raises or turns their head.

## From Collection to Training

| Step | What happens |
|-|-|
| **1. Collect** | Press the record button on the device to start / stop, with voice prompts; data is written straight to the Micro SD card in the device |
| **2. Check on site** | When needed, use the EGOTool host software to preview all six streams live, enter session information and check device status |
| **3. Retrieve data** | Remove the Micro SD card and copy the recordings |
| **4. Review** | Open the `.mcap` file in Foxglove Studio to inspect images and IMU data frame by frame |
| **5. Feed into training** | MCAP is the default storage format of ROS 2 rosbag2 and has official C++ / Python SDKs, so it plugs directly into your own data pipeline |

For step-by-step instructions, see the [EgoSense H6 User Manual](/docs/6_3_Data_Collection_Device/EgoSense-H6/User_Manual).

## Collecting at Scale

- **No laptop, no studio**: collection runs fully offline, so multiple operators can run multiple devices at different sites in parallel.
- **Runtime and battery swaps**: about 3 hours per battery; the magnetic snap-on battery is quick to swap.
- **Session metadata**: EGOTool lets you enter session information, making it easy to organize data by scene, operator and task later.
- **Head and hand capture together**: pair with [UMI grippers / wrist units](/docs/6_3_Data_Collection_Device/UMI-Camera) to capture the head view and hand manipulation at the same time.

## Applications

| Application | What is captured |
|-|-|
| **Embodied AI / VLA training** | First-person views and head pose of real manipulation tasks, for imitation learning and world models |
| **Humanoid robot skill learning** | Human demonstrations and visual data |
| **Multi-modal perception research** | Synchronized vision, inertial and audio data |
| **Workflow analysis** | Operator workflows and habits in factories, warehouses and service settings |

## Buyer FAQ

#### Can I see sample data first?

Sample data is available from [Downloads](/docs/6_3_Data_Collection_Device/EgoSense-H6/User_Manual#downloads) and opens directly in Foxglove Studio.

#### Can it be customized?

Yes. The complete device, main board and cameras can all be customized:
- Any 2 / 3 / 4 / 5 / 6-camera configuration;
- Cameras with different resolutions, fields of view and shutter types — see [Ego Custom Stereo Camera](/docs/6_3_Data_Collection_Device/Ego-Stereo-Camera) and [Ego Custom Mono Camera](/docs/6_3_Data_Collection_Device/Ego-Mono-Camera);
- Driver, application and ISP tuning services.

#### Where is the data stored?

Recordings are saved directly to the Micro SD card in the device and stay under your control.

## Technical Specifications

<details>
<summary>Show full technical specifications</summary>

| Category | Item | Value |
|-|-|-|
| **Physical** | Dimensions | 268 × 223 × 92 mm |
| | Weight | 350 g |
| | Ingress protection | IP52 |
| | Cooling | Fan |
| **Cameras** | Count | 6 (front stereo pair + 2 mono cameras on each side) |
| | Shutter | Global shutter |
| | Resolution / frame rate | 1600 × 1300 @ 30 fps (60 fps optional) |
| | Per-camera FOV | H160° × V130° |
| | Combined FOV | 270° |
| | Mounting tilt | Front stereo 0°, other four cameras 20° downward |
| **Other sensors** | IMU | 6-axis, 200 Hz |
| | Audio | Microphones |
| **Storage and recording** | Storage | Micro SD, up to 256 GB |
| | Recording format | `.mcap` (H.265 encoded) |
| **Connectivity** | Wired | USB Type-C |
| | Wireless | Wi-Fi 6, Bluetooth 5.3 |
| **Power** | Battery | 10000 mAh magnetic snap-on battery, about 3 hours of runtime |
| | Charging | Type-C with PD fast charging |
| | Typical power consumption | < 10 W |
| **Software** | EGOTool (Windows) | Live preview, recording control, session information, device status |
| | Foxglove Studio | Play back and inspect `.mcap` files |

</details>

## Contact Us

:::note Contact information
- **Sales**: [Sales@sensing-world.com](mailto:Sales@sensing-world.com)
- **Technical support**: [support@sensing-world.com](mailto:support@sensing-world.com)
- **Phone**: +86-755-28990915
- **Website**: [www.sensing-world.com](https://sensing-world.com/)

**Business hours**: Monday - Friday, 9:00 AM - 6:00 PM (GMT+8)
:::
