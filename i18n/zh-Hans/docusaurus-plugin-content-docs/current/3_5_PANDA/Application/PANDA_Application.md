---
sidebar_position: 1
---

# PANDA Serial PG2 应用

## 1. 设备连接与启动
### 1.1 设备连接
使用 USB 3.0 线缆将 SENSING 摄像头连接到 PANDA Serial PG2 的 cam1 接口，然后按照连接示意图连接到 PC。可使用 SensingCaptureV3 软件工具显示摄像头图像并进行摄像头升级。
<div style={{textAlign: 'center', marginBottom: '2rem'}}>
  <img src="https://sgword-service.oss-cn-heyuan.aliyuncs.com/wiki-images/3_5_PANDA/PANDA_Application1.png" alt="PANDA_应用" style={{maxWidth: '100%', height:'auto'}} />
  <p style={{fontSize: '0.9em', marginTop: '0.5rem', color: 'var(--ifm-color-gray-700)'}}>
    PANDA Serial PG2 安装连接图
  </p>
</div>

### 1.2 硬件环境检查 (Windows 平台)
PANDA Serial PG2 遵循 USB-IF 定义的 UVC 协议规范，可即插即用（使用 Windows 提供的 UVC 摄像头驱动）。需要注意的是，PG2 仅支持 USB3.0 接口。将 PG2 连接到 PC 的 USB 3.0 接口后，可在 Windows 设备管理器中看到该设备。
打开电脑设备管理器。当 <strong>CAM UPDATE</strong> 端口连接到电脑后，可在设备管理器的摄像头项目中看到 "SENSING_USB3_CAMERA" 设备项，并在通用串行总线控制器项目中看到 FT4222 设备项。
<div style={{textAlign: 'center', marginBottom: '1.5rem'}}>
  <img src="https://sgword-service.oss-cn-heyuan.aliyuncs.com/wiki-images/3_5_PANDA/Aplication/figure2.png" alt="SensingCaptureV3 启动界面" style={{maxWidth: '45%', height:'auto', border: '1px solid #ddd'}} />
  <p style={{fontSize: '0.9em', marginTop: '0.5rem', color: 'var(--ifm-color-gray-700)'}}>
    SensingCaptureV3 安装说明
  </p>
</div>

<div style={{textAlign: 'center', marginBottom: '1.5rem'}}>
  <img src="https://sgword-service.oss-cn-heyuan.aliyuncs.com/wiki-images/3_5_PANDA/Aplication/figure1_3.png" alt="SensingCaptureV3 启动界面" style={{maxWidth: '100%', height:'auto', border: '1px solid #ddd'}} />
  <p style={{fontSize: '0.9em', marginTop: '0.5rem', color: 'var(--ifm-color-gray-700)'}}>
    硬件环境检查
  </p>
</div>

### 1.3 软件安装

**下载链接:** https://github.com/SENSING-Technology/SensingCaptureV3
<div style={{textAlign: 'center', marginBottom: '1.5rem'}}>
  <img src="https://sgword-service.oss-cn-heyuan.aliyuncs.com/wiki-images/3_5_PANDA/Aplication/figure1_1.png" alt="SensingCaptureV3 下载" style={{maxWidth: '100%', height:'auto', border: '1px solid #ddd'}} />
  <p style={{fontSize: '0.9em', marginTop: '0.5rem', color: 'var(--ifm-color-gray-700)'}}>
    SensingCaptureV3 下载
  </p>
</div>

<!-- 下载 SensingCaptureV3 to your PC, extract the files, and locate SensingCaptureV3.exe. Double-click the left mouse button to open it, and the startup interface will appear as shown in Figure 1. The upper left corner displays the control panel, while the middle area shows the region. -->

下载 SensingCaptureV3 后，按照配图中的步骤 1-3 安装并使用该软件。
<div style={{textAlign: 'center', marginBottom: '1.5rem'}}>
  <img src="https://sgword-service.oss-cn-heyuan.aliyuncs.com/wiki-images/3_5_PANDA/Aplication/figure1_2.png" alt="SensingCaptureV3 启动界面" style={{maxWidth: '100%', height:'auto', border: '1px solid #ddd'}} />
  <p style={{fontSize: '0.9em', marginTop: '0.5rem', color: 'var(--ifm-color-gray-700)'}}>
    SensingCaptureV3 安装说明
  </p>
</div>

<!-- If the software fails to start, please try printing and displaying a complete error message, or check if the software directory contains the packages folder with the required VC201XRedist redistributable packages. -->

<div style={{textAlign: 'center', marginBottom: '1.5rem'}}>
  <img src="https://sgword-service.oss-cn-heyuan.aliyuncs.com/wiki-images/3_5_PANDA/Aplication/figure1.png" alt="SensingCaptureV3 启动界面" style={{maxWidth: '100%', height:'auto', border: '1px solid #ddd'}} />
  <p style={{fontSize: '0.9em', marginTop: '0.5rem', color: 'var(--ifm-color-gray-700)'}}>
    <strong>图 1：</strong> SensingCaptureV3 启动界面，显示主控制面板和显示区域
  </p>
</div>



<!-- ### 1.2 设备连接

Connect the device according to Figure 2's connection diagram. Connect the camera to 1 路摄像头 port, which requires a CAM port cable, FT4222 port, and USB data cable.

<div style={{textAlign: 'center', marginBottom: '1.5rem'}}>
  <img src="https://raw.githubusercontent.com/1214658495/myWikiFiles/main/Data_collection/3_5_PANDA/Aplication/figure2.png" alt="PANDA PG2 设备连接 Diagram" style={{maxWidth: '60%', height:'auto', border: '1px solid #ddd'}} />
  <p style={{fontSize: '0.9em', marginTop: '0.5rem', color: 'var(--ifm-color-gray-700)'}}>
    <strong>图 2：</strong> PANDA PG2 device connection diagram showing FT4222 port, camera connection port, USB data cable, and power interface
  </p>
</div> -->

### 1.4 摄像头启动操作

#### 1.4.1 启动 SensingCaptureV3

在设备列表中，设备编号和控制面板会显示当前已连接摄像头的信息。

<div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '1.5rem', gap: '1rem'}}>
  <div style={{flex: 1, textAlign: 'center'}}>
    <img src="https://sgword-service.oss-cn-heyuan.aliyuncs.com/wiki-images/3_5_PANDA/Aplication/figure3.png" alt="设备列表面板" style={{maxWidth: '100%', height:'auto', border: '1px solid #ddd'}} />
    <p style={{fontSize: '0.9em', marginTop: '0.5rem', color: 'var(--ifm-color-gray-700)'}}>
      <strong>图 3：</strong> 设备列表显示已连接摄像头信息
    </p>
  </div>
  <div style={{flex: 1, textAlign: 'center'}}>
    <img src="https://sgword-service.oss-cn-heyuan.aliyuncs.com/wiki-images/3_5_PANDA/Aplication/figure4.png" alt="摄像头控制面板" style={{maxWidth: '100%', height:'auto', border: '1px solid #ddd'}} />
    <p style={{fontSize: '0.9em', marginTop: '0.5rem', color: 'var(--ifm-color-gray-700)'}}>
      <strong>图 4：</strong> 包含配置选项的摄像头控制面板
    </p>
  </div>
</div>

#### 1.4.2 添加配置

在设备信息和控制面板中，点击“设备控制”，按图 4 所示选择“添加配置”。系统会显示配置文件，可通过两种方式添加：

**方法 1：**
在配置文件栏中点击三个点，在下拉菜单中选择摄像头对应的配置文件，如图 5 所示。

**方法 2：**
在搜索模式中输入配置文件名的部分信息。配置文件命名规则为：产品型号_分辨率@帧率_图像格式，可输入 ISX031 等部分信息，如图 6 所示。

<div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '1.5rem', gap: '1rem'}}>
  <div style={{flex: 1, textAlign: 'center'}}>
    <img src="https://sgword-service.oss-cn-heyuan.aliyuncs.com/wiki-images/3_5_PANDA/Aplication/figure5.png" alt="配置文件选择" style={{maxWidth: '100%', height:'auto', border: '1px solid #ddd'}} />
    <p style={{fontSize: '0.9em', marginTop: '0.5rem', color: 'var(--ifm-color-gray-700)'}}>
      <strong>图 5：</strong> 配置文件选择下拉菜单
    </p>
  </div>
  <div style={{flex: 1, textAlign: 'center'}}>
    <img src="https://sgword-service.oss-cn-heyuan.aliyuncs.com/wiki-images/3_5_PANDA/Aplication/figure6.png" alt="按名称搜索配置" style={{maxWidth: '100%', height:'auto', border: '1px solid #ddd'}} />
    <p style={{fontSize: '0.9em', marginTop: '0.5rem', color: 'var(--ifm-color-gray-700)'}}>
      <strong>图 6：</strong> 通过输入部分名称搜索配置文件（例如 ISX031）
    </p>
  </div>
</div>

选择配置文件后，点击“确认”。系统会自动加载配置文件详细信息并完成加载流程，随后显示图 7 所示信息。

<div style={{textAlign: 'center', marginBottom: '1.5rem'}}>
  <img src="https://sgword-service.oss-cn-heyuan.aliyuncs.com/wiki-images/3_5_PANDA/Aplication/figure7.png" alt="配置加载完成" style={{maxWidth: '100%', height:'auto', border: '1px solid #ddd'}} />
  <p style={{fontSize: '0.9em', marginTop: '0.5rem', color: 'var(--ifm-color-gray-700)'}}>
    <strong>图 7：</strong> 配置文件加载成功，并显示详细摄像头参数
  </p>
</div>

#### 1.4.3 启动摄像头

点击左上角“启动摄像头”。软件将在中间区域显示实时采集图像，如图 8 所示。

<div style={{textAlign: 'center', marginBottom: '1.5rem'}}>
  <img src="https://sgword-service.oss-cn-heyuan.aliyuncs.com/wiki-images/3_5_PANDA/Aplication/figure8.png" alt="摄像头实时预览" style={{maxWidth: '100%', height:'auto', border: '1px solid #ddd'}} />
  <p style={{fontSize: '0.9em', marginTop: '0.5rem', color: 'var(--ifm-color-gray-700)'}}>
    <strong>图 8：</strong> 实时摄像头画面，左侧显示控制面板
  </p>
</div>

## 2. 功能说明

### 2.1 录像功能

#### 2.1.1 开始录像

打开摄像头后，界面如图 9 所示。点击“开始录像”，系统会自动创建视频录制存储路径。可根据个人需求设置合理的存储路径。此时界面会显示“Recording”提示，表示正在录像。录制视频文件以 AVI（Audio Video Interleave）格式保存，扩展名为 .avi，录制格式为 Motion-JPEG（MJPEG）。

<div style={{textAlign: 'center', marginBottom: '1.5rem'}}>
  <img src="https://sgword-service.oss-cn-heyuan.aliyuncs.com/wiki-images/3_5_PANDA/Aplication/figure9.png" alt="开始录像界面" style={{maxWidth: '100%', height:'auto', border: '1px solid #ddd'}} />
  <p style={{fontSize: '0.9em', marginTop: '0.5rem', color: 'var(--ifm-color-gray-700)'}}>
    <strong>图 9：</strong> 摄像头界面高亮显示“开始录像”按钮，并显示实时视频流
  </p>
</div>

#### 2.1.2 停止录像

点击“停止录像”，界面如图 10 所示，录像会立即停止。可在已设置的存储路径中找到录制视频。

<div style={{textAlign: 'center', marginBottom: '1.5rem'}}>
  <img src="https://sgword-service.oss-cn-heyuan.aliyuncs.com/wiki-images/3_5_PANDA/Aplication/figure10.png" alt="停止录像界面" style={{maxWidth: '100%', height:'auto', border: '1px solid #ddd'}} />
  <p style={{fontSize: '0.9em', marginTop: '0.5rem', color: 'var(--ifm-color-gray-700)'}}>
    <strong>图 10：</strong> 界面显示“停止录像”选项，并高亮文件目录
  </p>
</div>

### 2.2 截图功能

打开摄像头并点击“Snapshot”，界面如图 11 所示。截图完成后，文件会立即保存到软件安装目录下的 pictures 文件夹中，如图 12 所示。

<div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '1.5rem', gap: '1rem'}}>
  <div style={{flex: 1, textAlign: 'center'}}>
    <img src="https://sgword-service.oss-cn-heyuan.aliyuncs.com/wiki-images/3_5_PANDA/Aplication/figure11.png" alt="截图功能" style={{maxWidth: '100%', height:'auto', border: '1px solid #ddd'}} />
    <p style={{fontSize: '0.9em', marginTop: '0.5rem', color: 'var(--ifm-color-gray-700)'}}>
      <strong>图 11：</strong> 摄像头界面，截图功能已启用
    </p>
  </div>
  <div style={{flex: 1, textAlign: 'center'}}>
    <img src="https://sgword-service.oss-cn-heyuan.aliyuncs.com/wiki-images/3_5_PANDA/Aplication/figure12.png" alt="截图文件位置" style={{maxWidth: '100%', height:'auto', border: '1px solid #ddd'}} />
    <p style={{fontSize: '0.9em', marginTop: '0.5rem', color: 'var(--ifm-color-gray-700)'}}>
      <strong>图 12：</strong> 文件目录显示保存在 pictures 文件夹中的截图
    </p>
  </div>
</div>

### 2.3 图像组件测试与更新

#### 2.3.1 确认连接成功

打开摄像头组件，并通过 USB 数据线连接摄像头。确保 Type C 线缆连接完整，如图 2 所示。

#### 2.3.2 选择 ISP 类型与固件组件

测试过程中，点击工具中的摄像头组件升级按钮。选择所需摄像头传感器或 ISP 类型，并继续进行固件升级。如需获取摄像头型号 SG3-ISX031C-G2A-H190XA，请参考 ISP 类型选择流程。

对于 Sony 摄像头，点击测量按钮。需要添加对应组件以获取版本号，操作步骤如图 13 所示。测量完成后记录版本号。

<div style={{textAlign: 'center', marginBottom: '1.5rem'}}>
  <img src="https://sgword-service.oss-cn-heyuan.aliyuncs.com/wiki-images/3_5_PANDA/Aplication/figure13.png" alt="Sony 摄像头 组件 Configuration" style={{maxWidth: '100%', height:'auto', border: '1px solid #ddd'}} />
  <p style={{fontSize: '0.9em', marginTop: '0.5rem', color: 'var(--ifm-color-gray-700)'}}>
    <strong>图 13：</strong> Sony 摄像头组件配置界面，显示测量与版本检测选项
  </p>
</div>

#### 2.3.3 更新组件

更新流程包括以下步骤：

**(1) 添加所需更新组件**

**(2) 选择 IIC 功能和 MCU**

**(3) 点击左侧健康更新按钮**

具体操作请参考图 14。组件完成后，点击读取版本号。如果版本已成功更新，则表示组件升级成功，如图 15 所示。

<div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '1.5rem', gap: '1rem'}}>
  <div style={{flex: 1, textAlign: 'center'}}>
    <img src="https://sgword-service.oss-cn-heyuan.aliyuncs.com/wiki-images/3_5_PANDA/Aplication/figure14.png" alt="组件 Update 接口" style={{maxWidth: '100%', height:'auto', border: '1px solid #ddd'}} />
    <p style={{fontSize: '0.9em', marginTop: '0.5rem', color: 'var(--ifm-color-gray-700)'}}>
      <strong>图 14：</strong> 组件更新界面，显示配置选项和更新控件
    </p>
  </div>
  <div style={{flex: 1, textAlign: 'center'}}>
    <img src="https://sgword-service.oss-cn-heyuan.aliyuncs.com/wiki-images/3_5_PANDA/Aplication/figure15.png" alt="更新完成状态" style={{maxWidth: '100%', height:'auto', border: '1px solid #ddd'}} />
    <p style={{fontSize: '0.9em', marginTop: '0.5rem', color: 'var(--ifm-color-gray-700)'}}>
      <strong>图 15：</strong> 更新完成状态，显示组件升级成功
    </p>
  </div>
</div>

### 2.4 寄存器配置

在设备信息和控制面板中操作，以下以 SG3S-ISX031C-GMSL2F-H190XA 为例：

#### 2.4.1 配置 I2C 地址

根据产品规格，通过硬件配置页面查看产品 I2C 地址。例如 96717F 默认输入 8-bit 地址为 0x80，内部需要输入 I2C 地址 0x80，该地址为 8-bit I2C 地址。

#### 2.4.2 选择存储深度

根据需求选择对应存储深度。目前支持 8bit 和 16bit 格式。96717F 的存储深度为 16bit，可查看产品规格、使用硬件配置页面，或参考 96717F DATASHEET。

#### 2.4.3 配置存储地址

根据所需存储地址，在文本框中输入。例如配置存储地址为 0X02D3，则输入 02D3。

按顺序读取时：在读写序列中选择所需序列。可以选择中间任意位置或低位优先。MSB 表示高位优先，LSB 表示低位优先。本设置为 MSB。

#### 2.4.4 选择存储深度 值

在存储深度值选择中，选择 8-bit 或 16-bit 作为内部存储深度值。对于 96717F，该值为 8-bit。

#### 2.4.5 输入操作存储值

在存储值字段中输入所需值。这里应为 0X02D3，输入 0x10。实际含义为将 96717F GPIO 7 用作输出并拉高。

#### 2.4.6 读操作

点击读取按钮。如果操作成功，将显示图 16 所示的数值。绿色文本 `<read successful> 80, 02d3, 83` 表示读取成功；红色文本 `<read fail> 80, 02d3, err` 表示读取失败。

#### 2.4.7 写操作

点击写入按钮，将该值发送到存储位置，如图 17 所示。绿色文本 `<write successful> 80, 02d3, 10` 表示写入成功；红色文本 `<write fail> 80, 02d3, 10` 表示写入失败。

<div style={{textAlign: 'center', marginBottom: '1.5rem'}}>
  <img src="https://sgword-service.oss-cn-heyuan.aliyuncs.com/wiki-images/3_5_PANDA/Aplication/figure16.png" alt="寄存器读写接口" style={{maxWidth: '100%', height:'auto', border: '1px solid #ddd'}} />
  <p style={{fontSize: '0.9em', marginTop: '0.5rem', color: 'var(--ifm-color-gray-700)'}}>
    <strong>图 16：</strong> 寄存器读写界面，显示 I2C 地址、存储深度和操作状态信息
  </p>
</div>

### 2.5 外部触发

按照图 2 的连接方式，如图 17 所示，P2 引脚触发输入会将外部触发信号传输到 MAX9296 的 MP7 引脚。外部触发输入支持 1.8V 或 3.3V 电平。使用外部触发时，需要添加图 18 所示的外部触发状态；供电也采用外部触发。

<div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '1.5rem', gap: '1rem'}}>
  <div style={{flex: 1, textAlign: 'center'}}>
    <img src="https://sgword-service.oss-cn-heyuan.aliyuncs.com/wiki-images/3_5_PANDA/Aplication/figure17.png" alt="外部触发硬件连接" style={{maxWidth: '100%', height:'auto', border: '1px solid #ddd'}} />
    <p style={{fontSize: '0.9em', marginTop: '0.5rem', color: 'var(--ifm-color-gray-700)'}}>
      <strong>图 17：</strong> 外部触发硬件连接，显示 P2 引脚和线缆配置
    </p>
  </div>
  <div style={{flex: 1, textAlign: 'center'}}>
    <img src="https://sgword-service.oss-cn-heyuan.aliyuncs.com/wiki-images/3_5_PANDA/Aplication/figure18.png" alt="外部触发软件配置" style={{maxWidth: '100%', height:'auto', border: '1px solid #ddd'}} />
    <p style={{fontSize: '0.9em', marginTop: '0.5rem', color: 'var(--ifm-color-gray-700)'}}>
      <strong>图 18：</strong> 外部触发软件配置界面，显示触发模式设置
    </p>
  </div>
</div>

### 2.6 读取电流

当摄像头连接到 UVC 盒子时，可通过读取电流估算摄像头功耗。点击按钮获取电流，即可查看摄像头当前状态，如图 19 所示。

<div style={{textAlign: 'center', marginBottom: '1.5rem'}}>
  <img src="https://sgword-service.oss-cn-heyuan.aliyuncs.com/wiki-images/3_5_PANDA/Aplication/figure19.png" alt="电流读取界面" style={{maxWidth: '100%', height:'auto', border: '1px solid #ddd'}} />
  <p style={{fontSize: '0.9em', marginTop: '0.5rem', color: 'var(--ifm-color-gray-700)'}}>
    <strong>图 19：</strong> 电流读取界面，显示摄像头功耗测量值
  </p>
</div>

### 2.7 摄像头内部参数读取

如果摄像头具备内部参数标准，可使用读取内部参数功能读取摄像头内部参数输出。

点击工具栏，选择 OTP 烧录。根据 OTP 类型界面选择摄像头类型并选择对应项，如图 20 所示。

<div style={{textAlign: 'center', marginBottom: '1.5rem'}}>
  <img src="https://sgword-service.oss-cn-heyuan.aliyuncs.com/wiki-images/3_5_PANDA/Aplication/figure20.png" alt="摄像头 OTP Type Selection 接口" style={{maxWidth: '100%', height:'auto', border: '1px solid #ddd'}} />
  <p style={{fontSize: '0.9em', marginTop: '0.5rem', color: 'var(--ifm-color-gray-700)'}}>
    <strong>图 20：</strong> 摄像头 OTP 类型选择界面，显示 unknown、AR0147、IMX390002、IMX412、ZEPROM、OV9281、OV9734 等可选摄像头类型
  </p>
</div>

选择完成后点击确认，会出现图 21 所示界面。点击读取，等待图 22 出现，即可显示内部参数数据。

<div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '1.5rem', gap: '1rem'}}>
  <div style={{flex: 1, textAlign: 'center'}}>
    <img src="https://sgword-service.oss-cn-heyuan.aliyuncs.com/wiki-images/3_5_PANDA/Aplication/figure21.png" alt="OTP 参数读取界面" style={{maxWidth: '100%', height:'auto', border: '1px solid #ddd'}} />
    <p style={{fontSize: '0.9em', marginTop: '0.5rem', color: 'var(--ifm-color-gray-700)'}}>
      <strong>图 21：</strong> OTP 参数读取界面，高亮显示读取按钮
    </p>
  </div>
  <div style={{flex: 1, textAlign: 'center'}}>
    <img src="https://sgword-service.oss-cn-heyuan.aliyuncs.com/wiki-images/3_5_PANDA/Aplication/figure22.png" alt="OTP 参数数据显示" style={{maxWidth: '100%', height:'auto', border: '1px solid #ddd'}} />
    <p style={{fontSize: '0.9em', marginTop: '0.5rem', color: 'var(--ifm-color-gray-700)'}}>
      <strong>图 22：</strong> OTP 参数数据显示界面，显示摄像头详细内部参数
    </p>
  </div>
</div>

### 2.8 PANDA 盒子固件更新

首先需要安装驱动。驱动位于用户目录下的 3rdparty/DriverInstallerCyUSB3。

#### 2.8.1 硬件连接与 Boot 模式设置

**步骤 1：** 如图 23 所示，将设备放置在有四个按键的位置，按住按键（boot mode），然后将 USB 3.0 接口连接到电脑（确保电脑 USB 接口支持相关底层技术）。

<div style={{textAlign: 'center', marginBottom: '1.5rem'}}>
  <img src="https://sgword-service.oss-cn-heyuan.aliyuncs.com/wiki-images/3_5_PANDA/Aplication/figure23.png" alt="PANDA 盒子硬件连接" style={{maxWidth: '100%', height:'auto', border: '1px solid #ddd'}} />
  <p style={{fontSize: '0.9em', marginTop: '0.5rem', color: 'var(--ifm-color-gray-700)'}}>
    <strong>图 23：</strong> PANDA 盒子硬件图，显示 CAM UPDATE 接口、USB3.0 连接和 boot 按键位置
  </p>
</div>

**步骤 2：** 打开对应位置，在左侧设置中选择设备升级级别，如图 24 所示。

<div style={{textAlign: 'center', marginBottom: '1.5rem'}}>
  <img src="https://sgword-service.oss-cn-heyuan.aliyuncs.com/wiki-images/3_5_PANDA/Aplication/figure24.png" alt="设备升级设置" style={{maxWidth: '100%', height:'auto', border: '1px solid #ddd'}} />
  <p style={{fontSize: '0.9em', marginTop: '0.5rem', color: 'var(--ifm-color-gray-700)'}}>
    <strong>图 24：</strong> SensingCapture 软件界面，显示包含固件更新选项的设备升级设置
  </p>
</div>

**步骤 3：** 识别到设备并打开升级模式后，可在左侧导出界面中导出 Cypress FX3。

#### 2.8.2 USB Control Center 操作

**步骤 4：** 如图 26 所示，打开升级界面，选择 I2C EEPROM。选择后界面会弹出选择窗口，选择所需升级固件并点击打开。

<div style={{textAlign: 'center', marginBottom: '1.5rem'}}>
  <img src="https://sgword-service.oss-cn-heyuan.aliyuncs.com/wiki-images/3_5_PANDA/Aplication/figure25.png" alt="USB BootLoader 设备检测" style={{maxWidth: '100%', height:'auto', border: '1px solid #ddd'}} />
  <p style={{fontSize: '0.9em', marginTop: '0.5rem', color: 'var(--ifm-color-gray-700)'}}>
    <strong>图 25：</strong> USB BootLoader 设备检测界面，显示设备识别和固件更新准备状态
  </p>
</div>

<div style={{textAlign: 'center', marginBottom: '1.5rem'}}>
  <img src="https://sgword-service.oss-cn-heyuan.aliyuncs.com/wiki-images/3_5_PANDA/Aplication/figure26.png" alt="I2C EEPROM 选择界面" style={{maxWidth: '100%', height:'auto', border: '1px solid #ddd'}} />
  <p style={{fontSize: '0.9em', marginTop: '0.5rem', color: 'var(--ifm-color-gray-700)'}}>
    <strong>图 26：</strong> USB Control Center 界面，显示 I2C EEPROM 选择以及 FX3、RAM、I2C EEPROM、SPI FLASH 等固件文件选项
  </p>
</div>

**步骤 5：** 完成后如图 28 所示，等待下载和升级过程完成；当界面显示如图 29 所示的 "Succeeded" 时，表示升级成功。

<div style={{textAlign: 'center', marginBottom: '1.5rem'}}>
  <img src="https://sgword-service.oss-cn-heyuan.aliyuncs.com/wiki-images/3_5_PANDA/Aplication/figure27.png" alt="固件烧录界面" style={{maxWidth: '100%', height:'auto', border: '1px solid #ddd'}} />
  <p style={{fontSize: '0.9em', marginTop: '0.5rem', color: 'var(--ifm-color-gray-700)'}}>
    <strong>图 27：</strong> 固件烧录界面，显示文件选择和烧录选项，并高亮烧录按钮
  </p>
</div>

<div style={{textAlign: 'center', marginBottom: '1.5rem'}}>
  <img src="https://sgword-service.oss-cn-heyuan.aliyuncs.com/wiki-images/3_5_PANDA/Aplication/figure28.png" alt="烧录进度显示" style={{maxWidth: '100%', height:'auto', border: '1px solid #ddd'}} />
  <p style={{fontSize: '0.9em', marginTop: '0.5rem', color: 'var(--ifm-color-gray-700)'}}>
    <strong>图 28：</strong> 烧录进度界面，显示 "Programming of I2C EEPROM in Progress..." 状态信息
  </p>
</div>

<div style={{textAlign: 'center', marginBottom: '1.5rem'}}>
  <img src="https://sgword-service.oss-cn-heyuan.aliyuncs.com/wiki-images/3_5_PANDA/Aplication/figure29.png" alt="烧录成功确认" style={{maxWidth: '100%', height:'auto', border: '1px solid #ddd'}} />
  <p style={{fontSize: '0.9em', marginTop: '0.5rem', color: 'var(--ifm-color-gray-700)'}}>
    <strong>图 29：</strong> 烧录成功确认界面，显示 "Programming of I2C EEPROM Succeeded" 状态信息
  </p>
</div>

### 2.9 Linux 系统配置

在 PANDA 盒子软件包中，默认仅包含 1920*1080 分组。如需添加其他分组，请点击对应分组并配置文本及 Windows 配置文件。

首先获取 Linux 配置程序。

**下载链接:** https://github.com/SENSING-Technology/PandaCtrl

如图 30 所示，在工作区界面可看到 PandaCtrl 文件和 libusb 源文件。在程序文件界面中，确认 ubuntu20.04 系统中存在 libusb 库。如果在其他系统中使用，需要更新 libusb 库，替换生成的文本文件，然后添加配置文本文件对应的程序。

<div style={{textAlign: 'center', marginBottom: '1.5rem'}}>
  <img src="https://sgword-service.oss-cn-heyuan.aliyuncs.com/wiki-images/3_5_PANDA/Aplication/figure30.png" alt="PandaCtrl Workspace 接口" style={{maxWidth: '100%', height:'auto', border: '1px solid #ddd'}} />
  <p style={{fontSize: '0.9em', marginTop: '0.5rem', color: 'var(--ifm-color-gray-700)'}}>
    <strong>图 30：</strong> PandaCtrl 工作区界面，显示 3rdparty、PandaCtrl、profilePath 和 readme.md 目录
  </p>
</div>

打开 PandaCtrl 文件，并在界面中运行 makefile 文件。

<div style={{textAlign: 'center', marginBottom: '1.5rem'}}>
  <img src="https://sgword-service.oss-cn-heyuan.aliyuncs.com/wiki-images/3_5_PANDA/Aplication/figure31.png" alt="PandaCtrl Makefile 接口" style={{maxWidth: '100%', height:'auto', border: '1px solid #ddd'}} />
  <p style={{fontSize: '0.9em', marginTop: '0.5rem', color: 'var(--ifm-color-gray-700)'}}>
    <strong>图 31：</strong> PandaCtrl makefile 界面，显示 include、lib、Makefile 和 src 目录
  </p>
</div>

执行 makefile 后，如果编译成功，会生成多个可执行的 PandaCtrl 文件。

**注意：** 需要安装 gcc 和 make 工具。

部分系统需要安装依赖，例如 ubuntu20.04 需要执行以下命令：

```bash
sudo apt install libudev-dev
sudo apt-get install i2c-tools
```

#### 2.9.1 运行格式与命令执行

**运行格式：** `sudo ./PandaCtrl [configuration file path and name]`

如图 33 所示，运行成功后显示 "Device opened successfully"，表示配置文件已成功加载。

<div style={{textAlign: 'center', marginBottom: '1.5rem'}}>
  <img src="https://sgword-service.oss-cn-heyuan.aliyuncs.com/wiki-images/3_5_PANDA/Aplication/figure32.png" alt="终端命令执行" style={{maxWidth: '100%', height:'auto', border: '1px solid #ddd'}} />
  <p style={{fontSize: '0.9em', marginTop: '0.5rem', color: 'var(--ifm-color-gray-700)'}}>
    <strong>图 32：</strong> 终端界面，显示 PandaCtrl 命令执行和配置文件路径
  </p>
</div>

<div style={{textAlign: 'center', marginBottom: '1.5rem'}}>
  <img src="https://sgword-service.oss-cn-heyuan.aliyuncs.com/wiki-images/3_5_PANDA/Aplication/figure33.png" alt="设备连接成功" style={{maxWidth: '100%', height:'auto', border: '1px solid #ddd'}} />
  <p style={{fontSize: '0.9em', marginTop: '0.5rem', color: 'var(--ifm-color-gray-700)'}}>
    <strong>图 33：</strong> 终端输出显示设备连接成功，并加载配置和详细系统信息
  </p>
</div>

#### 2.9.2 系统兼容性与库要求

加载成功并打开系统打印后，如果摄像头可以正常开启，表示配置成功。如果打印显示颜色不匹配，可参考附带的 UYVY 与 YUYV 格式对应关系。

如图 34 所示，如果需要更新 libusb 库，请在 libusb-1.0.26 编译完成后，使用 libusb/lib/libusb-1.0.a 文件替换 PandaCtrl/lib/libusb-1.0.a。

<div style={{textAlign: 'center', marginBottom: '1.5rem'}}>
  <img src="https://sgword-service.oss-cn-heyuan.aliyuncs.com/wiki-images/3_5_PANDA/Aplication/figure34.png" alt="Libusb 库更新过程" style={{maxWidth: '100%', height:'auto', border: '1px solid #ddd'}} />
  <p style={{fontSize: '0.9em', marginTop: '0.5rem', color: 'var(--ifm-color-gray-700)'}}>
    <strong>图 34：</strong> 终端界面，显示为系统兼容性进行 libusb 库编译和文件替换的过程
  </p>
</div>

**重要说明:**
- 确保 USB 3.0 正确连接以获得最佳性能
- 更新库之前确认系统兼容性
- 关注终端输出，确认设备识别成功
- 如出现显示问题，请检查颜色格式兼容性（UYVY/YUYV）
- 保持配置文件具备正确权限

<!-- ## 3. Adapter 摄像头 Models

When the nearby adapter camera model is not supported, please log in to the official website to get the latest adapter information.

**Official Website:** https://www.sensing-world.com/USB_Converter/ -->
