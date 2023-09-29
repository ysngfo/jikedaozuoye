function updateDotPosition(x, y) {
    var centerX = containerWidth / 2;
    var centerY = containerHeight / 2;
    var mouseX = x - centerX;
    var mouseY = y - centerY;
    var distance = Math.sqrt(mouseX * mouseX + mouseY * mouseY);

    if (distance <= 280) {
      redDot.style.left = x + 'px';
      redDot.style.top = y + 'px';
    } else {
      var angle = Math.atan2(mouseY, mouseX);
      var dx = Math.cos(angle) * 280;
      var dy = Math.sin(angle) * 280;

      redDot.style.left = centerX + dx + 'px';
      redDot.style.top = centerY + dy + 'px';
    }

    // 计算音频参数
    var dotX = parseFloat(redDot.style.left) || 0;
    var dotY = parseFloat(redDot.style.top) || 0;
    var dotCenterX = dotX - centerX;
    var dotCenterY = dotY - centerY;
    var dotDistance = Math.sqrt(dotCenterX * dotCenterX + dotCenterY * dotCenterY);
    var dotDistanceFactor = 0.3 + (1 - dotDistance / 300) * 0.7;

    var pannerX = dotCenterX / (containerWidth / 2);
    var pannerY = dotCenterY / (containerHeight / 2);
    redDotdistance=dotDistance;
    panner.setPosition(pannerX, pannerY, 0);
    gainNode.gain.value = dotDistanceFactor;
  }

  // 监听鼠标移动事件
  container.addEventListener('mousemove', function(event) {
    var x = event.clientX;
    var y = event.clientY;

    updateDotPosition(x, y);
  });