---
sidebar_position: 1
---

# Application

## Domain Controller Image Injection Test

<div style={{background: 'var(--ifm-background-color)', borderRadius: '10px', boxShadow: '0 2px 8px rgba(0,0,0,0.08)', padding: '1.5rem', marginBottom: '2rem'}}>
  <div style={{fontSize: '1.1em'}}>
    After data collection by autonomous vehicles, algorithm validation and optimization are required, which necessitates a data injection system. The autonomous driving IPC will transmit the collected video data from hard disks to the video injection card through the PCIe interface. The video injection card will synchronously output 8 channels of video based on timestamps, simulating the camera time sequence, and transmit it to the domain controller through the GMSL interface.
  </div>
  <div style={{textAlign: 'center', marginTop: '1.5rem'}}>
    <img src="https://raw.githubusercontent.com/1214658495/myWikiFiles/main/Data_collection/3_4_GMSL_Video_Injection_Card/CIG3-8H_Application.png" alt="Domain controller image injection frame diagram" style={{maxWidth: '85%', height:'auto', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.08)'}} />
    <p style={{textAlign: 'center', marginTop: '0.5rem', fontSize: '0.9em'}}>Diagram 1: Domain controller image injection frame diagram</p>
  </div>
</div>

---

## System Architecture

<div style={{background: 'var(--ifm-background-color)', borderRadius: '10px', boxShadow: '0 2px 8px rgba(0,0,0,0.06)', padding: '1.2rem', marginBottom: '2rem'}}>
  <ul style={{margin: 0, paddingLeft: '1.2em'}}>
    <li><strong>IPC (Industrial PC):</strong> Provides the source video data through PCIe Gen3 interface.</li>
    <li><strong>CIG3-8H Video Injection Card:</strong> Receives data from IPC, processes it based on timestamps, and outputs synchronized video streams.</li>
    <li><strong>Ethernet Switch:</strong> Enables gPTP/PTP synchronization between all system components.</li>
    <li><strong>ACU (Autonomous Control Unit):</strong> Receives the injected video data for testing and validation purposes.</li>
  </ul>
</div>

## Key Features and Advantages

<div style={{background: 'var(--ifm-background-color)', borderRadius: '10px', boxShadow: '0 2px 8px rgba(0,0,0,0.06)', padding: '1.2rem', marginBottom: '2rem'}}>
  <ol style={{margin: 0, paddingLeft: '1.2em'}}>
    <li>Utilizes PCI Express interface with PCIe Gen3x8 support, providing sustainable bandwidth up to 4800 MB/s.</li>
    <li>Powered by Zynq™ UltraScale+™ ZU7EV MPSoC processor for high-performance data processing.</li>
    <li>Built-in high-performance DMA engine for efficient data transfer from host.</li>
    <li>Supports various serializers (MAX9295A, MAX96717F, MAX96717) and deserializers (MAX9296A, MAX96712, MAX96716).</li>
    <li>Output video resolution supports up to 8 channels of 3840×2160@30fps.</li>
    <li>Supports YUV422, RAW10/12/14 video formats.</li>
    <li>Capable of simulating I2C messages between ECU and cameras.</li>
    <li>Supports external trigger signals to control simultaneous output across all channels.</li>
    <li>Enables timestamp-based RAW video data playback with nanosecond-level precision.</li>
    <li>Supports synchronization across multiple injection cards.</li>
    <li>Compatible with both Linux and Windows operating systems.</li>
  </ol>
</div>

---

## Typical Applications

<div style={{display: 'flex', flexWrap: 'wrap', gap: '1.5rem', marginBottom: '2rem'}}>
  <div style={{flex: 1, minWidth: 220, background: 'var(--ifm-background-color)', borderRadius: '10px', boxShadow: '0 2px 8px rgba(0,0,0,0.06)', padding: '1rem'}}>
    <strong>Hardware-in-the-Loop (HIL) Simulation</strong><br/>
    Enables testing of autonomous driving algorithms with real-world data in a controlled environment.
  </div>
  <div style={{flex: 1, minWidth: 220, background: 'var(--ifm-background-color)', borderRadius: '10px', boxShadow: '0 2px 8px rgba(0,0,0,0.06)', padding: '1rem'}}>
    <strong>Data Replay Systems</strong><br/>
    Allows for consistent reproduction of field-collected data for algorithm validation and optimization.
  </div>
  <div style={{flex: 1, minWidth: 220, background: 'var(--ifm-background-color)', borderRadius: '10px', boxShadow: '0 2px 8px rgba(0,0,0,0.06)', padding: '1rem'}}>
    <strong>Domain Controller Testing</strong><br/>
    Supports injection of recorded data or GPU-rendered simulation data for comprehensive testing.
  </div>
  <div style={{flex: 1, minWidth: 220, background: 'var(--ifm-background-color)', borderRadius: '10px', boxShadow: '0 2px 8px rgba(0,0,0,0.06)', padding: '1rem'}}>
    <strong>Time Synchronization</strong><br/>
    gPTP/PTP support ensures all devices in the system operate on the same timeline.
  </div>
</div>

---

<div style={{background: 'var(--ifm-background-color)', borderRadius: '10px', boxShadow: '0 2px 8px rgba(0,0,0,0.08)', padding: '1.2rem', marginBottom: '2rem', fontSize: '1.1em'}}>
The CIG3-8H GMSL Video Injection Card is an integral component in mature autonomous driving HIL video injection solutions, providing high-precision, multi-channel time synchronization technology to ensure synchronized output across all channels, making it ideal for algorithm validation and optimization in autonomous driving development.
</div>
