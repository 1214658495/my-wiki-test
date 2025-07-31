---
sidebar_position: 3
---
# Employing Camera
<!-- # Camera Integration Guide -->

This comprehensive guide outlines integration methods for SENSING GMSL cameras across various platforms and systems.

<div className="toc-container">
  <div className="toc-header">In This Guide</div>
  <ul className="toc-list">
    <li><a href="#nvidia-platform-integration">NVIDIA Platform Integration</a></li>
    <li><a href="#gmsl-camera-grabber-integration">GMSL Camera Grabber Integration</a></li>
    <li><a href="#third-party-ai-box-integration">Third-party AI Box Integration</a></li>
    <li><a href="#custom-platform-integration">Custom Platform Integration</a></li>
  </ul>
</div>

<!-- ## Integration Scenarios -->
<!-- 
<div className="integration-grid">
  <div className="scenario-card">
    <div className="card-image">
      <img src="https://raw.githubusercontent.com/1214658495/myWikiFiles/main/Nvidia_jetson/nvidia_jetson_agx_orin.png" alt="NVIDIA Platform" />
    </div>
    <div className="card-content">
      <h3>NVIDIA Platforms</h3>
      <p>Pre-adapted solutions for Jetson and DRIVE series</p>
      <a href="#nvidia-platform-integration" className="learn-more">Learn more <span className="arrow">→</span></a>
    </div>
  </div>
  
  <div className="scenario-card">
    <div className="card-image">
      <img src="https://raw.githubusercontent.com/1214658495/myWikiFiles/main/Data_collection/CCG3-8H/CCG3-8H_useGround3.png" alt="GMSL Camera Grabber" />
    </div>
    <div className="card-content">
      <h3>GMSL Camera Grabber</h3>
      <p>Flexible multi-camera capture solutions</p>
      <a href="#gmsl-camera-grabber-integration" className="learn-more">Learn more <span className="arrow">→</span></a>
    </div>
  </div>
  
  <div className="scenario-card">
    <div className="card-image">
      <img src="https://raw.githubusercontent.com/1214658495/myWikiFiles/main/Camera/1_1_Serdes_Camera/GMSL_Camera/AiBox.png" alt="Third-party AI Box" />
    </div>
    <div className="card-content">
      <h3>Third-party AI Box</h3>
      <p>Integration with existing AI processing systems</p>
      <a href="#third-party-ai-box-integration" className="learn-more">Learn more <span className="arrow">→</span></a>
    </div>
  </div>
  
  <div className="scenario-card">
    <div className="card-image">
      <img src="https://raw.githubusercontent.com/1214658495/myWikiFiles/main/Camera/Camera_SOC_connect.png" alt="Custom Platform" />
    </div>
    <div className="card-content">
      <h3>Custom Platform</h3>
      <p>Integration with self-developed systems</p>
      <a href="#custom-platform-integration" className="learn-more">Learn more <span className="arrow">→</span></a>
    </div>
  </div>
</div> -->

## NVIDIA Platform Integration {#nvidia-platform-integration}


<div className="integration-header">
  <div className="integration-icon nvidia-icon"></div>
  <!-- <h2>NVIDIA Platform Integration</h2> -->
</div>

SENSING provides pre-adapted solutions for NVIDIA platforms, ensuring optimal performance and reliability with minimal integration effort.
<div className="card-image">
      <img src="https://raw.githubusercontent.com/1214658495/myWikiFiles/main/Nvidia_jetson/nvidia_jetson_agx_orin.png" alt="NVIDIA Platform" />
</div>

### Available Solutions

- **[NVIDIA Jetson Series](https://sensing-world.com/en/h-col-142.html)**: Compatible with Jetson AGX Orin, Jetson NX, and Jetson Nano
- **[NVIDIA DRIVE Series](https://sensing-world.com/en/h-col-146.html)**: Compatible with DRIVE AGX Orin

### Technical Specifications

<div className="table-container">
  <table className="specs-table">
    <thead>
      <tr>
        <th>Feature</th>
        <th>Specification</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Interface</td>
        <td>GMSL2/GMSL</td>
      </tr>
      <tr>
        <td>Data Rate</td>
        <td>Up to 6Gbps per lane</td>
      </tr>
      <tr>
        <td>Temperature</td>
        <td>-40°C to +85°C</td>
      </tr>
      <tr>
        <td>Power Supply</td>
        <td>12V DC</td>
      </tr>
    </tbody>
  </table>
</div>

### Integration Process

<div className="process-steps">
  <div className="step">
    <!-- <div className="step-number">1</div> -->
    <div className="step-content">
      <h4>1. Hardware Setup</h4>
      <ul>
        <li>Connect cameras to the GMSL interface ports</li>
        <li>Ensure proper power connection (12V DC)</li>
        <li>Verify physical connections and signal integrity</li>
      </ul>
    </div>
  </div>
  
  <div className="step">
    <!-- <div className="step-number">2</div> -->
    <div className="step-content">
      <h4>2. Software Configuration</h4>
      <ul>
        <li>Install NVIDIA drivers and SDK components</li>
        <li>Configure camera parameters through provided utilities</li>
        <li>Verify image acquisition and quality</li>
      </ul>
    </div>
  </div>
</div>

<div className="resources-section">
  <h4>Documentation & Resources</h4>
  <ul className="resource-links">
    <li>
      <span className="resource-icon doc-icon"></span>
      <a href="/docs/2_1_NVIDIA_Jetson/Getting_Started/NVIDIA_Jetson_AGX_Orin/GMSL_adapter_board/SG8A-AGON-G2Y-A1" target="_blank" rel="noopener noreferrer">
        NVIDIA Jetson AGX Orin GMSL Adapter Board Integration Guide
      </a>
    </li>
    <li>
      <span className="resource-icon github-icon"></span>
      <a href="https://github.com/SENSING-Technology/nvidia-jetson-camera-drivers" target="_blank" rel="noopener noreferrer">
        SENSING GitHub Repository
      </a>
    </li>
  </ul>
</div>

:::tip
NVIDIA platform solutions are pre-configured and tested to ensure seamless integration with SENSING cameras.
:::

## GMSL Camera Grabber Integration {#gmsl-camera-grabber-integration}

<div className="integration-header">
  <div className="integration-icon grabber-icon"></div>
  <!-- <h2>GMSL Camera Grabber Integration</h2> -->
</div>

SENSING GMSL camera grabber products provide a flexible solution for multi-camera applications with high-speed data capture capabilities.
<div className="card-image">
      <img src="https://raw.githubusercontent.com/1214658495/myWikiFiles/main/Data_collection/CCG3-8H/CCG3-8H_useGround3.png" alt="GMSL Camera Grabber" />
    </div>

### Product Features

<div className="table-container">
  <table className="specs-table">
    <thead>
      <tr>
        <th>Feature</th>
        <th>Specification</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Camera Input</td>
        <td>1-8 GMSL cameras</td>
      </tr>
      <tr>
        <td>Interface</td>
        <td>PCI-e Gen3.0</td>
      </tr>
      <tr>
        <td>Resolution</td>
        <td>Up to 4K@30fps</td>
      </tr>
      <tr>
        <td>OS Support</td>
        <td>Linux (Ubuntu 18.04/20.04)</td>
      </tr>
    </tbody>
  </table>
</div>

### Integration Process

<div className="process-steps">
  <div className="step">
    <!-- <div className="step-number">1</div> -->
    <div className="step-content">
      <h4>1. Hardware Setup</h4>
      <ul>
        <li>Install the grabber card in an available PCI-e slot</li>
        <li>Connect cameras to the designated ports</li>
        <li>Power on the system and verify hardware detection</li>
      </ul>
    </div>
  </div>
  
  <div className="step">
    <!-- <div className="step-number">2</div> -->
    <div className="step-content">
      <h4>2. Software Configuration</h4>
      <ul>
        <li>Install driver packages from provided media or repository</li>
        <li>Configure camera parameters through the supplied SDK</li>
        <li>Test functionality through sample applications</li>
      </ul>
    </div>
  </div>
</div>

<div className="resources-section">
  <h4>Documentation & Resources</h4>
  <ul className="resource-links">
    <li>
      <span className="resource-icon doc-icon"></span>
      <a href="/docs/3_1_GMSL2_3_Camera_Grabber/Getting_Started/CCG3-8H" target="_blank" rel="noopener noreferrer">
        GMSL Camera Grabber Integration Guide
      </a>
    </li>
    <li>
      <span className="resource-icon github-icon"></span>
      <a href="https://github.com/SENSING-Technology/CoaxCapture-CCG3" target="_blank" rel="noopener noreferrer">
        SENSING GitHub Repository
      </a>
    </li>
    <li>
      <span className="resource-icon web-icon"></span>
      <a href="https://sensing-world.com/en/Coaxcapture_Card/" target="_blank" rel="noopener noreferrer">
        Product Information
      </a>
    </li>
  </ul>
</div>

:::tip
GMSL grabber solutions are optimized for multi-camera synchronization and high-throughput capture scenarios.
:::

## Third-party AI Box Integration {#third-party-ai-box-integration}

<div className="integration-header">
  <div className="integration-icon aibox-icon"></div>
  <!-- <h2>Third-party AI Box Integration</h2> -->
</div>

When integrating with third-party AI processing systems, compatibility verification and proper technical coordination are essential.
<div className="card-image">
      <img src="https://raw.githubusercontent.com/1214658495/myWikiFiles/main/Camera/1_1_Serdes_Camera/GMSL_Camera/AiBox.png" alt="Third-party AI Box" />
    </div>

### Integration Workflow

<div className="workflow-container">
  <div className="workflow-step">
    <div className="workflow-title">Compatibility Assessment</div>
    <div className="workflow-content">
      <p>Review the AI Box manufacturer's "Compatible Camera List"</p>
      <p>Example: <a href="https://doc.miivii.com/Apex-AD10-User-Manual-EN/wiki/Apex-AD10-GMSL-Camera-Compatibility-List.html" target="_blank" rel="noopener noreferrer">MiiVii AI Box Camera Compatibility List</a></p>
    </div>
  </div>
  
  <!-- <div className="workflow-divider">
    <div className="workflow-branch">
      <div className="branch-label">If compatible</div>
      <div className="branch-arrow">↓</div>
    </div>
    <div className="workflow-branch">
      <div className="branch-label">If not compatible</div>
      <div className="branch-arrow">↓</div>
    </div>
  </div> -->
  
  <div className="workflow-split">
    <div className="workflow-path">
      <div className="workflow-step">
        <div className="workflow-title">Standard Integration</div>
        <div className="workflow-content">
          <ul>
            <li>Follow the manufacturer's standard integration procedure</li>
            <li>Refer to their documentation for configuration details</li>
            <li>Contact their technical support for assistance if needed</li>
          </ul>
        </div>
      </div>
    </div>
    
    <div className="workflow-path">
      <div className="workflow-step">
        <div className="workflow-title">Collaborative Integration</div>
        <div className="workflow-content">
          <h4>1. Establish Technical Collaboration</h4>
          <p>Create a joint communication channel between:</p>
          <ul>
            <li>AI Box manufacturer's technical team</li>
            <li>SENSING support team</li>
            <li>Customer implementation team</li>
          </ul>
          
          <h4>2. Technical Information Exchange</h4>
          <p>SENSING provides:</p>
          <ul>
            <li><a href="/docs/1_1_Serdes_Camera/GMSL_Camera/Getting_Camera_Information">Camera register configuration details</a></li>
            <li>I2C communication protocols</li>
            <li>Power requirements and sequence information</li>
          </ul>
          
          <p>AI Box manufacturer implements:</p>
          <ul>
            <li>Driver adaptations</li>
            <li>Camera configuration profiles</li>
            <li>Integration testing procedures</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>

:::note
The adaptation process typically requires 1-2 weeks depending on technical complexity.
:::

## Custom Platform Integration {#custom-platform-integration}

<div className="integration-header">
  <div className="integration-icon custom-icon"></div>
  <!-- <h2>Custom Platform Integration</h2> -->
</div>

For customers integrating SENSING cameras with custom deserializer implementations, detailed technical information and development support are provided.

### System Architecture

<div className="architecture-diagram">
  <img src="https://raw.githubusercontent.com/1214658495/myWikiFiles/main/Camera/Camera_SOC_connect.png" alt="Camera-SoC Integration Architecture" />
  <div className="diagram-caption">Camera to SoC communication architecture diagram showing serializer/deserializer connections</div>
</div>

### Technical Integration Process

<div className="integration-timeline">
  <div className="timeline-item">
    <!-- <div className="timeline-marker">1</div> -->
    <div className="timeline-content">
      <h4>1. Link Configuration</h4>
      <p>SENSING provides comprehensive technical documentation including:</p>
      <ul>
        <li><a href="/docs/1_1_Serdes_Camera/GMSL_Camera/Getting_Camera_Information" target="_blank" rel="noopener noreferrer">Camera register configuration</a></li>
        <li>Serializer/deserializer initialization sequences</li>
        <li>I2C communication protocol specifications</li>
      </ul>
    </div>
  </div>
  
  <div className="timeline-item">
    <!-- <div className="timeline-marker">2</div> -->
    <div className="timeline-content">
      <h4>2. Software Development</h4>
      
      <div className="code-section">
        <div className="code-header">
          <span className="code-title">Deserializer Initialization Example</span>
        </div>
        <div className="code-container">
```c
/* MAX9296 I2C initialization example */
#define MAX9296_I2C_ADDR 0x90 // 8-bit address

int max9296_init() {
    // Initialize I2C bus
    i2c_init();
    
    // Disable MIPI output
    i2c_write(MAX9296_I2C_ADDR, 0x0313, 0x00);
    delay_ms(100);
    
    // Configure link settings for GMSL2 (6Gbps)
    i2c_write(MAX9296_I2C_ADDR, 0x0001, 0x02);

    // Configure link selection (default values)
    i2c_write(MAX9296_I2C_ADDR, 0x0006, 0xC0);
    
    // Configure MIPI rate (1200Mbps)
    i2c_write(MAX9296_I2C_ADDR, 0x0320, 0x2C); 
    
    // Enable MIPI output
    i2c_write(MAX9296_I2C_ADDR, 0x0313, 0x02);
    
    return 0;
}
```
        </div>
      </div>
      
      <div className="code-section">
        <div className="code-header">
          <span className="code-title">Camera Module Initialization</span>
        </div>
        <div className="code-container">
```c
/* ISX031 sensor initialization example */
#define ISX031_I2C_ADDR 0x34 // 8-bit address
#define MAX9295_I2C_ADDR 0x80 // 8-bit address

int camera_init() {
    // Initialize deserializer first
    max9296_init();
    
    // Configure serializer (MAX9295A)
    i2c_write(MAX9295_I2C_ADDR, 0x02BE, 0x10); // MFP0 high
    i2c_write(MAX9295_I2C_ADDR, 0x0057, 0x12); 
    i2c_write(MAX9295_I2C_ADDR, 0x005B, 0x11); 
    
    // Configure data format (YUV422 8-bit)
    i2c_write(MAX9295_I2C_ADDR, 0x0318, 0x5E); 

    // Camera power sequence
    i2c_write(MAX9295_I2C_ADDR, 0x02D3, 0x00); // MFP7 low
    delay_ms(300);
    i2c_write(MAX9295_I2C_ADDR, 0x02D3, 0x10); // MFP7 high

    return 0;
}
```
        </div>
      </div>
    </div>
  </div>
  
  <div className="timeline-item">
    <!-- <div className="timeline-marker">3</div> -->
    <div className="timeline-content">
      <h4>3. System Integration</h4>
      
      <div className="integration-details">
        <div className="detail-section">
          <h5>BSP Integration</h5>
          <ul>
            <li>Device tree configuration for CSI interfaces</li>
            <li>Kernel driver inclusion</li>
            <li>Media pipeline configuration</li>
          </ul>
        </div>
        
        <div className="detail-section">
          <h5>Application Development</h5>
          <div className="code-container">
```c
/* Frame capture example */
int main() {
    // Open video device
    int fd = open("/dev/video0", O_RDWR);
    if (fd < 0) {
        perror("Failed to open camera device");
        return -1;
    }
    
    // Configure format
    struct v4l2_format fmt = {0};
    fmt.type = V4L2_BUF_TYPE_VIDEO_CAPTURE;
    fmt.fmt.pix.width = 1920;
    fmt.fmt.pix.height = 1536;
    fmt.fmt.pix.pixelformat = V4L2_PIX_FMT_YUYV;
    
    if (ioctl(fd, VIDIOC_S_FMT, &fmt) < 0) {
        perror("Failed to set format");
        close(fd);
        return -1;
    }
    
    // Buffer setup and capture operations
    // ...
    
    close(fd);
    return 0;
}
```
          </div>
        </div>
      </div>
    </div>
  </div>
  
  <div className="timeline-item">
    <!-- <div className="timeline-marker">4</div> -->
    <div className="timeline-content">
      <h4>4. Technical Support Resources</h4>
      <div className="support-resources">
        <div className="resource-item">
          <div className="resource-icon documentation"></div>
          <div className="resource-details">
            <h5>Documentation</h5>
            <p>Complete register documentation, timing diagrams, and power sequence diagrams</p>
          </div>
        </div>
        
        <div className="resource-item">
          <div className="resource-icon support"></div>
          <div className="resource-details">
            <h5>Engineering Support</h5>
            <p>Technical consultation and debugging assistance for custom implementations</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

:::tip
For custom integration projects, please contact SENSING technical support for detailed documentation and application-specific guidance.
:::

