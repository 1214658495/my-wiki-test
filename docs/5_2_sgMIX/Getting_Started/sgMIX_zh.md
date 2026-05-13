---
sidebar_position: 2
title: Getting Started with sgMIX（中文）
---

# sgMIX 快速入门

## 概述

sgMIX SDK 是一款专为 NVIDIA Jetson 平台设计的综合相机控制开发驱动包，可实现 GMSL 相机系统的无缝集成与精细化控制。它提供了一套完整的工具集，涵盖：
- 图像控制
- ISP 调优
- OTA 固件升级
- IMU 数据采集（S56）
- 双目深度估计（S36）
- 图像畸变校正等功能。

> **📋 完整文档（包括安装、SDK 功能和 GUI 工具），请先参阅 [GitHub README](https://github.com/SENSING-Technology/sgMIX)。**

本文档涵盖 README 中没有的其他内容：
- **界面工具详细使用说明** - GUI 操作指南
- **API 参考** - 完整的函数原型

---

## 界面工具详细使用说明

### 工具按钮（右上角）
<div style={{textAlign: 'center'}}>
    <img src="https://sgword-service.oss-cn-heyuan.aliyuncs.com/wiki-images/5_0_Vision_Core_SDK/5_2_sgMIX/sgMIX_function_button.png?x-oss-process=image/format,webp" alt="sgMIX_function_button" 
    style={{maxWidth: '100%', height:'auto'}} />
</div>

| 按钮 | 功能 |
|------|------|
| 1 | 刷新图像数据 |
| 2 | 选择保存文件夹路径 |
| 3 | 保存一帧图像 |
| 4 | 设置 |
| 5 | 版本信息 |

### 使用流程

**点亮相机：**
1. 点击右上角 Settings
<div style={{textAlign: 'center'}}>
    <img src="https://sgword-service.oss-cn-heyuan.aliyuncs.com/wiki-images/5_0_Vision_Core_SDK/5_2_sgMIX/sgMIX_setting_button.png?x-oss-process=image/format,webp" alt="sgMIX_setting_button" 
    style={{maxWidth: '100%', height:'auto'}} />
</div>

2. 选择型号、分辨率和 EEPROM 地址, 建议：将 Sensor address 设置为 1a
<div style={{textAlign: 'center'}}>
    <img src="https://sgword-service.oss-cn-heyuan.aliyuncs.com/wiki-images/5_0_Vision_Core_SDK/5_2_sgMIX/sgMIX_Select_the_model.png?x-oss-process=image/format,webp" alt="sgMIX_Select_the_model" 
    style={{maxWidth: '100%', height:'auto'}} />
</div>

3. 点击 Save Settings 保存设置
<div style={{textAlign: 'center'}}>
    <img src="https://sgword-service.oss-cn-heyuan.aliyuncs.com/wiki-images/5_0_Vision_Core_SDK/5_2_sgMIX/sgMIX_save_settings.png?x-oss-process=image/format,webp" alt="sgMIX_save_settings" 
    style={{maxWidth: '100%', height:'auto'}} />
</div>

4. 在 Camera Info 状态栏选择要打开的视频设备
<div style={{textAlign: 'center'}}>
    <img src="https://sgword-service.oss-cn-heyuan.aliyuncs.com/wiki-images/5_0_Vision_Core_SDK/5_2_sgMIX/sgMIX_select_video_device.png?x-oss-process=image/format,webp" alt="sgMIX_select_video_device" 
    style={{maxWidth: '100%', height:'auto'}} />
</div>

5. 点击 "open" 打开相机
<div style={{textAlign: 'center'}}>
    <img src="https://sgword-service.oss-cn-heyuan.aliyuncs.com/wiki-images/5_0_Vision_Core_SDK/5_2_sgMIX/sgMIX_open_button.png?x-oss-process=image/format,webp" alt="sgMIX_open_button" 
    style={{maxWidth: '100%', height:'auto'}} />
</div>
<br/>

**读取相机内参和 SN：**
- 点击 "Read Intrinsic"，日志区域会输出相关信息
<div style={{textAlign: 'center'}}>
    <img src="https://sgword-service.oss-cn-heyuan.aliyuncs.com/wiki-images/5_0_Vision_Core_SDK/5_2_sgMIX/sgMIX_read_intrinsic.png?x-oss-process=image/format,webp" alt="sgMIX_read_intrinsic" 
    style={{maxWidth: '100%', height:'auto'}} />
</div>
<br/>

**畸变校正：**
- 点击 "Undistort" 启用畸变校正功能
<div style={{textAlign: 'center'}}>
    <img src="https://sgword-service.oss-cn-heyuan.aliyuncs.com/wiki-images/5_0_Vision_Core_SDK/5_2_sgMIX/sgMIX_Undistort_button.png?x-oss-process=image/format,webp" alt="sgMIX_Undistort_button" 
    style={{maxWidth: '100%', height:'auto'}} />
</div>

<div style={{textAlign: 'center'}}>
    <img src="https://sgword-service.oss-cn-heyuan.aliyuncs.com/wiki-images/5_0_Vision_Core_SDK/5_2_sgMIX/sgMIX_Undistort.png?x-oss-process=image/format,webp" alt="sgMIX_Undistort" 
    style={{maxWidth: '100%', height:'auto'}} />
</div>
<br/>

**OTA 升级：**
- 点击 OTA 按钮，输入加密的 URL 地址进行升级
<!-- <div style={{textAlign: 'center'}}>
    <img src="https://sgword-service.oss-cn-heyuan.aliyuncs.com/wiki-images/5_0_Vision_Core_SDK/5_2_sgMIX/sgMIX_OTA.png?x-oss-process=image/format,webp" alt="sgMIX_OTA" 
    style={{maxWidth: '100%', height:'auto'}} />
</div> -->
<br/>

**网络授权：**
- ISP 参数控制需要网络授权
- 输入授权码后点击 "Apply"
<div style={{textAlign: 'center'}}>
    <img src="https://sgword-service.oss-cn-heyuan.aliyuncs.com/wiki-images/5_0_Vision_Core_SDK/5_2_sgMIX/sgMIX_ISP_control1.png?x-oss-process=image/format,webp" alt="sgMIX_ISP_control1" 
    style={{maxWidth: '100%', height:'auto'}} />
</div>

<div style={{textAlign: 'center'}}>
    <img src="https://sgword-service.oss-cn-heyuan.aliyuncs.com/wiki-images/5_0_Vision_Core_SDK/5_2_sgMIX/sgMIX_ISP_control2.png?x-oss-process=image/format,webp" alt="sgMIX_ISP_control2" 
    style={{maxWidth: '100%', height:'auto'}} />
</div>


<br/>

**ISP 控制：**
- 网络授权成功后，调整曝光、白平衡等参数
- "default" 按钮恢复默认参数
- "load" 按钮加载参数配置
- "save" 按钮保存参数配置
<div style={{textAlign: 'center'}}>
    <img src="https://sgword-service.oss-cn-heyuan.aliyuncs.com/wiki-images/5_0_Vision_Core_SDK/5_2_sgMIX/sgMIX_ISP_control3.png?x-oss-process=image/format,webp" alt="sgMIX_ISP_control3" 
    style={{maxWidth: '100%', height:'auto'}} />
</div>
<br/>

---

## API 参考

### 初始化

```cpp
/**
 * @brief 初始化指定的视频设备。
 * @param device_video 视频设备路径（如 "/dev/video0"）。
 * @param cameraType   要初始化的相机型号。
 * @param error        输出错误信息字符串。
 * @return 成功返回 true，失败返回 false。
 */
bool SG_InitVideoDevice(std::string device_video, std::string cameraType, std::string& error);
```

### 相机信息

```cpp
/**
 * @brief 获取当前相机传感器的 I2C 地址。
 * @param i2caddr 输出 7 位 I2C 地址。
 * @param error   输出错误信息字符串。
 * @return 成功返回 true，失败返回 false。
 */
bool SG_GetSensorI2CAddr(uint8_t& i2caddr, std::string& error);

/**
 * @brief 获取当前相机的序列号。
 * @param serialnumber 输出相机序列号字符串。
 * @param error        输出错误信息字符串。
 * @return 成功返回 true，失败返回 false。
 */
bool SG_GetCameraSerialNumber(std::string& serialnumber, std::string& error);

/**
 * @brief 设置相机 EEPROM 的 I2C 地址。
 * @param i2caddr 要设置的 I2C 地址。
 * @param error   输出错误信息字符串。
 * @return 成功返回 true，失败返回 false。
 * @note 当存在多个 EEPROM 地址时，可通过此函数选择目标地址。
 */
bool SG_SetEepromIICaddress(uint8_t i2caddr, std::string& error);
```

### 内参参数

```cpp
/**
 * @brief 读取当前相机的内部参数矩阵。
 * @param camintrinsic 输出相机内参结构体。
 * @param error        输出错误信息字符串。
 * @return 成功返回 true，失败返回 false。
 */
bool SG_GetCameraIntrinsic(Camera_IntrinsicMatrix& camintrinsic, std::string& error);

/**
 * @brief 获取双目相机左右相机的内参以及它们之间的外参。
 * @param Letfcamintrinsic  输出左相机的内参矩阵。
 * @param Rightcamintrinsic 输出右相机的内参矩阵。
 * @param extrinsic         输出左右相机之间的外参矩阵。
 * @param error             输出错误信息字符串。
 * @return 成功返回 true，失败返回 false。
 */
bool SG_GetStereoCameraIntrinsic(Camera_IntrinsicMatrix& Letfcamintrinsic,
                                 Camera_IntrinsicMatrix& Rightcamintrinsic,
                                 Camera_ExtrinsicMatrix& extrinsic, std::string& error);
```

### 图像控制

```cpp
/**
 * @brief 获取当前翻转状态。
 * @param state 输出布尔值，true 表示已启用翻转。
 * @param error 输出错误信息字符串。
 */
bool SG_GetCameraImageFlip(bool& state, std::string& error);

/**
 * @brief 设置图像翻转状态。
 * @param state 布尔值，true 表示启用翻转。
 * @param error 输出错误信息字符串。
 */
bool SG_SetCameraImageFlip(bool state, std::string& error);

/**
 * @brief 获取当前镜像状态。
 * @param state 输出布尔值，true 表示已启用镜像。
 * @param error 输出错误信息字符串。
 */
bool SG_GetCameraImageMirror(bool& state, std::string& error);

/**
 * @brief 设置图像镜像状态。
 * @param state 布尔值，true 表示启用镜像。
 * @param error 输出错误信息字符串。
 */
bool SG_SetCameraImageMirror(bool state, std::string& error);

/**
 * @brief 获取测试图案状态。
 * @param state 输出布尔值，true 表示已启用测试图案。
 * @param error 输出错误信息字符串。
 */
bool SG_GetCameraImageTestpattern(bool& state, std::string& error);

/**
 * @brief 设置是否启用测试图案输出。
 * @param state 布尔值，true 表示启用测试图案。
 * @param error 输出错误信息字符串。
 */
bool SG_SetCameraImageTestpattern(bool state, std::string& error);
```

### 相机设置

```cpp
/**
 * @brief 设置相机分辨率。
 * @param val 分辨率（0: 1920x1080, 1: 1920x1536）。
 * @param error 输出错误信息字符串。
 * @note 仅支持 S36、SG3S-ISX031C-GMSL2F-Hxxx 和 SG3S-ISX031C-GMSL2-Hxxx 相机。
 */
bool SG_SetResolution(int val, std::string& error);

/**
 * @brief 设置触发模式（自动/手动）。
 * @param val 触发模式值：0 = 自动，1 = 手动。
 * @param error 输出错误信息字符串。
 * @note 仅支持 S36、SG3S-ISX031C-GMSL2F-Hxxx 和 SG3S-ISX031C-GMSL2-Hxxx 相机。
 */
bool SG_SetTriggerMode(int val, std::string& error);
```

### 固件和授权

```cpp
/**
 * @brief 执行 OTA 固件升级。
 * @param urlPath 固件升级包的 URL。
 * @param error   输出错误信息字符串。
 * @return 成功返回 true，失败返回 false。
 * @note 此函数需要网络连接。
 */
bool SG_PerformOTAUpdate(std::string urlPath, std::string& error);

/**
 * @brief 获取相机硬件和软件信息。
 * @param info  输出相机信息结构体。
 * @param error 输出错误信息字符串。
 * @return 成功返回 true，失败返回 false。
 */
bool SG_GetCameraInfo(CameraInfo& info, std::string& error);

/**
 * @brief 使用网络授权码激活相机功能。
 * @param authCode 制造商提供的授权码。
 * @param error    输出错误信息字符串。
 * @return 成功返回 true，失败返回 false。
 * @note 此函数需要网络连接。
 */
bool SG_ActivateNetworkLicense(std::string authCode, std::string& error);

/**
 * @brief 获取当前相机固件版本。
 * @param version 输出固件版本字符串。
 * @param error   输出错误信息字符串。
 * @return 成功返回 true，失败返回 false。
 */
bool SG_GetFirmwareVersion(std::string& version, std::string& error);
```

### ISP 控制（需要网络授权）

```cpp
// 亮度控制
bool SG_GetCameraBrightness(int& brightness_percent, std::string& error);
bool SG_SetCameraBrightness(int brightness_percent, std::string& error);

// 对比度控制
bool SG_GetCameraContrast(int& contrast_percent, std::string& error);
bool SG_SetCameraContrast(int contrast_percent, std::string& error);

// 饱和度控制
bool SG_GetCameraSaturation(int& saturation_percent, std::string& error);
bool SG_SetCameraSaturation(int saturation_percent, std::string& error);

// 锐度控制
bool SG_GetCameraSharpness(int& sharpness_percent, std::string& error);
bool SG_SetCameraSharpness(int sharpness_percent, std::string& error);

// 降噪控制
bool SG_GetCameraDenoise(int& denoise_percent, std::string& error);
bool SG_SetCameraDenoise(int denoise_percent, std::string& error);

// 曝光控制
bool SG_SetExposureMode(bool state, std::string& error);
bool SG_GetExposureMode(bool& state, std::string& error);
bool SG_GetExposureTime(float& val, std::string& error);
bool SG_SetManualExposure(float val, std::string& error);
bool SG_GetGainValue(int& val, std::string& error);
bool SG_SetManualGain(int val, std::string& error);

// 白平衡控制
bool SG_GetCameraWhiteBalanceMode(bool& wb_mode, std::string& error);
bool SG_SetCameraWhiteBalanceMode(bool wb_mode, std::string& error);
bool SG_GetCameraWhiteBalance(int& wb_R, int& wb_G, int& wb_B, std::string& error);
bool SG_SetCameraWhiteBalance(int wb_R, int wb_G, int wb_B, std::string& error);
```

### IMU 控制（仅 S56）

```cpp
/**
 * @brief 初始化所有 IMU 设备。
 */
bool SG_InitImuAll(std::string& error);

/**
 * @brief 开始流式传输 IMU 数据。
 * @note 仅支持 S56 相机。
 */
bool SG_StartImuStream(std::string& error);

/**
 * @brief 获取最新的 IMU 数据。
 * @param imu_data 输出用于存储 IMU 数据的结构体。
 * @note 仅支持 S56 相机。
 */
bool SG_GetImuData(IMUData& imu_data, std::string& error);
```

### 视频流控制

```cpp
/**
 * @brief 使用 GStreamer 初始化相机管道。
 * @param pipeline_desc GStreamer Pipeline 描述字符串（通常为空）。
 */
bool SG_Initialize(const std::string& pipeline_desc, std::string& error);

/**
 * @brief 关闭相机管道。
 */
bool SG_Shutdown(std::string& error);

/**
 * @brief 开始视频采集。
 */
bool SG_StartCapture(std::string& error);

/**
 * @brief 停止视频采集。
 */
bool SG_StopCapture(std::string& error);

/**
 * @brief 检查相机管道是否已初始化。
 */
bool SG_IsInitialized(std::string& error);

/**
 * @brief 获取最新捕获的帧及其时间戳。
 * @param frame      输出用于存储帧的 cv::Mat 对象。
 * @param timestamp  输出时间戳值。
 */
bool SG_GetFrameWithTimestamp(cv::Mat& frame, int64_t& timestamp, std::string& error);

/**
 * @brief 获取最新捕获帧的时间戳。
 * @param timestamp 输出时间戳值。
 */
bool SG_GetLatestFrameTimestamp(int64_t& timestamp, std::string& error);

/**
 * @brief 获取最新的传感器数据帧。
 * @param sensor_frame 输出用于存储传感器数据的 SensorDataFrame 对象。
 */
bool SG_GetSensorDataFrame(SensorDataFrame& sensor_frame, std::string& error);

/**
 * @brief 获取相机的 EDB 数据。
 * @param sensor_frame EDB 数据输出结构体。
 * @param error        输出错误信息字符串。
 * @return 成功返回 true，失败返回 false。
 * @note 仅适用于 S36、SG3S-ISX031C-GMSL2F-Hxxx 和 SG3S-ISX031C-GMSL2-Hxxx 相机。
 */
bool SG_GetCameraEBD(SensorDataFrame& sensor_frame, std::string& error);
```

### 双目深度

```cpp
/**
 * @brief 初始化双目深度 SDK，设置初始化参数并进行图像预处理。
 * @param frame  初始化时预处理的左右眼图像。
 * @param config SDK 初始化配置参数。
 * @param error  输出错误信息字符串。
 * @return true  初始化成功。
 * @return false 初始化失败。
 */
bool SG_StereoInit(StereoFrame frame, StereoConfig config);

/**
 * @brief 生成单帧立体深度图像。
 * @param stereodepth_image 输出立体深度图像。
 * @param error              输出错误信息字符串。
 * @return true  图像处理成功。
 * @return false 图像处理失败。
 */
bool SG_StereoProcess(cv::Mat& stereodepth_image);

/**
 * @brief 释放 SDK 内部资源。
 * @param error 输出错误信息字符串。
 * @return true  成功释放资源。
 * @return false 释放资源失败。
 */
bool SG_StereoDeinit();
```

### 畸变校正

```cpp
/**
 * @brief 对单张图像进行畸变校正。
 * @param input_path      输入图像路径。
 * @param output_path     输出图像路径。
 * @param camera_params   相机内参参数。
 * @param error           输出错误信息字符串。
 * @return true  畸变校正成功。
 * @return false 畸变校正失败。
 */
bool SG_DistortionCorrect(const std::string& input_path,
                          const std::string& output_path,
                          const Camera_IntrinsicMatrix& camera_params,
                          std::string& error);
```
