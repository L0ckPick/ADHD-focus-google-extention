
document.addEventListener('DOMContentLoaded', function() {
    const player = document.getElementById('youtube-player');
    const playPauseButton = document.getElementById('play-pause-btn');
    const nextTrackButton = document.getElementById('next-track-btn');
  
    let isPlaying = true;
  
    // Play/pause functionality
    playPauseButton.addEventListener('click', function() {
      if (isPlaying) {
        player.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
        playPauseButton.textContent = "Play";
      } else {
        player.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
        playPauseButton.textContent = "Pause";
      }
      isPlaying = !isPlaying;
    });
  
    // Next track functionality (optional)
    nextTrackButton.addEventListener('click', function() {
      // You can change the `src` of the iframe to load a new video
      const newVideoId = "NEW_YOUTUBE_VIDEO_ID"; // Replace with your next video ID
      player.src = `https://www.youtube.com/embed/${newVideoId}?autoplay=1&loop=1&playlist=${newVideoId}`;
    });
  });
