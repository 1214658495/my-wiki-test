---
sidebar_position: 1
---

# CIG4-8H Application

### How It Works: The Complete Video Injection Process
<div style={{textAlign: 'center', marginBottom: '2rem'}}>
  <img src="https://raw.githubusercontent.com/1214658495/myWikiFiles/main/Data_collection/3_4_GMSL_Video_Injection_Card/CIG4-8H_Application2.png" alt="Video Injection System Selection Guide" style={{maxWidth: '100%', height:'auto', borderRadius: '8px', boxShadow: '0 2px 2px rgba(0,0,0,0.15)'}} />
  <p style={{fontSize: '0.9em', marginTop: '0.5rem', color: 'var(--ifm-color-gray-700)'}}>
    Block diagram of Intelligent driving data injection system
  </p>
</div>

<div style={{background: '#f8f9fa', borderRadius: '12px', padding: '2rem', marginBottom: '2rem', border: '1px solid #dee2e6'}}>
  <div style={{display: 'flex', flexDirection: 'column', gap: '1.5rem'}}>

    <div style={{display: 'flex', alignItems: 'center', gap: '1rem'}}>
      <div style={{background: '#e3f2fd', borderRadius: '50%', width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0}}>
        <span style={{fontWeight: 'bold', color: '#1976d2'}}>1</span>
      </div>
      <div style={{flex: 1}}>
        <h4 style={{margin: 0, marginBottom: '0.5rem', color: '#1976d2'}}>Data Preparation</h4>
        <p style={{margin: 0, fontSize: '0.9em', color: '#666'}}>Load pre-recorded camera data (H.264/H.265) or simulation data for algorithm validation into the host PC memory</p>
      </div>
    </div>

    <div style={{textAlign: 'center', fontSize: '1.5em', color: '#666'}}>↓</div>

    <div style={{display: 'flex', alignItems: 'center', gap: '1rem'}}>
      <div style={{background: '#f3e5f5', borderRadius: '50%', width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0}}>
        <span style={{fontWeight: 'bold', color: '#7b1fa2'}}>2</span>
      </div>
      <div style={{flex: 1}}>
        <h4 style={{margin: 0, marginBottom: '0.5rem', color: '#7b1fa2'}}>Format Conversion</h4>
        <p style={{margin: 0, fontSize: '0.9em', color: '#666'}}>GPU-accelerated conversion to raw video formats (YUV422, RAW10/12/14) compatible with automotive cameras</p>
      </div>
    </div>

    <div style={{textAlign: 'center', fontSize: '1.5em', color: '#666'}}>↓</div>

    <div style={{display: 'flex', alignItems: 'center', gap: '1rem'}}>
      <div style={{background: '#e8f5e8', borderRadius: '50%', width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0}}>
        <span style={{fontWeight: 'bold', color: '#388e3c'}}>3</span>
      </div>
      <div style={{flex: 1}}>
        <h4 style={{margin: 0, marginBottom: '0.5rem', color: '#388e3c'}}>GMSL Signal Generation</h4>
        <p style={{margin: 0, fontSize: '0.9em', color: '#666'}}>CIG4-8H card generates authentic GMSL signals identical to real camera outputs, including timing and electrical characteristics</p>
      </div>
    </div>

    <div style={{textAlign: 'center', fontSize: '1.5em', color: '#666'}}>↓</div>

    <div style={{display: 'flex', alignItems: 'center', gap: '1rem'}}>
      <div style={{background: '#fff3e0', borderRadius: '50%', width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0}}>
        <span style={{fontWeight: 'bold', color: '#f57c00'}}>4</span>
      </div>
      <div style={{flex: 1}}>
        <h4 style={{margin: 0, marginBottom: '0.5rem', color: '#f57c00'}}>ECU Integration</h4>
        <p style={{margin: 0, fontSize: '0.9em', color: '#666'}}>Target ECU receives video data through standard GMSL deserializers, processing it as if from real cameras</p>
      </div>
    </div>

  </div>
</div>
<!-- 
## Domain Controller Image Injection Test

<div style={{background: 'var(--ifm-background-color)', borderRadius: '10px', boxShadow: '0 2px 8px rgba(0,0,0,0.08)', padding: '1.5rem', marginBottom: '2rem'}}>
  <div style={{fontSize: '1.1em'}}>
    After data collection by autonomous vehicles, algorithm validation and optimization are required, which necessitates a data injection system. The autonomous driving IPC will transmit the collected video data from hard disks to the video injection card through the PCIe interface. The video injection card will synchronously output 8 channels of video based on timestamps, simulating the camera time sequence, and transmit it to the domain controller through the GMSL interface.
  </div>
  <div style={{textAlign: 'center', marginTop: '1.5rem'}}>
    <img src="https://raw.githubusercontent.com/1214658495/myWikiFiles/main/Data_collection/3_4_GMSL_Video_Injection_Card/CIG3-8H_Application.png" alt="Domain controller image injection frame diagram" style={{maxWidth: '85%', height:'auto', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.08)'}} />
    <p style={{textAlign: 'center', marginTop: '0.5rem', fontSize: '0.9em'}}>Diagram 1: Domain controller image injection frame diagram</p>
  </div>
</div> -->

## System Architecture

<div style={{background: 'var(--ifm-background-color)', borderRadius: '10px', boxShadow: '0 2px 8px rgba(0,0,0,0.06)', padding: '1.2rem', marginBottom: '2rem'}}>
  <ul style={{margin: 0, paddingLeft: '1.2em'}}>
    <li><strong>IPC (Industrial PC):</strong> Provides the source video data through PCIe Gen3 interface.</li>
    <li><strong>CIG4-8H Video Injection Card:</strong> Receives data from IPC, processes it based on timestamps, and outputs synchronized video streams.</li>
    <li><strong>Ethernet Switch:</strong> Enables gPTP/PTP synchronization between all system components.</li>
    <li><strong>ACU (Autonomous Control Unit):</strong> Receives the injected video data for testing and validation purposes.</li>
  </ul>
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
The CIG4-8H GMSL Video Injection Card is an integral component in mature autonomous driving HIL video injection solutions, providing high-precision, multi-channel time synchronization technology to ensure synchronized output across all channels, making it ideal for algorithm validation and optimization in autonomous driving development.
</div>
