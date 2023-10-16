    //暂停播放
    function stopplayAudio(){
        if (isplaying=="true") {
          isplaying=false;
          source.stop();
          return;
          
        }
      }
      //播放
      function playAudiot(audioData){
        var buffer;
        audioContext.decodeAudioData(audioData, function(buffer) {
            source = audioContext.createBufferSource();
            source.buffer = buffer;
  
            source.connect(panner);
            visualizeAudio();
            source.start();
            isplaying="true";
            source.addEventListener('ended', function() {
              source.disconnect(panner);
              isplaying="false";
            });
          });
      }
      // 改变音频
      function changeAudio() {
        var request = new XMLHttpRequest();
        request.open('GET', selectedAudio, true);
        request.responseType = 'arraybuffer';
  
        request.onload = function() {
           audioData = request.response;
        }
  
        request.send();
      }
      
      stopplay.addEventListener('click', function() {
        stopplayAudio();  
      });
      // 播放按钮点击事件
      playButton.addEventListener('click', function() {
        if (isplaying=="true"){
          alert("请先暂停正在播放的音频")
          return;
        }
        if (audioData) {
          playAudiot(audioData);
          if (!(audioSelect.value)){
            audioData=null;
          }
          else{
            changeAudio();
          }
          return;
        }
        alert("请选择/上传音频");
      });
   
  
      // 音频选择事件
      audioSelect.addEventListener('change', function() {
        selectedAudio = audioSelect.value;
        changeAudio();
      });
  
    
    
      // 上传按钮点击事件
      uploadButton.addEventListener('click', function() {
        fileInput.click();
      });
  
  
  
  
  
      // 文件选择事件
      fileInput.addEventListener('change', function() {
        var file = fileInput.files[0];
        var reader = new FileReader();
        reader.onload = function(e) {
           audioData = e.target.result;
        };
        reader.readAsArrayBuffer(file);
      });
//换图片
function changeImage() {
  var dropdown = document.getElementById("audioSelect");
  var dot = document.getElementById("redDot");
  var selectedValue = dropdown.value;
  if (selectedValue=="https://github.com/ysngfo/jikedaozuoye/blob/main/%E5%8F%AA%E5%9B%A0%E4%BD%A0%E5%A4%AA%E7%BE%8E.mp3"){  dot.style.backgroundImage = "url(./篮球.jpeg)";}
else if (selectedValue=="https://github.com/ysngfo/jikedaozuoye/blob/main/%E6%88%91%E4%B8%8D%E6%9B%BE%E5%BF%98%E8%AE%B0.mp3"){  dot.style.backgroundImage = "url(./派蒙.jpeg)";}
else {
  dot.style.backgroundImage = "url(./鼠标.jpeg)";
}
}
