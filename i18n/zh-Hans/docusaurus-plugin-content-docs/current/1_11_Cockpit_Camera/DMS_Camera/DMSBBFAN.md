---
sidebar_position: 1
---

# DMSBBFAN

## 概述

<div className="row">
 <div className="col col--12">
 DMSBBFAN 摄像头模组配备 OmniVision CMOS 图像传感器 OV02311 和 Maxim GMSL 串行器 MAX96717F，采用车规级传感器和经过调校的图像信号处理器（ISP），可输出优秀图像质量。同时配备红外车规级镜头，支持 940nm 红外光识别。
 </div>
</div>


<div style={{textAlign: 'center'}}>
 <img src="https://sgword-service.oss-cn-heyuan.aliyuncs.com/wiki-images/1_0_Camera/1_3_Global_Shutter_Camera/GMSL_Camera/DMSBBFAN/DMSBBFAN.png" alt="DMSBBFAN"
 style={{maxWidth: '25%', height:'auto'}} />
</div>
<br />

<div style={{textAlign: 'center', marginBottom: '2rem'}}>
 <a href="https://www.sensing-world.com/h-pd-44.html?recommendFromPid=0&fromMid=735" target="_blank" rel="noopener noreferrer"
 style={{backgroundColor: '#f0f0f0', padding: '10px 20px', display: 'inline-block', borderRadius: '5px', textDecoration: 'none'}}>
 <strong style={{color: '#000000', fontSize: '1.2em'}}>立即购买</strong>
 </a>
</div>


## 快速入门

### 规格

<div style={{display: 'flex', justifyContent: 'center'}}>

| 参数 | 值 |
|-------------------|-------------------------|
| 传感器 | OV 2.08MP OV02311 Monochrome |
| ISP | GW5200 |
| 图像尺寸 | 1/2.9 inch CMOS |
| 输出像素 | 1600H*1300V |
| 像元尺寸 | 3um*3um |
| 帧率 | 1600H*1300V@30fps |
| 输出数据 | YUV422@8bit |
| 串行器 | MAXIM MAX96717F |
| 红外滤光片 | 940nm 带通 |
| 摄像头 接口 | GMSL2 |
| 供电 | POC: 9~16V , LED: 9 ~16V DC |
| 电流 | POC：小于 250mA@12VDC，LED：小于 400mA@12VDC |
| 连接器 | Amphenol Fakra (Z Code) + Molex |
| 工作温度 range | -40~+85℃ |
| 尺寸 | W: 35.3mm, L:43.6mm, H:24.8mm |
| 重量 | 小于 50g |

</div>


### 尺寸

<div style={{textAlign: 'center'}}>
 <img src="https://sgword-service.oss-cn-heyuan.aliyuncs.com/wiki-images/1_0_Camera/1_3_Global_Shutter_Camera/GMSL_Camera/DMSBBFAN/DMSBBFAN_Dimension.png" alt="DMSBBFAN"
 style={{maxWidth: '80%', height:'auto'}} />
</div>


### 硬件概述
#### 框图
<div style={{textAlign: 'center'}}>
 <img src="https://sgword-service.oss-cn-heyuan.aliyuncs.com/wiki-images/1_0_Camera/1_3_Global_Shutter_Camera/GMSL_Camera/DMSBBFAN/DMSBBFAN_BlockDiagram.png" alt="DMSBBFAN"
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
 <td>Max96717F</td>
 </tr>
 <tr>
 <td>I2C 地址</td>
 <td>0x80 (8 位地址)</td>
 </tr>
 <tr>
 <td>GMSL 速率</td>
 <td>GMSL2 (3G bps)</td>
 </tr>
 <tr>
 <td rowspan="3"><strong>ISP</strong></td>
 <td>型号</td>
 <td>GW5200</td>
 </tr>
 <tr>
 <td>I2C 地址</td>
 <td>0xDA (8 位地址)</td>
 </tr>
 <tr>
 <td>Reset</td>
 <td>控制方为 Max96717F MFP0</td>
 </tr>
 <tr>
 <td rowspan="4"><strong>传感器</strong></td>
 <td>型号</td>
 <td>OV02311</td>
 </tr>
 <tr>
 <td>I2C 地址</td>
 <td>0xC0 (8 位地址)</td>
 </tr>
 <tr>
 <td>Frame 同步</td>
 <td>控制方为 Max96717F MFP7</td>
 </tr>
 <tr>
 <td>ERROR</td>
 <td>控制方为 Max96717F MFP3</td>
 </tr>
 </tbody>
</table>

</div>


#### LED 连接器 引脚定义
<div style={{textAlign: 'center'}}>
 <img src="https://sgword-service.oss-cn-heyuan.aliyuncs.com/wiki-images/1_0_Camera/1_3_Global_Shutter_Camera/GMSL_Camera/DMSBBFAN/DMSBBFAN_LED_Connector.png" alt="DMSBBFAN_LED_连接器"
 style={{maxWidth: '30%', height:'auto'}} />
</div>
<br />

<div style={{display: 'flex', justifyContent: 'center'}}>
<table>
 <thead>
 <tr>
 <th colSpan="2">引脚定义</th>
 <th colSpan="2">工作电压范围</th>
 <th>稳态电流</th>
 <th rowSpan="2">接口类型</th>
 </tr>
 <tr>
 <th>PIN</th>
 <th>说明</th>
 <th>最高(V)</th>
 <th>Min(V)</th>
 <th>(mA)</th>
 </tr>
 </thead>
 <tbody>
 <tr>
 <td>1</td>
 <td>VCC+</td>
 <td>16</td>
 <td>9</td>
 <td>&lt;400mA@12V</td>
 <td rowSpan="2">Molex<br/>(5600200220)</td>
 </tr>
 <tr>
 <td>2</td>
 <td>GND</td>
 <td>0</td>
 <td>0</td>
 <td>0</td>
 </tr>
 </tbody>
</table>
</div>


### 镜头选项

<div style={{display: 'flex', justifyContent: 'center'}}>

| 型号 | HFOV | VFOV | F.No | EFL | 最大光学畸变 | 防水等级 | 镜头安装 |
|-------|------|------|------|-----|------------------------|-------------|------------|
| DMSBBFAN | 55° | 44.4° | 2.2 | 5.1mm | -0.09%@HFOV | IP5X | M9 |

</div>


### 物料清单

<div className="row">
 <div className="col col--12">
 :::note 标准配置
 - DMSBBFAN
 - 供电 Cable
 :::
 </div>
 <!-- <div className="col col--4">
 :::note 可选配置
 - Jetson Orin Nano/NX 开发套件
 :::
 </div> -->
</div>

## 摄像头使用
### 1. 适配 NVIDIA® Jetson™ 平台
<div style={{textAlign: 'center'}}>
 <img src="https://sgword-service.oss-cn-heyuan.aliyuncs.com/wiki-images/1_0_Camera/1_3_Global_Shutter_Camera/GMSL_Camera/DMSBBFAN/DMSBBFAN_ConnectNvidia.png" alt="DMSBBFAN_ConnectNvidia"
 style={{maxWidth: '50%', height:'auto'}} />
 <p>DMSBBFAN 摄像头连接到 NVIDIA Jetson AGX Orin</p>
</div>

#### **步骤 1**: 安装步骤

:::note 快速设置
1. 使用同轴线将 DMSBBFAN 摄像头连接到 SG8A-ORIN-GMSL2 转接板
2. 将 SG8A-ORIN-GMSL2 转接板安装到 Jetson AGX Orin 模组
3. 为 DMSBBFAN 摄像头连接电源
4. 为 SG8A-ORIN-GMSL2 转接板连接电源
5. 启动系统
:::

<!-- <div style={{textAlign: 'center'}}>
 <img src="https://raw.githubusercontent.com/1214658495/myWikiFiles/main/Camera/mipi_csi_camera/mipi_csi_camera_nvidia.png" alt="Embedded 摄像头"
 style={{maxWidth: '60%', height:'auto'}} />
</div> -->

#### **步骤 2**: 软件准备

:::info SDK 下载
-请根据摄像头类型和 JetPack 版本选择合适的驱动包:

-将完整链接地址复制到 [DownGit](https://minhaskamal.github.io/DownGit/#/home) 进行下载
:::

<div style={{display: 'flex', justifyContent: 'center'}}>

| 序号 | JetPack 版本 | NVIDIA Jetson 设备 | 转接板 | 下载链接 |
|-------------|-----------------|-------------|---------------|---------------|
| 1 | JP5.1.2 | Jetson AGX Orin 开发套件 | [SG8A-ORIN-GMSL2-F](/zh-Hans/docs/2_1_NVIDIA_Jetson/Getting_Started/NVIDIA_Jetson_AGX_Orin/GMSL_adapter_board/SG8A-ORIN-GMSL2) | [下载](https://github.com/SENSING-Technology/nvidia-jetson-camera-drivers/tree/main/Jetson%20AGX%20Orin%20Devkit/SG8A-ORIN-GMSL2-F/JetPack5.1.2/SG8A_ORIN_GMSL2-F_V2_AGX_Orin_YUV_JP5.1.2_L4TR35.4.1) |
| 2 | JP6.2 | Jetson AGX Orin 开发套件 | [SG8A-ORIN-GMSL2-F](/zh-Hans/docs/2_1_NVIDIA_Jetson/Getting_Started/NVIDIA_Jetson_AGX_Orin/GMSL_adapter_board/SG8A-ORIN-GMSL2) | [下载](https://github.com/SENSING-Technology/nvidia-jetson-camera-drivers/tree/main/Jetson%20AGX%20Orin%20Devkit/SG8A-ORIN-GMSL2-F/JetPack6.2/SG8A_ORIN_GMSL2-F_V2_AGX_Orin_YUV_JP6.2_L4TR36.4.3) |

</div>

:::note JetPack 版本
NVIDIA JetPack（<strong style={{ color: 'var(--ifm-color-primary-light)' }}>Jetpack 5.1.2</strong> 或 <strong style={{ color: 'var(--ifm-color-primary-light)' }}>Jetpack 6.0</strong>）是 Jetson 系列开发板的官方软件开发套件（SDK），包含操作系统、驱动、CUDA、cuDNN、TensorRT 以及其他开发工具和库。每个 JetPack 版本通常对应特定的 Jetson Linux 版本（此前称为 L4T - Linux for Tegra）。
- 36.4.3: L4T R36.4.3 (Jetpack 6.2)
- 36.4: L4T R36.4 (Jetpack 6.1)
- 36.3: L4T R36.3 (Jetpack 6.0)
- 35.4.1: L4T R35.4.1 (Jetpack 5.1.2)

更多信息请访问 [NVIDIA 官方 Jetson 下载中心](https://developer.nvidia.com/embedded/jetpack-archive).
:::

<!-- ### Attachment
<div style={{textAlign: 'center'}}>
 <img src="https://raw.githubusercontent.com/1214658495/myWikiFiles/main/Camera/mipi_csi_camera/mipi_csi_camera_FPC.png" alt="mipi_csi_camera_FPC"
 style={{maxWidth: '70%', height:'auto'}} />
</div> -->


### 2. 摄像头与客户自研平台集成

对于使用自有解串器并希望将我们的摄像头（串行器）适配到其平台的客户，需要进行详细的技术协同。
<div style={{textAlign: 'center'}}>
 <img src="https://sgword-service.oss-cn-heyuan.aliyuncs.com/wiki-images/1_0_Camera/1_1_Serdes_Camera/Camera_SOC_connect.png" alt="SG8A-ORIN-GMSL2-complete" style={{width: 730, height:'auto'}} />
</div>

该图展示了摄像头与控制器系统之间的通信架构：数据从摄像头侧的传感器/ISP 经串行器传输到控制器侧的解串器和 SoC。系统使用 Fsync 信号进行同步，并通过 MFP7 接口进行控制。该架构是将 SENSING 摄像头正确集成到客户自研平台的关键。

### 步骤 1：链路寄存器初始化
SENSING 将提供：
- **串行器和解串器配置**
 - 寄存器配置 用于 摄像头模组-[获取摄像头信息](/zh-Hans/docs/1_1_Serdes_Camera/GMSL_Camera/Getting_Camera_Information)
 - I2C 通信协议细节

- **链路状态故障排查指南**
 - 链路训练参数
 - 错误检测设置

:::tip
请参考下方软件流程和示例代码开发驱动代码。
:::
#### 软件开发

1. **驱动开发**:

```c
/* Example code for MAX9296 I2C initialization */
#define MAX9296_I2C_ADDR 0x90 // 8 位地址

int max9296_init() {
    // Initialize I2C bus
    i2c_init();

    // disable MIPI output
    i2c_write(MAX9296_I2C_ADDR, 0x0313, 0x00);
    delay_ms(100);
    // Configure link settings for GMSL2 (3Gbps)
    i2c_write(MAX9296_I2C_ADDR, 0x0001, 0x01);

    // Configure linkA and linkB settings for GMSL2 selection (default value)
    i2c_write(MAX9296_I2C_ADDR, 0x0006, 0xC0);

    // Configure MIPI rate 1200Mbps
    i2c_write(MAX9296_I2C_ADDR, 0x0320, 0x2C);

    // enable MIPI output
    i2c_write(MAX9296_I2C_ADDR, 0x0313, 0x02);

    return 0;
}
```

2. **摄像头 配置**:

```c
/* Example code for OMSBDAAN  initialization */

#define MAX9295_I2C_ADDR 0x80 // 8 位地址

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

1. **BSP 集成**:
 - 修改设备树以包含 CSI 接口配置
 - 将摄像头驱动加入内核构建配置
 - 配置用于摄像头的 media controller pipeline

2. **应用开发**:

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
    fmt.fmt.pix.width = 1600;
    fmt.fmt.pix.height = 1300;
    fmt.fmt.pix.pixelformat = V4L2_PIX_FMT_YUYV;

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
 - 实现 MIPI CSI-2 协议
 - 数据速率配置
 - 时钟同步
- **图像处理**
 - Raw/YUV 数据解析
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
SENSING Technology 为大多数平台的集成提供技术支持。如需详细文档、示例代码和技术协助，请联系我们的支持团队。
:::
