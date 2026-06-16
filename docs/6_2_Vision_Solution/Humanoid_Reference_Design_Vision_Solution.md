---
sidebar_position: 1
title: Humanoid Robot Reference Design Vision Solution
description: SENSING vision solution for the Isaac GR00T humanoid robot reference design, with a reusable vision development foundation based on Jetson AGX Thor and SENSING camera modules
keywords: [Isaac GR00T, Unitree H2 Plus, humanoid robot reference design, embodied AI, robot vision, NVIDIA Jetson Thor, GMSL2, SENSING]
hide_title: true
---

<section className="humanoid-hero">
  <div className="humanoid-hero__content">
    <p className="humanoid-eyebrow">SENSING ROBOTIC VISION</p>
    <h1>Humanoid Robot<br /><span>Reference Design Vision Solution</span></h1>
    <p className="humanoid-hero__lead">
      SENSING provides multi-view visual perception from head to hand for the Unitree H2 Plus and NVIDIA Isaac GR00T humanoid robot reference design.
    </p>
    <div className="humanoid-hero__tags">
      <span>Reference case</span>
      <span>Jetson Thor</span>
      <span>Multi-view perception</span>
      <span>Vision development foundation</span>
    </div>
    <div className="humanoid-hero__actions">
      <a className="humanoid-button humanoid-button--primary" href="#case-study-h2-plus-and-isaac-gr00t">View case study</a>
      <a className="humanoid-button humanoid-button--secondary" href="#recommended-camera-configuration">View recommended cameras</a>
    </div>
  </div>
  <figure className="humanoid-hero__visual">
    <a href="https://sgword-service.oss-cn-heyuan.aliyuncs.com/wiki-images/1_0_Camera/1_10_Humanoid_Robotic_Camera/Solutions/Humanoid_Reference_Design_Vision_Solution/Humanoid_Reference_Design_Vision_Solution_en.jpg" target="_blank" rel="noopener noreferrer" aria-label="Open the original humanoid robot reference design vision solution image">
      <img src="https://sgword-service.oss-cn-heyuan.aliyuncs.com/wiki-images/1_0_Camera/1_10_Humanoid_Robotic_Camera/Solutions/Humanoid_Reference_Design_Vision_Solution/Humanoid_Reference_Design_Vision_Solution_en.jpg?x-oss-process=image/format,webp" alt="SENSING humanoid robot reference design vision solution overview" />
    </a>
    <figcaption><strong>Solution overview</strong><span>Shows the robot body, compute platform, and multi-view visual perception path. Click to view the original image.</span></figcaption>
  </figure>
</section>

<div className="humanoid-proof-strip">
  <div><strong>Reference case</strong><span>H2 Plus x Isaac GR00T</span></div>
  <div><strong>Vision coverage</strong><span>From head to hand</span></div>
  <div><strong>Compute platform</strong><span>NVIDIA Jetson Thor</span></div>
  <div><strong>Reusable foundation</strong><span>GMSL2 multi-camera</span></div>
</div>

## Recommended Camera Configuration

SENSING provides composable GMSL2 camera modules for humanoid robot head perception, scene observation, and hand-view operation. The following recommendation describes a reusable development configuration for customers and does not represent the actual bill of materials of any specific production robot.

### Recommended Vision Combination

<div className="humanoid-camera-grid">
  <article>
    <span>Head stereo</span>
    <h3>Astra S56x</h3>
    <p>Dual 5MP · Global shutter · 10-bit RAW</p>
    <strong>Stereo vision and VLA input</strong>
    <a href="/docs/6_1_Camera/Binocular_Camera/S56">View specs →</a>
  </article>
  <article>
    <span>Optional stereo</span>
    <h3>Astra S36</h3>
    <p>Dual 3MP · HDR · YUV422</p>
    <strong>HDR stereo vision</strong>
    <a href="/docs/6_1_Camera/Binocular_Camera/S36">View specs →</a>
  </article>
  <article>
    <span>Hand ultra-wide</span>
    <h3>SHF3L</h3>
    <p>3MP · HDR 30fps · 196°</p>
    <strong>Close-range operation-area perception</strong>
    <a href="/docs/6_1_Camera/Monocular_Camera/SHF3L">View specs →</a>
  </article>
  <article>
    <span>Optional hand wide-angle</span>
    <h3>SHW3H</h3>
    <p>3MP · HDR 60fps · 118°</p>
    <strong>Hand operation-area perception</strong>
    <a href="/docs/6_1_Camera/Monocular_Camera/SHW3H">View specs →</a>
  </article>
</div>

### Camera Recommendation Table

<div className="table-responsive">

| Model | Type | Resolution | Shutter | Data format | Horizontal FOV | Recommended role | Recommended quantity |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Astra S56x** | Stereo | Dual 5MP | Global shutter | 10-bit RAW | 130° / 140° options | **Head**: Stereo vision and VLA input | 1 |
| **Astra S36** (optional) | Stereo | Dual 3MP | Rolling shutter | YUV422 | 120° | **Head**: HDR stereo vision | 1 |
| **SHF3L** | Monocular | 3MP | Rolling shutter | YUV422 | 196° | **Hand**: HDR 30fps operation-area perception | Up to 4 |
| **SHW3H** (optional) | Monocular | 3MP | Rolling shutter | YUV422 | 118° | **Hand**: HDR 60fps operation-area perception | Optional |

</div>

:::note Configuration notes
- The table above is a development recommendation based on the current driver and TRD1 G2A interface capability. It does not represent the actual configuration of any specific production robot.
- Astra S56x and Astra S36 are stereo options that can be selected according to output format, shutter type, and application requirements.
- The actual camera count and port allocation should be determined by robot structure, bandwidth budget, power design, and software configuration.
:::

## Solution Positioning

<div className="humanoid-intro">
  <div>
    <p className="humanoid-section-kicker">FROM REFERENCE DESIGN TO DEPLOYABLE VISION</p>
    <h3>From a real reference design to a reusable robot vision foundation</h3>
  </div>
  <p>
    This case shows how SENSING visual perception capability can be integrated into a humanoid robot reference design with Jetson Thor as the compute core. Based on this project experience, SENSING further provides a vision development foundation centered on Jetson AGX Thor, TRD1 G2A, and GMSL2 camera modules, helping robot development teams reuse the full path from visual capture and platform adaptation to edge deployment.
  </p>
</div>

:::info Boundary between the case and the development foundation
Unitree H2 Plus and the NVIDIA Isaac GR00T humanoid robot reference design are the real application case introduced on this page. SENSING provides the visual perception solution in this reference case. The TRD1 G2A and SENSING camera combinations listed here describe a reusable vision development foundation and integration workflow; they do not represent the complete bill of materials of the H2 Plus robot.
:::

## Case Study: H2 Plus and Isaac GR00T

The humanoid robot reference design connects the robot body, compute and software stack, and visual perception into a unified development platform. SENSING focuses on the visual perception layer, providing camera modules, platform adaptation, and vision software support to deliver stable multi-view image input for robots.

<div className="humanoid-role-grid">
  <article className="humanoid-role-card">
    <span className="humanoid-role-card__index">01</span>
    <p className="humanoid-role-card__label">ROBOT BODY</p>
    <h3>Unitree H2 Plus</h3>
    <p>Provides the next-generation bionic humanoid robot body and the carrier for key vision nodes such as the head and hands.</p>
    <a href="https://www.unitree.com/cn/H2plus/" target="_blank" rel="noopener noreferrer">View Unitree official page →</a>
  </article>
  <article className="humanoid-role-card">
    <span className="humanoid-role-card__index">02</span>
    <p className="humanoid-role-card__label">COMPUTE & SOFTWARE</p>
    <h3>Jetson Thor + Isaac GR00T</h3>
    <p>Provides onboard AI compute capability and an open software stack connecting data collection, training, inference, and real-world deployment.</p>
  </article>
  <article className="humanoid-role-card humanoid-role-card--accent">
    <span className="humanoid-role-card__index">03</span>
    <p className="humanoid-role-card__label">VISUAL PERCEPTION</p>
    <h3>SENSING</h3>
    <p>Provides camera modules, platform adaptation, and vision software support from head to hand to build multi-view perception capability.</p>
    <a href="https://sensing-world.com/en/h-nd-122.html?fromMid=336" target="_blank" rel="noopener noreferrer">View SENSING official case →</a>
  </article>
</div>

## Capability Loop from Perception to Operation

<div className="humanoid-flow">
  <article>
    <span>01</span>
    <h3>Multi-view capture</h3>
    <p>Head stereo vision, wide-angle vision, and hand ultra-wide vision jointly cover the environment and operation area.</p>
  </article>
  <article>
    <span>02</span>
    <h3>Stable transmission and synchronization</h3>
    <p>GMSL2 coaxial links feed multiple camera streams into the compute platform and support multi-channel video hardware synchronization.</p>
  </article>
  <article>
    <span>03</span>
    <h3>On-device understanding and inference</h3>
    <p>Jetson Thor receives visual streams and provides input for depth processing, recognition, and VLA models.</p>
  </article>
  <article>
    <span>04</span>
    <h3>Fine manipulation</h3>
    <p>Stable visual input is connected to the robot software stack to support navigation, grasping, and autonomous decision-making.</p>
  </article>
</div>

## Vision Development Foundation

<section className="humanoid-platform">
  <div className="humanoid-platform__copy">
    <p className="humanoid-section-kicker">SENSING VISION FOUNDATION</p>
    <h3>A reusable multi-camera vision development foundation for customers</h3>
    <p>SENSING provides a development configuration centered on Jetson AGX Thor, TRD1 G2A, and GMSL2 camera modules to help robotics teams quickly validate multi-view perception links.</p>
    <ul>
      <li>Supports up to 8 GMSL camera inputs</li>
      <li>Supports RAW and YUV422 visual input</li>
      <li>Covers head stereo vision, scene perception, and hand-operation viewpoints</li>
      <li>Provides driver, platform adaptation, and integration support</li>
    </ul>
  </div>
  <div className="humanoid-platform__visual">
    <img src="https://sgword-service.oss-cn-heyuan.aliyuncs.com/wiki-images/1_0_Camera/1_10_Humanoid_Robotic_Camera/Solutions/Robotic_Camera_Connect.png?x-oss-process=image/format,webp" alt="SENSING humanoid robot vision development foundation connection architecture" />
  </div>
</section>

## Official References

<div className="humanoid-reference-grid">
  <a href="https://www.unitree.com/cn/H2plus/" target="_blank" rel="noopener noreferrer">
    <span>UNITREE</span>
    <strong>H2 Plus: product and research integration, full-stack launch</strong>
    <small>View official page →</small>
  </a>
  <a href="https://www.sensing-world.com/h-nd-121.html?fromMid=336" target="_blank" rel="noopener noreferrer">
    <span>SENSING</span>
    <strong>Isaac GR00T reference design vision solution case</strong>
    <small>View official case →</small>
  </a>
  <a href="https://github.com/SENSING-Technology/nvidia-jetson-camera-drivers/tree/main/Jetson%20AGX%20Orin%20Devkit/SG10A-AGON-G2M-A1/JetPack6.2/SG10A_AGON_G2M_A1_AGX_ORIN_S56x1_SHF3Lx6_JP6.2_L4TR36.4.3" target="_blank" rel="noopener noreferrer">
    <span>GITHUB</span>
    <strong>SENSING NVIDIA Jetson camera drivers</strong>
    <small>View driver repository →</small>
  </a>
</div>
