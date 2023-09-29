      // 创建PannerNode控制音频的位置和方向
    var panner = audioContext.createPanner();
    panner.panningModel = 'HRTF';
    panner.distanceModel = 'inverse';
    panner.refDistance = 1;
    panner.maxDistance = 10000;
    panner.rolloffFactor = 1;
    panner.coneInnerAngle = 360;
    panner.coneOuterAngle = 0;
    panner.coneOuterGain = 0;

    // 创建GainNode控制音频的音量
    var gainNode = audioContext.createGain();
    gainNode.gain.value = 1;
    
    // 连接音频节点
    panner.connect(gainNode);
    gainNode.connect(audioContext.destination);