---
sidebar_position: 1
---

# ITRD1 G2A


## 概述

<div className="row">
  <div className="col col--12">
    ITRD1 G2A 是面向 NVIDIA IGX THOR 平台的 Thor 开发套件，为其扩展 GMSL 连接能力，可快速集成 GMSL 摄像头视频流。最多支持 4 路 GMSL 摄像头。
  </div>
</div>


<div style={{textAlign: 'center'}}>
    <img src="https://sgword-service.oss-cn-heyuan.aliyuncs.com/wiki-images/2_6_NVIDIA_IGX_Thor/ITRD1_G2A/ITRD1_G2A.png?x-oss-process=image/format,webp" alt="ITRD1_G2A"
    style={{maxWidth: '50%', height:'auto'}} />
</div>
<br />

<div style={{textAlign: 'center', marginBottom: '2rem'}}>
    <a href="https://www.sensing-world.com/h-pd-344.html" target="_blank" rel="noopener noreferrer"
       style={{backgroundColor: '#f0f0f0', padding: '10px 20px', display: 'inline-block', borderRadius: '5px', textDecoration: 'none'}}>
        <strong style={{color: '#000000', fontSize: '1.2em'}}>产品官网</strong>
    </a>
</div>

## 主要特性与应用

<div style={{display: 'flex', flexWrap: 'wrap', gap: '1.5rem', marginBottom: '2rem'}}>
  <div style={{flex: 1, minWidth: 260, background: 'var(--ifm-background-color)', borderRadius: '10px', boxShadow: '0 2px 8px rgba(0,0,0,0.06)', padding: '1rem'}}>
    <strong>特性:</strong><br/>
    • 支持 NVIDIA IGX THOR 平台 <br/>
    • 支持摄像头分辨率：最高 3840*2160 <br/>
    • 支持摄像头输出格式：RAW / YUV422 <br/>
    • 尺寸：L:243.12mm x W:112.4mm x H:56.88mm <br/>
    • 兼容摄像头类型：GMSL / GMSL2 <br/>
    • 最大支持摄像头数量：4 *GMSL <br/>
    • SOC：NVIDIA Jetson T5000 模组 <br/>
    • AI 算力：2070 TFLOPS <br/>
    • 内存：128 GB 256-bit LPDDR5X
  </div>
  <div style={{flex: 1, minWidth: 260, background: 'var(--ifm-background-color)', borderRadius: '10px', boxShadow: '0 2px 8px rgba(0,0,0,0.06)', padding: '1rem'}}>
    <strong>应用:</strong><br/>
    • 机器人 <br/>
    • 工业 <br/>
    • 医疗<br/>
    • 检测
  </div>
</div>

## 快速入门

### 硬件概述

<div style={{textAlign: 'center', marginBottom: '2rem'}}>
    <img src="https://sgword-service.oss-cn-heyuan.aliyuncs.com/wiki-images/2_6_NVIDIA_IGX_Thor/ITRD1_G2A/ITRD1_G2A_Hardware_Overview.png?x-oss-process=image/format,webp" alt="ITRD1 G2A 硬件概述" style={{maxWidth: '80%', height: 'auto'}} />
</div>

### 框图

<div style={{textAlign: 'center', marginBottom: '2rem'}}>
    <img src="https://sgword-service.oss-cn-heyuan.aliyuncs.com/wiki-images/2_6_NVIDIA_IGX_Thor/ITRD1_G2A/ITRD1_G2A_Block_Diagram.jpg?x-oss-process=image/format,webp" alt="ITRD1 G2A 框图" style={{maxWidth: '100%', height: 'auto'}} />
</div>

:::note
- ITRD1 G2A 使用 **2 个 MAX96712 解串器**，每个解串器最多支持 4 个摄像头端口。
- 当前 IGX Thor 驱动包使用 **CN1** 端口（CAM4–CAM7）接入摄像头，总数最多 4 路。
:::

### 支持的摄像头列表

:::note 摄像头兼容性
可以选择以下摄像头组合连接到 ITRD1 G2A。
:::

| 摄像头组合 | 支持的摄像头数量 |
|--------|-------------|
| 组合 1 | 2 *5MP/30FPS |
| 组合 2 | 4 *3MP/30FPS |
| 组合 3 | 1 *5MP/30FPS + 2 *3MP/30FPS |

驱动包 `ITRD1_G2A_IGX_THOR_GMSL2x4_IGX2.0_L4TR38.5.0` 已适配的摄像头及组合如下：

| 摄像头型号 | 分辨率 | 输出格式 | 接口 | 最大数量 | 帧同步 |
|---|---|---|---|---:|---|
| Astra S56C | 2560 × 1984 | RAW10 | GMSL2-6G | 1 | MFP7 |
| SHW5G | 2560 × 1984 | RAW10 | GMSL2-6G | 2 | MFP7 |
| SHF3L | 1920 × 1536 | YUV422 | GMSL2-6G | 2 | MFP7 |

| 组合 | 摄像头 | 端口连接 |
|---|---|---|
| 组合 1 | S56C ×1 + SHF3L ×2 | S56C：CAM4；SHF3L：CAM6 / CAM7 |
| 组合 2 | S56C ×1 + SHW5G ×2 | S56C：CAM4；SHW5G：CAM6 / CAM7 |

:::caution 注意
S56C 双目摄像头占用两个视频节点（`/dev/video0` 和 `/dev/video1`），因此 CAM5 不能再接摄像头。
:::

:::note IGX 软件版本
当前驱动包基于 **NVIDIA IGX 2.0 SW**（Jetson Linux **L4T R38.5.0**）。IGX Thor 开发套件运行 IGX OS，与 Jetson AGX Thor 开发套件使用的 JetPack 版本不同，不能直接使用 TRD1 G2A 的驱动包。
:::

### 硬件准备

#### 物料清单


| 序号 | 产品型号 | 数量 | 备注 |
|---|---|---:|---|
| 1 | 940-25160-0081-000-MIPI | 1 | 标准配置 |
| 2 | T4JC-JC-ZZZZ-0500L（母头转母头 0.5m） | 2 | 标准配置 |
| 3 | 触发线 | 1 | 标准配置 |
| 4 | 电源转接线 | 1 | 标准配置 |
| 5 | 电源适配器 | 1 | 标准配置 |
| 6 | 多功能转换座 | 1 | 可选配置 |


#### 套件内容

<div style={{textAlign: 'center', marginBottom: '2rem'}}>
    <img src="https://sgword-service.oss-cn-heyuan.aliyuncs.com/wiki-images/2_6_NVIDIA_IGX_Thor/ITRD1_G2A/ITRD1_G2A_Kit_Contents.png?x-oss-process=image/format,webp" alt="ITRD1 G2A 套件内容" style={{maxWidth: '90%', height: 'auto'}} />
</div>

#### 安装步骤

:::note 快速设置
1. 使用同轴线将 GMSL 摄像头连接到 ITRD1 G2A 的 CN1 端口（最多 4 路，端口对应关系见上表）
2. 连接 DC 12V 电源（CN7）
3. 启动系统（IGX Thor）
:::

<div style={{textAlign: 'center', marginBottom: '2rem'}}>
    <img src="https://sgword-service.oss-cn-heyuan.aliyuncs.com/wiki-images/2_6_NVIDIA_IGX_Thor/ITRD1_G2A/ITRD1_G2A_Kit_Contents_Camera.png?x-oss-process=image/format,webp" alt="ITRD1 G2A 摄像头连接" style={{maxWidth: '90%', height: 'auto'}} />
</div>


### 软件准备

#### SDK 下载

| IGX 版本 | 框架 | 驱动包 | 支持的摄像头 | 下载链接 |
|-------------|-----------|----------------|-------------------|---------------|
| IGX 2.0 SW（L4T R38.5.0） | V4L2 | `ITRD1_G2A_IGX_THOR_GMSL2x4_IGX2.0_L4TR38.5.0` | Astra S56C、SHW5G、SHF3L；（S56C ×1 + SHF3L ×2）、（S56C ×1 + SHW5G ×2） | [下载](https://github.com/SENSING-Technology/nvidia-igx-camera-drivers/tree/main/IGX%20Thor%20Devkit/ITRD1_G2A_IGX_THOR_GMSL2x4_IGX2.0_L4TR38.5.0) |


:::tip 下载方法
将完整链接地址复制到 [DownGit](https://minhaskamal.github.io/DownGit/#/home) 进行下载
:::

#### 快速拉起

以下为主要步骤，完整命令请以驱动包中的 `Readme.md` 为准。

1. **更新 bootloader 配置并重新刷机**：原始固件占用了 CAM0_PWDN 和 CAM1_PWDN。将驱动包 `source/Linux_for_Tegra/` 下的文件覆盖到 BSP 的 `<work_path>/Linux_for_Tegra/bootloader/` 对应位置，然后重新刷写设备。
2. **连接摄像头**：按上方端口连接表接线。
3. **安装驱动**：将驱动包复制到 IGX Thor（例如 `/home/nvidia`），然后执行：

   ```bash
   cd ITRD1_G2A_IGX_THOR_GMSL2x4_IGX2.0_L4TR38.5.0
   chmod a+x *.sh
   sudo ./install.sh
   ```

4. **选择摄像头设备树**：运行 `sudo /opt/nvidia/jetson-io/jetson-io.py`，选择与摄像头组合对应的设备树，保存并重启。若无法通过 jetson-io 选择，可改为执行 `sudo ./update_jetsonio.sh`。

   | 组合 | 设备树 |
   |---|---|
   | 组合 1 | Jetson Sensing SG8A_AGTH_G2Y_A1 S56Cx1_SHF3Lx2 |
   | 组合 2 | Jetson Sensing SG8A_AGTH_G2Y_A1 S56Cx1_SHW5Gx2 |

5. **加载模块**：重启后执行以下命令，生成 `/dev/video0` 至 `/dev/video3` 设备节点：

   ```bash
   sudo ./load_modules.sh
   ```

   | 端口 | 设备树节点 | 设备节点 |
   |---|---|---|
   | CN1 (CAM4) | cam_0 | /dev/video0 |
   | CN1 (CAM5) | cam_1 | /dev/video1 |
   | CN1 (CAM6) | cam_2 | /dev/video2 |
   | CN1 (CAM7) | cam_3 | /dev/video3 |

6. **拉起摄像头**：RAW 摄像头（S56C / SHW5G）使用 `nvargus-daemon` + `argus_camera -d <序号>`；YUV 摄像头（SHF3L）可使用 `gst-launch-1.0 v4l2src device=/dev/video2 ! xvimagesink -ev` 预览。
7. **触发同步（可选）**：在 `load_modules.sh` 中为各设备节点设置 `trig_mode=1`，再选择 CN4 外部触发（PIN1 CAM-FSYNC1、PIN6 GND，3.3V，例如 30 Hz）或 IGX Thor 产生的 PWM 触发。具体参数见 Readme。

:::tip 驱动包说明
每个驱动包都包含各自的 `Readme.md`（拉起步骤）和 `Version.md`（更新记录）。请按所下载驱动包中的 Readme 操作。
:::
