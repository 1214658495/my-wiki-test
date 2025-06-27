---
sidebar_position: 3
---

# Getting Camera Information

## Available Resources

The SENSING service platform provides comprehensive camera resources including:

- Technical specifications
- 3D model
- Camera intrinsic parameters
- SerDes configuration files
- Sample images (for cameras with ISP)

## Accessing Resources

### Step 1: Access the Platform

Visit the [SENSING service platform](http://service.sensing-world.com/) to begin.

### Step 2: Navigate to Information Query

Select the **Information Query** section from the navigation menu.

<div style={{textAlign: 'center', margin: '1.5rem 0'}}>
    <img src="https://raw.githubusercontent.com/1214658495/myWikiFiles/main/Nvidia_jetson/Service/service_tab2.png" alt="Information Query Page" style={{maxWidth: '85%', height: 'auto', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)'}} />
</div>

### Step 3: Product Information Lookup

To access specifications, 3D models, and configuration files:

1. Enter the **Product Model** in the search field (fuzzy search supported)
2. Download the required resources from the results page

<div style={{textAlign: 'center', margin: '1.5rem 0'}}>
    <img src="https://raw.githubusercontent.com/1214658495/myWikiFiles/main/Nvidia_jetson/Service/service_tab2_model.png" alt="Product Model Search" style={{maxWidth: '85%', height: 'auto', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)'}} />
</div>

### Step 4: Camera Parameters Lookup

For camera-specific calibration parameters:

1. Enter the **SN Code** in the search field (fuzzy search supported)
2. Download the intrinsic parameter files

<div style={{textAlign: 'center', margin: '1.5rem 0'}}>
    <img src="https://raw.githubusercontent.com/1214658495/myWikiFiles/main/Nvidia_jetson/Service/service_tab2_SN.png" alt="SN Code Search" style={{maxWidth: '85%', height: 'auto', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)'}} />
</div>

## Understanding Product Identifiers

### SN Code and Product Model

- **SN Code (Serial Number)**: A unique identifier for each individual camera unit, used to access device-specific calibration data and parameters
- **Product Model**: The camera model designation that identifies the camera type and specifications

### Example Identification

The image below shows a camera with:
- **SN Code**: H190S-E01220525
- **Product Model**: SG3-ISX031C-GMSL2-H190S

<div style={{textAlign: 'center', margin: '1.5rem 0'}}>
    <img src="https://raw.githubusercontent.com/1214658495/myWikiFiles/main/Camera/SN/SN_code.png" alt="SN Code Example" style={{maxWidth: '300px', height: 'auto', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)'}} />
</div>


