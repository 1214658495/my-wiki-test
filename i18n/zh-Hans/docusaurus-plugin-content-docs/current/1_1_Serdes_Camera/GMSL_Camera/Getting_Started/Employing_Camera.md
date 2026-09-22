---
sidebar_position: 3
---
# 摄像头使用
<!-- # 摄像头 集成指南 -->

本综合指南说明 SENSING GMSL 摄像头在不同平台和系统中的集成方法。

<div className="toc-container">
 <div className="toc-header">本指南内容</div>
 <ul className="toc-list">
 <li><a href="#nvidia-platform-integration">NVIDIA 平台集成</a></li>
 <li><a href="#gmsl-camera-grabber-integration">GMSL 摄像头采集卡集成</a></li>
 <li><a href="#third-party-ai-box-integration">第三方 AI Box 集成</a></li>
 <li><a href="#custom-platform-integration">自研平台集成</a></li>
 </ul>
</div>

<!-- ## 集成场景 -->
<!--
<div className="integration-grid">
 <div className="scenario-card">
 <div className="card-image">
 <img src="https://sgword-service.oss-cn-heyuan.aliyuncs.com/wiki-images/2_1_NVIDIA_Jetson/nvidia_jetson_agx_orin.png" alt="NVIDIA 平台" />
 </div>
 <div className="card-content">
 <h3>NVIDIA 平台</h3>
 <p>面向 Jetson 和 DRIVE 系列的预适配方案</p>
 <a href="#nvidia-platform-integration" className="learn-more">了解更多 <span className="arrow">→</span></a>
 </div>
 </div>

 <div className="scenario-card">
 <div className="card-image">
 <img src="https://sgword-service.oss-cn-heyuan.aliyuncs.com/wiki-images/3_1_GMSL2_3_Camera_Grabber/CCG3-8H/CCG3-8H_useGround3.png" alt="GMSL 摄像头采集卡" />
 </div>
 <div className="card-content">
 <h3>GMSL 摄像头采集卡</h3>
 <p>灵活的多相机采集方案</p>
 <a href="#gmsl-camera-grabber-integration" className="learn-more">了解更多 <span className="arrow">→</span></a>
 </div>
 </div>

 <div className="scenario-card">
 <div className="card-image">
 <img src="https://sgword-service.oss-cn-heyuan.aliyuncs.com/wiki-images/1_0_Camera/1_1_Serdes_Camera/AiBox.png" alt="第三方 AI Box" />
 </div>
 <div className="card-content">
 <h3>第三方 AI Box</h3>
 <p>与现有 AI 处理系统集成</p>
 <a href="#third-party-ai-box-integration" className="learn-more">了解更多 <span className="arrow">→</span></a>
 </div>
 </div>

 <div className="scenario-card">
 <div className="card-image">
 <img src="https://sgword-service.oss-cn-heyuan.aliyuncs.com/wiki-images/1_0_Camera/1_1_Serdes_Camera/Camera_SOC_connect.png" alt="自研平台" />
 </div>
 <div className="card-content">
 <h3>自研平台</h3>
 <p>与自研系统集成</p>
 <a href="#custom-platform-integration" className="learn-more">了解更多 <span className="arrow">→</span></a>
 </div>
 </div>
</div> -->

## NVIDIA 平台集成 {#nvidia-platform-integration}


<div className="integration-header">
 <div className="integration-icon nvidia-icon"></div>
 <!-- <h2>NVIDIA 平台集成</h2> -->
</div>

SENSING 提供面向 NVIDIA 平台的预适配方案，以较低集成工作量确保最佳性能和可靠性。
<div className="card-image">
 <img src="https://sgword-service.oss-cn-heyuan.aliyuncs.com/wiki-images/2_1_NVIDIA_Jetson/nvidia_jetson_agx_orin.png" alt="NVIDIA 平台" />
</div>

### 可用方案

- **[NVIDIA Jetson 系列](https://sensing-world.com/en/h-col-142.html)**: 兼容 Jetson AGX Orin、Jetson NX 和 Jetson Nano
- **[NVIDIA DRIVE 系列](https://sensing-world.com/en/h-col-146.html)**: 兼容 DRIVE AGX Orin

### 技术规格

<div className="table-container">
 <table className="specs-table">
 <thead>
 <tr>
 <th>特性</th>
 <th>规格</th>
 </tr>
 </thead>
 <tbody>
 <tr>
 <td>接口</td>
 <td>GMSL2/GMSL</td>
 </tr>
 <tr>
 <td>数据速率</td>
 <td>每通道最高 6Gbps</td>
 </tr>
 <tr>
 <td>温度</td>
 <td>-40°C 至 +85°C</td>
 </tr>
 <tr>
 <td>供电</td>
 <td>12V DC</td>
 </tr>
 </tbody>
 </table>
</div>

### 集成流程

<div className="process-steps">
 <div className="step">
 <!-- <div className="step-number">1</div> -->
 <div className="step-content">
 <h4>1. 硬件设置</h4>
 <ul>
 <li>将摄像头连接到 GMSL 接口端口</li>
 <li>确认 12V DC 电源连接正确</li>
 <li>检查物理连接和信号完整性</li>
 </ul>
 </div>
 </div>

 <div className="step">
 <!-- <div className="step-number">2</div> -->
 <div className="step-content">
 <h4>2. 软件配置</h4>
 <ul>
 <li>安装 NVIDIA 驱动和 SDK 组件</li>
 <li>通过提供的工具配置摄像头参数</li>
 <li>验证图像采集和图像质量</li>
 </ul>
 </div>
 </div>
</div>

<div className="resources-section">
 <h4>文档与资源</h4>
 <ul className="resource-links">
 <li>
 <span className="resource-icon doc-icon"></span>
 <a href="/zh-Hans/docs/2_1_NVIDIA_Jetson/Getting_Started/NVIDIA_Jetson_AGX_Orin/GMSL_adapter_board/SG8A-AGON-G2Y-A1" target="_blank" rel="noopener noreferrer">
 NVIDIA Jetson AGX Orin GMSL 转接板 集成指南
 </a>
 </li>
 <li>
 <span className="resource-icon github-icon"></span>
 <a href="https://github.com/SENSING-Technology/nvidia-jetson-camera-drivers" target="_blank" rel="noopener noreferrer">
 SENSING GitHub 仓库
 </a>
 </li>
 </ul>
</div>

:::tip
NVIDIA 平台方案已完成预配置和测试，可确保与 SENSING 摄像头顺畅集成。
:::

## GMSL 摄像头采集卡集成 {#gmsl-camera-grabber-integration}

<div className="integration-header">
 <div className="integration-icon grabber-icon"></div>
 <!-- <h2>GMSL 摄像头采集卡集成</h2> -->
</div>

SENSING GMSL 摄像头采集卡产品可为多摄像头应用提供灵活的高速数据采集方案。
<div className="card-image">
 <img src="https://sgword-service.oss-cn-heyuan.aliyuncs.com/wiki-images/3_1_GMSL2_3_Camera_Grabber/CCG3-8H/CCG3-8H_useGround3.png" alt="GMSL 摄像头采集卡" />
 </div>

### 产品特性

<div className="table-container">
 <table className="specs-table">
 <thead>
 <tr>
 <th>特性</th>
 <th>规格</th>
 </tr>
 </thead>
 <tbody>
 <tr>
 <td>摄像头输入</td>
 <td>1-8 路 GMSL 摄像头</td>
 </tr>
 <tr>
 <td>接口</td>
 <td>PCI-e Gen3.0</td>
 </tr>
 <tr>
 <td>分辨率</td>
 <td>最高 4K@30fps</td>
 </tr>
 <tr>
 <td>操作系统支持</td>
 <td>Linux (Ubuntu 18.04/20.04)</td>
 </tr>
 </tbody>
 </table>
</div>

### 集成流程

<div className="process-steps">
 <div className="step">
 <!-- <div className="step-number">1</div> -->
 <div className="step-content">
 <h4>1. 硬件设置</h4>
 <ul>
 <li>将采集卡安装到可用的 PCI-e 插槽</li>
 <li>将摄像头连接到指定端口</li>
 <li>启动系统并确认硬件可被识别</li>
 </ul>
 </div>
 </div>

 <div className="step">
 <!-- <div className="step-number">2</div> -->
 <div className="step-content">
 <h4>2. 软件配置</h4>
 <ul>
 <li>从提供的介质或仓库安装驱动包</li>
 <li>通过随附 SDK 配置摄像头参数</li>
 <li>通过示例应用测试功能</li>
 </ul>
 </div>
 </div>
</div>

<div className="resources-section">
 <h4>文档与资源</h4>
 <ul className="resource-links">
 <li>
 <span className="resource-icon doc-icon"></span>
 <a href="/zh-Hans/docs/3_1_GMSL2_3_Camera_Grabber/Getting_Started/CCG3-8H" target="_blank" rel="noopener noreferrer">
 GMSL 摄像头采集卡 集成指南
 </a>
 </li>
 <li>
 <span className="resource-icon github-icon"></span>
 <a href="https://github.com/SENSING-Technology/CoaxCapture-CCG3" target="_blank" rel="noopener noreferrer">
 SENSING GitHub 仓库
 </a>
 </li>
 <li>
 <span className="resource-icon web-icon"></span>
 <a href="https://sensing-world.com/en/Coaxcapture_Card/" target="_blank" rel="noopener noreferrer">
 产品信息
 </a>
 </li>
 </ul>
</div>

:::tip
GMSL 采集卡方案面向多摄像头同步和高吞吐采集场景。
:::

## 第三方 AI Box 集成 {#third-party-ai-box-integration}

<div className="integration-header">
 <div className="integration-icon aibox-icon"></div>
 <!-- <h2>第三方 AI Box 集成</h2> -->
</div>

与第三方 AI 处理系统集成时，需要进行兼容性验证和充分的技术协同。
<div className="card-image">
 <img src="https://sgword-service.oss-cn-heyuan.aliyuncs.com/wiki-images/1_0_Camera/1_1_Serdes_Camera/AiBox.png" alt="第三方 AI Box" />
 </div>

### 集成工作流

<div className="workflow-container">
 <div className="workflow-step">
 <div className="workflow-title">兼容性评估</div>
 <div className="workflow-content">
 <p>查看 AI Box 厂商的“兼容摄像头列表”</p>
 <p>示例: <a href="https://doc.miivii.com/Apex-AD10-User-Manual-EN/wiki/Apex-AD10-GMSL-Camera-Compatibility-List.html" target="_blank" rel="noopener noreferrer">MiiVii AI Box 摄像头兼容性列表</a></p>
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
 <div className="workflow-title">标准集成</div>
 <div className="workflow-content">
 <ul>
 <li>按照厂商标准集成流程操作</li>
 <li>请参考对应文档获取配置详情</li>
 <li>如有需要，请联系对应厂商的技术支持</li>
 </ul>
 </div>
 </div>
 </div>

 <div className="workflow-path">
 <div className="workflow-step">
 <div className="workflow-title">协同适配</div>
 <div className="workflow-content">
 <h4>1. 建立技术协作</h4>
 <p>在以下团队之间建立联合沟通渠道：</p>
 <ul>
 <li>AI Box 厂商的技术团队</li>
 <li>SENSING 支持团队</li>
 <li>客户实施团队</li>
 </ul>

 <h4>2. 技术信息交换</h4>
 <p>SENSING 提供：</p>
 <ul>
 <li><a href="/zh-Hans/docs/1_1_Serdes_Camera/GMSL_Camera/Getting_Camera_Information">摄像头 寄存器配置详情</a></li>
 <li>I2C 通信协议</li>
 <li>供电要求与时序信息</li>
 </ul>

 <p>AI Box 厂商实现：</p>
 <ul>
 <li>驱动适配</li>
 <li>摄像头配置文件</li>
 <li>集成测试流程</li>
 </ul>
 </div>
 </div>
 </div>
 </div>
</div>

:::note
适配过程通常需要 1 到 2 周，具体取决于技术复杂度。
:::

## 自研平台集成 {#custom-platform-integration}

<div className="integration-header">
 <div className="integration-icon custom-icon"></div>
 <!-- <h2>自研平台集成</h2> -->
</div>

对于使用自定义解串器集成 SENSING 摄像头的客户，可获得详细技术资料和开发支持。

### 系统架构

<div className="architecture-diagram">
 <img src="https://sgword-service.oss-cn-heyuan.aliyuncs.com/wiki-images/1_0_Camera/1_1_Serdes_Camera/Camera_SOC_connect.png" alt="摄像头-SoC 集成架构" />
 <div className="diagram-caption">摄像头到 SoC 的通信架构图，展示串行器/解串器连接关系</div>
</div>

### 技术集成流程

<div className="integration-timeline">
 <div className="timeline-item">
 <!-- <div className="timeline-marker">1</div> -->
 <div className="timeline-content">
 <h4>1. 链路配置</h4>
 <p>SENSING 提供完整技术文档，包括：</p>
 <ul>
 <li><a href="/zh-Hans/docs/1_1_Serdes_Camera/GMSL_Camera/Getting_Camera_Information" target="_blank" rel="noopener noreferrer">摄像头 寄存器配置</a></li>
 <li>串行器/解串器初始化序列</li>
 <li>I2C 通信协议规范</li>
 </ul>
 </div>
 </div>

 <div className="timeline-item">
 <!-- <div className="timeline-marker">2</div> -->
 <div className="timeline-content">
 <h4>2. 软件开发</h4>

 <div className="code-section">
 <div className="code-header">
 <span className="code-title">解串器初始化示例</span>
 </div>
 <div className="code-container">
```c
/* MAX9296 I2C initialization example */
#define MAX9296_I2C_ADDR 0x90 // 8 位地址

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
 <span className="code-title">摄像头模组初始化</span>
 </div>
 <div className="code-container">
```c
/* ISX031 sensor initialization example */
#define ISX031_I2C_ADDR 0x34 // 8 位地址
#define MAX9295_I2C_ADDR 0x80 // 8 位地址

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
 <h4>3. 系统集成</h4>

 <div className="integration-details">
 <div className="detail-section">
 <h5>BSP 集成</h5>
 <ul>
 <li>用于 CSI 接口的设备树配置</li>
 <li>内核驱动集成</li>
 <li>媒体管线配置</li>
 </ul>
 </div>

 <div className="detail-section">
 <h5>应用开发</h5>
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
 <h4>4. 技术支持 资源</h4>
 <div className="support-resources">
 <div className="resource-item">
 <div className="resource-icon documentation"></div>
 <div className="resource-details">
 <h5>文档</h5>
 <p>完整寄存器文档、时序图和上电时序图</p>
 </div>
 </div>

 <div className="resource-item">
 <div className="resource-icon support"></div>
 <div className="resource-details">
 <h5>工程支持</h5>
 <p>面向自研实现的技术咨询和调试协助</p>
 </div>
 </div>
 </div>
 </div>
 </div>
</div>

:::tip
对于自研平台集成项目，请联系 SENSING 技术支持获取详细文档和面向具体应用的指导。
:::
