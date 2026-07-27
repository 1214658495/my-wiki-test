---
sidebar_position: 4
title: 常见问题
---

# 常见问题

<!-- ## Windows 系统常见问题 -->
## 1. EVS 摄像头无法检测到（错误消息）

如果 Metavision Studio 无法检测到 EVS 摄像头，并显示如下错误：
```
Metavision Studio internal error, code 3221226356 signal null
```

### 1.1 检查插件版本与 Metavision SDK 的兼容性

请确认插件版本与 Metavision SDK 版本兼容。可运行 `metavision_platform_info` 命令进行检查。

### 1.2 检查系统环境变量

部分系统环境变量可能需要正确设置。请确认环境变量中包含以下路径后，重启应用程序：
- `C:\Program Files\Prophesee\third_party\bin`
- `C:\Program Files\Prophesee\third_party\debug\bin`
- `C:\Program Files\Prophesee\bin`

## 2. Windows 上的 Python 安装问题

如果安装 Python 包时遇到错误，可能与系统或网络环境有关。可以尝试：
- 重新运行安装命令
- 在非关键错误情况下继续安装

## 3. 在 Windows 上卸载 Metavision SDK

卸载 Metavision SDK 时，请删除名称中包含 “Metavision” 或 “Prophesee” 的所有文件。

## 4. 设备管理器中可见摄像头，但 Metavision Studio 中不可见

如果设备管理器中可以看到 “SENSING_USB3_EVS_CAMERA”，但 Metavision Studio 无法打开，请确认：
- EVS 摄像头已连接到 USB 3.0 端口

## 5. Windows 错误消息

如果出现如下错误：
```
无法定位程序输入点 于动态链接库 C:\Program Files\Prophesee\lib\metavision\hal\plugins\hal_plugin_prophesee.dll 上
```
(无法在 DLL 中定位程序输入点)

这可能表示 Python 安装不完整。请在命令提示符中运行 `python` 命令检查 Python 安装状态；如果安装正确，应显示版本号。

如果错误仍然存在，请尝试重新安装 Metavision SDK。

## 6. 缺失文件错误

如果 Windows 找不到类似以下文件：
```
\share\metavision\apps\metavision_studio\internal\client\Metavision Studio
```

这通常由系统环境不完整导致。可按以下方式修复：

### 6.1 删除名称中包含 “Metavision” 或 “Prophesee” 的所有文件

### 6.2 执行干净启动：
1. 按 Windows+R，输入 `msconfig`
2. 进入“服务”选项卡，勾选“隐藏所有 Microsoft 服务”，然后点击“全部禁用”
3. 进入“启动”选项卡，禁用所有启动项
4. 点击“应用”，然后重启电脑
5. 确认问题解决后，再重新启用服务和启动项

也可以使用以下命令修复 Windows：
```
DISM /Online /Cleanup-Image /ScanHealth
DISM /Online /Cleanup-Image /CheckHealth
DISM /Online /Cleanup-Image /RestoreHealth
SFC /Scannow
```

## 7. EVS 摄像头已连接但无法检测到

### 7.1 下载并使用 SE1-S4-USB_Plugin_SDKV4.6.0.zip

### 7.2 将 DLL 文件复制到 C:\evs_plugin\
- hal_plugin_sensing.dll
- metavision_psee_hw_layer.dll

## 8. Metavision SDK 打开后为空窗口

如果 Metavision SDK 打开后为空窗口或显示错误，请确认 Metavision SDK 已正确安装。若未正确安装，请重新下载并安装到系统盘，推荐安装路径为 C:\Program Files\Prophesee。


如需更多技术支持，请访问 [SENSING 技术论坛](https://sensing-world.com/) 或联系我们的技术支持团队。
