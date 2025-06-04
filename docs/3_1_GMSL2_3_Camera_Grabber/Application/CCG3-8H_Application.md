---
sidebar_position: 1
---

# Application Scenario

## Autonomous Driving Sensing Solution

<div style={{background: 'var(--ifm-background-color)', borderRadius: '10px', boxShadow: '0 2px 8px rgba(0,0,0,0.08)', padding: '1.5rem', marginBottom: '2rem'}}>
  <div style={{fontSize: '1.1em', color: 'var(--ifm-color-primary)'}}>
    In advanced autonomous driving systems, precise and reliable multi-sensor data acquisition and synchronization are critical for perception and decision-making. The <strong>GMSL Camera Grabber (CCG3-4H/8H)</strong> is designed to address these requirements by providing high-performance, synchronized video capture from multiple GMSL cameras, and seamless integration with other vehicle sensors.
  </div>
  <div style={{textAlign: 'center', marginTop: '1.5rem'}}>
    <img src="https://raw.githubusercontent.com/1214658495/myWikiFiles/main/Data_collection/CCG3-8H/CCG3-8H_useGround1.png" alt="CCG3-8H Application Scenario" style={{width: 480, height:'auto', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.08)'}} />
  </div>
</div>

---

## System Architecture

<div style={{background: 'var(--ifm-background-color)', borderRadius: '10px', boxShadow: '0 2px 8px rgba(0,0,0,0.06)', padding: '1.2rem', marginBottom: '2rem'}}>
  <ul style={{margin: 0, paddingLeft: '1.2em'}}>
    <li><strong>GMSL Cameras:</strong> Multiple high-resolution cameras are connected to the CoaxCapture card, which aggregates and synchronizes their video streams.</li>
    <li><strong>CoaxCapture Capture Card:</strong> Installed in the vehicle's IPC (industrial PC) via PCIe, the card receives camera data and synchronization signals, ensuring frame-level alignment across all channels.</li>
    <li><strong>GPS Module:</strong> Provides 1PPS (Pulse Per Second) and TOD (Time of Day) signals for global time reference.</li>
    <li><strong>Ethernet Switch:</strong> Supports PTP/gPTP (Precision Time Protocol/Generalized PTP) for time synchronization across LiDAR, radar, and other sensors.</li>
    <li><strong>IPC (Industrial PC):</strong> Central processing unit that collects, processes, and stores synchronized data from all sensors.</li>
  </ul>
</div>

## Synchronization Workflow

<div style={{background: 'var(--ifm-background-color)', borderRadius: '10px', boxShadow: '0 2px 8px rgba(0,0,0,0.06)', padding: '1.2rem', marginBottom: '2rem'}}>
  <ol style={{margin: 0, paddingLeft: '1.2em'}}>
    <li>The GPS module outputs 1PPS and TOD signals, which are distributed to both the CoaxCapture card and the Ethernet switch.</li>
    <li>The CoaxCapture card uses these signals to synchronize all connected GMSL cameras, ensuring that each frame is timestamped accurately and aligned with other vehicle sensors.</li>
    <li>The Ethernet switch propagates PTP/gPTP signals to LiDAR, radar, and other devices, enabling system-wide time synchronization.</li>
    <li>All sensor data, including video, LiDAR, and radar, are collected by the IPC for real-time processing and recording.</li>
  </ol>
</div>

---

## Key Benefits

<div style={{display: 'flex', flexWrap: 'wrap', gap: '1.5rem', marginBottom: '2rem'}}>
  <div style={{flex: 1, minWidth: 220, background: 'var(--ifm-background-color)', borderRadius: '10px', boxShadow: '0 2px 8px rgba(0,0,0,0.06)', padding: '1rem'}}>
    <strong>Multi-camera synchronization</strong><br/>
    Hardware-level frame alignment for up to 8 GMSL cameras.
  </div>
  <div style={{flex: 1, minWidth: 220, background: 'var(--ifm-background-color)', borderRadius: '10px', boxShadow: '0 2px 8px rgba(0,0,0,0.06)', padding: '1rem'}}>
    <strong>Unified time base</strong><br/>
    GPS and PTP/gPTP synchronize all vehicle sensors, supporting high-precision sensor fusion.
  </div>
  <div style={{flex: 1, minWidth: 220, background: 'var(--ifm-background-color)', borderRadius: '10px', boxShadow: '0 2px 8px rgba(0,0,0,0.06)', padding: '1rem'}}>
    <strong>Scalable architecture</strong><br/>
    Easily integrates additional sensors or cameras as system requirements evolve.
  </div>
  <div style={{flex: 1, minWidth: 220, background: 'var(--ifm-background-color)', borderRadius: '10px', boxShadow: '0 2px 8px rgba(0,0,0,0.06)', padding: '1rem'}}>
    <strong>Reliable data acquisition</strong><br/>
    PCIe interface and robust hardware design ensure high throughput and low latency.
  </div>
</div>

---

<div style={{background: 'var(--ifm-background-color)', borderRadius: '10px', boxShadow: '0 2px 8px rgba(0,0,0,0.08)', padding: '1.2rem', marginBottom: '2rem', fontSize: '1.1em'}}>
This architecture is ideal for autonomous driving, ADAS development, and any application requiring precise, synchronized multi-sensor data acquisition.
</div>
