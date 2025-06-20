---
sidebar_position: 3
---

# Application Notes

## 1. Overview

<div className="row">
  <div className="col col--12">
    The carrier board has two Gigabit RJ45 network interfaces, one is the core module's built-in Gigabit network, and the other is PCIex1 expansion using the Realtek RTL8111 chip. Network bandwidth and packet loss test results are as follows:
  </div>
</div>

## 2. Functional Applications

### 2.1 Network Port Applications

The carrier board has two Gigabit RJ45 network interfaces, one of which is the core module with its own Gigabit network, and the other is the PCIex1 expansion using the Realtek RTL8111 chip. Test network bandwidth and packet loss, etc. are as follows:

#### 2.1.1 Testing Tools

iperf or iperf3 (Windows or Linux)

```bash
sudo apt-get install iperf
```

#### 2.1.2 Test network bandwidth

Stable operation bandwidth up to 940Mbits/sec

PC computer (IP: 192.168.1.195)
Carrier machine (IP: 192.168.1.159)

PC computer running as server:
```bash
iperf -s -i 2 -w 2m
```

Carrier board running as client:
```bash
iperf -c 192.168.1.2 -i 2 -w 2m -t 60
```

Carrier board running as server:
```bash
iperf -s -i 2 -w 2m
```

PC computer running as client:
```bash
iperf -c 192.168.1.159 -i 2 -w 2m -t 60
```

#### 2.1.3 Test jitter and packet loss rate

Carrier board running as server:
```bash
iperf -s -u -i 2
```

PC computer running as client:
```bash
iperf -c 192.168.1.159 -i 2 -w 2m -u -b 200m -t60
```

### 2.2 4G Applications

4G module (example: Mobile Farms EC20 module)

The USB device number is Bus 001 Device 005: ID 2c7c:0125

The 4G module uses ppp0 dialing method, you can follow the steps below to complete the dialing setup:

1. After inserting the 4G module and 4G SIM card, click on "Network Settings" in the top right corner of the Ubuntu desktop
2. Select "Mobile Broadband off" in the drop-down box
3. Select connect from the expanded options
4. After the installation prompt, select next to proceed
5. When you see connect, the dialing setup is complete

In the command line, you can use `ifconfig` to verify that ppp0 has been assigned an IP successfully, indicating you can perform Internet operations.

### 2.3 5G Applications

5G module (example: Mobile Far RM500U-CN module)

USB device number is Bus 002 Device 004: ID 2c7c:0800

The dial-up application adopts the dial-up tool provided by Mobile Farms (Quectel_QConnectManager_Linux_V1.6.4, which supports automatic replay after disconnection; if other modules are used, you need to contact the 5G supplier to provide relevant tools)

```bash
$ unzip Quectel_QConnectManager_Linux_V1.6.4.zip
$ cd Quectel_QConnectManager_Linux_V1.6.4
$ make
$ sudo ./quectel-CM
```

### 2.4 WIFI Applications

The carrier board has built-in USB WIFI module (brand: BILIAN), BILIAN: BL8821CU with Realtek RTL8821CU chip or BILIAN: BL8822CU with Realtek RTL8822CU chip. The specification of these two WIFI modules can be obtained by contacting technical support.

USB device number:
Bus 001 Device 003: ID 0bda:c820 Realtek Semiconductor Corp.

### 2.5 20Pin Multi-function Interface

| Pins  | Function | | Pins  | Function |
|-------|----------|-|-------|----------|
| Pin1  | RS485A   | | Pin2  | Isolated DO/460 |
| Pin3  | RS485B   | | Pin4  | Isolation DO/459 |
| Pin5  | GND      | | Pin6  | Isolated GND |
| Pin7  | RS232_TX | | Pin8  | Isolated DI/465 |
| Pin9  | RS232_RX | | Pin10 | Isolated DI/458 |
| Pin11 | GND      | | Pin12 | GND |
| Pin13 | NX_CAN_L | | Pin14 | SPI_CAN_L |
| Pin15 | NX_CAN_H | | Pin16 | SPI_CAN_H |
| Pin17 | GPIO12   | | Pin18 | GND |
| Pin19 | GPIO13   | | Pin20 | 5V/non-isolated |

### 2.6 Serial RS232/RS485 Signal Definition

#### 2.6.1 Signal Definition

| Interface Name / Device Node | PHD2.0 Pin Number | Signal Definition | Interface Description                |
|-----------------------------|-------------------|-------------------|--------------------------------------|
| UART1 /dev/ttyTHS0          | 1                 | RS485_A           | UART0_TXD sends RS485 level          |
| UART1 /dev/ttyTHS0          | 3                 | RS485_B           | UART0_RXD receives RS485 level       |
| UART1 /dev/ttyTHS0          | 5                 | GND               | Ground                               |
| UART2 /dev/ttyUSB0          | 7                 | RS232 TX          | RS232 transmit, USB to RS232         |
| UART2 /dev/ttyUSB0          | 9                 | RS232 RX          | RS232 receive, USB to RS232          |
| UART2 /dev/ttyUSB0          | 11                | GND               | Ground                               |

#### 2.6.2 UART interface configuration method

Open the corresponding device node under the /dev/ directory and set the baud rate, stop bits, parity bits, data bits, etc. You can use the stty command to configure the serial port parameters. See the stty command description for details.

Command example:
```bash
$ sudo stty -F /dev/ttyTHS<XXX> speed 115200 cs8 -parenb -cstopb -echo
```

Output data testing:
```bash
$ sudo echo "uart debug" > /dev/ttyTHS<XXX>
```

Open a new terminal and use the following command to receive input data:
```bash
$ sudo cat /dev/ttyTHS<XXX>
```

### 2.7 Camera Sync IO synchronization signal definition

| Interface Name | PHD2.0 pin number | Signal Definition | Interface Description |
|----------------|-------------------|-------------------|----------------------|
| Sync in1 sync interface | 17 | GPIO13 (NO: 419) | 9296 Sync in signal |
| Sync in2 sync interface | 19 | GPIO12 (NO: 321) | 96712 Sync in signal |

Fixed frequency signal can be input to trigger the GMSL operation.

### 2.8 CAN interface signal definition

#### 2.8.1 Signal Definition

| Interface Name | PHD2.0 pin number | Signal Definition | Interface Description |
|----------------|-------------------|-------------------|----------------------|
| CANL | 13 | NX_CAN_L | NX_CAN_L terminal |
| CANH | 15 | NX_CAN_H | NX_CAN_H terminal |
| CAN_L | 14 | CAN_FD_L | SPI to CAN_FD_L terminal |
| CAN_H | 16 | CAN_FD_H | SPI to CAN_FD_H terminal |
| Total GND | 5/11/12/18 | GND | Earth Signal |

Notes:
- CANL/H is the CAN controller that comes with the NX module
- CAN_L/H for SPI to CAN controller (chip is MCP2518FD) CAN FD support
- CAN device specific use method, refer to https://github.com/linux-can/can-utils cansend.c and candump.c

#### 2.8.2 Shell script test commands
```bash
$ sudo modprobe can
$ sudo modprobe can_raw
$ sudo modprobe mttcan
$ sudo insmod /lib/modules/$(uname -r)/kernel/drivers/net/can/spi/mcp25xxfd.ko
$ sudo ip link set can0 type can bitrate 200000 sjw 4 berr-reporting on loopback off
$ sudo ip link set up can0
$ sudo cansend can0 12345#abcdeabcde
$ sudo candump can0
$ sudo ip -details -statistics link show can0
```

#### 2.8.3 CAN FD configuration
```bash
$ sudo modprobe can
$ sudo modprobe can_raw
$ sudo modprobe mttcan
$ sudo insmod /lib/modules/$(uname -r)/kernel/drivers/net/can/spi/mcp25xxfd.ko
$ sudo ip link set can0 type can bitrate 200000 sjw 4 dbitrate 1000000 dsjw 4 berr-reporting on fd on
$ sudo ip link set up can0
$ sudo cansend can0 321##011
```

#### 2.8.4 The difference between CAN FD and CAN 2.0
```bash
$ sudo ip link set can0 type can bitrate 200000 dbitrate 1000000 berr-reporting on fd on
```

Where bitrate is the baud rate in CAN2.0 mode; dbitrate is the baud rate in CAN FD mode. According to the official documentation, this value can be configured up to 5M, general applications are best to use 2M.

```bash
$ sudo cansend can0 321##011
```

In the transmit command, there is an extra # between id and data, and the first byte (0) after ## is the value of canfd_frame.flags, ranging from 0 to F; the byte (11) after canfd_frame.flags is the first data, and up to 64 bytes can be transmitted at one time.

### 2.9 GPIO interface signal definition

GPIOs with isolated power supply method, 2 of them are input IO only (Pin2/Pin4) and 2 are used as output IO (Pin8/Pin10)

| Interface Name | PHD2.0 pin number | Signal Definition | Interface Description |
|----------------|-------------------|-------------------|----------------------|
| GPIO_222_3V3 | 2 | GPIO222_3V3 | GPIO0222(gpio460) |
| GPIO_220_3V3 | 4 | GPIO220_3V3 | GPIO0220(gpio459) |
| GPIO_197_3V3 | 8 | GPIO197_3V3 | GPIO0197(gpio465) |
| GPIO_226_3V3 | 10 | GPIO226_3V3 | GPIO0226(gpio458) |

An example of the use of the GPIO interface is as follows. Please replace gpio_num with the GPIO node designation you want to adjust:

```bash
# Switch to root user
$ sudo su -
$ cd /sys/class/gpio
$ echo gpio_num > export
```

Note: On JetPack5.x, export gpio_num generates a yyyy name instead of the pre-JetPack4.x gpionum form

```bash
# Set to high level (DO)
$ echo 1 > /sys/class/gpio/xxxx/value

# Set to low (DO)
$ echo 0 > /sys/class/gpio/xxxx/value

# Read data (DI)
$ cat /sys/class/gpio/xxxx/value

# Set the input and output direction (DIRECTION)
$ echo in > /sys/class/gpio/xxxx/direction
$ echo out > /sys/class/gpio/xxx/direction
```

If you need to keep the configuration after shutdown, you can write the above commands to the /etc/rc.local file.

### 2.10 Fan FAN

Fan speed automatically adjusted according to temperature.

### 2.11 TF card applications

```bash
$ sudo fdisk -l /dev/mmcblk1
$ ls /dev/mmcblk*
```

### 2.12 M.2 SSD Applications

SSD with M.2 Key M interface NVMe (communication protocol is PCIe x4, the interface is located on the back of the carrier board)

#### Setting the M.2 Key M SSD as the file system disk

This solution is a third-party solution and its stability is not guaranteed. The NVMe SSD drive can be used as general storage space or as a file system disk (rootfs and user area), i.e., the system boots up through EMMC (the DTB and kernel Image files are still stored in EMMC). After booting, the kernel, file system, installed third-party tools, and user data's default storage is on the SSD.

#### Step 1: Prepare the SSD and format it to GPT format

1. Prepare M.2 Key M SSD (2280 size specification)
2. Open the Disks tool that comes with Ubuntu, find the SSD hard drive you installed
3. Press "Ctrl+F" to quickly format it
4. Follow these steps to avoid errors that could prevent the device from entering the desktop system:
   - Open the Disks tool
   - Find the installed SSD and press "CTRL+F" to format the drive
   - Click Format
   - Enter the user password (case sensitive)
   - Configure partition size as needed
   - Give the partition a name, leave other options as default and click create
   - Click the triangle symbol to mount the partition

#### Step 2: Convert system disk to EMMC built-in system

```bash
$ git clone https://github.com/jetsonhacks/rootOnNVMe.git
```

Note: If git fails, you can go to the website and download the zip file and copy it to the device to unzip it

```bash
$ cd rootOnNVMe
$ ./copy-rootfs-SSD.sh # this takes a little longer, please be patient
$ ./setup-service.sh
$ sudo reboot
```

#### Step 3: Verification

Reboot the machine, open a terminal and type `df -h` to verify if the hard disk device /dev/nvme0n1p1 is mounted on the /root directory.

### 2.13 GMSL Camera Application

GMSL camera application interface is based on V4L2 (Video for Linux), which provides a set of unified interface specifications for drivers and applications to facilitate application development.

#### GMSL Physical Interface Features

1. Support the signal transmission of up to 15 meters coaxial cable, which can be extended by using Moriyun repeater.
2. Support different serializer cameras with output resolutions of 720p, 1080p, 4K, 8M and other resolutions.

| Mode | Explanation | Remarks |
|------|-------------|---------|
| Self-triggered | The camera is not controlled by the trigger signal, and outputs images after powering up | This mode is generally supported by all cameras. The camera works in this mode when no external trigger signal is provided. |
| Synchronous Trigger | A camera controlled by a trigger signal that outputs an image and simultaneously shutters when triggered | Camera firmware support is required. Please check with the manufacturer when purchasing. Also requires an external trigger signal. |
