---
sidebar_position: 4
title: FAQs
---

# FAQs

<!-- ## Common Issues with Windows System -->
## 1. EVS Camera Not Detected (Error Message)

If Metavision Studio cannot detect your EVS camera and shows an error like:
```
Metavision Studio internal error, code 3221226356 signal null
```

### 1.1 Check Plugin Version Compatibility with Metavision SDK

Verify that your Plugin version is compatible with your Metavision SDK version. You can check this by running `metavision_platform_info` command.

### 1.2 Check System Environment Variables

Some system environment variables may need to be properly set. Try restarting your application after verifying these paths in your environment variables:
- `C:\Program Files\Prophesee\third_party\bin`
- `C:\Program Files\Prophesee\third_party\debug\bin`
- `C:\Program Files\Prophesee\bin`

## 2. Python Installation Issues on Windows

If you encounter errors during Python package installation, it could be due to system or network issues. You can try:
- Running the installation command again
- Continuing with the installation despite errors

## 3. Uninstalling Metavision SDK on Windows

To uninstall Metavision SDK, remove all files with "Metavision" or "Prophesee" in their names.

## 4. Camera Visible in Device Manager but Not in Metavision Studio

If your "SENSING_USB3_EVS_CAMERA" is visible in Device Manager but Metavision Studio cannot open it, ensure that:
- The EVS camera is connected to a USB 3.0 port

## 5. Error Messages on Windows

If you receive an error like:
```
无法定位程序输入点 于动态链接库 C:\Program Files\Prophesee\lib\metavision\hal\plugins\hal_plugin_prophesee.dll 上
```
(Cannot locate program entry point in the DLL)

This may indicate an incomplete Python installation. Check Python installation by running the `python` command in the command prompt. If Python is properly installed, it should show the version number.

If the error persists, try reinstalling Metavision SDK.

## 6. Missing Files Error

If Windows cannot find files like:
```
\share\metavision\apps\metavision_studio\internal\client\Metavision Studio
```

This is likely caused by an incomplete system environment. To fix it:

### 6.1 Remove all files with "Metavision" or "Prophesee" in their names

### 6.2 Perform clean boot:
1. Press Windows+R, type `msconfig`
2. Go to "Services" tab, select "Hide all Microsoft services", then click "Disable all"
3. Go to "Startup" tab, disable all startup items
4. Click "Apply", then restart your computer
5. After verifying the issue is resolved, re-enable services and startup items

Alternatively, you can use these commands to repair Windows:
```
DISM /Online /Cleanup-Image /ScanHealth
DISM /Online /Cleanup-Image /CheckHealth
DISM /Online /Cleanup-Image /RestoreHealth
SFC /Scannow
```

## 7. EVS Camera Connected but Not Detected

### 7.1 Download and use SE1-S4-USB_Plugin_SDKV4.6.0.zip

### 7.2 Copy DLL files to C:\evs_plugin\
- hal_plugin_sensing.dll
- metavision_psee_hw_layer.dll

## 8. Metavision SDK Opens with Empty Window

If Metavision SDK opens with an empty window or shows an error, verify that Metavision SDK is installed correctly on your system. If not, download and reinstall to the system drive. Recommended installation path: C:\Program Files\Prophesee.


For more technical support, visit the [SENSING Technical Forum](https://sensing-world.com/) or contact our technical support team. 