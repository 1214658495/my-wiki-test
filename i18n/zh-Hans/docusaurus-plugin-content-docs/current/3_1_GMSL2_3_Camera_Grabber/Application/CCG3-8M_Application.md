---
sidebar_position: 2
title: CCG3-8M 应用
---

# CCG3-8M 应用

## 自动驾驶感知方案

<div style={{background: 'var(--ifm-background-color)', borderRadius: '10px', boxShadow: '0 2px 8px rgba(0,0,0,0.08)', padding: '1.5rem', marginBottom: '2rem'}}>
  <div style={{fontSize: '1.1em'}}>
    视频采集卡可应用于无人车系统。无人车通常需要多路摄像头、毫米波雷达、激光雷达、GPS、组合导航等传感器，并需要将这些传感器接入高性能计算平台（如工业计算机）。因此，需要一种能够同时连接多路摄像头并与其他传感器同步的产品。视频采集卡正是面向无人车提供高速、多摄像头、低延迟图像接入的解决方案。以下是典型方案示例。
  </div>
  <div style={{textAlign: 'center', marginTop: '1.5rem'}}>
    <img src="https://sgword-service.oss-cn-heyuan.aliyuncs.com/wiki-images/3_1_GMSL2_3_Camera_Grabber/CCG3-8M/CCG3-8M_useGround2.png" alt="CCG3-8M 应用 Scenario" style={{maxWidth: '85%', height:'auto', borderRadius: '8px'}} />
  </div>
</div>

## 系统架构

<div style={{background: 'var(--ifm-background-color)', borderRadius: '10px', boxShadow: '0 2px 8px rgba(0,0,0,0.06)', padding: '1.2rem', marginBottom: '2rem'}}>
  <ul style={{margin: 0, paddingLeft: '1.2em'}}>
    <li><strong>GMSL 摄像头：</strong> 多路高分辨率摄像头连接到 CoaxCapture 采集卡，由采集卡汇聚并同步各路视频流。</li>
    <li><strong>CoaxCapture 采集卡：</strong> 通过 PCIe 安装在车辆 IPC（工业计算机）中，接收摄像头数据和同步信号，确保所有通道达到帧级对齐。</li>
    <li><strong>GPS 模块：</strong> 提供 1PPS（每秒脉冲）和 TOD（时间信息）信号，作为全局时间参考。</li>
    <li><strong>以太网交换机：</strong> 支持 PTP/gPTP（精确时间协议/通用精确时间协议），用于激光雷达、雷达及其他传感器之间的时间同步。</li>
    <li><strong>激光雷达/外部设备：</strong> 向 CCG3-8M 提供 TTL 方波信号，实现硬件级摄像头同步，确保摄像头采集与传感器测量之间精确对齐。</li>
    <li><strong>IPC（工业计算机）：</strong> 中央处理单元，用于采集、处理并存储来自所有传感器的同步数据。</li>
  </ul>
</div>

## 同步流程

<div style={{background: 'var(--ifm-background-color)', borderRadius: '10px', boxShadow: '0 2px 8px rgba(0,0,0,0.06)', padding: '1.2rem', marginBottom: '2rem'}}>
  <ol style={{margin: 0, paddingLeft: '1.2em'}}>
    <li>GPS 向时间同步盒提供 1PPS 和 TOD 信号，时间同步盒再通过以太网向采集卡及其他设备输出 PTP 信息。</li>
    <li>CoaxCapture 采集卡使用这些信号同步所有已连接的 GMSL 摄像头，确保每一帧都具备准确时间戳，并与车辆其他传感器对齐。</li>
    <li>以太网交换机将 PTP/gPTP 信号传递到激光雷达、雷达及其他设备，实现全系统时间同步。</li>
    <li>包括视频、激光雷达和雷达在内的所有传感器数据均由 IPC 采集，用于实时处理和记录。</li>
  </ol>
</div>

---

##  **快速启动**

### SDK 下载

<div style={{display: 'flex', justifyContent: 'center', marginBottom: '2rem'}}>

| 摄像头 | Linux 系统版本 | 驱动包下载链接 | 驱动包下载方式 |
|------------------------------|-------------------------|---------------------------|-------------------------------|
| GMSL2 摄像头 (YUV 数据)<br/>(例如： SG3S-ISX031C-GMSL2-Hxxx) | Ubuntu 18.04/20.04/22.04/24.04 | [链接](https://github.com/SENSING-Technology/CoaxCapture-CCG3-8M) | 复制完整链接地址到 [DownGit](https://minhaskamal.github.io/DownGit/#/home) 下载 |

</div>

## 目录结构  
该软件包包含以下关键目录和文件：  

| 目录/文件               | 说明                                                                 |
|-------------------------------|-----------------------------------------------------------------------------|
| `bash/`                       | 用于设备管理的 Bash 脚本。                                        |
| `Makefile`                    | 驱动和应用的构建脚本（支持按目录编译）。 |
| `xdma_v4l2/`                  | PCIe 板卡驱动源代码。                                        |
| `include/`                    | xdma 驱动头文件。                                               |
| `./tool/pcie_a53_rw`          | 用于读写 PCIe 板卡 PS（Processing System）数据的应用程序。 |
| `./tool/pcie_reg_rw`          | 用于读写 PCIe 板卡寄存器值的应用程序。                 |
| `./tool/xdma_v4l2_rw`         | 用于通过 V4L2（Video for Linux 2）接口配置驱动的应用程序。 |

---

## 前置条件  
- Ubuntu 18.04、20.04、22.04 或 24.04。  

---

## 安装与使用  

### 1. 加载驱动  
进入 `bash/` 目录并执行以下脚本加载驱动：  
```bash
sudo ./load_modules.sh
```  

**成功输出:**  
```
Loading Pcie driver...
Pcie driver installed correctly.
Video devices were recognized.
DONE
```  

**验证:**  
加载成功后，`/dev` 目录中会生成视频设备文件（如 `/dev/video0`、`/dev/video1`、`/dev/video2`、`/dev/video3`）。同时也会创建控制接口文件（如 `xdma0_bypass`、`xdma0_control`、`xdma0_user`）。其中数字（如 `0`）对应 PCIe 板卡索引（如 `0` 表示第一张板卡，`1` 表示第二张，依此类推）。  

---

### 2. 初始化 PCIe 板卡  
执行以下脚本初始化 PCIe 板卡（例如板卡 0）并配置已连接摄像头：  
```bash
sudo ./pcie_init_card0.sh
```  

**成功输出:**  
```
Reset Process!
Card Params Init Processed!
Serdes 0 Params Init Processed!
Serdes 1 Params Init Processed!
...
Info: All process in pcie_init.sh passed.
```  
注意：如果有多张采集卡，可再次修改 pcie_init_card*.sh 脚本，然后执行以下命令：
```bash
sudo ./pcie_init_card*.sh
```  
---

### 3. 图像测试  
使用开源工具 `guvcview` 测试视频采集。  

#### 安装 `guvcview`（如果尚未安装）：  
```bash
sudo apt-get install guvcview
```  

#### 测试视频流：  
将摄像头连接到板卡后，运行：  
```bash
# For video0 (board 0, channel 0)
guvcview -d /dev/video0

# For video1 (board 0, channel 1)
guvcview -d /dev/video1

# Repeat for video2, video3 (if supported)
```  

**验证帧率:**  
如需采集并验证帧率，执行：  
```bash
v4l2-ctl -d /dev/video0 --stream-mmap --stream-count=1000
```  

---

## 配置摄像头参数  
如需针对不同摄像头修改参数，请调整：  
1. `pcie_init_card0.sh` 脚本（用于初始化配置）。  
2. `pcie_a53_rw` 应用程序（用于底层寄存器/控制调整）。  

---

## 固件烧录  
采集卡出厂时已预烧录固件以支持 YUV 或 RAW12 模式。如需切换模式：  

1. 使用 `固件Resources/` 目录中的对应文件重新烧录固件：  
   - **YUYV/UYVY (YUV)**：使用 `pcie_zu_fw-xxxx-YUV.tar.gz`。  
   - **RAW12**：使用 `pcie_zu_fw-xxxx-RAW12.tar.gz`。  

2.采集卡固件升级命令如下：
```bash
cd /tools/pcie_zu_tools
sudo ./pcie_zu-updata.sh ./pcie_zu_fw-xxxx-RAW12.tar.gz
``` 
--- 

## 注意事项  
- 初始化板卡前，请确保所有摄像头均已通过同轴线缆正确连接。  
- 如出现问题，请检查 `/dev` 目录中的视频设备文件，并确认驱动加载日志。
