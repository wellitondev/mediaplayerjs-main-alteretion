let video = document.getElementById("video1");
video.addEventListener("ended", stopVideo);

onload = () => {
    const playerMainButton = document.getElementById("main-btn");
    const playerFullscreenButton = document.getElementById("fullscreen");
  
    playerMainButton.addEventListener("click", play);
    playerMainButton.addEventListener("click", toggleToPause);
  
    playerFullscreenButton.addEventListener("click", fullscreen);
    playerFullscreenButton.addEventListener("click", toggleToNormalScreen);
  };

function toggleToPause() {
    const element = document.getElementById("main-btn");
  
    element.setAttribute("src", "./assets/images/Pause.png");
    element.setAttribute("alt", "Pausar");
    element.setAttribute("title", "Pausar");
  
    element.removeEventListener("click", play);
    element.removeEventListener("click", toggleToPause);
  
    element.addEventListener("click", pause);
    element.addEventListener("click", toggleToPlay);
  }
  
  function toggleToPlay() {
    const element = document.getElementById("main-btn");
  
    element.setAttribute("src", "./assets/images/Play.png");
    element.setAttribute("alt", "Reproduzir");
    element.setAttribute("title", "Reproduzir");
  
    element.removeEventListener("click", pause);
    element.removeEventListener("click", toggleToPlay);
  
    element.addEventListener("click", play);
    element.addEventListener("click", toggleToPause);
  }

  function toggleToNormalScreen(e) {
    const element = e.target;
  
    element.setAttribute("src", "assets/images/exitfullscreen.png");
    element.setAttribute("alt", "Tela normal");
    element.setAttribute("title", "Minimizar");
  
    element.removeEventListener("click", fullscreen);
    element.removeEventListener("click", toggleToNormalScreen);
  
    element.addEventListener("click", normalScreen);
    element.addEventListener("click", toggleToFullscreen);
  }
  
  function toggleToFullscreen(e) {
    const element = e.target;
  
    element.setAttribute("src", "assets/images/fullscreen.png");
    element.setAttribute("alt", "Tela cheia");
    element.setAttribute("title", "Maximizar");
  
    element.removeEventListener("click", normalScreen);
    element.removeEventListener("click", toggleToFullscreen);
  
    element.addEventListener("click", fullscreen);
    element.addEventListener("click", toggleToNormalScreen);
  }
  
  function displayControllers() {
    const controllers = document.getElementsByClassName("controls-row")[0];
  
    controllers.style.display = "flex";
  }
  
  function hideControllers() {
    const controllers = document.getElementsByClassName("controls-row")[0];
  
    controllers.style.display = "none";
  } 

    function retroceder(){
        video.currentTime -= 10;
}

    function avancar(){
        video.currentTime += 10;
}

    function diminuir_vel(){
        if (video.playbackRate <= 0.5) {
            return;
          }
        
          video.playbackRate -= 0.25;
}

    function aumentar_vel(){
        if (video.playbackRate >= 2) {
            return;
        }

        video.playbackRate += 0.5;
}

    function vol_diminuir(){
        if( video.volume > 0)  video.volume -= 0.1;
    
}

    function vol_aumentar(){
        if( video.volume < 1)  video.volume += 0.1;
}

function play(){
    video.play();
}

function pause(){
    video.pause();
}

function stopVideo(){
    video.pause();
    toggleToPlay();
    video.currentTime = 0;
}

function fullscreen() {
    video.requestFullscreen();
  }
  
  function normalScreen() {
    document.exitFullscreen();
  }



