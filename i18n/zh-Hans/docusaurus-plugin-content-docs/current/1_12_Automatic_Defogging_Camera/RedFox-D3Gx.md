---
sidebar_position: 1
title: RedFox-D3Gx
---

# RedFox-D3Gx

## 概述

<div className="row">
 <div className="col col--12">
 该摄像头配备 SONY 车规级 CMOS 图像传感器和 Maxim GMSL 串行器，车规级传感器搭配经过调校的图像信号处理器（ISP），可输出优秀的图像质量。产品采用 IP67 防护外壳，AA 镜头已在工厂完成调焦和点胶固定。
 </div>
</div>


<div style={{textAlign: 'center'}}>
 <img src="https://sgword-service.oss-cn-heyuan.aliyuncs.com/wiki-images/1_0_Camera/1_12_Automatic_Defogging_Camera/RedFox-D3Gx.png" alt="RedFox-D3Gx"
 style={{maxWidth: '30%', height:'auto'}} />
</div>
<br />

<div style={{textAlign: 'center', marginBottom: '2rem'}}>
 <a href="https://sensing-world.com/en/RedFoxD3Gx.html?fromMid=1544#recommendFromPid=0" target="_blank" rel="noopener noreferrer"
 style={{backgroundColor: '#f0f0f0', padding: '10px 20px', display: 'inline-block', borderRadius: '5px', textDecoration: 'none'}}>
 <strong style={{color: '#000000', fontSize: '1.2em'}}>立即购买</strong>
 </a>
</div>

## 主要特性与应用

<div style={{display: 'flex', flexWrap: 'wrap', gap: '1.5rem', marginBottom: '2rem'}}>
 <div style={{flex: 1, minWidth: 260, background: 'var(--ifm-background-color)', borderRadius: '10px', boxShadow: '0 2px 8px rgba(0,0,0,0.06)', padding: '1rem'}}>
 <strong>特性:</strong><br/>
 • 支持多摄像头同步<br/>
 • 支持不同焦距镜头<br/>
 • 支持外部触发<br/>
 • RoHS
 </div>
 <div style={{flex: 1, minWidth: 260, background: 'var(--ifm-background-color)', borderRadius: '10px', boxShadow: '0 2px 8px rgba(0,0,0,0.06)', padding: '1rem'}}>
 <strong>应用:</strong><br/>
 • 自动驾驶<br/>
 • ADAS + 视觉融合<br/>
 • 高动态范围成像<br/>
 • 机器人
 </div>
</div>


## 快速入门

### 规格

<div style={{display: 'flex', justifyContent: 'center'}}>

| **参数** | **规格** |
|---------------|-------------------|
| **传感器** | SONY 2.95MP RGGB |
| **ISP** | 内置 |
| **图像尺寸** | 1/2.42 inch CMOS |
| **输出像素** | 1920H×1536V @30fps （默认）<br/> 1920H×1536V @60fps |
| **分辨率** | 中心 ≥800LW/PH，周边 ≥600LW/PH<br/>（RedFox-D3GF 仅满足中心标准） |
| **像元尺寸** | 3.0μm × 3.0μm |
| **帧率** | MAX 60fps |
| **HDR 支持** | 是 |
| **LEM** | 是 |
| **HDR 范围** | 最高 120 dB |
| **输出数据** | YUV422 |
| **Serializer** | MAXIM MAX96717 |
| **摄像头 接口** | GMSL2 |
| **供电** | 9~16V 摄像头 |
| **电流** | 400mA@12V (配合 Heating) |
| **连接器** | Amphenol Fakra Z Code (摄像头) |
| **工作温度范围** | -40°~+85°C |
| **尺寸** | W: 30mm, L: 30mm |
| **重量** | < 100g |

</div>


### 尺寸

<div style={{textAlign: 'center'}}>
 <img src="https://sgword-service.oss-cn-heyuan.aliyuncs.com/wiki-images/1_0_Camera/1_12_Automatic_Defogging_Camera/D3GF.png" alt="SN2M4EFGD"
 style={{maxWidth: '80%', height:'auto'}} />
</div>
<br />
<div style={{textAlign: 'center'}}>
 <img src="https://sgword-service.oss-cn-heyuan.aliyuncs.com/wiki-images/1_0_Camera/1_12_Automatic_Defogging_Camera/D3GN.png" alt="SN2M4EFGD"
 style={{maxWidth: '80%', height:'auto'}} />
</div>
<br />
<div style={{textAlign: 'center'}}>
 <img src="https://sgword-service.oss-cn-heyuan.aliyuncs.com/wiki-images/1_0_Camera/1_12_Automatic_Defogging_Camera/D3GW.png" alt="SN2M4EFGD"
 style={{maxWidth: '80%', height:'auto'}} />
</div>

### 硬件概述
#### 框图
<div style={{textAlign: 'center'}}>
 <img src="https://sgword-service.oss-cn-heyuan.aliyuncs.com/wiki-images/1_0_Camera/1_12_Automatic_Defogging_Camera/RedFox-D3Gx_BlockDiagram.png" alt="D3Gx_BlockDiagram"
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
 <td>0x80 (8 位地址)</td>
 </tr>
 <tr>
 <td>GMSL 速率</td>
 <td>GMSL2 (6G bps)</td>
 </tr>
 <tr>
 <td rowspan="4"><strong>传感器</strong></td>
 <td>I2C 地址</td>
 <td>0x34 (8 位地址)</td>
 </tr>
 <tr>
 <td>Frame 同步</td>
 <td>控制方为 MAX96717 MFP7</td>
 </tr>
 <tr>
 <td>Reset</td>
 <td>控制方为 MAX96717 MFP0</td>
 </tr>
 <tr>
 <td>数据类型</td>
 <td>YUV422 8bit</td>
 </tr>
 </tbody>
</table>

</div>


### 镜头选项

<div style={{display: 'flex', justifyContent: 'center'}}>

| **型号** | **HFOV** | **VFOV** | **F.No** | **EFL (mm)** | **DOF** | **最大光学畸变** | **防水等级** | **镜头安装** |
|-----------|----------|----------|----------|--------------|---------|----------------------------|------------------|----------------|
| **RedFox-D3GN** | 53.2° | 43.6° | 1.6 | 5.76 | 2.3~INF Focus at 6.9m | -22.4% | IP67 | AA |
| **RedFox-D3GW** | 118.4° | 91.4° | 2.0 | 3.04 | 0.51~INF Focus at 1.5m | -92% | IP67 | AA |
| **RedFox-D3GF** | 196° | 160° | 2 | 1.31 | 0.1~INF Focus at 0.4m | -84% | IP67 | AA |

</div>






<!-- ### 1.4 Advanced 特性

#### 1.4.1 自动除雾技术
The RedFox-D3Gx series incorporates advanced automatic defogging algorithms that enhance image clarity in challenging weather conditions. This technology automatically adjusts image processing parameters to maintain optimal visibility during fog, mist, or hazy conditions.

#### 1.4.2 车规级可靠性
- **温度适应性**：可在 -40°C 至 +85°C 范围内可靠运行
- **环境防护**：IP67 防护外壳可防尘防水
- **抗振能力**：设计满足车载振动和冲击要求
- **长期稳定性**：车规级器件可确保长时间运行中的稳定性能 -->


<!-- ## 2. 摄像头集成与部署 -->

<!-- ### 2.1 Adaptation to NVIDIA® Jetson™ 平台
<div style={{textAlign: 'center'}}>
 <img src="https://raw.githubusercontent.com/1214658495/myWikiFiles/main/Camera/1_6_Low_Latency_Camera/GMSL_Camera/SH3-S11A60-G2A_ConnectNvidia.png" alt="SH3-S11A60-G2A_ConnectNvidia"
 style={{maxWidth: '60%', height:'auto'}} />
 <p>SHW3H 摄像头 连接到 NVIDIA Jetson AGX Orin</p>
</div>

#### 2.1.1 安装步骤

:::note 快速设置
1. 使用同轴线将 RedFox-D3Gx 摄像头连接到 SG10A-AGON-G2M-A1 转接板
2. 将 SG10A-AGON-G2M-A1 转接板安装到 Jetson AGX Orin 模组
3. 连接 RedFox-D3Gx 摄像头电源（9-16V）
4. 连接 SG10A-AGON-G2M-A1 板卡电源
5. 启动系统并确认摄像头已被检测到
::: -->

<!-- <div style={{textAlign: 'center'}}>
 <img src="https://raw.githubusercontent.com/1214658495/myWikiFiles/main/Camera/mipi_csi_camera/mipi_csi_camera_nvidia.png" alt="Embedded 摄像头"
 style={{maxWidth: '60%', height:'auto'}} />
</div> -->

<!-- #### 2.1.2 软件准备

:::info SDK 下载
根据 RedFox-D3Gx 摄像头型号和 JetPack 版本选择合适的驱动包：

将完整链接地址复制到 [DownGit](https://minhaskamal.github.io/DownGit/#/home) 进行下载
:::

<div style={{display: 'flex', justifyContent: 'center'}}>

| **序号** | **JetPack 版本** | **摄像头 型号** | **NVIDIA Jetson 设备** | **转接板** | **下载链接** |
|---------|---------------------|------------------|----------------------------|-------------------|-------------------|
| 1 | JP6.0 | RedFox-D3Gx Series | Jetson AGX Orin 开发套件 | [SG10A-AGON-G2M-A1](/zh-Hans/docs/2_1_NVIDIA_Jetson/Getting_Started/NVIDIA_Jetson_AGX_Orin/GMSL_adapter_board/SG10A-AGON-G2M-A1) | [下载](https://github.com/SENSING-Technology/nvidia-jetson-camera-drivers/tree/main/Jetson%20AGX%20Orin%20Devkit/SG10A-AGON-G2M-A1/JetPack6.0/RedFox-D3Gx_JP6.0_L4TR36.3.0) |

</div>

:::note JetPack 版本
NVIDIA JetPack（<strong style={{ color: 'var(--ifm-color-primary-light)' }}>Jetpack 5.1.2</strong> 或 <strong style={{ color: 'var(--ifm-color-primary-light)' }}>Jetpack 6.0</strong>）是 Jetson 系列开发板的官方软件开发套件（SDK），包含操作系统、驱动、CUDA、cuDNN、TensorRT 以及其他开发工具和库。每个 JetPack 版本通常对应特定的 Jetson Linux 版本（此前称为 L4T - Linux for Tegra）。
- 36.4.3: L4T R36.4.3 (Jetpack 6.2)
- 36.4: L4T R36.4 (Jetpack 6.1)
- 36.3: L4T R36.3 (Jetpack 6.0)
- 35.4.1: L4T R35.4.1 (Jetpack 5.1.2)

更多信息请访问 [NVIDIA 官方 Jetson 下载中心](https://developer.nvidia.com/embedded/jetpack-archive).
::: -->



## 摄像头与客户自研平台集成

对于使用自有解串器并希望将我们的摄像头（串行器）适配到其平台的客户，需要进行详细的技术协同。
<div style={{textAlign: 'center'}}>
 <img src="https://sgword-service.oss-cn-heyuan.aliyuncs.com/wiki-images/1_0_Camera/1_1_Serdes_Camera/Camera_SOC_connect.png" alt="SG8A-ORIN-GMSL2-complete" style={{width: 730, height:'auto'}} />
</div>

该图展示了摄像头与控制器系统之间的通信架构：数据从摄像头侧的传感器/ISP 经串行器传输到控制器侧的解串器和 SoC。系统使用 Fsync 信号进行同步，并通过 MFP7 接口进行控制。该架构是将 SENSING 摄像头正确集成到客户自研平台的关键。

#### 2.2.1 链路寄存器初始化
SENSING 为 RedFox-D3Gx 集成提供完整技术支持：

- **串行器和解串器配置**
 - RedFox-D3Gx 摄像头模组寄存器配置 - [获取摄像头信息](/zh-Hans/docs/1_1_Serdes_Camera/GMSL_Camera/Getting_Camera_Information)
 - I2C 通信协议细节
 - MAX96717G 串行器配置参数

- **链路状态故障排查指南**
 - 用于 6Gbps GMSL2 通信的链路训练参数
 - 错误检测与恢复设置
 - 信号完整性优化

:::tip
请参考下方软件流程和示例代码开发驱动代码。
:::

#### 2.2.2 软件开发

##### Deserializer 初始化

```c
/* Example code for MAX9296 I2C initialization for RedFox-D3Gx */
#define MAX9296_I2C_ADDR 0x90 // 8 位地址

int max9296_init_redfox() {
    // Initialize I2C bus
    i2c_init();

    // Disable MIPI output during configuration
    i2c_write(MAX9296_I2C_ADDR, 0x0313, 0x00);
    delay_ms(100);

    // Configure link settings for GMSL2 (6Gbps) - RedFox-D3Gx specific
    i2c_write(MAX9296_I2C_ADDR, 0x0001, 0x02);

    // Configure linkA and linkB settings for GMSL2 selection
    i2c_write(MAX9296_I2C_ADDR, 0x0006, 0xC0);

    // Configure MIPI rate 1200Mbps for RedFox-D3Gx
    i2c_write(MAX9296_I2C_ADDR, 0x0320, 0x2C);

    // Enable MIPI output
    i2c_write(MAX9296_I2C_ADDR, 0x0313, 0x02);

    return 0;
}
```

##### RedFox-D3Gx 摄像头 配置

```c
/* RedFox-D3Gx Camera initialization with MAX96717G serializer */

#define MAX96717_I2C_ADDR 0x80 // 8 位地址 for RedFox-D3Gx

int redfox_d3gx_init() {
    // Initialize deserializer first
    max9296_init_redfox();

    // Reset sensor through MAX96717G MFP0
    i2c_write(MAX96717_I2C_ADDR, 0x02BE, 0x10); // MFP0 high - sensor enable
    delay_ms(50);

    // Configure serializer for RedFox-D3Gx
    i2c_write(MAX96717_I2C_ADDR, 0x0057, 0x12);
    i2c_write(MAX96717_I2C_ADDR, 0x005B, 0x11);

    // Configure datatype for YUV422 8bit output
    i2c_write(MAX96717_I2C_ADDR, 0x0318, 0x5E);

    // Camera trigger sequence using MFP7
    i2c_write(MAX96717_I2C_ADDR, 0x02D3, 0x00); // MFP7 low
    delay_ms(300);
    i2c_write(MAX96717_I2C_ADDR, 0x02D3, 0x10); // MFP7 high - start streaming

    return 0;
}
```

#### 2.2.3 集成步骤

##### RedFox-D3Gx BSP 集成

1. **设备树配置**:
 - 修改设备树以包含 RedFox-D3Gx 的 CSI 接口配置
 - 配置 6Gbps 工作所需的 GMSL2 链路参数
 - 将 RedFox-D3Gx 摄像头驱动加入内核构建配置
 - 为自动除雾摄像头配置 media controller 管线

2. **驱动集成**:
 - 实现 RedFox-D3Gx 专用传感器控制
 - 配置自动除雾算法参数
 - 设置 HDR 处理管线（最高 120 dB 范围）
 - 实现 -40°C 至 +85°C 工作范围内的温度补偿

##### RedFox-D3Gx 应用开发

```c
/* RedFox-D3Gx Camera Application Example */
#include "redfox_camera_api.h"
#include <linux/videodev2.h>

int main() {
    // Open RedFox-D3Gx camera device
    int fd = open("/dev/video0", O_RDWR);
    if (fd < 0) {
        perror("Failed to open RedFox-D3Gx camera device");
        return -1;
    }

    // Configure video capture format for RedFox-D3Gx
    struct v4l2_format fmt = {0};
    fmt.type = V4L2_BUF_TYPE_VIDEO_CAPTURE;
    fmt.fmt.pix.width = 1920;
    fmt.fmt.pix.height = 1536;
    fmt.fmt.pix.pixelformat = V4L2_PIX_FMT_UYVY; // YUV422 format

    if (ioctl(fd, VIDIOC_S_FMT, &fmt) < 0) {
        perror("Failed to set RedFox-D3Gx format");
        close(fd);
        return -1;
    }

    // Configure automatic defogging parameters
    struct v4l2_control ctrl;
    ctrl.id = V4L2_CID_AUTO_DEFOG_ENABLE;
    ctrl.value = 1; // Enable automatic defogging
    ioctl(fd, VIDIOC_S_CTRL, &ctrl);

    // Set HDR mode for enhanced dynamic range
    ctrl.id = V4L2_CID_HDR_MODE;
    ctrl.value = 1; // Enable HDR processing
    ioctl(fd, VIDIOC_S_CTRL, &ctrl);

    // Request and map buffers for high-resolution capture
    // ... (buffer setup code for 1920x1536 resolution) ...

    // Start streaming with automatic defogging
    // ... (streaming code with defogging enabled) ...

    // Capture and process frames with enhanced clarity
    // ... (frame processing with defogging algorithms) ...

    // Cleanup resources
    close(fd);
    return 0;
}
```
#### 2.2.4 数据处理流水线

##### MIPI CSI 接口处理
通过 MIPI CSI 接口接收 RedFox-D3Gx 数据后：

- **数据接收**
 - 实现用于 6Gbps GMSL2 数据的 MIPI CSI-2 协议
 - 按 RedFox-D3Gx 规格配置数据速率
 - 进行错误检测与校正，以满足车规级可靠性要求

- **图像处理**
 - YUV422 数据解析与验证
 - 应用自动除雾算法
 - 进行 HDR 处理以增强动态范围（最高 120 dB）
 - 图像格式转换与优化
 - 配置显示以获得更高清晰度

##### 性能优化
- **实时处理**: 为 60fps 运行优化算法
- **温度补偿**：针对 -40°C 至 +85°C 范围自动调整
- **电源管理**: 通过高效处理维持 400mA@12V 功耗

### 2.3 技术支持和文档

#### 2.3.1 完整文档包
- **硬件规格**
 - 详细寄存器说明 用于 MAX96717G serializer
 - 传感器 配置参数 用于 SONY 2.95MP RGGB
 - 电气特性和时序图

- **软件集成指南**
 - 驱动开发模板
 - API 参考文档
 - 主流平台集成示例

#### 2.3.2 专业工程支持
- **技术咨询**
 - 平台专项集成指导
 - 性能优化建议
 - 自定义配置开发

- **调试和故障排查**
 - 远程调试协助
 - 信号完整性分析
 - 性能分析和优化

- **持续支持**
 - 固件更新和增强
 - 长期技术合作
 - 培训和知识转移

:::tip 专业集成支持
SENSING Technology 为 RedFox-D3Gx 在车载、工业和嵌入式平台上的集成提供全面技术支持。工程团队可提供详细文档、示例代码和实操技术协助，确保自动除雾摄像头方案顺利部署。

如需技术协助，请结合具体平台需求和集成目标联系我们的支持团队。
:::
