---
sidebar_position: 5
title: SHF5G（5MP 全局快门）
---

# SHF5G（5MP 全局快门）-HFOV 200°

## 概述

<div className="row">
  <div className="col col--12">
    SHF5G 摄像头专为具身智能应用打造，采用 5MP 全局快门传感器并具备高帧率能力。该摄像头面向机器人感知与识别进行优化，适合集成到人形机器人的头部或躯干。
  </div>
</div>

<div style={{textAlign: 'center'}}>
    <img src="https://sgword-service.oss-cn-heyuan.aliyuncs.com/wiki-images/1_0_Camera/1_10_Humanoid_Robotic_Camera/SHF5G/SHF5G.png?x-oss-process=image/format,webp" alt="SHF5G" 
    style={{maxWidth: '30%', height:'auto'}} />
</div>
<br />

<!-- <div style={{textAlign: 'center', marginBottom: '2rem'}}>
    <a href="https://sensing-world.com/en/h-pd-295.html?recommendFromPid=0&fromMid=1544" target="_blank" rel="noopener noreferrer" 
       style={{backgroundColor: '#f0f0f0', padding: '10px 20px', display: 'inline-block', borderRadius: '5px', textDecoration: 'none'}}>
        <strong style={{color: '#000000', fontSize: '1.2em'}}>立即购买</strong>
    </a>
</div> -->
## 关键特性与应用

<div style={{display: 'flex', flexWrap: 'wrap', gap: '1.5rem', marginBottom: '2rem'}}>
  <div style={{flex: 1, minWidth: 260, background: 'var(--ifm-background-color)', borderRadius: '10px', boxShadow: '0 2px 8px rgba(0,0,0,0.06)', padding: '1rem'}}>
    <strong>特性：</strong><br/>
    • 输出 RAW 数据<br/>
    • 全局快门<br/>
    • 低延迟<br/>
    • 支持外部触发<br/>
    • 多摄像头同步
  </div>
  <div style={{flex: 1, minWidth: 260, background: 'var(--ifm-background-color)', borderRadius: '10px', boxShadow: '0 2px 8px rgba(0,0,0,0.06)', padding: '1rem'}}>
    <strong>应用：</strong><br/>
    • 人形机器人<br/>
    • 数据采集
  </div>
</div>

## 快速开始

### 规格参数

<div style={{display: 'flex', justifyContent: 'center'}}>

<table>
  <thead>
    <tr>
      <th rowspan="2">参数</th>
      <th colspan="2">详情</th>
    </tr>
    <tr>
      <th>全局快门</th>
      <th>卷帘快门</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>传感器</td>
      <td colspan="2">RGGB</td>
    </tr>
    <tr>
      <td>图像尺寸</td>
      <td colspan="2">1/2.5 inch CMOS</td>
    </tr>
    <tr>
      <td>输出像素</td>
      <td colspan="2">2560 (H) × 1984 (V)</td>
    </tr>
    <tr>
      <td>像元尺寸</td>
      <td colspan="2">2.25um × 2.25um</td>
    </tr>
    <tr>
      <td>全分辨率帧率</td>
      <td>最高 60FPS</td>
      <td>最高 50FPS</td>
    </tr>
    <tr>
      <td>HDR 支持</td>
      <td>NA</td>
      <td>最高 100dB</td>
    </tr>
    <tr>
      <td>输出数据</td>
      <td colspan="2">RAW@10bit</td>
    </tr>
    <tr>
      <td>串行器</td>
      <td colspan="2">MAXIM MAX96717</td>
    </tr>
    <tr>
      <td>摄像头接口</td>
      <td colspan="2">GMSL2</td>
    </tr>
    <tr>
      <td>供电</td>
      <td colspan="2">9~16V POC</td>
    </tr>
    <tr>
      <td>电流</td>
      <td colspan="2">小于 200mA@12VDC</td>
    </tr>
    <tr>
      <td>连接器</td>
      <td colspan="2">Amphenol Fakra (Z Code)</td>
    </tr>
    <tr>
      <td>工作温度范围</td>
      <td colspan="2">-40~+85℃</td>
    </tr>
    <tr>
      <td>尺寸</td>
      <td colspan="2">W: 25mm, L:25mm, H:31.35mm</td>
    </tr>
    <tr>
      <td>重量</td>
      <td colspan="2">小于 50g</td>
    </tr>
  </tbody>
</table>

</div>

### 尺寸

<div style={{textAlign: 'center'}}>
    <img src="https://sgword-service.oss-cn-heyuan.aliyuncs.com/wiki-images/1_0_Camera/1_10_Humanoid_Robotic_Camera/SHF5G/SHF5G_Dimensions.png?x-oss-process=image/format,webp" alt="SHF5G" 
    style={{maxWidth: '100%', height:'auto'}} />
</div>

### 硬件概览
#### 框图
<div style={{textAlign: 'center'}}>
    <img src="https://sgword-service.oss-cn-heyuan.aliyuncs.com/wiki-images/1_0_Camera/1_10_Humanoid_Robotic_Camera/SHF5G/SHF5G_BlockDiagram.png?x-oss-process=image/format,webp" alt="SHF5G_BlockDiagram" 
    style={{maxWidth: '80%', height:'auto'}} />
</div>

#### I2C 地址信息

<div style={{display: 'flex', justifyContent: 'center'}}>

<table>
  <thead>
    <tr>
      <th>组件</th>
      <th>参数</th>
      <th>值</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td rowspan="3"><strong>串行器</strong></td>
      <td>型号</td>
      <td>MAX96717</td>
    </tr>
    <tr>
      <td>I2C 地址</td>
      <td>0x80 (8bit 地址)</td>
    </tr>
    <tr>
      <td>GMSL 速率</td>
      <td>GMSL2 (6G bps)</td>
    </tr>
    <tr>
      <td rowspan="4"><strong>传感器</strong></td>
      <td>型号</td>
      <td>RGGB</td>
    </tr>
    <tr>
      <td>I2C 地址</td>
      <td>0x20 (8bit 地址)</td>
    </tr>
    <tr>
      <td>帧同步</td>
      <td>由 MAX96717 MFP7 控制</td>
    </tr>
    <tr>
      <td>复位</td>
      <td>由 MAX96717 MFP0 控制</td>
    </tr>
  </tbody>
</table>

</div>

### 镜头规格

<div style={{display: 'flex', justifyContent: 'center'}}>

| HFOV | VFOV | F.No | EFL | 对焦距离 | 景深 | 防水等级 | 镜头安装 |
|------|------|------|-----|----------------|----------------|-------------|------------|
| 200° | 150° | 2.0 | 1.69mm | 0.4m | 0.1m - INF | IP69K | AA |

</div>

## 摄像头使用
### 1. 适配 NVIDIA® Jetson™ 平台
<div style={{textAlign: 'center'}}>
    <img src="https://sgword-service.oss-cn-heyuan.aliyuncs.com/wiki-images/1_0_Camera/1_10_Humanoid_Robotic_Camera/S56/S56_Application.jpg?x-oss-process=image/format,webp" alt="SHF5G_Application" 
    style={{maxWidth: '60%', height:'auto'}} />
    <p>SHF5G 摄像头连接到 NVIDIA Jetson AGX Orin</p>
</div>

#### **步骤 1**：安装步骤

:::note 快速设置
1. 使用同轴线将 SHF5G 摄像头连接到 SG10A-AGON-G2M-A1 板卡
2. 将 SG10A-AGON-G2M-A1 板卡安装到 Jetson AGX Orin 模组上
3. 连接 SHF5G 摄像头电源
4. 连接 SG10A-AGON-G2M-A1 板卡电源
5. 启动系统
:::

<!-- <div style={{textAlign: 'center'}}>
    <img src="https://raw.githubusercontent.com/1214658495/myWikiFiles/main/Camera/mipi_csi_camera/mipi_csi_camera_nvidia.png" alt="Embedded Camera" 
    style={{maxWidth: '60%', height:'auto'}} />
</div> -->

#### **步骤 2**：软件准备

:::info SDK 下载
- 请根据摄像头类型和 JetPack 版本选择合适的驱动包：

- 将完整链接地址复制到 [DownGit](https://minhaskamal.github.io/DownGit/#/home) 下载
:::

<div style={{display: 'flex', justifyContent: 'center'}}>

| 序号 | JetPack 版本 | 摄像头 | NVIDIA Jetson 设备 | 转接板 | 下载链接 |
|-------------|-----------------|-------------|---------------|---------------|---------------|
| 1 | JP6.2 | SHF5G |Jetson AGX Orin Developer Kit | [SG10A-AGON-G2M-A1](/zh-Hans/docs/2_1_NVIDIA_Jetson/Getting_Started/NVIDIA_Jetson_AGX_Orin/GMSL_adapter_board/SG10A-AGON-G2M-A1) | [下载](https://github.com/SENSING-Technology/nvidia-jetson-camera-drivers/tree/main/Jetson%20AGX%20Orin%20Devkit/SG10A-AGON-G2M-A1/JetPack6.2/SG10A_AGON_G2M_A1_AGX_ORIN_SHW5G_JP6.2_L4TR36.4.3) |

</div>

:::note JetPack 版本
NVIDIA JetPack（<strong style={{ color: 'var(--ifm-color-primary-light)' }}>Jetpack 5.1.2</strong> 或 <strong style={{ color: 'var(--ifm-color-primary-light)' }}>Jetpack 6.0</strong>）是 Jetson 系列开发板的官方软件开发套件（SDK），包含操作系统、驱动、CUDA、cuDNN、TensorRT 以及其他开发工具和库。每个 JetPack 版本通常对应一个特定的 Jetson Linux 版本（此前称为 L4T - Linux for Tegra）。
- 36.4.3: L4T R36.4.3 (Jetpack 6.2)
- 36.4: L4T R36.4 (Jetpack 6.1)
- 36.3: L4T R36.3 (Jetpack 6.0)
- 35.4.1: L4T R35.4.1 (Jetpack 5.1.2)

更多信息请访问 [NVIDIA 官方 Jetson 下载中心](https://developer.nvidia.com/embedded/jetpack-archive)。
:::

### 2. 与客户自研平台集成

对于使用自有解串器、希望将我们的摄像头（串行器端）适配到其平台的客户，需要进行详细的技术协同。
<div style={{textAlign: 'center'}}>
    <img src="https://sgword-service.oss-cn-heyuan.aliyuncs.com/wiki-images/1_0_Camera/1_1_Serdes_Camera/Camera_SOC_connect.png?x-oss-process=image/format,webp" alt="SG8A-ORIN-GMSL2-complete" style={{width: 730, height:'auto'}} />
</div>

该图展示了摄像头与控制器系统之间的通信架构：数据从摄像头侧的 Sensor/ISP 经 Serializer 传输到控制器侧的 Deserializer 和 SOC。系统使用 Fsync 信号进行同步，并通过 MFP7 接口进行控制。该架构是将 SENSING 摄像头正确集成到客户自研平台的关键。

### 步骤 1：链路寄存器初始化
SENSING 将提供：
- **串行器与解串器配置**
   - 摄像头模组寄存器配置：[获取摄像头信息](/zh-Hans/docs/1_1_Serdes_Camera/GMSL_Camera/Getting_Camera_Information)
   - I2C 通信协议细节

- **链路状态故障排查指南**
  - 链路训练参数
  - 错误检测设置

:::tip
请参考下面的软件流程和示例代码开发驱动代码。
:::
#### 软件开发

1. **驱动开发**：

```c
/* Example code for MAX9296 I2C initialization */
#define MAX9296_I2C_ADDR 0x90 // 8-bit address

int max9296_init() {
    // Initialize I2C bus
    i2c_init();
    
    // disable MIPI output
    i2c_write(MAX9296_I2C_ADDR, 0x0313, 0x00);
    delay_ms(100);
    // Configure link settings for GMSL2 (6Gbps)
    i2c_write(MAX9296_I2C_ADDR, 0x0001, 0x02);

    // Configure linkA and linkB settings for GMSL2 selection (default value)
    i2c_write(MAX9296_I2C_ADDR, 0x0006, 0xC0);
    
    // Configure MIPI rate 1200Mbps
    i2c_write(MAX9296_I2C_ADDR, 0x0320, 0x2C); 
    
    // enable MIPI output
    i2c_write(MAX9296_I2C_ADDR, 0x0313, 0x02);
    
    return 0;
}
```

2. **摄像头配置**：

```c
/* Example code for   initialization */

#define MAX9295_I2C_ADDR 0x80 // 8-bit address

int camera_init() {
    // Initialize deserializer first
    max9296_init();
    
    // Reset ISP through MAX9295A
    i2c_write(0x80, 0x02BE, 0x10); // MFP0 high
    // 
    i2c_write(0x80, 0x0057, 0x12); 
    i2c_write(0x80, 0x005B, 0x11); 
    //  Configure datatype  YUV422 8bit
    i2c_write(0x80, 0x0318, 0x5E); 

    //  camera trigger  MFP7  low to  high
    i2c_write(0x80, 0x02D3, 0x00); // MFP7 low
    delay_ms(300);
    i2c_write(0x80, 0x02D3, 0x10); // MFP7 high

    return 0;
}
```

#### 集成步骤

1. **BSP 集成**：
   - 修改设备树以包含 CSI 接口配置
   - 将摄像头驱动加入内核构建配置
   - 为摄像头配置 media controller pipeline

2. **应用开发**：

```c
/* Example code for capturing camera frames */
#include "camera_api.h"

int main() {
    // Open camera device
    int fd = open("/dev/video0", O_RDWR);
    if (fd < 0) {
        perror("Failed to open camera device");
        return -1;
    }
    
    // Configure video capture format
    struct v4l2_format fmt = {0};
    fmt.type = V4L2_BUF_TYPE_VIDEO_CAPTURE;
    fmt.fmt.pix.width = 1920;
    fmt.fmt.pix.height = 1536;
    fmt.fmt.pix.pixelformat = V4L2_PIX_FMT_UYVY;
    
    if (ioctl(fd, VIDIOC_S_FMT, &fmt) < 0) {
        perror("Failed to set format");
        close(fd);
        return -1;
    }
    
    // Request and map buffers
    // ... (buffer setup code) ...
    
    // Start streaming
    // ... (streaming code) ...
    
    // Capture and process frames
    // ... (frame processing code) ...
    
    // Cleanup
    close(fd);
    return 0;
}
```
### 步骤 2：数据处理
通过 MIPI CSI 接口接收模组数据后：
- **数据接收**
  - MIPI CSI-2 协议实现
  - 数据速率配置
- **图像处理**
  - YUV422 数据解析
  - 图像格式转换
  - 显示配置

### 技术支持
- **文档**
  - 详细寄存器说明

- **工程支持**
  - 技术咨询
  - 调试协助
  - 性能优化

:::tip
SENSING Technology 可为大多数平台的集成工作提供技术支持。如需详细文档、示例代码和技术协助，请联系我们的支持团队。
:::
