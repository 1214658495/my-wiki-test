---
sidebar_position: 2
title: Camera Integration Guide
description: How to integrate cameras with Qualcomm platforms
---

# Camera Integration with Qualcomm Platforms

This guide provides detailed instructions for integrating various camera types with Qualcomm SoCs for vision processing applications.

## Supported Camera Interfaces

Qualcomm platforms support multiple camera interfaces:

| Interface | Max Resolution | Max Frame Rate | Notes |
|-----------|----------------|----------------|-------|
| MIPI CSI-2 | Up to 4K (4096×2160) | Up to 60fps | Direct on-chip connection |
| USB 3.0/3.1 | Up to 4K (3840×2160) | Up to 30fps | External connection |
| Parallel | Up to 1080p | Up to 60fps | Legacy support |

## MIPI CSI-2 Camera Integration

MIPI CSI-2 provides the most efficient and high-performance connection for embedded vision applications.

### Hardware Setup

1. **Connector Verification**: Ensure your camera module uses a compatible MIPI CSI-2 connector (typically 15-22 pin FPC)
2. **Lane Configuration**: Configure the appropriate number of data lanes based on bandwidth requirements
3. **Power Supply**: Connect the camera's power pins to appropriate voltage rails (typically 1.8V and 2.8V)

### Software Configuration

```cpp
// Example: Initializing a MIPI CSI-2 camera in C++
#include "camera_hal.h"

int main() {
    // Initialize the camera HAL
    camera_hal_t camera;
    camera_hal_init(&camera);
    
    // Configure for MIPI CSI-2
    camera_params_t params = {
        .interface = CAMERA_INTERFACE_MIPI_CSI2,
        .mipi_lanes = 4,
        .resolution = {3840, 2160},
        .framerate = 30
    };
    
    // Open the camera with the specified parameters
    if (camera_hal_open(&camera, &params) != 0) {
        fprintf(stderr, "Failed to open camera\n");
        return -1;
    }
    
    // Start the camera stream
    camera_hal_start_streaming(&camera);
    
    // Process frames...
    
    // Clean up
    camera_hal_stop_streaming(&camera);
    camera_hal_close(&camera);
    camera_hal_deinit(&camera);
    
    return 0;
}
```

## USB Camera Integration

USB cameras offer flexibility and ease of integration for many applications.

### Hardware Setup

1. Connect the USB camera to a USB 3.0/3.1 port on your development board
2. Ensure adequate power supply (some high-resolution cameras may require powered USB hubs)

### Software Configuration

```cpp
// Example: Accessing a USB camera using OpenCV
#include <opencv2/opencv.hpp>

int main() {
    // Initialize the camera (0 for built-in, 1+ for external)
    cv::VideoCapture camera(1); // Assuming USB camera is index 1
    
    // Check if camera is opened successfully
    if (!camera.isOpened()) {
        std::cerr << "Failed to open camera" << std::endl;
        return -1;
    }
    
    // Configure camera parameters
    camera.set(cv::CAP_PROP_FRAME_WIDTH, 1920);
    camera.set(cv::CAP_PROP_FRAME_HEIGHT, 1080);
    camera.set(cv::CAP_PROP_FPS, 30);
    
    // Process frames
    cv::Mat frame;
    while (true) {
        camera >> frame;
        if (frame.empty()) break;
        
        // Process frame here
        
        // Display the resulting frame (for debugging)
        cv::imshow("Frame", frame);
        if (cv::waitKey(1) == 27) break; // Exit on ESC
    }
    
    // Release resources
    camera.release();
    cv::destroyAllWindows();
    
    return 0;
}
```

## Multi-Camera Configuration

Many Qualcomm platforms support multiple cameras simultaneously. Here's how to configure a multi-camera setup:

```cpp
// Example: Multi-camera configuration
#include "multi_camera_hal.h"

int main() {
    // Initialize camera array
    const int NUM_CAMERAS = 2;
    camera_handle_t cameras[NUM_CAMERAS];
    
    // Configure each camera
    for (int i = 0; i < NUM_CAMERAS; i++) {
        camera_params_t params = {
            .device_id = i,
            .resolution = {1920, 1080},
            .framerate = 30
        };
        
        if (camera_init(&cameras[i], &params) != 0) {
            fprintf(stderr, "Failed to initialize camera %d\n", i);
            return -1;
        }
    }
    
    // Start all cameras
    for (int i = 0; i < NUM_CAMERAS; i++) {
        camera_start_streaming(&cameras[i]);
    }
    
    // Process synchronized frames
    // ...
    
    // Clean up
    for (int i = 0; i < NUM_CAMERAS; i++) {
        camera_stop_streaming(&cameras[i]);
        camera_deinit(&cameras[i]);
    }
    
    return 0;
}
```

## Camera Tuning

Qualcomm platforms include extensive ISP (Image Signal Processor) capabilities that can be tuned for optimal image quality:

1. **Auto-exposure tuning**: Adjust exposure parameters for different lighting conditions
2. **White balance calibration**: Fine-tune color reproduction accuracy
3. **Noise reduction settings**: Optimize for different ISO levels and scenes
4. **Lens shading correction**: Compensate for optical characteristics

The Qualcomm Camera Tuning Tool provides a GUI interface for adjusting these parameters.

<!-- ## Next Steps

After successfully integrating your cameras, proceed to:

1. [Vision Processing Pipeline](./vision-pipeline)
2. [Model Optimization for Qualcomm](../Application/model-optimization)  -->