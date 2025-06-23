---
sidebar_position: 2
---

# Flashing and booting Jetson Linux

Reference link to Nvidia's official website:

https://docs.nvidia.com/jetson/archives/r35.2.1/DeveloperGuide/text/IN/QuickStart.html#in-quickstart

### Setting Up the Environment

The SG6C-ORNX-G2-F carrier board is used with NVIDIA Jetson Orin Nano/NX and other core boards. The driver package is developed on a specific Jetson Linux version and you need to make sure the Jetson Linux version matches before installing the driver. If it does not match, you need to re-flash the system, otherwise the system will not boot after installing the driver. NVIDIA Jetson Orin Nano/NX supports two types of flashing methods, using SDK Manager and via the Flash.sh script. Here is how to use the Flash.sh script.

Required preparation:

* SG6C-ORNX-G2-F carrier board with NVIDIA Orin Nano/NX module and SSD
* Computer with Ubuntu 18.04/20.04s
* 1 USB TYPE-C data cable

#### Setting RECOVERY Download Mode

The Nvidia Jetson platform software is upgraded via USB interface, and the Jetson device needs to be put into Recovery mode before the upgrade, which allows system updates, including the kernel, RootFS file system, JetPack SDK, etc.

To enter Recovery download mode when powered off, follow these steps:

(1) Connect a USB TYPE-C cable

Use a USB TYPE-C cable to connect the Jetson device to the Ubuntu host, with one end connected to the TYPE-C port of the Jetson device and the other end connected to the USB port of the Ubuntu host.

(2) Press and hold the REC download button, then power up the system using the power supply that comes with the carrier board;

(3) Wait for more than 5 seconds and release all buttons to enter Recovery download mode

You can run the lsusb command on the Ubuntu host to check for NVIDIA Corp devices to confirm that the Jetson device has successfully entered Recovery download mode. The USB VID/PID varies depending on the Jetson module.

<div style={{textAlign: 'center', marginBottom: '2rem', backgroundColor: 'white', padding: '10px'}}>
    <code style={{color: 'black'}}>Bus 003 Device 005: ID 0955:7c18 NVidia Corp.</code>
</div>

#### Using the flash.sh Script to Flash the Device

(1) Download the flashing package

https://developer.nvidia.com/embedded/jetson-linux

Based on the driver version, select the corresponding Jetson Linux version. Here we use JetPack 5.1 (Jetson Linux 35.2.1) as an example.

<div style={{textAlign: 'center', marginBottom: '2rem'}}>
    <img src="https://raw.githubusercontent.com/1214658495/myWikiFiles/main/Nvidia_jetson/NVIDIA_Jetson_Orin_Nano_NX/GMSL_Carrier_board/SG6C-ORNX-G2-F/SG6C-ORNX-G2-F_Download_Page.png" alt="NVIDIA Download Page" style={{maxWidth: '85%', height: 'auto'}} />
</div>

Click on Driver Package to download Jetson_Linux_R35.2.1_aarch64.tbz2, click on Sample Root Filesystem to download Tegra_Linux_Sample-Root-Filesystem_R35.2.1_aarch64.tbz2, and copy them to the working directory of your Ubuntu host.

<div style={{textAlign: 'center', marginBottom: '1rem', backgroundColor: 'white', padding: '10px', color: 'black'}}>
    <pre>
sensing@ubuntu:/nvidia$ ls
Jetson_Linux_R35.2.1_aarch64.tbz2
Tegra_Linux_Sample-Root-Filesystem_R35.2.1_aarch64.tbz2
sensing@ubuntu:/nvidia$
    </pre>
</div>

(2) Unzip and install the flashing package

Unzip the package, note that the filesystem needs to be extracted to the Linux_for_Tegra/rootfs directory using sudo.

<div style={{backgroundColor: '#f0f0f0', padding: '10px'}}>
<pre>
$ tar -jxvf Jetson_Linux_R35.2.1_aarch64.tbz2
$ sudo tar -jxvf Tegra_Linux_Sample-Root-Filesystem_R35.2.1_aarch64.tbz2 -C Linux_for_Tegra/rootfs/
</pre>
</div>

Execute the following scripts

<div style={{backgroundColor: '#f0f0f0', padding: '10px'}}>
<pre>
$ cd Linux_for_Tegra/
$ sudo ./apply_binaries.sh
$ sudo ./tools/l4t_flash_prerequisites.sh
</pre>
</div>

Note: If an error is reported during the execution of this script, follow the prompts to install the appropriate dependency packages.

Since the carrier board does not have an EEPROM, the following files need to be modified:

Linux_for_Tegra/bootloader/t186ref/BCT/tegra234-mb2-bct-misc-p3767-0000.dts

<div style={{backgroundColor: '#f0f0f0', padding: '10px'}}>
<pre>
- change cvb_eeprom_read size =&lt;0x100&gt; 
- to cvb_eeprom_read size =&lt;0x0&gt;
</pre>
</div>

(3) Modify the Flash.sh script to support NVMe SSD and flash the device

Select the corresponding configuration file

<div style={{backgroundColor: '#f0f0f0', padding: '10px'}}>
<pre>
$ cd Linux_for_Tegra/tools/kernel_flash
$ sudo ./flash.sh --no-flash -p "-c bootloader/t186ref/cfg/flash_t234_qspi.xml"  \
  jetson-orin-nano-devkit external
</pre>
</div>

Flash the device

<div style={{backgroundColor: '#f0f0f0', padding: '10px'}}>
<pre>
$ cd Linux_for_Tegra/tools/kernel_flash/images
$ sudo ../../flash.sh -r -k A_cpu-bootloader jetson-orin-nano-devkit nvme0n1p1
</pre>
</div>

After completion, the device will restart and boot into the NVIDIA Jetson Linux system.

