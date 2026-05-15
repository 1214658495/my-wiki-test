---
sidebar_position: 2
title: Getting Started with sgMIX
---

# Getting Started with sgMIX

## Summary

The sgMIX SDK is a comprehensive camera control SDK designed for NVIDIA Jetson platforms, enabling seamless integration and fine-grained control over GMSL camera systems. It provides a complete set of tools for：
- image control
- ISP tuning
- OTA firmware upgrades
- IMU data acquisition (S56)
- stereo depth estimation (S36)
- image distortion correction.

> **📋 For complete documentation (installation, SDK features, GUI tools), please refer to the [GitHub README](https://github.com/SENSING-Technology/sgMIX) first.**

This section covers additional unique content not in the README:
- **Interface Tools Detailed Usage** - GUI operation guide
- **API Reference** - Complete function prototypes

---

## Interface Tools Detailed Usage

### Tool Buttons (Top Right)
<div style={{textAlign: 'center'}}>
    <img src="https://sgword-service.oss-cn-heyuan.aliyuncs.com/wiki-images/5_0_Vision_Core_SDK/5_2_sgMIX/sgMIX_function_button.png?x-oss-process=image/format,webp" alt="sgMIX_function_button" 
    style={{maxWidth: '100%', height:'auto'}} />
</div>

| Button | Function |
|--------|----------|
| 1 | Refresh Image Data |
| 2 | Select Save Folder Path |
| 3 | Save One Frame of Image |
| 4 | Settings |
| 5 | Version Information |

### Usage Flow

**Light up the camera:**
1. Click Settings (top right corner)
<div style={{textAlign: 'center'}}>
    <img src="https://sgword-service.oss-cn-heyuan.aliyuncs.com/wiki-images/5_0_Vision_Core_SDK/5_2_sgMIX/sgMIX_setting_button.png?x-oss-process=image/format,webp" alt="sgMIX_setting_button" 
    style={{maxWidth: '100%', height:'auto'}} />
</div>

2. Select model, resolution, and EEPROM address, Recommended: Set Sensor address to 1a
<div style={{textAlign: 'center'}}>
    <img src="https://sgword-service.oss-cn-heyuan.aliyuncs.com/wiki-images/5_0_Vision_Core_SDK/5_2_sgMIX/sgMIX_Select_the_model.png?x-oss-process=image/format,webp" alt="sgMIX_Select_the_model" 
    style={{maxWidth: '100%', height:'auto'}} />
</div>

3. Click Save Settings
<div style={{textAlign: 'center'}}>
    <img src="https://sgword-service.oss-cn-heyuan.aliyuncs.com/wiki-images/5_0_Vision_Core_SDK/5_2_sgMIX/sgMIX_save_settings.png?x-oss-process=image/format,webp" alt="sgMIX_save_settings" 
    style={{maxWidth: '100%', height:'auto'}} />
</div>

4. Select video device in Camera Info status bar
<div style={{textAlign: 'center'}}>
    <img src="https://sgword-service.oss-cn-heyuan.aliyuncs.com/wiki-images/5_0_Vision_Core_SDK/5_2_sgMIX/sgMIX_select_video_device.png?x-oss-process=image/format,webp" alt="sgMIX_select_video_device" 
    style={{maxWidth: '100%', height:'auto'}} />
</div>

5. Click "open" to start camera
<div style={{textAlign: 'center'}}>
    <img src="https://sgword-service.oss-cn-heyuan.aliyuncs.com/wiki-images/5_0_Vision_Core_SDK/5_2_sgMIX/sgMIX_open_button.png?x-oss-process=image/format,webp" alt="sgMIX_open_button" 
    style={{maxWidth: '100%', height:'auto'}} />
</div>

<br/>
**Read camera intrinsic parameters and SN:**
- Click "Read Intrinsic" - log area will output relevant information
<div style={{textAlign: 'center'}}>
    <img src="https://sgword-service.oss-cn-heyuan.aliyuncs.com/wiki-images/5_0_Vision_Core_SDK/5_2_sgMIX/sgMIX_read_intrinsic.png?x-oss-process=image/format,webp" alt="sgMIX_read_intrinsic" 
    style={{maxWidth: '100%', height:'auto'}} />
</div>

<br/>
**Distortion Correction:**
- Click "Undistort" to enable distortion correction
<div style={{textAlign: 'center'}}>
    <img src="https://sgword-service.oss-cn-heyuan.aliyuncs.com/wiki-images/5_0_Vision_Core_SDK/5_2_sgMIX/sgMIX_Undistort_button.png?x-oss-process=image/format,webp" alt="sgMIX_Undistort_button" 
    style={{maxWidth: '100%', height:'auto'}} />
</div>

<div style={{textAlign: 'center'}}>
    <img src="https://sgword-service.oss-cn-heyuan.aliyuncs.com/wiki-images/5_0_Vision_Core_SDK/5_2_sgMIX/sgMIX_Undistort.png?x-oss-process=image/format,webp" alt="sgMIX_Undistort" 
    style={{maxWidth: '100%', height:'auto'}} />
</div>

<br/>
**OTA Upgrade:**
- Click OTA button and enter encrypted URL address

<br/>
**Network Authorization:**
- Required for ISP parameter control
- Click "Apply" after entering license key
<div style={{textAlign: 'center'}}>
    <img src="https://sgword-service.oss-cn-heyuan.aliyuncs.com/wiki-images/5_0_Vision_Core_SDK/5_2_sgMIX/sgMIX_ISP_control1.png?x-oss-process=image/format,webp" alt="sgMIX_ISP_control1" 
    style={{maxWidth: '100%', height:'auto'}} />
</div>

<div style={{textAlign: 'center'}}>
    <img src="https://sgword-service.oss-cn-heyuan.aliyuncs.com/wiki-images/5_0_Vision_Core_SDK/5_2_sgMIX/sgMIX_ISP_control2.png?x-oss-process=image/format,webp" alt="sgMIX_ISP_control2" 
    style={{maxWidth: '100%', height:'auto'}} />
</div>

<br/>
**ISP Control:**
- After network authorization, adjust exposure, white balance, and other parameters
- "default" button restores default parameters
- "load" button loads parameter configurations
- "save" button saves parameter configurations
<div style={{textAlign: 'center'}}>
    <img src="https://sgword-service.oss-cn-heyuan.aliyuncs.com/wiki-images/5_0_Vision_Core_SDK/5_2_sgMIX/sgMIX_ISP_control3.png?x-oss-process=image/format,webp" alt="sgMIX_ISP_control3" 
    style={{maxWidth: '100%', height:'auto'}} />
</div>

<br/>

## API Reference

### Initialization

```cpp
/**
 * @brief Initialize the specified video device.
 * @param device_video Video device path (e.g., "/dev/video0").
 * @param cameraType   Camera model to initialize.
 * @param error        Output error message string.
 * @return Success returns true, failure returns false.
 */
bool SG_InitVideoDevice(std::string device_video, std::string cameraType, std::string& error);
```

### Camera Information

```cpp
/**
 * @brief Get the I2C address of the current camera sensor.
 * @param i2caddr Output the 7-bit I2C address.
 * @param error   Output error message string.
 * @return Return true on success and false on failure.
 */
bool SG_GetSensorI2CAddr(uint8_t& i2caddr, std::string& error);

/**
 * @brief Get the serial number of the current camera.
 * @param serialnumber Output camera serial number string.
 * @param error        Output error message string.
 * @return Return true on success and false on failure.
 */
bool SG_GetCameraSerialNumber(std::string& serialnumber, std::string& error);

/**
 * @brief Set the I2C address of the camera's EEPROM.
 * @param i2caddr The I2C address to be set.
 * @param error   Output error message string.
 * @return Return true on success and false on failure.
 * @note When there are multiple EEPROM addresses, select through this function.
 */
bool SG_SetEepromIICaddress(uint8_t i2caddr, std::string& error);
```

### Intrinsic Parameters

```cpp
/**
 * @brief Read the internal parameter matrix of the current camera.
 * @param camintrinsic Output camera intrinsic parameter structure.
 * @param error        Output error message string.
 * @return Return true on success and false on failure.
 */
bool SG_GetCameraIntrinsic(Camera_IntrinsicMatrix& camintrinsic, std::string& error);

/**
 * @brief Obtain intrinsic parameters of binocular camera left/right cameras and extrinsic parameters.
 * @param Letfcamintrinsic  Output left camera intrinsic matrix.
 * @param Rightcamintrinsic Output right camera intrinsic matrix.
 * @param extrinsic         Output extrinsic parameter matrix between cameras.
 * @param error             Output error message string.
 * @return Return true on success and false on failure.
 */
bool SG_GetStereoCameraIntrinsic(Camera_IntrinsicMatrix& Letfcamintrinsic,
                                 Camera_IntrinsicMatrix& Rightcamintrinsic,
                                 Camera_ExtrinsicMatrix& extrinsic, std::string& error);
```

### Image Controls

```cpp
/**
 * @brief Get the current flip status.
 * @param state Output boolean value, true indicates flipping is enabled.
 * @param error Output error message string.
 */
bool SG_GetCameraImageFlip(bool& state, std::string& error);

/**
 * @brief Set the image flip state.
 * @param state Boolean value, true means enabling flipping.
 * @param error Output error message string.
 */
bool SG_SetCameraImageFlip(bool state, std::string& error);

/**
 * @brief Get the current mirror status.
 * @param state Output boolean value, true indicates mirroring is enabled.
 * @param error Output error message string.
 */
bool SG_GetCameraImageMirror(bool& state, std::string& error);

/**
 * @brief Set the image mirror state.
 * @param state Boolean value, true means enabling mirroring.
 * @param error Output error message string.
 */
bool SG_SetCameraImageMirror(bool state, std::string& error);

/**
 * @brief Get the test pattern status.
 * @param state Output boolean value, true indicates test pattern is enabled.
 * @param error Output error message string.
 */
bool SG_GetCameraImageTestpattern(bool& state, std::string& error);

/**
 * @brief Set whether to enable test pattern output.
 * @param state Boolean value, true means enabling test pattern.
 * @param error Output error message string.
 */
bool SG_SetCameraImageTestpattern(bool state, std::string& error);
```

### Camera Settings

```cpp
/**
 * @brief Set the camera resolution.
 * @param val Resolution (0: 1920x1080, 1: 1920x1536).
 * @param error Output error message string.
 * @note Only supports S36, SG3S-ISX031C-GMSL2F-Hxxx, and SG3S-ISX031C-GMSL2-Hxxx cameras.
 */
bool SG_SetResolution(int val, std::string& error);

/**
 * @brief Set the trigger mode (automatic/manual).
 * @param val Trigger mode value: 0 = automatic, 1 = manual.
 * @param error Output error message string.
 * @note Only supports S36, SG3S-ISX031C-GMSL2F-Hxxx, and SG3S-ISX031C-GMSL2-Hxxx cameras.
 */
bool SG_SetTriggerMode(int val, std::string& error);
```

### Firmware and Licensing

```cpp
/**
 * @brief Perform OTA firmware upgrade.
 * @param urlPath URL of the firmware upgrade package.
 * @param error   Output error message string.
 * @return Return true on success and false on failure.
 * @note This function requires an internet connection.
 */
bool SG_PerformOTAUpdate(std::string urlPath, std::string& error);

/**
 * @brief Get camera hardware and software information.
 * @param info  Output camera information structure.
 * @param error Output error message string.
 * @return Return true on success and false on failure.
 */
bool SG_GetCameraInfo(CameraInfo& info, std::string& error);

/**
 * @brief Activate camera function using network authorization code.
 * @param authCode Authorization code provided by manufacturer.
 * @param error    Output error message string.
 * @return Return true on success and false on failure.
 * @note This function requires an internet connection.
 */
bool SG_ActivateNetworkLicense(std::string authCode, std::string& error);

/**
 * @brief Get the current camera firmware version.
 * @param version Output firmware version string.
 * @param error   Output error message string.
 * @return Return true on success and false on failure.
 */
bool SG_GetFirmwareVersion(std::string& version, std::string& error);
```

### ISP Control (Requires Network Authorization)

```cpp
// Brightness Control
bool SG_GetCameraBrightness(int& brightness_percent, std::string& error);
bool SG_SetCameraBrightness(int brightness_percent, std::string& error);

// Contrast Control
bool SG_GetCameraContrast(int& contrast_percent, std::string& error);
bool SG_SetCameraContrast(int contrast_percent, std::string& error);

// Saturation Control
bool SG_GetCameraSaturation(int& saturation_percent, std::string& error);
bool SG_SetCameraSaturation(int saturation_percent, std::string& error);

// Sharpness Control
bool SG_GetCameraSharpness(int& sharpness_percent, std::string& error);
bool SG_SetCameraSharpness(int sharpness_percent, std::string& error);

// Noise Reduction Control
bool SG_GetCameraDenoise(int& denoise_percent, std::string& error);
bool SG_SetCameraDenoise(int denoise_percent, std::string& error);

// Exposure Control
bool SG_SetExposureMode(bool state, std::string& error);
bool SG_GetExposureMode(bool& state, std::string& error);
bool SG_GetExposureTime(float& val, std::string& error);
bool SG_SetManualExposure(float val, std::string& error);
bool SG_GetGainValue(int& val, std::string& error);
bool SG_SetManualGain(int val, std::string& error);

// White Balance Control
bool SG_GetCameraWhiteBalanceMode(bool& wb_mode, std::string& error);
bool SG_SetCameraWhiteBalanceMode(bool wb_mode, std::string& error);
bool SG_GetCameraWhiteBalance(int& wb_R, int& wb_G, int& wb_B, std::string& error);
bool SG_SetCameraWhiteBalance(int wb_R, int wb_G, int wb_B, std::string& error);
```

### IMU Control (S56 Only)

```cpp
/**
 * @brief Initialize all IMU devices.
 */
bool SG_InitImuAll(std::string& error);

/**
 * @brief Start streaming IMU data.
 * @note Only supports S56 cameras.
 */
bool SG_StartImuStream(std::string& error);

/**
 * @brief Get the latest IMU data.
 * @param imu_data Output structure for storing IMU data.
 * @note Only supports S56 cameras.
 */
bool SG_GetImuData(IMUData& imu_data, std::string& error);
```

### Video Stream Control

```cpp
/**
 * @brief Initialize the camera pipeline using GStreamer.
 * @param pipeline_desc GStreamer Pipeline description string (generally empty).
 */
bool SG_Initialize(const std::string& pipeline_desc, std::string& error);

/**
 * @brief Shut down the camera pipeline.
 */
bool SG_Shutdown(std::string& error);

/**
 * @brief Start video capture.
 */
bool SG_StartCapture(std::string& error);

/**
 * @brief Stop video capture.
 */
bool SG_StopCapture(std::string& error);

/**
 * @brief Check if the camera pipeline is initialized.
 */
bool SG_IsInitialized(std::string& error);

/**
 * @brief Get the latest captured frame and its timestamp.
 * @param frame Output cv::Mat object to store the frame.
 * @param timestamp Output timestamp value.
 */
bool SG_GetFrameWithTimestamp(cv::Mat& frame, int64_t& timestamp, std::string& error);

/**
 * @brief Get the timestamp of the latest captured frame.
 * @param timestamp Output timestamp value.
 */
bool SG_GetLatestFrameTimestamp(int64_t& timestamp, std::string& error);

/**
 * @brief Get the latest sensor data frame.
 * @param sensor_frame Output SensorDataFrame object to store sensor data.
 */
bool SG_GetSensorDataFrame(SensorDataFrame& sensor_frame, std::string& error);

/**
 * @brief Obtain EDB data from the camera.
 * @param sensor_frame EDB data output structure.
 * @param error Output error message string.
 * @return Return true on success and false on failure.
 * @note Only for S36, SG3S-ISX031C-GMSL2F-Hxxx, and SG3S-ISX031C-GMSL2-Hxxx cameras.
 */
bool SG_GetCameraEBD(SensorDataFrame& sensor_frame, std::string& error);
```

### Stereo Depth

```cpp
/**
 * @brief Initialize the stereo depth SDK with preprocessing.
 * @param frame  Left and right eye images preprocessed during initialization.
 * @param config SDK initialization configuration parameters.
 * @param error  Output error message string.
 * @return true  Initialization successful.
 * @return false Initialization failed.
 */
bool SG_StereoInit(StereoFrame frame, StereoConfig config);

/**
 * @brief Generate a stereoscopic depth image for a single frame.
 * @param stereodepth_image Output stereoscopic depth image.
 * @param error             Output error message string.
 * @return true  Image processing successful.
 * @return false Image processing failed.
 */
bool SG_StereoProcess(cv::Mat& stereodepth_image);

/**
 * @brief Release the internal resources of the SDK.
 * @param error Output error message string.
 * @return true  Successfully released resources.
 * @return false Failed to release resources.
 */
bool SG_StereoDeinit();
```

### Distortion Correction

```cpp
/**
 * @brief Distortion correction for a single image.
 * @param input_path      Input image path.
 * @param output_path     Output image path.
 * @param camera_params   Camera intrinsic parameters.
 * @param error           Output error message string.
 * @return true  Distortion correction successful.
 * @return false Distortion correction failed.
 */
bool SG_DistortionCorrect(const std::string& input_path,
                          const std::string& output_path,
                          const Camera_IntrinsicMatrix& camera_params,
                          std::string& error);
```
