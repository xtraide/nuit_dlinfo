
var MusicIsPlay = false;
var audio = document.getElementById('myAudio'); 
function play() {
    if (MusicIsPlay === false) {
        audio.play(); 
        MusicIsPlay = true;
    } else {
        audio.pause();
        MusicIsPlay = false;
    }
    console.log(MusicIsPlay);
}

