---
sidebar_position: 1
---

# CIG4-8H Application

### How It Works: The Complete Video Injection Process
<div style={{textAlign: 'center', marginBottom: '2rem'}}>
  <img src="https://raw.githubusercontent.com/1214658495/myWikiFiles/main/Data_collection/3_4_GMSL_Video_Injection_Card/CIG4-8H_Application2.png" alt="Video Injection System Selection Guide" style={{maxWidth: '100%', height:'auto', borderRadius: '8px', boxShadow: '0 2px 2px rgba(0,0,0,0.15)'}} />
  <p style={{fontSize: '0.9em', marginTop: '0.5rem', color: 'var(--ifm-color-gray-700)'}}>
    Block diagram of Intelligent driving data injection system
  </p>
</div>

<div style={{background: '#f8f9fa', borderRadius: '12px', padding: '2rem', marginBottom: '2rem', border: '1px solid #dee2e6'}}>
  <div style={{display: 'flex', flexDirection: 'column', gap: '1.5rem'}}>

    <div style={{display: 'flex', alignItems: 'center', gap: '1rem'}}>
      <div style={{background: '#e3f2fd', borderRadius: '50%', width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0}}>
        <span style={{fontWeight: 'bold', color: '#1976d2'}}>1</span>
      </div>
      <div style={{flex: 1}}>
        <h4 style={{margin: 0, marginBottom: '0.5rem', color: '#1976d2'}}>Data Preparation</h4>
        <p style={{margin: 0, fontSize: '0.9em', color: '#666'}}>Load pre-recorded camera data (H.264/H.265) or simulation data for algorithm validation into the host PC memory</p>
      </div>
    </div>

    <div style={{textAlign: 'center', fontSize: '1.5em', color: '#666'}}>↓</div>

    <div style={{display: 'flex', alignItems: 'center', gap: '1rem'}}>
      <div style={{background: '#f3e5f5', borderRadius: '50%', width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0}}>
        <span style={{fontWeight: 'bold', color: '#7b1fa2'}}>2</span>
      </div>
      <div style={{flex: 1}}>
        <h4 style={{margin: 0, marginBottom: '0.5rem', color: '#7b1fa2'}}>Format Conversion</h4>
        <p style={{margin: 0, fontSize: '0.9em', color: '#666'}}>GPU-accelerated conversion to raw video formats (YUV422, RAW10/12/14) compatible with automotive cameras</p>
      </div>
    </div>

    <div style={{textAlign: 'center', fontSize: '1.5em', color: '#666'}}>↓</div>

    <div style={{display: 'flex', alignItems: 'center', gap: '1rem'}}>
      <div style={{background: '#e8f5e8', borderRadius: '50%', width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0}}>
        <span style={{fontWeight: 'bold', color: '#388e3c'}}>3</span>
      </div>
      <div style={{flex: 1}}>
        <h4 style={{margin: 0, marginBottom: '0.5rem', color: '#388e3c'}}>GMSL Signal Generation</h4>
        <p style={{margin: 0, fontSize: '0.9em', color: '#666'}}>CIG4-8H card generates authentic GMSL signals identical to real camera outputs, including timing and electrical characteristics</p>
      </div>
    </div>

    <div style={{textAlign: 'center', fontSize: '1.5em', color: '#666'}}>↓</div>

    <div style={{display: 'flex', alignItems: 'center', gap: '1rem'}}>
      <div style={{background: '#fff3e0', borderRadius: '50%', width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0}}>
        <span style={{fontWeight: 'bold', color: '#f57c00'}}>4</span>
      </div>
      <div style={{flex: 1}}>
        <h4 style={{margin: 0, marginBottom: '0.5rem', color: '#f57c00'}}>ECU Integration</h4>
        <p style={{margin: 0, fontSize: '0.9em', color: '#666'}}>Target ECU receives video data through standard GMSL deserializers, processing it as if from real cameras</p>
      </div>
    </div>

  </div>
</div>
<!-- 
## Domain Controller Image Injection Test

<div style={{background: 'var(--ifm-background-color)', borderRadius: '10px', boxShadow: '0 2px 8px rgba(0,0,0,0.08)', padding: '1.5rem', marginBottom: '2rem'}}>
  <div style={{fontSize: '1.1em'}}>
    After data collection by autonomous vehicles, algorithm validation and optimization are required, which necessitates a data injection system. The autonomous driving IPC will transmit the collected video data from hard disks to the video injection card through the PCIe interface. The video injection card will synchronously output 8 channels of video based on timestamps, simulating the camera time sequence, and transmit it to the domain controller through the GMSL interface.
  </div>
  <div style={{textAlign: 'center', marginTop: '1.5rem'}}>
    <img src="https://raw.githubusercontent.com/1214658495/myWikiFiles/main/Data_collection/3_4_GMSL_Video_Injection_Card/CIG3-8H_Application.png" alt="Domain controller image injection frame diagram" style={{maxWidth: '85%', height:'auto', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.08)'}} />
    <p style={{textAlign: 'center', marginTop: '0.5rem', fontSize: '0.9em'}}>Diagram 1: Domain controller image injection frame diagram</p>
  </div>
</div> -->

### System Architecture

<div style={{background: 'var(--ifm-background-color)', borderRadius: '10px', boxShadow: '0 2px 8px rgba(0,0,0,0.06)', padding: '1.2rem', marginBottom: '2rem'}}>
  <ul style={{margin: 0, paddingLeft: '1.2em'}}>
    <li><strong>IPC (Industrial PC):</strong> Provides the source video data through PCIe Gen3 interface.</li>
    <li><strong>CIG4-8H Video Injection Card:</strong> Receives data from IPC, processes it based on timestamps, and outputs synchronized video streams.</li>
    <li><strong>ACU (Autonomous Control Unit):</strong> Receives the injected video data for testing and validation purposes.</li>
  </ul>
</div>


---

## Software Setup and Configuration

### 1. Installation Dependencies

<div style={{background: 'var(--ifm-background-color)', borderRadius: '10px', boxShadow: '0 2px 8px rgba(0,0,0,0.06)', padding: '1.5rem', marginBottom: '2rem'}}>

**System Requirements and Dependencies:**

```bash
sudo apt-get update
sudo apt-get install openssh-server
sudo apt-get install libtool
sudo apt-get install git vim sshpass
```

</div>

### 2. SDK Download

:::note SDK Packages
Select the appropriate SDK package based on your operating system and CIG4-8H hardware version:
:::

| Operating System | Hardware Version | SDK Version | Download Link | Download Tool |
|------------------|------------------|-------------|---------------|---------------|
| Ubuntu 18.04 LTS <br/> Ubuntu 20.04 LTS | CIG4-8H v1.0 | SDK v2.1.0 | [Download](https://github.com/SENSING-Technology/CIG4-8H) | [DownGit](https://minhaskamal.github.io/DownGit/#/home) |

:::tip Download Tool Usage
**DownGit** allows you to download specific folders or files from GitHub repositories without cloning the entire repository:
1. Copy the GitHub repository URL from the "Download Link" column
2. Open [DownGit](https://minhaskamal.github.io/DownGit/#/home) in your browser
3. Paste the repository URL into the input field
4. Click "Download" to get a ZIP file containing the SDK
5. Extract the ZIP file to your desired location

This method is particularly useful when you only need the SDK files without the full Git history.
:::

### 3. FFmpeg Environment Setup

<div style={{background: 'var(--ifm-background-color)', borderRadius: '10px', boxShadow: '0 2px 8px rgba(0,0,0,0.06)', padding: '1.5rem', marginBottom: '2rem'}}>

**Download FFmpeg:** [ffmpeg-4.4.4.tar.xz (9.12MB)](https://autosensee.feishu.cn/file/WZ8ob7t5Ro2IhIxTon0ccDghn4d?from=from_copylink)

**Installation Steps:**

1. **Extract the package:**
   ```bash
   tar -xf ffmpeg-4.4.4.tar.xz
   ```

2. **Install development libraries:**
   ```bash
   sudo apt-get install libsdl2-dev
   sudo apt-get install libsdl1.2-dev
   sudo apt-get install x264 libx264-dev
   ```

3. **Configure and compile FFmpeg:**
   ```bash
   sudo ./configure --prefix=/usr/local/ffmpeg --enable-shared --disable-static --disable-doc --enable-ffmpeg --enable-ffplay --enable-ffprobe --enable-gpl --enable-libx264 --enable-nonfree --disable-x86asm
   ```

4. **Build and install:**
   ```bash
   make -j8
   sudo make install
   ```

5. **Configure environment variables:**
   ```bash
   vim ~/.bashrc
   ```

   Add the following lines:
   ```bash
   export PATH="$PATH:/usr/local/ffmpeg/bin"
   export CPATH="$CPATH:/usr/local/ffmpeg/include"
   export LD_LIBRARY_PATH="$LD_LIBRARY_PATH:/usr/local/ffmpeg/lib"
   ```

6. **Apply configuration:**
   ```bash
   sudo ldconfig
   ```

</div>

### 4. Software Architecture Overview

<div style={{textAlign: 'center', marginBottom: '2rem'}}>
  <img src="https://raw.githubusercontent.com/1214658495/myWikiFiles/main/Data_collection/3_4_GMSL_Video_Injection_Card/CIG3-8H_Software_Diagram.png" alt="Software Framework Diagram" style={{maxWidth: '100%', height:'auto', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.08)'}} />
  <div style={{fontSize: '0.9em', marginTop: '0.5rem', color: 'var(--ifm-color-gray-700)'}}>
    Software Framework Architecture
  </div>
</div>

<div style={{background: 'var(--ifm-background-color)', borderRadius: '10px', boxShadow: '0 2px 8px rgba(0,0,0,0.06)', padding: '1.5rem', marginBottom: '2rem'}}>

**Architecture Components:**

The software architecture consists of multiple processing stages optimized for high-throughput video injection:

- **Video Input Processing:** Handles various input formats including H.264, H.265, JPEG, YUV422, and RAW formats
- **GPU Acceleration:** Utilizes CUDA for real-time format conversion and processing
- **FPGA Interface:** Direct communication with onboard FPGA for low-latency video streaming
- **Multi-channel Synchronization:** Ensures precise timing across all 8 GMSL channels
- **Buffer Management:** Optimized memory allocation for sustained high-bandwidth operation

</div>

### 5. SDK Usage Guide

#### 5.1 SDK Structure Overview

<div style={{background: 'var(--ifm-background-color)', borderRadius: '10px', boxShadow: '0 2px 8px rgba(0,0,0,0.06)', padding: '1.5rem', marginBottom: '2rem'}}>

The SDK provides comprehensive tools for video injection operations. Extract the SDK and navigate to the working directory:

```bash
~/pcie_xdma_transfer_sdk/xdma
```

**Directory Structure:**

| **Directory/File** | **Description** |
|-------------------|-----------------|
| `bash` | Shell script directory containing automated test scripts |
| `bash1` | Alternative shell script directory with additional test scenarios |
| `include` | Header files directory |
| `xdma` | Main XDMA driver source code directory |
| `tools/pcie_reg_rw` | PCIe register read/write utility directory |
| `tools/pcie_xdma_transfer` | Main video transfer utility directory |
| `Makefile` | Build configuration file for SDK compilation and tools directory management |

</div>

#### 5.2 SDK Compilation

<div style={{background: 'var(--ifm-background-color)', borderRadius: '10px', boxShadow: '0 2px 8px rgba(0,0,0,0.06)', padding: '1.5rem', marginBottom: '2rem'}}>

Navigate to the SDK directory and compile:

```bash
~/pcie_xdma_transfer_sdk/xdma
make
```

</div>

#### 5.3 Compilation Tools

<div style={{background: 'var(--ifm-background-color)', borderRadius: '10px', boxShadow: '0 2px 8px rgba(0,0,0,0.06)', padding: '1.5rem', marginBottom: '2rem'}}>

Execute the following commands in the tools directory:

```bash
~/pcie_xdma_transfer_sdk/tools
make clean
make
```

</div>

#### 5.4 Script Modification

<div style={{background: 'var(--ifm-background-color)', borderRadius: '10px', boxShadow: '0 2px 8px rgba(0,0,0,0.06)', padding: '1.5rem', marginBottom: '2rem'}}>

Modify the transfer script located at: `~/pcie_xdma_transfer_sdk/bash`

Edit the `transfer_run.sh` script to configure your specific requirements.

</div>

### 6. Video Transfer Configuration

#### 6.1 Transfer File Naming Convention

<div style={{background: 'var(--ifm-background-color)', borderRadius: '10px', boxShadow: '0 2px 8px rgba(0,0,0,0.06)', padding: '1.5rem', marginBottom: '2rem'}}>

Video source files should be placed in `/bash/data/yuv` directory. The transfer card requires specific file naming for proper channel mapping:

**Syntax:**
```bash
transfer_file_name[<n>]="<file name>"
```

**Parameters:**
- `transfer_file_name`: Video source file name configuration
- `<n>`: Target card channel number (0-7)
- `<file name>`: Video source file name

**Examples:**

For channel 0 with video file named "input0.h264":
```bash
transfer_file_name[0]="input0.h264"
```

For channel 0 with video file named "picture19201080yuyv.yuv":
```bash
transfer_file_name[0]="picture19201080yuyv.yuv"
```

</div>

#### 6.2 Transfer File Type Configuration

<div style={{background: 'var(--ifm-background-color)', borderRadius: '10px', boxShadow: '0 2px 8px rgba(0,0,0,0.06)', padding: '1.5rem', marginBottom: '2rem'}}>

Specify the video file type for proper processing:

**Syntax:**
```bash
transfer_file_type[<n>]="<file type>"
```

**Parameters:**
- `transfer_file_type`: Video file type configuration
- `<n>`: Target card channel number (0-7)
- `<file type>`: File type specification ("Original" or "H264")

**Example:**
```bash
transfer_file_type[0]="Original"
```

**File Type Specifications:**
- **Original**: Indicates direct transmission of uncompressed video files to the target card for format conversion to ACU
- **H264**: Specifies H.264 format transmission where CPU or GPU performs format conversion before sending to ACU

</div>

#### 6.3 Transfer Repeat Count Configuration

<div style={{background: 'var(--ifm-background-color)', borderRadius: '10px', boxShadow: '0 2px 8px rgba(0,0,0,0.06)', padding: '1.5rem', marginBottom: '2rem'}}>

Configure the number of times a file should be repeatedly transmitted:

**Syntax:**
```bash
transfer_file_replay[<n>]=<n1>
```

**Parameters:**
- `transfer_file_replay`: File repeat count configuration
- `<n>`: Target card channel number (0-7)
- `<n1>`: Number of repetitions (0-1000000)

**Example:**
For channel 0 to repeat 100 times:
```bash
transfer_file_replay[0]=100
```

</div>

#### 6.4 Transfer Format Configuration

<div style={{background: 'var(--ifm-background-color)', borderRadius: '10px', boxShadow: '0 2px 8px rgba(0,0,0,0.06)', padding: '1.5rem', marginBottom: '2rem'}}>

Configure the transmission format supported by the target card (YUV and RAW10, RAW12, RAW14):

**Syntax:**
```bash
transfer_type[<n>]="<model>"
```

**Parameters:**
- `transfer_type`: Target card transmission format configuration
- `<n>`: Target card channel number (0-7)
- `<model>`: Target card transmission format ("YUV" or "RAW10" or "RAW12" or "RAW14")

**Example:**
For channel 0 to transmit YUV422 format data:
```bash
transfer_type[0]="YUV"
```

</div>

#### 6.5 Transfer Resolution Configuration

<div style={{background: 'var(--ifm-background-color)', borderRadius: '10px', boxShadow: '0 2px 8px rgba(0,0,0,0.06)', padding: '1.5rem', marginBottom: '2rem'}}>

Configure the resolution for each channel's video stream by specifying width and height parameters:

**Width Configuration:**
```bash
transfer_resolution_width[<n>]=<n1>
```

**Height Configuration:**
```bash
transfer_resolution_height[<n>]=<n1>
```

**Parameters:**
- `transfer_resolution_width`: Width resolution configuration
- `transfer_resolution_height`: Height resolution configuration
- `<n>`: Target card channel number (0-7)
- `<n1>`: Image resolution value

**Example:**
For channel 0 with resolution 1920×1080:
```bash
transfer_resolution_width[0]=1920
transfer_resolution_height[0]=1920
```

<div style={{background: '#fff3cd', borderRadius: '8px', padding: '1rem', marginTop: '1rem', border: '1px solid #ffeaa7'}}>
  <strong>⚠️ Important Notes:</strong>
  <ul style={{marginBottom: 0, marginTop: '0.5rem'}}>
    <li>Channel 0 requires 1-channel resolution configuration</li>
    <li>Channel 2 requires 3-channel resolution configuration</li>
    <li>Channel 4 requires 5-channel resolution configuration</li>
    <li>Channel 6 requires 7-channel resolution configuration</li>
  </ul>
</div>

</div>

#### 6.6 Internal and External Trigger Configuration

<div style={{background: 'var(--ifm-background-color)', borderRadius: '10px', boxShadow: '0 2px 8px rgba(0,0,0,0.06)', padding: '1.5rem', marginBottom: '2rem'}}>

**Internal Trigger Configuration:**
```bash
../tools/reg_rw /dev/xdma0_user 0x30020 w <n1>
```

**Parameters:**
- `<n1>`: 0x22222222 represents internal trigger, 0x11111111 represents external trigger

**Example:**
For channel 0 operating in internal trigger mode:
```bash
../tools/reg_rw /dev/xdma0_user 0x30020 w 0x22222222
```

</div>

#### 6.7 Internal Frequency Configuration

<div style={{background: 'var(--ifm-background-color)', borderRadius: '10px', boxShadow: '0 2px 8px rgba(0,0,0,0.06)', padding: '1.5rem', marginBottom: '2rem'}}>

Configure the internal frequency for video transmission:

```bash
../tools/reg_rw /dev/xdma0_user <n> w <n1>
```

**Parameters:**
- `<n>`: Target card channel number
- `<n1>`: Frequency value, where the actual frequency = 200M/configured frequency value

**Channel Mapping:**
- `0x30024` → Channel 0
- `0x30028` → Channel 1
- `0x3002c` → Channel 2
- `0x30030` → Channel 3
- `0x30034` → Channel 4
- `0x30038` → Channel 5
- `0x3003c` → Channel 6
- `0x30040` → Channel 7

**Examples:**

Set channel 0-7 to 30fps transmission:
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

### 7. Driver Loading and System Startup

#### 7.1 Driver Loading

<div style={{background: 'var(--ifm-background-color)', borderRadius: '10px', boxShadow: '0 2px 8px rgba(0,0,0,0.06)', padding: '1.5rem', marginBottom: '2rem'}}>

Navigate to `/pcie_xdma_transfer_sdk/bash` directory and execute the driver loading script:

```bash
sudo ./load_driver.sh
```

**Expected Output:**
```
interrupt_injection: 0
Loading driver: insmod xdma.ko interrupt_mode=1 ...
The kernel module installed correctly and the xdma devices were recognized.
DONE
```

After successful loading, you should see the following device files created in `/dev/`:
- `xdma0_h2c_0`, `xdma0_h2c_1`, `xdma0_h2c_2`, `xdma0_h2c_3` - Host-to-card transfer devices
- `xdma0_c2h_0`, `xdma0_c2h_1`, `xdma0_c2h_2`, `xdma0_c2h_3` - Card-to-host transfer devices
- `xdma0_user` - User control interface for register access

</div>

#### 7.2 Target Card Data Transmission Configuration

##### 7.2.1 Start Configuration

<div style={{background: 'var(--ifm-background-color)', borderRadius: '10px', boxShadow: '0 2px 8px rgba(0,0,0,0.06)', padding: '1.5rem', marginBottom: '2rem'}}>

Navigate to: `~/pcie_xdma_transfer_sdk/bash` and execute the transfer script:

```bash
sudo ./transfer_run.sh
```

</div>

##### 7.2.2 Stop Configuration

<div style={{background: 'var(--ifm-background-color)', borderRadius: '10px', boxShadow: '0 2px 8px rgba(0,0,0,0.06)', padding: '1.5rem', marginBottom: '2rem'}}>

To stop the data transmission, navigate to: `~/pcie_xdma_transfer_sdk/bash` and execute:

```bash
sudo ./stop.sh
```

</div>

---

<!-- <div style={{background: 'var(--ifm-background-color)', borderRadius: '10px', boxShadow: '0 2px 8px rgba(0,0,0,0.08)', padding: '1.2rem', marginBottom: '2rem', fontSize: '1.1em'}}>
The CIG4-8H GMSL Video Injection Card is an integral component in mature autonomous driving HIL video injection solutions, providing high-precision, multi-channel time synchronization technology to ensure synchronized output across all channels, making it ideal for algorithm validation and optimization in autonomous driving development.
</div> -->
