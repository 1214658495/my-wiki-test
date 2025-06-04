---
sidebar_position: 3
---

# Getting Camera Information

:::note Available Resources
Visit the SENSING service platform website to access comprehensive camera-related information and resources:
:::

:::tip Key Resources
- Specification
- Structural 3D data
- Camera intrinsic parameters data
- SerDes configuration files
- Images Sample (Specifically for cameras with an ISP)
:::

## Step-by-Step Guide

### Step 1: Access Platform
Click the following link to enter the SENSING service platform:  
[SENSING service platform](http://service.sensing-world.com/)

### Step 2: Navigate to Information Query
Click the **Information Query** page as shown below:

<div style={{textAlign: 'center', marginBottom: '2rem'}}>
    <img src="https://raw.githubusercontent.com/1214658495/myWikiFiles/main/Nvidia_jetson/Service/service_tab2.png" alt="Information Query Page" style={{maxWidth: '90%', height: 'auto'}} />
</div>

### Step 3: Get Product Information
To access specifications, 3D data, and SerDes configuration files:

1. Input the <span style={{color: 'var(--ifm-color-primary-light)', fontWeight: 'bold'}}>Product Model</span> (supports fuzzy search)
2. Download all available data except camera intrinsic parameters

<div style={{textAlign: 'center', marginBottom: '2rem'}}>
    <img src="https://raw.githubusercontent.com/1214658495/myWikiFiles/main/Nvidia_jetson/Service/service_tab2_model.png" alt="Product Model Search" style={{maxWidth: '90%', height: 'auto'}} />
</div>

### Step 4: Get Camera Parameters
To access camera intrinsic parameters data:

1. Input the <span style={{color: 'var(--ifm-color-primary-light)', fontWeight: 'bold'}}>SN Code</span> (supports fuzzy search)
2. Download the parameters

<div style={{textAlign: 'center', marginBottom: '2rem'}}>
    <img src="https://raw.githubusercontent.com/1214658495/myWikiFiles/main/Nvidia_jetson/Service/service_tab2_SN.png" alt="SN Code Search" style={{maxWidth: '90%', height: 'auto'}} />
</div>

:::info About SN Code
The SN Code (Serial Number Code) is a unique identifier assigned to each camera unit during manufacturing. It serves as a digital fingerprint for your specific camera, allowing you to access its calibrated intrinsic parameters and other device-specific information.

<div style={{textAlign: 'center', marginTop: '1rem'}}>
    <img src="https://raw.githubusercontent.com/1214658495/myWikiFiles/main/Camera/SN/SN_code.png" alt="SN Code Example" style={{maxWidth: '300px', height: 'auto'}} />
</div>
:::


