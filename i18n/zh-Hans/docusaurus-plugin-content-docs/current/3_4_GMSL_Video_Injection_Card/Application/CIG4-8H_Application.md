---
sidebar_position: 1
---

# CIG4-8H 应用

### 工作原理：完整的视频注入流程
<div style={{textAlign: 'center', marginBottom: '2rem'}}>
  <img src="https://sgword-service.oss-cn-heyuan.aliyuncs.com/wiki-images/3_4_GMSL_Video_Injection_Card/CIG4-8H_Application2.png" alt="Video Injection System Selection Guide" style={{maxWidth: '100%', height:'auto', borderRadius: '8px', boxShadow: '0 2px 2px rgba(0,0,0,0.15)'}} />
  <p style={{fontSize: '0.9em', marginTop: '0.5rem', color: 'var(--ifm-color-gray-700)'}}>
    智能驾驶数据注入系统框图
  </p>
</div>

<div style={{background: '#f8f9fa', borderRadius: '12px', padding: '2rem', marginBottom: '2rem', border: '1px solid #dee2e6'}}>
  <div style={{display: 'flex', flexDirection: 'column', gap: '1.5rem'}}>

    <div style={{display: 'flex', alignItems: 'center', gap: '1rem'}}>
      <div style={{background: '#e3f2fd', borderRadius: '50%', width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0}}>
        <span style={{fontWeight: 'bold', color: '#1976d2'}}>1</span>
      </div>
      <div style={{flex: 1}}>
        <h4 style={{margin: 0, marginBottom: '0.5rem', color: '#1976d2'}}>数据准备</h4>
        <p style={{margin: 0, fontSize: '0.9em', color: '#666'}}>将预录制摄像头数据或仿真数据加载到主机 PC 内存中，用于算法验证</p>
      </div>
    </div>

    <!-- <div style={{textAlign: 'center', fontSize: '1.5em', color: '#666'}}>↓</div>

    <div style={{display: 'flex', alignItems: 'center', gap: '1rem'}}>
      <div style={{background: '#f3e5f5', borderRadius: '50%', width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0}}>
        <span style={{fontWeight: 'bold', color: '#7b1fa2'}}>2</span>
      </div>
      <div style={{flex: 1}}>
        <h4 style={{margin: 0, marginBottom: '0.5rem', color: '#7b1fa2'}}>格式转换</h4>
        <p style={{margin: 0, fontSize: '0.9em', color: '#666'}}>使用 GPU 加速转换为兼容车载摄像头的原始视频格式（YUV422、RAW10/12/14）</p>
      </div>
    </div> -->

    <div style={{textAlign: 'center', fontSize: '1.5em', color: '#666'}}>↓</div>

    <div style={{display: 'flex', alignItems: 'center', gap: '1rem'}}>
      <div style={{background: '#e8f5e8', borderRadius: '50%', width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0}}>
        <span style={{fontWeight: 'bold', color: '#388e3c'}}>2</span>
      </div>
      <div style={{flex: 1}}>
        <h4 style={{margin: 0, marginBottom: '0.5rem', color: '#388e3c'}}>GMSL 信号生成</h4>
        <p style={{margin: 0, fontSize: '0.9em', color: '#666'}}>CIG4-8H 板卡生成与真实摄像头输出一致的 GMSL 信号，包括时序和电气特性</p>
      </div>
    </div>

    <div style={{textAlign: 'center', fontSize: '1.5em', color: '#666'}}>↓</div>

    <div style={{display: 'flex', alignItems: 'center', gap: '1rem'}}>
      <div style={{background: '#fff3e0', borderRadius: '50%', width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0}}>
        <span style={{fontWeight: 'bold', color: '#f57c00'}}>3</span>
      </div>
      <div style={{flex: 1}}>
        <h4 style={{margin: 0, marginBottom: '0.5rem', color: '#f57c00'}}>ECU 集成</h4>
        <p style={{margin: 0, fontSize: '0.9em', color: '#666'}}>目标 ECU 通过标准 GMSL 解串器接收视频数据，并像处理真实摄像头数据一样处理这些数据</p>
      </div>
    </div>

  </div>
</div>
<!-- 
## 域控制器图像注入测试

<div style={{background: 'var(--ifm-background-color)', borderRadius: '10px', boxShadow: '0 2px 8px rgba(0,0,0,0.08)', padding: '1.5rem', marginBottom: '2rem'}}>
  <div style={{fontSize: '1.1em'}}>
    After data collection by autonomous vehicles, algorithm validation and optimization are required, which necessitates a data injection system. The autonomous driving IPC will transmit the collected video data from hard disks to the video injection card through the PCIe interface. The video injection card will synchronously output 8 channels of video based on timestamps, simulating the camera time sequence, and transmit it to the domain controller through the GMSL interface.
  </div>
  <div style={{textAlign: 'center', marginTop: '1.5rem'}}>
    <img src="https://raw.githubusercontent.com/1214658495/myWikiFiles/main/Data_collection/3_4_GMSL_Video_Injection_Card/CIG3-8H_Application.png" alt="Domain controller image injection frame diagram" style={{maxWidth: '85%', height:'auto', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.08)'}} />
    <p style={{textAlign: 'center', marginTop: '0.5rem', fontSize: '0.9em'}}>图 1：域控制器图像注入框图</p>
  </div>
</div> 

-->

### 系统架构

<div style={{background: 'var(--ifm-background-color)', borderRadius: '10px', boxShadow: '0 2px 8px rgba(0,0,0,0.06)', padding: '1.2rem', marginBottom: '2rem'}}>
  <ul style={{margin: 0, paddingLeft: '1.2em'}}>
    <li><strong>IPC（工业计算机）：</strong> 通过 PCIe Gen3 接口提供源视频数据。</li>
    <li><strong>CIG4-8H 视频注入卡：</strong> 接收来自 IPC 的数据，基于时间戳进行处理，并输出同步视频流。</li>
    <li><strong>ACU（自动驾驶控制单元）：</strong> 接收注入的视频数据，用于测试和验证。</li>
  </ul>
</div>


---

## 软件安装与配置

### 1. 安装依赖

<div style={{background: 'var(--ifm-background-color)', borderRadius: '10px', boxShadow: '0 2px 8px rgba(0,0,0,0.06)', padding: '1.5rem', marginBottom: '2rem'}}>

**系统要求与依赖:**

```bash
sudo apt-get update
sudo apt-get install openssh-server
sudo apt-get install libtool
sudo apt-get install git vim sshpass
```

</div>

### 2. SDK 下载

:::note SDK 软件包
请根据操作系统和 CIG4-8H 硬件版本选择合适的 SDK 软件包：
:::

| 操作系统 | 硬件版本 | SDK 版本 | 下载链接 | 下载工具 |
|------------------|------------------|-------------|---------------|---------------|
| Ubuntu 18.04 LTS <br/> Ubuntu 20.04 LTS | CIG4-8H v1.0 | SDK v2.1.0 | [下载](https://github.com/SENSING-Technology/CIG4-8H) | [DownGit](https://minhaskamal.github.io/DownGit/#/home) |

:::tip 下载工具使用说明
**DownGit** 可在不克隆整个仓库的情况下，从 GitHub 仓库下载指定文件夹或文件：
1. 复制“下载链接”列中的 GitHub 仓库 URL
2. 在浏览器中打开 [DownGit](https://minhaskamal.github.io/DownGit/#/home)
3. 将仓库 URL 粘贴到输入框中
4. 点击“下载”，获取包含 SDK 的 ZIP 文件
5. 将 ZIP 文件解压到目标位置

当只需要 SDK 文件而不需要完整 Git 历史时，该方法尤其适用。
:::

### 3. FFmpeg 环境配置

<div style={{background: 'var(--ifm-background-color)', borderRadius: '10px', boxShadow: '0 2px 8px rgba(0,0,0,0.06)', padding: '1.5rem', marginBottom: '2rem'}}>

**下载 FFmpeg:** [ffmpeg-4.4.4.tar.xz (9.12MB)](https://autosensee.feishu.cn/file/WZ8ob7t5Ro2IhIxTon0ccDghn4d?from=from_copylink)

**安装步骤:**

1. **解压软件包:**
   ```bash
   tar -xf ffmpeg-4.4.4.tar.xz
   ```

2. **安装开发库:**
   ```bash
   sudo apt-get install libsdl2-dev
   sudo apt-get install libsdl1.2-dev
   sudo apt-get install x264 libx264-dev
   ```

3. **配置并编译 FFmpeg:**
   ```bash
   sudo ./configure --prefix=/usr/local/ffmpeg --enable-shared --disable-static --disable-doc --enable-ffmpeg --enable-ffplay --enable-ffprobe --enable-gpl --enable-libx264 --enable-nonfree --disable-x86asm
   ```

4. **构建并安装:**
   ```bash
   make -j8
   sudo make install
   ```

5. **配置环境变量:**
   ```bash
   vim ~/.bashrc
   ```

   添加以下行：
   ```bash
   export PATH="$PATH:/usr/local/ffmpeg/bin"
   export CPATH="$CPATH:/usr/local/ffmpeg/include"
   export LD_LIBRARY_PATH="$LD_LIBRARY_PATH:/usr/local/ffmpeg/lib"
   ```

6. **应用配置:**
   ```bash
   sudo ldconfig
   ```

</div>

### 4. 软件架构概览

<div style={{textAlign: 'center', marginBottom: '2rem'}}>
  <img src="https://sgword-service.oss-cn-heyuan.aliyuncs.com/wiki-images/3_4_GMSL_Video_Injection_Card/CIG4-8H_Software_Diagram.png" alt="Software Framework Diagram" style={{maxWidth: '100%', height:'auto', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.08)'}} />
  <div style={{fontSize: '0.9em', marginTop: '0.5rem', color: 'var(--ifm-color-gray-700)'}}>
    软件框架架构
  </div>
</div>

<div style={{background: 'var(--ifm-background-color)', borderRadius: '10px', boxShadow: '0 2px 8px rgba(0,0,0,0.06)', padding: '1.5rem', marginBottom: '2rem'}}>

**架构组件:**

该软件架构由多个处理阶段组成，并针对高吞吐视频注入进行了优化：

- **视频输入处理:** 处理 H.264、H.265、JPEG、YUV422 和 RAW 等多种输入格式
- **GPU 加速:** 利用 CUDA 实时进行格式转换与处理
- **FPGA 接口:** 与板载 FPGA 直接通信，实现低延迟视频流传输
- **多通道同步:** 确保全部 8 路 GMSL 通道的精确时序
- **缓冲管理:** 优化内存分配，以支持持续高带宽运行

</div>

### 5. SDK 使用指南

#### 5.1 SDK 结构概览

<div style={{background: 'var(--ifm-background-color)', borderRadius: '10px', boxShadow: '0 2px 8px rgba(0,0,0,0.06)', padding: '1.5rem', marginBottom: '2rem'}}>

SDK 提供完整的视频注入操作工具。解压 SDK 后进入工作目录：

```bash
~/pcie_xdma_transfer_sdk/xdma
```

**目录结构:**

| **目录/文件** | **说明** |
|-------------------|-----------------|
| `bash` | 包含自动化测试脚本的 Shell 脚本目录 |
| `bash1` | 包含额外测试场景的备用 Shell 脚本目录 |
| `include` | 头文件目录 |
| `xdma` | 主 XDMA 驱动源代码目录 |
| `tools/pcie_reg_rw` | PCIe 寄存器读写工具目录 |
| `tools/pcie_xdma_transfer` | 主视频传输工具目录 |
| `Makefile` | 用于 SDK 编译和工具目录管理的构建配置文件 |

</div>

#### 5.2 SDK 编译

<div style={{background: 'var(--ifm-background-color)', borderRadius: '10px', boxShadow: '0 2px 8px rgba(0,0,0,0.06)', padding: '1.5rem', marginBottom: '2rem'}}>

进入 SDK 目录并编译：

```bash
~/pcie_xdma_transfer_sdk/xdma
make
```

</div>

#### 5.3 编译工具

<div style={{background: 'var(--ifm-background-color)', borderRadius: '10px', boxShadow: '0 2px 8px rgba(0,0,0,0.06)', padding: '1.5rem', marginBottom: '2rem'}}>

在 tools 目录中执行以下命令：

```bash
~/pcie_xdma_transfer_sdk/tools
make clean
make
```

</div>

#### 5.4 脚本修改

<div style={{background: 'var(--ifm-background-color)', borderRadius: '10px', boxShadow: '0 2px 8px rgba(0,0,0,0.06)', padding: '1.5rem', marginBottom: '2rem'}}>

修改以下位置的传输脚本： `~/pcie_xdma_transfer_sdk/bash`

编辑 `transfer_run.sh` 脚本以配置具体需求。

</div>

### 6. 视频传输配置

#### 6.1 传输文件命名规则

<div style={{background: 'var(--ifm-background-color)', borderRadius: '10px', boxShadow: '0 2px 8px rgba(0,0,0,0.06)', padding: '1.5rem', marginBottom: '2rem'}}>

视频源文件应放置在 `/bash/data/yuv` 目录中。传输卡要求按指定命名规则配置文件，以便映射到对应通道：

**语法：**
```bash
transfer_file_name[<n>]="<file name>"
```

**参数：**
- `transfer_file_name`: 视频源文件名配置
- `<n>`: 目标卡通道号（0-7）
- `<file name>`: 视频源文件名

**示例：**

通道 0 使用名为 "input0.h264" 的视频文件时：
```bash
transfer_file_name[0]="input0.h264"
```

通道 0 使用名为 "picture19201080yuyv.yuv" 的视频文件时：
```bash
transfer_file_name[0]="picture19201080yuyv.yuv"
```

</div>

#### 6.2 传输文件类型配置

<div style={{background: 'var(--ifm-background-color)', borderRadius: '10px', boxShadow: '0 2px 8px rgba(0,0,0,0.06)', padding: '1.5rem', marginBottom: '2rem'}}>

指定视频文件类型以便正确处理：

**语法：**
```bash
transfer_file_type[<n>]="<file type>"
```

**参数：**
- `transfer_file_type`: 视频文件类型配置
- `<n>`: 目标卡通道号（0-7）
- `<file type>`: 文件类型说明（"Original" 或 "H264"）

**示例：**
```bash
transfer_file_type[0]="Original"
```

**文件类型说明:**
- **Original**: 表示将未压缩视频文件直接传输到目标卡，再转换格式后发送到 ACU
- **H264**: 表示 H.264 格式传输，由 CPU 或 GPU 完成格式转换后发送到 ACU

</div>

#### 6.3 传输重复次数配置

<div style={{background: 'var(--ifm-background-color)', borderRadius: '10px', boxShadow: '0 2px 8px rgba(0,0,0,0.06)', padding: '1.5rem', marginBottom: '2rem'}}>

配置文件重复传输次数：

**语法：**
```bash
transfer_file_replay[<n>]=<n1>
```

**参数：**
- `transfer_file_replay`: 文件重复次数配置
- `<n>`: 目标卡通道号（0-7）
- `<n1>`: 重复次数（0-1000000）

**示例：**
通道 0 重复传输 100 次时：
```bash
transfer_file_replay[0]=100
```

</div>

#### 6.4 传输格式配置

<div style={{background: 'var(--ifm-background-color)', borderRadius: '10px', boxShadow: '0 2px 8px rgba(0,0,0,0.06)', padding: '1.5rem', marginBottom: '2rem'}}>

配置目标卡支持的传输格式（YUV、RAW10、RAW12、RAW14）：

**语法：**
```bash
transfer_type[<n>]="<model>"
```

**参数：**
- `transfer_type`: 目标卡传输格式配置
- `<n>`: 目标卡通道号（0-7）
- `<model>`: 目标卡传输格式（"YUV"、"RAW10"、"RAW12" 或 "RAW14"）

**示例：**
通道 0 传输 YUV422 格式数据时：
```bash
transfer_type[0]="YUV"
```

</div>

#### 6.5 传输分辨率配置

<div style={{background: 'var(--ifm-background-color)', borderRadius: '10px', boxShadow: '0 2px 8px rgba(0,0,0,0.06)', padding: '1.5rem', marginBottom: '2rem'}}>

通过指定宽度和高度参数，为每个通道的视频流配置分辨率：

**宽度配置:**
```bash
transfer_resolution_width[<n>]=<n1>
```

**高度配置:**
```bash
transfer_resolution_height[<n>]=<n1>
```

**参数：**
- `transfer_resolution_width`: 宽度分辨率配置
- `transfer_resolution_height`: 高度分辨率配置
- `<n>`: 目标卡通道号（0-7）
- `<n1>`: 图像分辨率值

**示例：**
通道 0 分辨率为 1920×1080 时：
```bash
transfer_resolution_width[0]=1920
transfer_resolution_height[0]=1920
```

<div style={{background: '#fff3cd', borderRadius: '8px', padding: '1rem', marginTop: '1rem', border: '1px solid #ffeaa7'}}>
  <strong>⚠️ 重要说明:</strong>
  <ul style={{marginBottom: 0, marginTop: '0.5rem'}}>
    <li>通道 0 需要配置 1 路分辨率</li>
    <li>通道 2 需要配置 3 路分辨率</li>
    <li>通道 4 需要配置 5 路分辨率</li>
    <li>通道 6 需要配置 7 路分辨率</li>
  </ul>
</div>

</div>

#### 6.6 内部与外部触发配置

<div style={{background: 'var(--ifm-background-color)', borderRadius: '10px', boxShadow: '0 2px 8px rgba(0,0,0,0.06)', padding: '1.5rem', marginBottom: '2rem'}}>

**内部触发配置:**
```bash
../tools/reg_rw /dev/xdma0_user 0x30020 w <n1>
```

**参数：**
- `<n1>`: 0x22222222 表示内部触发，0x11111111 表示外部触发

**示例：**
通道 0 工作在内部触发模式时：
```bash
../tools/reg_rw /dev/xdma0_user 0x30020 w 0x22222222
```

</div>

#### 6.7 内部频率配置

<div style={{background: 'var(--ifm-background-color)', borderRadius: '10px', boxShadow: '0 2px 8px rgba(0,0,0,0.06)', padding: '1.5rem', marginBottom: '2rem'}}>

配置视频传输的内部频率：

```bash
../tools/reg_rw /dev/xdma0_user <n> w <n1>
```

**参数：**
- `<n>`: 目标卡通道号
- `<n1>`: 频率值，实际频率 = 200M/配置频率值

**通道映射:**
- `0x30024` → 通道 0
- `0x30028` → 通道 1
- `0x3002c` → 通道 2
- `0x30030` → 通道 3
- `0x30034` → 通道 4
- `0x30038` → 通道 5
- `0x3003c` → 通道 6
- `0x30040` → 通道 7

**示例：**

将通道 0-7 设置为 30fps 传输：
```bash
#1fps
#30fps: 6666666
#20fps: 10000000
#15fps: 13333333
#10fps: 20000000
../tools/reg_rw /dev/xdma0_user 0x30024 w 6666666
../tools/reg_rw /dev/xdma0_user 0x30028 w 6666666
../tools/reg_rw /dev/xdma0_user 0x3002c w 6666666
../tools/reg_rw /dev/xdma0_user 0x30030 w 6666666
../tools/reg_rw /dev/xdma0_user 0x30034 w 6666666
../tools/reg_rw /dev/xdma0_user 0x3003c w 6666666
../tools/reg_rw /dev/xdma0_user 0x30040 w 6666666
```

</div>

### 7. 驱动加载与系统启动

#### 7.1 驱动加载

<div style={{background: 'var(--ifm-background-color)', borderRadius: '10px', boxShadow: '0 2px 8px rgba(0,0,0,0.06)', padding: '1.5rem', marginBottom: '2rem'}}>

进入 `/pcie_xdma_transfer_sdk/bash` 目录并执行驱动加载脚本：

```bash
sudo ./load_driver.sh
```

**预期输出:**
```
interrupt_injection: 0
Loading driver: insmod xdma.ko interrupt_mode=1 ...
The kernel module installed correctly and the xdma devices were recognized.
DONE
```

加载成功后，应能看到以下设备文件创建于 `/dev/`:
- `xdma0_h2c_0`, `xdma0_h2c_1`, `xdma0_h2c_2`, `xdma0_h2c_3` - 主机到板卡传输设备
- `xdma0_c2h_0`, `xdma0_c2h_1`, `xdma0_c2h_2`, `xdma0_c2h_3` - 板卡到主机传输设备
- `xdma0_user` - 用于寄存器访问的用户控制接口

</div>

#### 7.2 目标卡数据传输配置

##### 7.2.1 启动配置

<div style={{background: 'var(--ifm-background-color)', borderRadius: '10px', boxShadow: '0 2px 8px rgba(0,0,0,0.06)', padding: '1.5rem', marginBottom: '2rem'}}>

进入： `~/pcie_xdma_transfer_sdk/bash` 并执行传输脚本：

```bash
sudo ./transfer_run.sh
```

</div>

##### 7.2.2 停止配置

<div style={{background: 'var(--ifm-background-color)', borderRadius: '10px', boxShadow: '0 2px 8px rgba(0,0,0,0.06)', padding: '1.5rem', marginBottom: '2rem'}}>

如需停止数据传输，请进入： `~/pcie_xdma_transfer_sdk/bash` 并执行：

```bash
sudo ./stop.sh
```

</div>

---

<!-- <div style={{background: 'var(--ifm-background-color)', borderRadius: '10px', boxShadow: '0 2px 8px rgba(0,0,0,0.08)', padding: '1.2rem', marginBottom: '2rem', fontSize: '1.1em'}}>
The CIG4-8H GMSL Video Injection Card is an integral component in mature autonomous driving HIL video injection solutions, providing high-precision, multi-channel time synchronization technology to ensure synchronized output across all channels, making it ideal for algorithm validation and optimization in autonomous driving development.
</div> -->
