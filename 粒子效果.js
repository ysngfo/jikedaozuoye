function visualizeAudio() {
	var analyser = audioContext.createAnalyser();
	var dataArray = new Uint8Array(180);
  
	var canvas = document.getElementById('visualizer');
	var canvasCtx = canvas.getContext('2d');
	canvasCtx.clearRect(0, 0, canvas.width, canvas.height);
  
	var du = 2;	//角度
	var R = 280;	//半径
	var W = 4;	//宽（线条的粗细）
	var oW = canvas.width;
	var oH = canvas.height;
	function draw() {
	  canvasCtx.clearRect(0, 0, canvas.width, canvas.height);
		
	  analyser.getByteFrequencyData(dataArray);
	  if (dataArray==0) {
		drawCircle()
	  }
	  for (var i = 0; i < 720; i++) {
		var value = dataArray[i/4] / 10;
		Rv1 = (R -value*(1-redDotdistance/400))-5;
		Rv2 = (R +value*(1-redDotdistance/400))+5;
		var x = Math.sin((i * du) / 720* Math.PI) * Rv1 + oW/2;
		var y = -Math.cos((i * du) / 720* Math.PI) * Rv1 + oH/2;
		var endX = Math.sin((i * du) / 720 * Math.PI) * Rv2 + oW/2;
		var endY = -Math.cos((i * du) / 720 * Math.PI) * Rv2+ oH/2;
		
		canvasCtx.beginPath();
		canvasCtx.lineWidth = W; 
		canvasCtx.moveTo(x, y);
		canvasCtx.lineTo(endX, endY);
		canvasCtx.strokeStyle = 'hsl(' + i + ', 100%, 50%)';
		canvasCtx.stroke();
		
	  }
	  
  
	  requestAnimationFrame(draw);
	}
  
	source.connect(analyser);
	draw();
  }
  

  