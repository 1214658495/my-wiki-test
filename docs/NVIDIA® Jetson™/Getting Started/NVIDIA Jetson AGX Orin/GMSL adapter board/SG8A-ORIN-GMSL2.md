---
sidebar_position: 1
---

# SG8A-ORIN-GMSL2

## Overview
SG8A-ORIN-GMSL2 adapter board, which allows up to 8 cameras to be connected to the Jetson AGX Orin module, 
is fully compatible with the NVIDIA Jetson AGX Orin Development Kit. 
As there are many different types of GMSL cameras available, the adapter board can be adaptively operated at different frequencies i.e. 
it is compatible with both GMSL1 and GMSL2 protocol interfaces through software configuration. 
The GMSL camera is powered by PoC (Power over Coax), so all data, control signals and power are sent over a 50 Ohm coaxial cable, 
making the camera's cable routing flexible and easy to install in automotive applications.


<!-- ![SG8A-ORIN-GMSL](/img/SG8A-ORIN-GMSL.png) -->

<!-- <img src={require('@site/static/img/SG8A-ORIN-GMSL.png').default} alt="SG8A-ORIN-GMSL" /> -->

<div style={{textAlign: 'center'}}>
    <img src={require('@site/static/img/SG8A-ORIN-GMSL.png').default} alt="SG8A-ORIN-GMSL" style={{width: 500, height:'auto'}} />
</div>


<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://sensing-world.com/en/h-pd-65.html?recommendFromPid=0&fromMid=898">
        <strong>
            <span style={{backgroundColor: '#f0f0f0', padding: '10px 20px', display: 'inline-block', borderRadius: '5px'}}>
                <font color={'000000'} size={"4"}> Get One Now 🖱️</font>
            </span>
        </strong>
    </a>
</div>



## Getting Started
In this wiki, we will show you how to use the SG8A-ORIN-GMSL2 which supports NVIDIA Jetson AGX Orin.


### Specification

<iframe width="800" height="600" src="https://autosensee.feishu.cn/file/H2mFbwrHHoZm4jxUEuBcEEGWnih?from=from_copylink" title="video player" frameborder="0"  ></iframe>

### Supported Camera List

<iframe width="800" height="500" src="https://autosensee.feishu.cn/sheets/JDJxsOlUrh9TZgtLsj8cIoHCn1f?from=from_copylink" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>



### Hardware Preparation 
Follow the steps in the video below to install the product.
<iframe width="700" height="480" src="https://autosensee.feishu.cn/file/N3pTbT3rroMFrHxM4t2ciM0OnMe?from=from_copylink" title="video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### Software Preparation
**Step 1.** SDK Download

|   | Model of SENSING camera used           | JP version for customer NVIDIA devices | Driver package download link                                                                                                                                                                        |
|---|----------------------------------------|----------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 1 | Camera connected to GMSL (YUV format)  | JP5.1.2                                | https://github.com/SENSING-Technology/nvidia-jetson-camera-drivers/tree/main/Jetson%20AGX%20Orin%20Devkit/SG8A-ORIN-GMSL2-F/JetPack5.1.2/SG8A_ORIN_GMSL2-F_V2_AGX_Orin_YUV_GMSL1_JP5.1.2_L4TR35.4.1 |
| 2 | Camera connected to GMSL 2(YUV format) | JP6                                    | https://github.com/SENSING-Technology/nvidia-jetson-camera-drivers/tree/main/Jetson%20AGX%20Orin%20Devkit/SG8A-ORIN-GMSL2-F/JetPack5.1.2/SG8A_ORIN_GMSL2-F_V2_AGX_Orin_YUV_GMSL1_JP5.1.2_L4TR35.4.1 |
| 3 | Camera connected to GMSL 2(YUV format) | JP6.1                                  | https://github.com/SENSING-Technology/nvidia-jetson-camera-drivers/tree/main/Jetson%20AGX%20Orin%20Devkit/SG8A-ORIN-GMSL2-F/JetPack5.1.2/SG8A_ORIN_GMSL2-F_V2_AGX_Orin_YUV_GMSL1_JP5.1.2_L4TR35.4.1 |

<br />

**Step 2.** Perform a system update on the NVIDIA Jetson device.<br />
We can use NVIDIA SDK Manager Linux Software or we can directly use the NVIDIA Linux Driver Package via Linux command line
 to flash JetPack OS into the reComputer J1010. 
For the beginners to NVIDIA Jetson, we highly recommand NVIDIA SDK Manager.




## FAQ

