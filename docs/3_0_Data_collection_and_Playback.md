---
sidebar_position: 30
title: Data Collection and Simulation
---

# Data Collection and Simulation

## Overview

<div className="row">
  <div className="col col--7">
    This section covers specialized hardware and software solutions for camera data collection, distribution, and Simulation in automotive and embedded vision applications. These technologies enable efficient video data handling across multiple processing units while maintaining signal integrity and synchronization.
  </div>
  <div className="col col--5">
    :::note Key Components
    - GMSL Camera Grabber
    - GMSL2 Camera Repeater
    - GMSL2 Camera Splitter
    - GMSL Video Injection Card
    :::
  </div>
</div>

## Solution Architecture



<div className="row" style={{marginTop: '2rem', marginBottom: '2rem'}}>
  <div className="col col--6">
    <div className="card" style={{height: '100%'}}>
      <div className="card__header">
        <h3>Data Collection Path</h3>
      </div>
      <div className="card__body">
        <p>Capture high-quality camera feeds using GMSL Camera Grabber for data collection and analysis. Distribute signals to multiple ECUs with Camera Splitter for parallel processing.</p>
      </div>
    </div>
  </div>
  <div className="col col--6">
    <div className="card" style={{height: '100%'}}>
      <div className="card__header">
        <h3>Simulation Path</h3>
      </div>
      <div className="card__body">
        <p>Use the Video Injection Card to feed pre-recorded scenarios into vision systems for testing and validation. This enables repeatable testing with real-world data.</p>
      </div>
    </div>
  </div>
</div>

## Component Overview

### GMSL Camera Grabber

The Camera Grabber enables high-speed video capture from GMSL/GMSL2 cameras for data collection, testing, and development.

**[Learn more about GMSL Camera Grabber →](/docs/3_1_GMSL2_3_Camera_Grabber/Getting_Started/CCG3-8H.md)**

### GMSL2 Camera Repeater

Extends GMSL2 transmission distance with minimal signal degradation through one input to one output configuration.

**[Explore GMSL2 Camera Repeater →](/docs/3_2_GMSL2_Camera_Repeater/GMSL2_Camera_Repeater)**

### GMSL2 Camera Splitter

Distributes a single GMSL2 camera feed to multiple processing units while maintaining signal integrity and synchronization.

**[Discover GMSL2 Camera Splitter →](/docs/3_3_GMSL2_Camera_Splitter/GMSL2_Camera_Splitter)**

### GMSL Video Injection Card

Enables simulation  of pre-recorded video into automotive vision systems for testing and validation purposes.

**[Learn about Video Injection →](/docs/3_4_GMSL_Video_Injection_Card/Getting_Started/CIG4-8H.md)**

## Implementation Guide

1. **Select appropriate components** based on your specific data collection or simulation  requirements
2. **Configure the hardware** according to device-specific documentation
3. **Develop software interfaces** using provided example code and APIs
4. **Validate system performance** using recommended testing procedures

## Technical Comparison

<div className="table-responsive">

| Component | Function | Max Resolution | Latency | Multiple Outputs | Key Feature |
|----------|----------|----------------|---------|-----------------|-------------|
| Camera Grabber | Data Collection | 4K (3840×2160) | Low | No | High-speed data capture |
| Camera Repeater | Signal Extension | 4K (3840×2160) | Ultra-low (< 10μs) | No | Distance extension |
| Camera Splitter | Signal Distribution | 4K (3840×2160) | Ultra-low (< 10μs) | Yes (2×) | Synchronized outputs |
| Video Injection | Data Simulation | 4K (3840×2160) | Low | No | Scenario simulation |

</div>

## Common Applications

- Automotive vision system development and validation
- Multi-ECU camera data distribution
- Camera data logging and recording
- Simulation-based testing for autonomous driving algorithms
- Signal extension for distributed processing systems

