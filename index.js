const videoPlayer = document.getElementById('video-player');

function loadFile(event){
    videoPlayer.src = URL.createObjectURL(event.target.files[0]);
}
