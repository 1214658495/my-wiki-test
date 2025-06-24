---
sidebar_position: 2
---

# Application

## Industrial Applications of GMSL2 Camera Splitter

The GMSL2 Camera Splitter, designed by SENSING Technology Co., Ltd., provides a versatile solution for multiple data path requirements in advanced vision systems. By allowing one GMSL input to distribute identical data streams to two GMSL outputs, this device enables various industrial applications requiring redundant or parallel visual data processing.

### Automotive & ADAS Applications

#### Simultaneous Data Recording and Real-time Processing
<div style={{textAlign: 'center'}}>
    <img src="https://raw.githubusercontent.com/1214658495/myWikiFiles/main/3_3_GMSL2_Camera_Splitter/GMSL2_Camera_Splitter_Application.png" alt="Splitter in ADAS" 
    style={{maxWidth: '100%', height:'auto'}} />
    <p>Simultaneous data flow to processing and recording units</p>
</div>

- **Navigate on Autopilot (NOA)**: Deploy redundant visual data paths for safety-critical operations
- **Auto Parking (AVP & APA)**: Enable simultaneous real-time processing and data recording for system validation
- **Camera Monitoring Systems (CMS)**: Provide backup visual data streams for both display and processing

<!-- ### Robotics & Industrial Applications

#### Machine Vision & Quality Control
- **Dual Processing Pipeline**: Route identical visual data to separate processing units with different algorithms
- **Real-time Monitoring + Archiving**: Process visual data for immediate feedback while simultaneously recording for quality assurance
- **Distributed Processing Architecture**: Enable parallel processing across multiple computing nodes for load balancing

#### Unmanned Ground Vehicles (UGV)
- **Sensor Redundancy**: Critical for safety and reliability in autonomous operations
- **Development & Testing**: Simultaneous data flow to both development systems and recording units
- **Heterogeneous Computing Platforms**: Connect the same camera to different computing architectures (GPU + FPGA)

### Rail Transport
- **Safety Monitoring**: Route camera feeds to both monitoring and recording systems
- **Track Inspection**: Enable simultaneous human monitoring and AI-based analysis
- **Operational Optimization**: Process visual data for immediate decision-making while storing for long-term analysis -->

## Integration Case Studies

### Case Study 1: Autonomous Driving Platform

A leading autonomous vehicle developer implemented the GMSL2 Camera Splitter to connect their high-resolution surround-view cameras simultaneously to:
- NVIDIA Drive AGX Orin™ for real-time processing
- Data recording system for training data collection

**Results**: Enabled development and validation processes to run in parallel, reducing development cycles by 40%.

### Case Study 2: Industrial Inspection System

A semiconductor manufacturing facility deployed the GMSL2 Camera Splitter to connect high-speed inspection cameras to:
- Real-time defect detection system
- Quality assurance recording system

**Results**: Achieved 99.7% defect detection accuracy while maintaining comprehensive quality records without additional camera installations.

## Implementation Architecture

### Hardware Configuration
<div style={{display: 'flex', justifyContent: 'center', marginTop: '2rem'}}>

| Component | Description | Recommendation |
|-----------|-------------|----------------|
| Camera | GMSL/GMSL2 compatible camera | SENSING GMSL2 Camera Series |
| Cable | High-quality coaxial cable | SENSING FAKRA-FAKRA Cable |
| Processing Unit 1 | Main processing system | NVIDIA Jetson/Drive platforms |
| Processing Unit 2 | Secondary system or recorder | CoaxCapture Series Capture Cards |

</div>

### Signal Flow Diagram
<div style={{textAlign: 'center'}}>
    <img src="https://raw.githubusercontent.com/1214658495/myWikiFiles/main/3_3_GMSL2_Camera_Splitter/GMSL2_Camera_Splitter_Block_Diagram.png" alt="Signal Flow" 
    style={{maxWidth: '80%', height:'auto'}} />
</div>

## Performance Specifications

### Key Technical Parameters
<!-- - **Signal Integrity**: < 0.1dB insertion loss -->
- **Output Synchronization**: < 10μs between outputs
- **Latency Impact**: Ultra-low latency (microsecond level)
<!-- - **EMI/EMC Performance**: Compliant with automotive standards -->

### Compatible System Configurations
- **NVIDIA Platforms**: Jetson AGX Orin, Drive AGX Orin
- **Qualcomm Platforms**: Snapdragon Ride Platform
- **Horizon Robotics**: Journey Series
<!-- - **Texas Instruments**: TDA4 Family -->

## Technical Resources

For comprehensive implementation details, register configuration guides, and sample code, please contact SENSING technical support at sales@sensing-world.com.

<div style={{textAlign: 'center', marginTop: '2rem'}}>
    <a href="https://sensing-world.com/en/h-col-152.html" target="_blank" rel="noopener noreferrer" 
       style={{backgroundColor: '#f0f0f0', padding: '10px 20px', display: 'inline-block', borderRadius: '5px', textDecoration: 'none'}}>
        <strong style={{color: '#000000', fontSize: '1.2em'}}>Purchase GMSL2 Camera Splitter</strong>
    </a>
</div>