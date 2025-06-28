---
sidebar_position: 3
title: Performance Benchmarking Techniques
description: Methods for measuring and optimizing performance of vision applications on Qualcomm platforms
---

# Performance Benchmarking on Qualcomm Platforms

This guide covers techniques for measuring, analyzing, and optimizing performance of vision applications on Qualcomm platforms.

## Key Performance Metrics

When benchmarking vision applications, consider these critical metrics:

| Metric | Description | Importance |
|--------|-------------|------------|
| Inference Time | Time to process one frame/input | Determines overall system throughput |
| Initialization Time | Time to load and prepare models/resources | Impacts startup experience |
| Memory Usage | Peak and average memory consumption | Affects system stability and multitasking |
| Power Consumption | Energy used per inference | Critical for battery-powered devices |
| Thermal Impact | Temperature increase during sustained operation | Affects long-term performance stability |

## Benchmarking Tools

### 1. Snapdragon Profiler

The primary tool for detailed performance analysis on Qualcomm hardware:

```bash
# Launch Snapdragon Profiler
snapdragon-profiler
```

Key capabilities:
- CPU/GPU/DSP utilization monitoring
- Memory usage tracking
- Power consumption measurement
- Kernel trace collection
- System metrics visualization

### 2. SNPE Benchmarking

For neural network performance specifically:

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

### 3. adb-based Benchmarking

For quick measurements on Android-based platforms:

```bash
# Monitor system-wide CPU usage
adb shell top -m 10 -n 1

# Track memory usage of a specific process
adb shell dumpsys meminfo com.example.visionapp

# Measure battery consumption
adb shell dumpsys batterystats
```

### 4. Custom Instrumentation

Add timing points in your code for precise measurements:

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

## Benchmark Methodology

### 1. Establish Baselines

Create baseline measurements under controlled conditions:

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

### 2. Test Under Varied Conditions

Measure performance under different scenarios:

- Various input sizes and complexities
- Different thermal conditions (cold start vs. warm device)
- Background application load
- Battery levels (full vs. low)
- Different device SKUs/variants

### 3. Profile System Resources

Monitor resource utilization during benchmarking:

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

## Performance Analysis

### 1. Identifying Bottlenecks

Common bottlenecks in vision applications:

- **CPU-bound**: High thread utilization but low GPU/DSP
- **Memory-bound**: High memory traffic, cache misses
- **I/O-bound**: Waiting on camera input or storage
- **Thermal throttling**: Performance degradation over time
- **Power management**: Clock frequency scaling

### 2. Case Study: Frame Rate Optimization

| Configuration | Frame Rate | CPU Usage | GPU Usage | Power |
|---------------|------------|-----------|-----------|-------|
| CPU Only | 15 FPS | 90% | 5% | 1.8W |
| GPU Offload | 24 FPS | 30% | 65% | 2.1W |
| DSP Offload | 20 FPS | 15% | 10% | 1.2W |
| Hybrid (GPU+DSP) | 30 FPS | 20% | 40% | 1.6W |

### 3. Optimization Cycle

Follow this iterative process for performance optimization:

1. **Measure**: Establish baseline performance
2. **Profile**: Identify bottlenecks
3. **Optimize**: Make targeted improvements
4. **Validate**: Confirm impact of changes
5. **Repeat**: Continue until goals are met

## Advanced Optimization Techniques

### 1. Workload Balancing

Distribute work across heterogeneous processors:

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

### 2. Pipeline Parallelism

Process multiple frames simultaneously:

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

## Reporting and Documentation

Document performance characteristics for traceability:

```markdown
# Performance Report Template

## Test Environment
- Device: Qualcomm Reference Board XYZ
- SoC: Snapdragon Series XXX
- OS Version: Android 12
- Test App Version: 1.2.3
- Ambient Temperature: 23°C

## Performance Metrics
- Average Inference Time: 45ms
- P95 Inference Time: 52ms
- Initialization Time: 230ms
- Peak Memory Usage: 120MB
- Average Power Draw: 1.4W

## Recommendations
1. Optimize model with 8-bit quantization
2. Enable FastCV acceleration for pre-processing
3. Implement frame skipping under thermal pressure
```

<!-- ## Next Steps

- Explore [Production Deployment Strategies](./production-deployment)
- Learn about [System-Level Optimization](./system-optimization)
- Review [Advanced Debugging Techniques](./advanced-debugging)  -->