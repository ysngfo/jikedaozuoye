    // 计算容器的宽度和高度
    function ContainerSize() {
        containerWidth = container.clientWidth;
        containerHeight = container.clientHeight;
        visualizer.width=container.clientWidth;
        visualizer.height=container.clientHeight;
        ccolar.width=container.clientWidth;
        ccolar.height=container.clientHeight;
        visualizeAudio()
      }
  
      // 初始化容器大小并监听窗口调整事件
      ContainerSize();
      window.addEventListener('resize', ContainerSize);