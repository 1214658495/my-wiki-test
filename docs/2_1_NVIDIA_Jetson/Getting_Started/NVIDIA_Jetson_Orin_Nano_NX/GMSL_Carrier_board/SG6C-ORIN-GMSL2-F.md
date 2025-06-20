---
sidebar_position: 1
---

# SG6C-ORNX-G2-F

## Overview

<div className="row">
  <div className="col col--8">
    The SG6C-ORNX-G2-F is a computing platform carrier board designed for NVIDIA Jetson Xavier/Orin NX series modules, and is also compatible with TX2-NX and Nano SOM core modules. PCIe expandable 4G, M.2 Key-B access to 5G modules, 2-way CAN bus, 2-way USB3.0 compatible with 2.0, etc. With long MTBF stable operation capability, it is widely used in low-speed automatic driving controller,logistics, security, transportation and other industries, and the end product form is rich for application in robots, drones, unmanned delivery vehicles, unmanned ships, intelligent law enforcement equipment, etc.
  </div>
  <div className="col col--4">
    :::note Key Features
    - Support for 6 cameras
    - GMSL/GMSL2 compatible
    - PoC power supply
    
    :::
  </div>
</div>
<div style={{textAlign: 'center', marginBottom: '2rem'}}>
    <img src="https://raw.githubusercontent.com/1214658495/myWikiFiles/main/Nvidia_jetson/NVIDIA_Jetson_Orin_Nano_NX/GMSL_Carrier_board/SG6C-ORNX-G2-F/SG6C-ORNX-G2-F.png" alt="SG6C-ORNX-G2-F" style={{maxWidth: '40%', height: 'auto'}} />
</div>

<div style={{textAlign: 'center', marginBottom: '2rem'}}>
    <a href="https://sensing-world.com/en/h-pd-84.html?recommendFromPid=0&fromMid=964" target="_blank" rel="noopener noreferrer" 
       style={{backgroundColor: '#f0f0f0', padding: '10px 20px', display: 'inline-block', borderRadius: '5px', textDecoration: 'none'}}>
        <strong style={{color: '#000000', fontSize: '1.2em'}}>Buy Now</strong>
    </a>
</div>


## Carrier Board Features

- Support for NVIDIA Jetson Xavier/Orin NX (compatible with TX2-NX/Nano)
- Supports M.2 KEY M 2280 (PCIex4 NVMe SSD or Compute Stick)
- Supports 6 GMSL cameras (GMSL and GMSL2 compatible)
- Supports M.2 KeyB extension interface for access to 5G modules
- Supports mini-PCIe expansion interface for access to 4G modules
- Supports dual Gigabit RJ45 network interfaces
- Dual-band WIFI support and optional GPS support
- Supports a wide range of interfaces (e.g. USB/Serial/CAN/GPIO, etc.)
- Compatible with installation of different versions of NVIDIA JetPack SDK

## Getting Started


### Hardware Overview

<div style={{textAlign: 'center', marginBottom: '2rem'}}>
    <img src="https://raw.githubusercontent.com/1214658495/myWikiFiles/main/Nvidia_jetson/NVIDIA_Jetson_Orin_Nano_NX/GMSL_Carrier_board/SG6C-ORNX-G2-F/SG6C-ORNX-G2-F_Hardware_Overview.png" alt="SG6C-ORNX-G2-F-overview" style={{maxWidth: '85%', height: 'auto'}} />
</div>

<!-- ### Specification

<div className="row">
  <div className="col col--6">
    :::note Basic Info
    - Model: SG8A-AGON-G2Y-A1
    - Dimension: 86.9mm * 55mm * 21.8mm
    - Weight: 50g
    - Connector: 1x120Pin High-density
    - Camera input: Camera*8(GMSL2/GMSL)
    - Trigger In: 6Pin Sync In
    :::
  </div>
  <div className="col col--6">
    :::note Technical Specs
    - Deserializer: MAXIM(ADI) MAX96712*2
    - Camera Connector: Fakra Z Code
    - POC Power Supply: DC 9-16V
    - DC Power Supply: DC 12V
    - Operating Conditions: -20°C to +70°C
    - Adaptation kit: Jetson AGX Orin
    :::
  </div>
</div> -->

### Product definition

<table>
  <tr>
    <th>Type</th>
    <th>Items</th>
    <th>Description</th>
    <th>Comment</th>
  </tr>
  <tr>
    <td rowspan="3"><b>SOM Core</b></td>
    <td>Processor</td>
    <td>NVIDIA Jetson Orin NX<br/>NVIDIA Jetson Orin Nano</td>
    <td></td>
  </tr>
  <tr>
    <td>LPDDR</td>
    <td>8GB/16GB LPDDR5</td>
    <td></td>
  </tr>
  <tr>
    <td>HDD storage</td>
    <td>Orin Nano/NX without internal eMMC can use SSD</td>
    <td></td>
  </tr>
  <tr>
    <td rowspan="5"><b>Network Interface</b></td>
    <td>Wired Network</td>
    <td>Supports 1x Gigabit RJ45<br/>Supports 1x Gigabit RJ45</td>
    <td>RJ45<br/>PCIe to NIC</td>
  </tr>
  <tr>
    <td>WIFI network</td>
    <td>WIFI 2.4G/5GHz compatible BT</td>
    <td>Must link: BL_M8822CU</td>
  </tr>
  <tr>
    <td>4G network</td>
    <td>Compatible with the MobileTech EC20 (mini-PCIe)</td>
    <td>Uses USB 2.0 protocol</td>
  </tr>
  <tr>
    <td>5G networks</td>
    <td>Compatible with RM500U-CN (M.2 Key B)</td>
    <td>Uses USB 3.0 protocol</td>
  </tr>
  <tr>
    <td>GNSS</td>
    <td>L76K module supports GPS/BeiDou-2.0M accuracy</td>
    <td>UART is used (no module by default)</td>
  </tr>
  <tr>
    <td rowspan="15"><b>Functional interfaces</b></td>
    <td>M.2 interface</td>
    <td>M.2-Key M SSD support, length 2280</td>
    <td>Can support 1TB</td>
  </tr>
  <tr>
    <td rowspan="3">USB port</td>
    <td>2xUSB3.0 compatible with 2.0 TYPE-A</td>
    <td>Supports USB 5V/1.5A per port, 2xUSB3.0 Hub RTS5411</td>
  </tr>
  <tr>
    <td>1xOTG USB2.0 TYPE-C (download)</td>
    <td></td>
  </tr>
  <tr>
    <td>1xUSB2.0 TYPE-C Debug (USB to UART Debug interface)</td>
    <td>TYPE-C Debug interface for accessing the device UART Debug information on the PC</td>
  </tr>
  <tr>
    <td rowspan="3">Camera interface</td>
    <td>2-way GMSL FAKRA (1 x MAX9296)</td>
    <td>Compatible with various serializers such as GMSL2/GMSL1</td>
  </tr>
  <tr>
    <td>4-way GMSL FAKRA (1 x MAX96712)</td>
    <td>Compatible with various serializers such as GMSL2/GMSL1</td>
  </tr>
  <tr>
    <td>Supports one set of 4Lane CSI interfaces</td>
    <td>30Pin ZIF connector</td>
  </tr>
  <tr>
    <td>20Pin Header</td>
    <td>2xDI 3.3V TTL<br/>2xDO 3.3V TTL<br/>2x CAN_H/L (with isolation)<br/>1x RS232<br/>1x RS485<br/>1x Sync signal (input to GMSL)</td>
    <td>2x10Pin 2mm Pitch Phoenix Terminal</td>
  </tr>
  <tr>
    <td>T-Card</td>
    <td>T-card interface, no hot-swap support</td>
    <td>3.3V@1A (This T-card interface is not supported if Orin NX is used)</td>
  </tr>
  <tr>
    <td>RTC</td>
    <td>1x RTC</td>
    <td>3mAh 6.8mm X 2.1mm</td>
  </tr>
  <tr>
    <td>FAN</td>
    <td>4-Pin fan connector</td>
    <td>Support PWM regulation (original fan) 5V power supply</td>
  </tr>
  <tr>
    <td>Display interface</td>
    <td>HDMI 2.0</td>
    <td>Horizontal</td>
  </tr>
  <tr>
    <td>Button</td>
    <td>Reset button<br/>Recover button</td>
    <td>Hardware reset button<br/>For download mode</td>
  </tr>
  <tr>
    <td>LED lights</td>
    <td>Power indicator<br/>Status indicator</td>
    <td>Red light<br/>Green indicator, API available for control</td>
  </tr>
  <tr>
    <td>SIM card</td>
    <td>Push-pull</td>
    <td>Side</td>
  </tr>
  <tr>
    <td rowspan="4"><b>Power supply specifications</b></td>
    <td>Start up</td>
    <td>Power on since</td>
    <td>Power-up controlled by MCU</td>
  </tr>
  <tr>
    <td>Shutdown</td>
    <td>Does not support power-off delay</td>
    <td></td>
  </tr>
  <tr>
    <td>Electricity supply</td>
    <td>12~30V DC</td>
    <td></td>
  </tr>
  <tr>
    <td>Power consumption</td>
    <td>≤30W</td>
    <td>Subject to change depending on peripherals</td>
  </tr>
  <tr>
    <td rowspan="2"><b>Complete machine form</b></td>
    <td>Size</td>
    <td>Length*width*height</td>
    <td>155x124x24.5mm</td>
  </tr>
  <tr>
    <td>Heat Dissipation</td>
    <td>Active cooling support</td>
    <td>Fully compatible with NX kit fans</td>
  </tr>
  <tr>
    <td rowspan="2"><b>Temperature and humidity</b></td>
    <td>Operating temperature</td>
    <td>-20°C ~ +65°C</td>
    <td></td>
  </tr>
  <tr>
    <td>Storage temperature</td>
    <td>-40°C ~ +85°C</td>
    <td></td>
  </tr>
</table>


<!-- ### Block Diagram

:::caution Attention
（1）The I2C bus number is the hardware location (matching the connector J2 pin). The bus number does not necessarily correspond to what is listed in the software.

（2）The coaxial power supply is shared, but each GMSL line has its own filter.
:::

<div style={{textAlign: 'center', marginBottom: '2rem'}}>
    <img src="https://raw.githubusercontent.com/1214658495/myWikiFiles/main/Nvidia_jetson/SG8A-AGON-G2Y-A1/SG8A-AGON-G2Y-A1_Block_Diagram.png" alt="SG8A-AGON-G2Y-A1-Block Diagram" style={{maxWidth: '80%', height: 'auto'}} />
</div> -->

### Supported Camera List

:::note Camera Compatibility
The following cameras are supported with different JetPack versions:
:::

| Camera | Output Data | Jetpack 5.1.2 | Jetpack 6.1 |
|--------|-------------|---------------|-------------|
| SG1-OX01F10C-GMSL-Hxxx | YUV422 | - | ✅ |
| SG1S-OX01F10C-G1G-Hxxx | YUV422 | - | - |
| SG2-AR0231C-0202-GMSL-Hxxx | YUV422 | - | ✅ |
| SG2-AR0233C-5200-G2A-Hxxx | YUV422 | - | - |
| SG2-IMX390C-5200-G2A-Hxxx | YUV422 | - | - |
| SG2-OX03CC-5200-GMSL2F-Hxxx | YUV422 | - | - |
| SG3S-ISX031C-GMSL2-Hxxx | YUV422 | - | - |
| SG3S-ISX031C-GMSL2F-Hxxx | YUV422 | ✅ | - |
| SG3S-OX03JC-G2F-Hxxx | YUV422 | - | - |
| SG5-IMX490C-5300-GMSL2-Hxxx | YUV422 | - | - |
| SG5-OX05BC-4000-GMSL2-Hxxx | YUV422 | - | - |
| SG8S-AR0820C-5300-G2A-Hxxx | YUV422 | ✅ | - |
| SG8-OX08BC-5300-GMSL2-Hxxx | YUV422 | - | - |
| DMSBBFAN | YUV422 | - | - |
| SG3S-IMX623C-G2F-Hxxx | RAW12 | - | - |
| SG8-IMX728C-G2G-Hxxx | RAW12 | - | - |

:::note JetPack Versions
NVIDIA JetPack (<strong style={{ color: 'var(--ifm-color-primary-light)' }}>Jetpack 5.1.2</strong> or <strong style={{ color: 'var(--ifm-color-primary-light)' }}>Jetpack 6.0</strong> ) is the official software development kit (SDK) for the Jetson series of development boards. It includes the operating system, drivers, CUDA, cuDNN, TensorRT, and other development tools and libraries. Each JetPack version typically corresponds to a specific Jetson Linux version (formerly known as L4T - Linux for Tegra). 
- 36.4.3: L4T R36.4.3 (Jetpack 6.2)
- 36.4: L4T R36.4 (Jetpack 6.1)
- 36.3: L4T R36.3 (Jetpack 6.0)
- 35.4.1: L4T R35.4.1 (Jetpack 5.1.2)

For more information, visit [NVIDIA's official Jetson Download Center](https://developer.nvidia.com/embedded/jetpack-archive).
:::
<!-- 
### Hardware Preparation

#### Parts List

<div className="row">
  <div className="col col--6">
    :::note Standard Configuration
    - Four-in-one wire harness (2 pcs)
    - Power switching harness
    - Trigger wiring harness
    - SG6C-ORNX-G2-F adapter board
    - Copper column, M2.5*10 (3 pcs)
    - Screw, M2.5-F (3 pcs)
    - Power adapter
    :::
  </div>
  <div className="col col--4">
    :::note Optional Configuration
    - Jetson Orin Nano/NX
    :::
  </div>
</div>

#### Kit Contents

<div style={{textAlign: 'center', marginBottom: '2rem'}}>
    <img src="https://raw.githubusercontent.com/1214658495/myWikiFiles/main/Nvidia_jetson/SG8A-AGON-G2Y-A1/SG8A-AGON-G2Y-A1_Kit_Contents.png" alt="SG8A-AGON-G2Y-A1-Kit Contents" style={{maxWidth: '100%', height: 'auto'}} />
</div>

#### Installation Steps

:::note Quick Setup
1. Connect the GMSL camera to the SG6C-ORNX-G2-F board using the coaxial cable
2. Mount the SG6C-ORNX-G2-F board onto the Jetson AGX Orin module
3. Connect the power supply
4. Power on the system
:::

<div style={{textAlign: 'center', position: 'relative', width: '95%', paddingBottom: '56.25%', marginBottom: '2rem'}}>
    <iframe
        style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%'}}
        src="//player.bilibili.com/player.html?bvid=BV1XxNWznEkV&page=1&high_quality=1&danmaku=0"
        scrolling="no"
        border="0"
        frameBorder="no"
        framespacing="0"
        allowFullScreen="true">
    </iframe>
</div> -->

### Software Preparation

:::note System Update
- You can use NVIDIA SDK Manager Linux Software or directly use the NVIDIA Linux Driver Package via Linux command line to flash JetPack OS into the NVIDIA Jetson device. For beginners, we highly recommend NVIDIA SDK Manager.

- For detailed steps on flashing and booting, please refer to: **[Flashing and booting Jetson Linux](./Flashing_and_booting_Jetson_Linux).**

- After completion, the device will restart and boot into the NVIDIA Jetson Linux system.

- After successfully flashing and booting Jetson Linux, you need to install the appropriate drivers to support GMSL cameras.
:::

#### SDK Download
Select the appropriate driver package based on your camera type and JetPack version:

| Camera Type | JetPack Version | Download Link |
|-------------|-----------------|---------------|
| GMSL Camera (YUV) | JP5.1.2 | [Download](https://github.com/SENSING-Technology/nvidia-jetson-camera-drivers/tree/main/Jetson%20Orin%20Nano%20Carrier%20Board/SG6C-ORNX-G2-F/JetPack5.1.2) |
| GMSL Camera (YUV) | JP6.1 | [Download](https://github.com/SENSING-Technology/nvidia-jetson-camera-drivers/tree/main/Jetson%20Orin%20Nano%20Carrier%20Board/SG6C-ORNX-G2-F/JetPack6.1/SG6C-ORNX-G2-F_OrinNX_OrinNano_YUV_GMSL2_JP6.1_L4TR36.4) |

:::tip Download Method
Copy the full link address to [DownGit](https://minhaskamal.github.io/DownGit/#/home) to download
:::

#### Quick Bring Up

<!-- ##### Install Drivers -->

1. Copy the driver package to the working directory of the Jetson device, such as "/home/nvidia"

   ```bash
   /home/nvidia/SG6C_ORNX_G2_F_Orin_YUVx6_JP5.1.2_L4TR35.4.1
   ```

2. Enter the driver directory

   ```bash
   cd SG6C_ORNX_G2_F_Orin_YUVx6_JP5.1.2_L4TR35.4.1
   ```

3. Give executable permissions to the script "quick_bring_up.sh" and execute it

   ```bash
   chmod a+x quick_bring_up.sh
   sudo ./quick_bring_up.sh
   ```

4. Select the camera type. This step will install Image and DTB. After the script finishes, you need to reboot the device for the Image and DTB to take effect. For example:

   ```bash
   This package is use for Sensing SG6C_ORNX_G2_F on JetPack-5.1.2-L4T-35.4.1
   1.sgx-yuv-gmsl2
   Press select your camera type:
   1
   ```

5. After the device reboots, enter the driver directory again and run the script "quick_bring_up.sh"

   ```bash
   sudo ./quick_bring_up.sh
   ```

6. Select the camera type and port, for example select the sgx-yuv-gmsl2 camera type, then select SG2-IMX390C-5200-GMSL2, and finally enter the camera port you are connected to (0-5) to start the camera.

   ```bash
   This package is use for Sensing SG6C_ORNX_G2_F on JetPack-5.1.2-L4T-35.4.1
   1.sgx-yuv-gmsl2
   Press select your camera type:
   1
   Press select your yuv camera type:
   0:SG2-IMX390C-5200-GMSL2
   1:SG2-AR0233-5300-GMSL2
   2.SG2-OX03CC-5200-GMSL2F
   3.SG3-ISX031C-GMSL2
   4.SG3S-ISX031C-GMSL2F
   5.SG5-IMX490C-5200-GMSL2
   0
   Press select your camera port [0-5]:
   0
   ready bring up camera
   Use the following command to light the camera!
   gst-launch-1.0 v4l2src device=/dev/video0 ! xvimagesink -ev
   ```

7. Use one of the commands prompted above to start the camera


### Advanced Development

#### Integration with SENSING Driver Source Code

If you need to customize drivers or perform in-depth development, you can refer to the following steps to integrate SENSING driver source code into your kernel:

1. Compile Image & dtb
   Refer to the following commands to integrate Dtb and Kernel source code into your kernel

   ```bash
   cp camera-driver-package/source/hardware Linux_for_Tegra/source/public/$YourDir/hardware -r
   cp camera-driver-package/source/kernel Linux_for_Tegra/source/public/$YourDir/kernel -r
   ```

2. Go to the root directory of your source code and recompile

   ```bash
   cd Linux_for_Tegra/source/public/$YourDir/
   export CROSS_COMPILE_AARCH64_PATH=toolchain-path
   export CROSS_COMPILE_AARCH64=toolchain-path/bin/aarch64-buildroot-linux-gnu-
   mkdir kernel_out
   ./nvbuild.sh -o $PWD/kernel_out
   ```

3. Install the newly generated Image and dtb to your NVIDIA device and reboot to make them take effect

   ```bash
   dtb: kernel_out/arch/arm64/boot/dts/nvidia/
   Image: kernel_out/arch/arm64/boot/Image
   ```

4. Install camera drivers

   ```bash
   sudo insmod ./ko/max9295.ko
   sudo insmod ./ko/max9296.ko
   sudo insmod ./ko/sgx-yuv-gmsl2.ko
   ```

5. Start the camera

   ```bash
   gst-launch-1.0 v4l2src device=/dev/video0 ! xvimagesink -ev
   ```

## Troubleshooting

#### Flashing Failure

**Issue**: Error during flashing process or device won't boot
**Solution**: 
1. Ensure you're using the correct JetPack/L4T version
2. Check if the EEPROM-related configurations were properly modified
3. Try entering Recovery mode again and reflash

#### Camera Not Working

**Issue**: Camera doesn't display image after driver installation
**Solution**:
1. Check if the camera is properly connected
2. Confirm that you selected the correct camera model and port
3. Check if the drivers were successfully loaded using `dmesg | grep -i max`

#### System Performance Issues

**Issue**: System performance decreases when running multiple cameras
**Solution**:
1. Check if cooling is adequate
2. Use the `sudo jetson_clocks` command to fix clock frequencies for best performance
3. Consider using NVIDIA's hardware acceleration features such as NVDEC and NVENC

For more technical support, visit the [SENSING Technical Forum](https://sensing-world.com/) or contact our technical support team.