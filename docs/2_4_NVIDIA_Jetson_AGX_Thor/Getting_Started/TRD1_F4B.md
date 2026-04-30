---
sidebar_position: 2
---

# TRD1 F4B


## Overview

<div className="row">
  <div className="col col--12">
    TRD1 F4B extends the official NVIDIA Jetson AGX THOR Developer Kit with FPDLINK connectivity, enabling rapid integration of FPDLINK camera streams on the THOR platform. Supports up to eight FPDLINK cameras.
  </div>
</div>


<div style={{textAlign: 'center'}}>
    <img src="https://sgword-service.oss-cn-heyuan.aliyuncs.com/wiki-images/2_4_NVIDIA_Jetson_AGX_Thor/TRD1_F4B/TRD1_F4B.png?x-oss-process=image/format,webp" alt="TRD1_F4B" 
    style={{maxWidth: '50%', height:'auto'}} />
</div>
<br />

<!-- <div style={{textAlign: 'center', marginBottom: '2rem'}}>
    <a href="https://sensing-world.com/en/RedFoxD3Gx.html?fromMid=1544#recommendFromPid=0" target="_blank" rel="noopener noreferrer" 
       style={{backgroundColor: '#f0f0f0', padding: '10px 20px', display: 'inline-block', borderRadius: '5px', textDecoration: 'none'}}>
        <strong style={{color: '#000000', fontSize: '1.2em'}}>Buy Now</strong>
    </a>
</div> -->

## Key Features and Application

<div style={{display: 'flex', flexWrap: 'wrap', gap: '1.5rem', marginBottom: '2rem'}}>
  <div style={{flex: 1, minWidth: 260, background: 'var(--ifm-background-color)', borderRadius: '10px', boxShadow: '0 2px 8px rgba(0,0,0,0.06)', padding: '1rem'}}>
    <strong>Features:</strong><br/>
    • Support NVIDIA JETSON THOR Platform <br/>
    • Supported Camera Resolutions ：Max 3840*2160 <br/>
    • Supported Camera Output Formats : RAW / YUV422 <br/>
    • Dimensions：L:243.12mm x W:112.4mm x H:56.88mm <br/>
    • Compatible Camera Types ：FPDLINK Ⅲ、FPDLINK Ⅳ <br/>
    • Maximum Supported Cameras ：8 *FPDLINK <br/>
    • SOC：NVIDlA Jetson T5000 Module <br/>
    • Al Perfommance：2070 TFLOPS <br/>
    • Memory：128 GB 256-bit LPDDR5X 
  </div>
  <div style={{flex: 1, minWidth: 260, background: 'var(--ifm-background-color)', borderRadius: '10px', boxShadow: '0 2px 8px rgba(0,0,0,0.06)', padding: '1rem'}}>
    <strong>Application:</strong><br/>
    • Robotics <br/>
    • Industrial <br/>
    • Medical<br/>
    • Inspection
  </div>
</div>

## Getting Started

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

### Hardware Overview

<div style={{textAlign: 'center', marginBottom: '2rem'}}>
    <img src="https://sgword-service.oss-cn-heyuan.aliyuncs.com/wiki-images/2_4_NVIDIA_Jetson_AGX_Thor/TRD1_F4B/TRD1_F4B_Hardware_Overview.png?x-oss-process=image/format,webp" alt="TRD1 F4B Hardware Overview" style={{maxWidth: '80%', height: 'auto'}} />
</div>

<!-- <div style={{textAlign: 'center', marginBottom: '2rem'}}>
    <img src="https://raw.githubusercontent.com/1214658495/myWikiFiles/main/Nvidia_jetson/SG8A-AGON-G2Y-A1/SG8A-AGON-G2Y-A1_Hardware_Overview2.png" alt="SG8A-AGON-G2Y-A1-overview2" style={{maxWidth: '40%', height: 'auto'}} />
</div> -->

### Block Diagram

<!-- :::caution Attention
（1）The coaxial power supply is shared, but each GMSL line has its own filter.
::: -->

<div style={{textAlign: 'center', marginBottom: '2rem'}}>
    <img src="https://sgword-service.oss-cn-heyuan.aliyuncs.com/wiki-images/2_4_NVIDIA_Jetson_AGX_Thor/TRD1_F4B/TRD1_F4B_Block_Diagram.jpg?x-oss-process=image/format,webp" alt="TRD1 F4B Block Diagram" style={{maxWidth: '100%', height: 'auto'}} />
</div>
:::note 
- The TRD1 F4B uses **2 UB9724 deserializers**, each supporting up to 4 camera ports.
:::

### Supported Camera List

:::note Camera Compatibility
You may choose the following camera combinations to connect to the TRD1 F4B. 
:::

| Camera Combination  | Number of Supported Cameras  | Jetpack 7.0 |
|--------|-------------|---------------|
| Comb. 1 | 4*8MP/30FPS | - |
| Comb. 2 | 8*3MP/30FPS | - |
| Comb. 3 | 2 *8MP/30FPS+4 *3MP/30FPS | - |
| Comb. 4 | 1 *8MP/30FPS+2 *2MP/30FPS+4 *3MP/30FPS | - |

:::note JetPack Versions
NVIDIA JetPack (<strong style={{ color: 'var(--ifm-color-primary-light)' }}>Jetpack 7.0</strong> ) is the official software development kit (SDK) for the Jetson series of development boards. It includes the operating system, drivers, CUDA, cuDNN, TensorRT, and other development tools and libraries. Each JetPack version typically corresponds to a specific Jetson Linux version (formerly known as L4T - Linux for Tegra). 
- 36.4.3: L4T R36.4.3 (Jetpack 6.2)
- 36.4: L4T R36.4 (Jetpack 6.1)
- 36.3: L4T R36.3 (Jetpack 6.0)
- 35.4.1: L4T R35.4.1 (Jetpack 5.1.2)

For more information, visit [NVIDIA's official Jetson Download Center](https://developer.nvidia.com/embedded/jetpack-archive).
:::

### Hardware Preparation

#### Parts List


| Serial number | Product model | Quantity | Remark |
|---|---|---:|---|
| 1 | 945-14070-0080-000-MIPI | 1 | up to 8 cameras at most |
| 2 | T4JC-JC-ZZZZ-0500L (Female to Female 0.5m) | 2 | Standard configuration |
| 3 | Trigger Cable | 1 | Standard configuration |
| 4 | Power Conversion Cable | 1 | Standard configuration |
| 5 | Power adapter | 1 | Standard configuration |
| 6 | Multi-functional conversion socket | 1 | optional configuration |


#### Kit Contents

<div style={{textAlign: 'center', marginBottom: '2rem'}}>
    <img src="https://sgword-service.oss-cn-heyuan.aliyuncs.com/wiki-images/2_4_NVIDIA_Jetson_AGX_Thor/TRD1_F4B/TRD1_F4B_Kit_Contents.png?x-oss-process=image/format,webp" alt="TRD1 F4B Kit Contents" style={{maxWidth: '90%', height: 'auto'}} />
</div>

#### Installation Steps

:::note Quick Setup
1. Connect the FPDLINK camera to the TRD1 F4B using the coaxial cable(up to 8 cameras at most)
2. Connect the power supply(DC 9-16V)
3. Power on the system(Jetson Thor)
:::

<!-- <div style={{textAlign: 'center', position: 'relative', width: '95%', paddingBottom: '56.25%', marginBottom: '2rem'}}>
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
<div style={{textAlign: 'center', marginBottom: '2rem'}}>
    <img src="https://sgword-service.oss-cn-heyuan.aliyuncs.com/wiki-images/2_4_NVIDIA_Jetson_AGX_Thor/TRD1_F4B/TRD1_F4B_Kit_Contents_Camera.png?x-oss-process=image/format,webp" alt="TRD1 F4B Camera Connection" style={{maxWidth: '90%', height: 'auto'}} />
</div>


### Software Preparation

#### SDK Download

:::note Driver Packages
Select the appropriate driver package based on your camera type and JetPack version:
:::

| Camera Type | JetPack Version | Download Link |
|-------------|-----------------|---------------|
| FPDLINK Camera (YUV) | JP7.0 | [Download](https://github.com/SENSING-Technology/nvidia-jetson-camera-drivers/tree/main/Jetson%20AGX%20Thor%20Devkit/TRD1_F4B) |

:::tip Download Method
Copy the full link address to [DownGit](https://minhaskamal.github.io/DownGit/#/home) to download
:::

#### Quick Bring Up

:::note System Update
We can use NVIDIA SDK Manager Linux Software or directly use the NVIDIA Linux Driver Package via Linux command line to flash JetPack OS into the NVIDIA Jetson device. For beginners, we highly recommend NVIDIA SDK Manager.
:::

<!-- <div style={{textAlign: 'center', marginBottom: '2rem'}}>
    <img src="https://raw.githubusercontent.com/1214658495/myWikiFiles/main/Nvidia_jetson/SG8A-ORIN-GMSL2/SG8A-ORIN-GMSL2-cmd.png" alt="SG8A-ORIN-GMSL2-cmd" style={{maxWidth: '100%', height: 'auto'}} />
</div> -->
##### Jetpack version

* Jetpack 7.0  L4TR38.2.1

##### Supported Camera Modules

* SG2-AR0233C-5200-F3A-Hxxx 
  * support max 8 cameras to bring up at the same time

* SG8S-AR0820C-5300-F4A-Hxxx 
  * support max 4 cameras to bring up at the same time

* SG3S-ISX031C-F3A-Hxxx
  * support max 8 cameras to bring up at the same time

##### Quick Bring Up

1. Connect the Camera to the ports on the adapter board.

   <!-- ![alt text](<../../../../Picture/SENSING Thor Developer Kit/TRD1 G2A Camera Interface Definition.jpg>) -->

   ```
   CN1 (CAM4/CAM5/CAM6/CAM7)
   CN2 (CAM0/CAM1/CAM2/CAM3)
   ```
   The correspondence between CAM ports and device nodes is as follows:

    ```
    PORT                    DeviceTree Node            DEV NODE                    
    CN1(COAX0)               cam_4                    /dev/video4                
    CN1(COAX1)               cam_5                    /dev/video5                 
    CN1(COAX2)               cam_6                    /dev/video6                 
    CN1(COAX3)               cam_7                    /dev/video7                 
    CN2(COAX4)               cam_0                    /dev/video0                 
    CN2(COAX5)               cam_1                    /dev/video1                 
    CN2(COAX6)               cam_2                    /dev/video2 
    CN2(COAX7)               cam_3                    /dev/video3                 
    ```  

   Power Supply

   SG8-AGX-Thor-9724 adapt board need to be powered by 12V.

   <!-- ![alt text](<../../../../Picture/SENSING Thor Developer Kit/TRD1 G2A Power and Trigger Interface Definition.jpg>) -->


2. Enter the driver directory,

   ```
   cd TRD1_F4B_AGX_THOR_FPDx8_YUV_JP7.0_L4TR38.2.1
   chmod a+x ./install.sh
   ./install.sh
   ```
   
3. Use the "sudo /opt/nvidia/jetson-io/jetson-io.py" command to select the corresponding device

   ```
   sudo /opt/nvidia/jetson-io/jetson-io.py

   1.select "Configure Jetson AGX CSI Connector"
   2.select "Configure for compatible hardware"
   3.select "Jetson Sensing SG8_AGX_F4_A1 YUV FPD4x8"
   4.select "Save pin changes"
   5.select "Save and reboot to reconfigure pins"
   ```
4. After the device reboot,modify the "load_module.sh" script .

   4.1 Modify the script "load_modules.sh"
   
   4.1.1 Modify the video device configuration command lines.
   
   The following commands are used to configure the cameras recognized as video0 to video7 in the system.
   It is necessary to adjust the command parameters sensor_mode, trig_mode, and trig_pin in accordance with the camera model and the connection employed.
   ```
   v4l2-ctl -d /dev/video0 -c sensor_mode=0,trig_mode=0,trig_pin=0x00000000
   v4l2-ctl -d /dev/video1 -c sensor_mode=0,trig_mode=0,trig_pin=0x00000000
   v4l2-ctl -d /dev/video2 -c sensor_mode=0,trig_mode=0,trig_pin=0x00000000
   v4l2-ctl -d /dev/video3 -c sensor_mode=0,trig_mode=0,trig_pin=0x00000000
   v4l2-ctl -d /dev/video4 -c sensor_mode=0,trig_mode=0,trig_pin=0x00020000
   v4l2-ctl -d /dev/video5 -c sensor_mode=0,trig_mode=0,trig_pin=0x00000000
   v4l2-ctl -d /dev/video6 -c sensor_mode=0,trig_mode=0,trig_pin=0x00000000
   v4l2-ctl -d /dev/video7 -c sensor_mode=0,trig_mode=0,trig_pin=0x00000000
   ```
   Regarding the sensor_mode parameter, its value is related to the camera model and is presented as follows: 
   ```
   SG2-AR0233C-5200-F3A-Hxxx(1920X1080): sensor_mode=0;
   SG3S-ISX031C-F4A-Hxxx(1920X1536): sensor_mode=1;
   SG3S-ISX031C-F3A-Hxxx(1920X1536): sensor_mode=1; 
   SG8S-AR0820C-5300-F4A-Hxxx(3840X2160): sensor_mode=3.
   ```
   The "trig_mode" and "trig_pin" parameters denote the trigger mode and the corresponding trigger pin to be utilized.
   ```
   For Auto-trigger Mode (The cameras are triggered automatically upon camera activation. However, the cameras are not synchronized):trig_mode=0;trig_pin=0x00000000
   
   For Jetson Orin Trigger Mode (The cameras are triggered and synchronized through the trigger signal generated from the Jetson Orin):trig_mode=1;trig_pin=0x00000000
   
   For External-Trigger mode (The cameras are synchronously triggered via the trigger signal generated by the external signal generator that is connected to the trigger Pin of the Kit):trig_mode=1;trig_pin=0x00020000
   ```
   4.1.2 Modify the driver module parameter : 

   If you desire to utilize a combination of FPD3 (with F3 identifier: XXX - F3A - XXX) cameras and FPD4 (with F4 identifier: XXX - F4A - XXX) cameras, the following methods have been provided for your utilization.

   a.Determine the corresponding camera type for each camera channel

   b.Modify the enable_fpd4_0 and enable_fpd4_1 parameter of the following driver loading command , where X for FPD4 is represented by (1) and FPD3 is represented by (0).
   
   sudo insmod ko/sgx-yuv-fpd4.ko enable_fpd4_0=X,X,X,X enable_fpd4_1=X,X,X,X
   
   In the following example:
   ```
   sudo insmod ko/sgx-yuv-fpd4.ko enable_fpd4_0=1,1,0,0 enable_fpd4_1=0,0,1,1
   ```
   enable_fpd4_0 represents the first input channel. The value `1,1,0,0` indicates that the cam_0 and cam_1 cameras operate in FPD4 mode, while the cam_2 and cam_3 cameras operate in FPD3 mode.
   
   enable_fpd4_1 represents the second input channel. The value `0,0,1,1` indicates that the cam_4 and cam_5 cameras operate in FPD3 mode, while the cam_6 and cam_7 cameras operate in FPD4 mode.
   



5. Bring up the camera

   5.1 run the script "load_module.sh".
   ```
   sudo ./load_modules.sh
   ```
   After the module is loaded, the device nodes /dev/video0~video7 will be generated.
   
   5.2 run the gst - launch - 1.0 in a terminal.
   ```
   ## COAX4
   gst-launch-1.0 v4l2src device=/dev/video0 ! xvimagesink -ev

   ## COAX5
   gst-launch-1.0 v4l2src device=/dev/video1 ! xvimagesink -ev

   ## COAX6
   gst-launch-1.0 v4l2src device=/dev/video2 ! xvimagesink -ev

   ## COAX7
   gst-launch-1.0 v4l2src device=/dev/video3 ! xvimagesink -ev

   ## COAX0
   gst-launch-1.0 v4l2src device=/dev/video4 ! xvimagesink -ev

   ## COAX1
   gst-launch-1.0 v4l2src device=/dev/video5 ! xvimagesink -ev

   ## COAX2
   gst-launch-1.0 v4l2src device=/dev/video6 ! xvimagesink -ev

   ## COAX3
   gst-launch-1.0 v4l2src device=/dev/video7 ! xvimagesink -ev
   ```

    If the above steps are properly completed, the next time you reboot the device, you need only run the "sudo ./load_modules.sh" command to load the drivers, and then run the gst - launch - 1.0 in a terminal.

6. Provide Trigger Sync signal

   Modify load_modules.sh script and re-run it.

   ```
   v4l2-ctl -d /dev/video0 -c sensor_mode=0,trig_pin=0x00000000,trig_mode=1
   v4l2-ctl -d /dev/video1 -c sensor_mode=1,trig_pin=0x00000000,trig_mode=1
   v4l2-ctl -d /dev/video2 -c sensor_mode=1,trig_pin=0x00000000,trig_mode=1
   v4l2-ctl -d /dev/video3 -c sensor_mode=1,trig_pin=0x00000000,trig_mode=1
   v4l2-ctl -d /dev/video4 -c sensor_mode=1,trig_pin=0x00000000,trig_mode=1
   v4l2-ctl -d /dev/video5 -c sensor_mode=1,trig_pin=0x00000000,trig_mode=1
   v4l2-ctl -d /dev/video6 -c sensor_mode=3,trig_pin=0x00000000,trig_mode=1
   v4l2-ctl -d /dev/video7 -c sensor_mode=3,trig_pin=0x00000000,trig_mode=1
   ```

   6.1 External Trigger Mode

   When utilize a external trigger singanl generator to provide external trigger signal ,the trigger source should be connect to the CN4 6-PIN connector:
   PIN2 (CAM-FSYNC2) corresponds to the external trigger signal for cameras of CN1, 
   PIN4 (CAM-FSYNC4) corresponds to the external trigger signal for cameras of CN2, 
   PIN6 is the Ground pin. 
   Connect the positive pole of the trigger signal source to PIN2 and PIN4 to synchronize all cameras.
   Connect the Negative pole of the tirgger signal source to PIN6 .

   6.2 Jetson Orin Trigger Mode 

   When utilize Jetson Orin Trigger Mode,it is required to configurate the trigger signal generated from the Jetson Orin via the following steps.
   ```
   a.load the driver 
   sudo insmod ko/pwm-gpios.ko
   
   b.Export PWM channel 0 (pwmchip4 is a newly generated node after loading the driver)
   echo 0 > /sys/class/pwm/pwmchip4/export
   
   c.Set the period to 33333333 (corresponding to 30 Hz)
   echo 33333333 > /sys/class/pwm/pwmchip4/pwm0/period
   
   d.Set the duty cycle
   echo 30000000 > /sys/class/pwm/pwmchip4/pwm0/duty_cycle
   
   e.Enable PWM output
   echo 1 > /sys/class/pwm/pwmchip4/pwm0/enable
   ```

#### Integration with SENSING Driver Source Code

1. Compile Image & dtb
   Refer to the following command to integrate Dtb and Kernel source code to your kernel

   ```
   cp camera-driver-package/source/hardware Linux_for_Tegra/source/hardware -r
   cp camera-driver-package/source/kernel Linux_for_Tegra/source/kernel -r
   cp camera-driver-package/source/nvidia-oot Linux_for_Tegra/source/nvidia-oot -r
   ```

2. Go to the root directory of your source code and recompile

   ```
   cd <install-path>/Linux_for_Tegra/source
   export CROSS_COMPILE_AARCH64=toolchain-path/bin/aarch64-buildroot-linux-gnu-
   export KERNEL_HEADERS=$PWD/kernel/kernel-noble
   export INSTALL_MOD_PATH=<install-path>/Linux_for_Tegra/rootfs/
   make -C kernel
   make modules
   make dtbs
   sudo -E make install -C kernel

   cp kernel/kernel-noble/arch/arm64/boot/Image <install-path>/Linux_for_Tegra/kernel/Image
   cp nvidia-oot/device-tree/platform/generic-dts/dtbs/* <install-path>/Linux_for_Tegra/kernel/dtb/
   ```

3. Install the newly generated Image and dtb to your nvidia device and reboot to let them take effect

   ```
   dtb:nvidia-oot/device-tree/platform/generic-dts/dtbs/
   Image: kernel/kernel-noble/arch/arm64/boot/

   tegra-camera.ko:nvidia-oot/drivers/media/platform/tegra/camera/
   nvhost-nvcsi.ko:nvidia-oot/drivers/video/tegra/host/nvcsi/
   ```

4. Copy the image,dtb,ko generated by the above compilation to the corresponding location of jetson

   ```
   sudo cp *.dtbo /boot/
   sudo cp Image /boot/Image
   sudo cp tegra-camera.ko /lib/modules/6.8.12-tegra/updates/drivers/media/platform/tegra/camera/
   sudo cp nvhost-nvcsi.ko /lib/modules/6.8.12-tegra/updates/drivers/video/tegra/host/nvcsi/
   ```

5. Select the device tree you installed

   ```
   sudo /opt/nvidia/jetson-io/jetson-io.py

   1.select "Configure Jetson AGX CSI Connector"
   2.select "Configure for compatible hardware"
   3.select "Jetson Sensing SG8_AGX_F4_A1 YUV FPD4x8"
   4.select "Save pin changes"
   5.select "Save and reboot to reconfigure pins"
   ```

6. Install camera driver

   ```
   sudo insmod ./ko/ti9724.ko
   sudo insmod ./ko/sgx-yuv-fpd4.ko
   ```

7. Bring up the camera

   ```
   ## COAX4
    v4l2-ctl -d /dev/video0 -c sensor_mode=?,trig_pin=?
    gst-launch-1.0 v4l2src device=/dev/video0 ! xvimagesink -ev

   ## COAX5
    v4l2-ctl -d /dev/video1 -c sensor_mode=?,trig_pin=?
    gst-launch-1.0 v4l2src device=/dev/video1 ! xvimagesink -ev

   ## COAX6
    v4l2-ctl -d /dev/video2 -c sensor_mode=?,trig_pin=?
    gst-launch-1.0 v4l2src device=/dev/video2 ! xvimagesink -ev

   ## COAX7
    v4l2-ctl -d /dev/video3 -c sensor_mode=?,trig_pin=?
    gst-launch-1.0 v4l2src device=/dev/video3 ! xvimagesink -ev

   ## COAX0
    v4l2-ctl -d /dev/video4 -c sensor_mode=?,trig_pin=?
    gst-launch-1.0 v4l2src device=/dev/video4 ! xvimagesink -ev

   ## COAX1
    v4l2-ctl -d /dev/video0 -c sensor_mode=?,trig_pin=?
    gst-launch-1.0 v4l2src device=/dev/video5 ! xvimagesink -ev

   ## COAX2
    v4l2-ctl -d /dev/video0 -c sensor_mode=?,trig_pin=?
    gst-launch-1.0 v4l2src device=/dev/video6 ! xvimagesink -ev

   ## COAX3
    v4l2-ctl -d /dev/video0 -c sensor_mode=?,trig_pin=?
    gst-launch-1.0 v4l2src device=/dev/video7 ! xvimagesink -ev
   ```