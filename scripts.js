<video controls loop autoplay id="videoPlayer">
    <source src="tu_video.mp4" type="video/mp4"/>
      //Tu navegador no admite la reproducción de video.</video>


videoPlayer.addEventListener('ended', function () {
  videoPlayer.currentTime = 0; // Reinicia el video al principio
  videoPlayer.play();
});


const videoPlayer = document.getElementById('videoPlayer');
const playButton = document.getElementById('playButton');
playButton.addEventListener('click', function () {
  if (videoPlayer.paused) {
    videoPlayer.play();
  } else {
    videoPlayer.pause();
  }
});

