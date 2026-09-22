---
sidebar_position: 1
---

# OMSBDAAN

## 概述

<div className="row">
 <div className="col col--12">
 OMSBDAAN 摄像头模组配备 OmniVision CMOS 图像传感器 OX05B1S 和 Maxim GMSL 串行器 MAX9295A，采用车规级传感器和经过调校的图像信号处理器（ISP），可输出优秀图像质量。同时配备 M12 车规级镜头，支持可见光和 940nm 红外光识别。
 </div>
</div>



<div style={{textAlign: 'center'}}>
 <img src="https://sgword-service.oss-cn-heyuan.aliyuncs.com/wiki-images/1_0_Camera/1_3_Global_Shutter_Camera/GMSL_Camera/OMSBDAAN/OMSBDAAN.png" alt="OMSBDAAN"
 style={{maxWidth: '30%', height:'auto'}} />
</div>
<br />

<div style={{textAlign: 'center', marginBottom: '2rem'}}>
 <a href="https://sensing-world.com/en/h-pd-46.html?recommendFromPid=0&fromMid=1593" target="_blank" rel="noopener noreferrer"
 style={{backgroundColor: '#f0f0f0', padding: '10px 20px', display: 'inline-block', borderRadius: '5px', textDecoration: 'none'}}>
 <strong style={{color: '#000000', fontSize: '1.2em'}}>立即购买</strong>
 </a>
</div>

## 快速入门

### 规格

<div style={{display: 'flex', justifyContent: 'center'}}>

| 参数 | 值 |
|-------------------|-------------------------|
| 传感器 | OmniVision 5MP OX05B1S RGB-IR |
| ISP | OAX4000 |
| 图像尺寸 | 1/2.53 inch CMOS |
| 输出像素 | AA 模式: 2592H *1944V / AB 模式: 2592H *1800V |
| 帧率 | AA 模式: 2592H *1944V@30fps / AB 模式: 2592H *1800V@60fps |
| 像元尺寸 | 2.2um*2.2um |
| HDR 支持 | / |
| 输出数据 | YUV422-8bit |
| 串行器 | MAXIM MAX9295A |
| IR 滤光片 | 可见光 + 940nm 带通 |
| 摄像头 接口 | GMSL2 |
| 供电 | POC: 9~16V , LED: 9 ~16V DC |
| 电流 | POC：小于 350mA@12VDC，LED：小于 400mA@12VDC |
| 连接器 | Amphenol Fakra(Z Code)+Molex |
| 工作温度 | -40 to +85°C |
| 尺寸 | W: 28.8mm, L:44.2mm, H:20mm|
| 重量 | 小于 50g |

</div>


### 尺寸

<div style={{textAlign: 'center'}}>
 <img src="https://sgword-service.oss-cn-heyuan.aliyuncs.com/wiki-images/1_0_Camera/1_3_Global_Shutter_Camera/GMSL_Camera/OMSBDAAN/OMSBDAAN_dimensions.png" alt="OMSBDAAN"
 style={{maxWidth: '80%', height:'auto'}} />
</div>


### 硬件概述
#### 框图
<div style={{textAlign: 'center'}}>
 <img src="https://sgword-service.oss-cn-heyuan.aliyuncs.com/wiki-images/1_0_Camera/1_3_Global_Shutter_Camera/GMSL_Camera/OMSBDAAN/OMSBDAAN_Block Diagram.png" alt="OMSBDAAN"
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
 <td>Max9295A</td>
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
 <td rowspan="3"><strong>ISP</strong></td>
 <td>型号</td>
 <td>OAX4000</td>
 </tr>
 <tr>
 <td>I2C 地址</td>
 <td>0x48 (8 位地址)</td>
 </tr>
 <tr>
 <td>Reset</td>
 <td>控制方为 Max9295A MFP0</td>
 </tr>
 <tr>
 <td rowspan="4"><strong>传感器</strong></td>
 <td>型号</td>
 <td>OX05B1S</td>
 </tr>
 <tr>
 <td>I2C 地址</td>
 <td>0x6C (8 位地址)</td>
 </tr>
 <tr>
 <td>Frame 同步</td>
 <td>控制方为 Max9295A MFP7</td>
 </tr>
 <tr>
 <td>ERROR</td>
 <td>控制方为 Max9295A MFP3</td>
 </tr>
 </tbody>
</table>

</div>



#### LED 连接器 引脚定义
<div style={{textAlign: 'center'}}>
 <img src="https://sgword-service.oss-cn-heyuan.aliyuncs.com/wiki-images/1_0_Camera/1_3_Global_Shutter_Camera/GMSL_Camera/OMSBDAAN/OMSBDAAN_LED_Connect.png" alt="OMSBDAAN_LED_Connect"
 style={{maxWidth: '40%', height:'auto'}} />
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


<!-- #### 传感器 power-up sequence

:::info 电源-up Sequence
SG3-ISX031C-MIPI 摄像头没有特定上电时序要求，只需在三路电源稳定后拉高 RESET。
:::

#### 电源时序图 -->



### 镜头选项

<div style={{display: 'flex', justifyContent: 'center'}}>

| 型号 | HFOV | VFOV | F.No | EFL | 最大光学畸变 | 防水等级 | 镜头安装 |
|-------|------|------|------|-----|------------------------|-------------|------------|
| OMSBDAAN | 130° | 98°@1944V | 2.0 | 2.18mm | -39.2%@HFOV | IP5X | M12 |

</div>


### 物料清单

<div className="row">
 <div className="col col--12">
 :::note 标准配置
 - OMSBDAAN
 - 供电 Cable
 :::
 </div>
 <!-- <div className="col col--4">
 :::note 可选配置
 - Jetson Orin Nano/NX 开发套件
 :::
 </div> -->
</div>

### 摄像头工作模式

#### 1. AA 模式
<div style={{textAlign: 'center'}}>
 <img src="https://sgword-service.oss-cn-heyuan.aliyuncs.com/wiki-images/1_0_Camera/1_3_Global_Shutter_Camera/GMSL_Camera/OMSBDAAN/OMSBDAAN_WorkMode_AA.png" alt="OMSBDAAN_WorkMode_AA"
 style={{maxWidth: '85%', height:'auto'}} />
 <!-- <p>OMSBDAAN 摄像头 工作模式 AB</p> -->
</div>

<div style={{display: 'flex', justifyContent: 'center'}}>

| 参数项 | 参数 说明 |
|---|---|
| 分辨率 | 2592 x 1944 |
| 帧率 | 30fps |
| 输出数据 | UYVY/YUYV |
| MIPI | 4lane, 800Mbps/lane |

</div>

当场景亮度高于亮度阈值时，输出 30fps 的 RGB 图像。

当场景亮度低于阈值时，系统会自动切换输出 IR 图像，帧率为 30fps。

亮度阈值通过寄存器配置设置。

#### 2. AB 模式
<div style={{textAlign: 'center'}}>
 <img src="https://sgword-service.oss-cn-heyuan.aliyuncs.com/wiki-images/1_0_Camera/1_3_Global_Shutter_Camera/GMSL_Camera/OMSBDAAN/OMSBDAAN_WorkMode_AB.png" alt="OMSBDAAN_WorkMode_AB"
 style={{maxWidth: '100%', height:'auto'}} />
 <!-- <p>OMSBDAAN 摄像头 工作模式 AB</p> -->
</div>

<div style={{display: 'flex', justifyContent: 'center'}}>

| 参数项 | 参数 说明 |
|---|---|
| 分辨率 | 2592 x 1800 |
| 帧率 | RGB: 30fps; IR: 30fps |
| 输出数据 | UYVY/YUYV |
| MIPI | 4lane, 1296Mbps/lane |

</div>

A 帧输出 RGB 图像，VC 通道为 0，帧率为 30fps；B 帧输出 IR 图像，VC 通道为 1，帧率为 30fps。
:::caution 重要提示
摄像头只能以 AA 或 AB 模式之一输出。购买时请向销售人员说明所需模式。
:::

## 摄像头使用
### 1. 适配 NVIDIA® Jetson™ 平台
<div style={{textAlign: 'center'}}>
 <img src="https://sgword-service.oss-cn-heyuan.aliyuncs.com/wiki-images/1_0_Camera/1_3_Global_Shutter_Camera/GMSL_Camera/OMSBDAAN/OMSBDAAN_ConnectNvidia.png" alt="OMSBDAAN_ConnectNvidia"
 style={{maxWidth: '50%', height:'auto'}} />
 <p>OMSBDAAN 摄像头连接到 NVIDIA Jetson AGX Orin</p>
</div>

#### **步骤 1**: 安装步骤

:::note 快速设置
1. 使用同轴线将 OMSBDAAN 摄像头连接到 SG8A-ORIN-GMSL2 转接板
2. 将 SG8A-ORIN-GMSL2 转接板安装到 Jetson AGX Orin 模组
3. 为 OMSBDAAN 摄像头连接电源
4. 为 SG8A-ORIN-GMSL2 转接板连接电源
5. 启动系统
:::

<!-- <div style={{textAlign: 'center'}}>
 <img src="https://sgword-service.oss-cn-heyuan.aliyuncs.com/wiki-images/1_0_Camera/1_2_MIPI_CSI_Camera/mipi_csi_camera_nvidia.png" alt="Embedded 摄像头"
 style={{maxWidth: '60%', height:'auto'}} />
</div> -->

#### **步骤 2**: 软件准备

:::info SDK 下载
-请根据摄像头类型和 JetPack 版本选择合适的驱动包:

-将完整链接地址复制到 [DownGit](https://minhaskamal.github.io/DownGit/#/home) 进行下载
:::

<div style={{display: 'flex', justifyContent: 'center'}}>

| 序号 | JetPack 版本 | 摄像头模式 | NVIDIA Jetson 设备 | 转接板 | 下载链接 |
|-------------|-----------------|-------------|---------------|---------------|---------------|
| 1 | JP5.1.2 | AA 模式 |Jetson AGX Orin 开发套件 | [SG8A-ORIN-GMSL2-F](/zh-Hans/docs/2_1_NVIDIA_Jetson/Getting_Started/NVIDIA_Jetson_AGX_Orin/GMSL_adapter_board/SG8A-ORIN-GMSL2) | [下载](https://github.com/SENSING-Technology/nvidia-jetson-camera-drivers/tree/main/Jetson%20AGX%20Orin%20Devkit/SG8A-ORIN-GMSL2-F/JetPack5.1.2/SG8A_ORIN_GMSL2-F_V2_AGX_Orin_YUV_OX05B-AA_JP5.1.2_L4TR35.4.1) |
| 2 | JP5.1.2 | AB 模式 |Jetson AGX Orin 开发套件 | [SG8A-ORIN-GMSL2-F](/zh-Hans/docs/2_1_NVIDIA_Jetson/Getting_Started/NVIDIA_Jetson_AGX_Orin/GMSL_adapter_board/SG8A-ORIN-GMSL2) | [下载](https://github.com/SENSING-Technology/nvidia-jetson-camera-drivers/tree/main/Jetson%20AGX%20Orin%20Devkit/SG8A-ORIN-GMSL2-F/JetPack5.1.2/SG8A_ORIN_GMSL2-F_V2_AGX_Orin_YUV_OX05B-AB_JP5.1.2_L4TR35.4.1) |


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
 <img src="https://sgword-service.oss-cn-heyuan.aliyuncs.com/wiki-images/1_0_Camera/1_2_MIPI_CSI_Camera/mipi_csi_camera_FPC.png" alt="mipi_csi_camera_FPC"
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
    fmt.fmt.pix.width = 2592;
    fmt.fmt.pix.height = 1944;
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
