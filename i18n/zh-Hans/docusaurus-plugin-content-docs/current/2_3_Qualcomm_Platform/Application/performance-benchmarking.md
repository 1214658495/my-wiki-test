---
sidebar_position: 3
title: 性能基准测试技术
description: Qualcomm 平台视觉应用性能测量和优化方法
---

# Qualcomm 平台性能基准测试

本指南介绍如何在 Qualcomm 平台上测量、分析和优化视觉应用性能。

## 关键性能指标

对视觉应用进行基准测试时，应重点关注以下指标：

| 指标 | 说明 | 重要性 |
|--------|-------------|------------|
| 推理时间 | 处理一帧/一次输入所需时间 | 决定整体系统吞吐量 |
| 初始化时间 | 加载并准备模型/资源所需时间 | 影响启动体验 |
| 内存占用 | 峰值和平均内存消耗 | 影响系统稳定性和多任务能力 |
| 功耗 | 每次推理消耗的能量 | 对电池供电设备非常关键 |
| 热影响 | 持续运行时的温升 | 影响长期性能稳定性 |

## 基准测试工具

### 1. Snapdragon Profiler

这是在 Qualcomm 硬件上进行详细性能分析的主要工具：

```bash
# Launch Snapdragon Profiler
snapdragon-profiler
```

主要能力：
- CPU/GPU/DSP 利用率监控
- 内存占用跟踪
- 功耗测量
- 内核 trace 采集
- 系统指标可视化

### 2. SNPE 基准测试

专门用于神经网络性能测试：

```bash
# Measure model performance across available runtimes
snpe-net-run --container model.dlc \
             --input_list input_list.txt \
             --output_dir results \
             --perf_profile high_performance \
             --benchmarks

# Generate detailed performance report
snpe-diagview --input_log results/logs/*.log \
              --output_html performance_report.html
```

### 3. 基于 adb 的基准测试

用于在 Android 平台上进行快速测量：

```bash
# Monitor system-wide CPU usage
adb shell top -m 10 -n 1

# Track memory usage of a specific process
adb shell dumpsys meminfo com.example.visionapp

# Measure battery consumption
adb shell dumpsys batterystats
```

### 4. 自定义埋点

在代码中添加计时点以进行精确测量：

```cpp
#include <chrono>

void measurePerformance() {
    auto start = std::chrono::high_resolution_clock::now();

    // Operation to measure
    runVisionAlgorithm();

    auto end = std::chrono::high_resolution_clock::now();
    auto duration = std::chrono::duration_cast<std::chrono::milliseconds>(end - start);

    printf("Execution time: %lld ms\n", duration.count());
}
```

## 基准测试方法

### 1. 建立基线

在受控条件下建立基线测量：

```cpp
// Example of establishing performance baselines
void runBaselines() {
    // Warm up the system
    for (int i = 0; i < 10; i++) {
        processFrame();
    }

    // Measure steady state performance
    std::vector<double> timings;
    for (int i = 0; i < 100; i++) {
        auto start = std::chrono::high_resolution_clock::now();
        processFrame();
        auto end = std::chrono::high_resolution_clock::now();

        double ms = std::chrono::duration<double, std::milli>(end - start).count();
        timings.push_back(ms);
    }

    // Calculate statistics
    double avg = calculateAverage(timings);
    double stddev = calculateStdDev(timings);
    double p95 = calculatePercentile(timings, 95);

    printf("Average: %.2f ms, StdDev: %.2f ms, P95: %.2f ms\n",
           avg, stddev, p95);
}
```

### 2. 在不同条件下测试

在不同场景下测量性能：

- 不同输入尺寸和复杂度
- 不同热状态（冷启动与热机状态）
- 后台应用负载
- 不同电量水平（满电与低电量）
- 不同设备 SKU/变体

### 3. 分析系统资源

在基准测试期间监控资源利用率：

```bash
# Example bash script for resource monitoring
#!/bin/bash

# Start the application
adb shell am start -n com.example.visionapp/.MainActivity

# Monitor resources every second for 60 seconds
for i in {1..60}; do
    # CPU usage
    adb shell cat /proc/stat > cpu_$i.txt

    # Memory usage
    adb shell dumpsys meminfo com.example.visionapp > mem_$i.txt

    # Thermal state
    adb shell cat /sys/devices/virtual/thermal/thermal_zone*/temp > thermal_$i.txt

    sleep 1
done
```

## 性能分析

### 1. 识别瓶颈

视觉应用中的常见瓶颈：

- **CPU-bound**: 线程利用率高，但 GPU/DSP 利用率低
- **内存受限**: 内存访问量高、缓存未命中多
- **I/O-bound**: 等待摄像头输入或存储访问
- **Thermal throttling**: 运行一段时间后性能下降
- **电源管理**: 时钟频率动态调整

### 2. 案例：帧率优化

| 配置 | 帧率 | CPU Usage | GPU Usage | 电源 |
|---------------|------------|-----------|-----------|-------|
| CPU Only | 15 FPS | 90% | 5% | 1.8W |
| GPU Offload | 24 FPS | 30% | 65% | 2.1W |
| DSP Offload | 20 FPS | 15% | 10% | 1.2W |
| Hybrid (GPU+DSP) | 30 FPS | 20% | 40% | 1.6W |

### 3. 优化循环

按以下迭代流程进行性能优化：

1. **测量**：建立基准性能
2. **分析**：识别瓶颈
3. **优化**：进行针对性改进
4. **验证**：确认变更影响
5. **重复**：持续优化直到达到目标

## 高级优化技术

### 1. 工作负载均衡

将任务分配到不同类型处理器上：

```cpp
// Example: Workload balancing across processors
void balancedProcessing(const cv::Mat& frame) {
    // Pre-processing on DSP (most efficient for image manipulation)
    cv::Mat preprocessed = preprocessOnDSP(frame);

    // Feature extraction on GPU (parallel-friendly)
    std::vector<cv::KeyPoint> features = extractFeaturesOnGPU(preprocessed);

    // Complex decision logic on CPU (more suitable for branching code)
    std::vector<DetectionResult> results = analyzeOnCPU(features);

    // Neural network inference on NPU/AIP (specialized accelerator)
    std::vector<Classification> classifications = classifyOnNPU(results);
}
```

### 2. 流水线并行

同时处理多帧数据：

```cpp
// Example: Pipeline parallelization
class VisionPipeline {
private:
    ThreadSafeQueue<Frame> captureQueue;
    ThreadSafeQueue<ProcessedFrame> preprocessQueue;
    ThreadSafeQueue<AnalyzedFrame> analysisQueue;

    std::thread captureThread;
    std::thread preprocessThread;
    std::thread analysisThread;
    std::thread outputThread;

public:
    void start() {
        captureThread = std::thread(&VisionPipeline::captureLoop, this);
        preprocessThread = std::thread(&VisionPipeline::preprocessLoop, this);
        analysisThread = std::thread(&VisionPipeline::analysisLoop, this);
        outputThread = std::thread(&VisionPipeline::outputLoop, this);
    }

    // Thread function implementations
    void captureLoop() { /* Camera capture logic */ }
    void preprocessLoop() { /* Pre-processing logic */ }
    void analysisLoop() { /* Analysis/inference logic */ }
    void outputLoop() { /* Result handling logic */ }
};
```

## 报告和文档

记录性能特征，便于追溯：

```markdown
# Performance Report Template

## 测试环境
- Device: Qualcomm Reference Board XYZ
- SoC: Snapdragon Series XXX
- OS Version: Android 12
- Test App Version: 1.2.3
- Ambient Temperature: 23°C

## 性能指标
- Average 推理时间: 45ms
- P95 推理时间: 52ms
- Initialization Time: 230ms
- Peak 内存占用: 120MB
- Average Power Draw: 1.4W

## 建议
1. Optimize model with 8-bit quantization
2. Enable FastCV acceleration for pre-processing
3. Implement frame skipping under thermal pressure
```

<!-- ## Next Steps

- Explore [Production Deployment Strategies](./production-deployment)
- Learn about [系统-Level 优化方式](./system-optimization)
- Review [Advanced Debugging Techniques](./advanced-debugging) -->
