var audio = document.getElementById("music");
var allowContinue = true;
var songs = ['assets/media/whistle.mp3'];
var shuffledSongs = [];

function shuffle(array) {
  for (let currentIndex = array.length; currentIndex !== 0; currentIndex--) {
    const randomIndex = Math.floor(Math.random() * currentIndex);
    const temporaryValue = array[currentIndex - 1];
    array[currentIndex - 1] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}

function proceed() {
  if (allowContinue) {
    document.getElementById("main").style.opacity = 1;
    document.querySelector(".enter").style.opacity = 0;
    setTimeout(function () {
      shuffledSongs = shuffle(songs);
      audio.src = shuffledSongs[0];
      audio.volume = 0.25;
      audio.loop = true;
      audio.autoplay = true;
      audio.play();
      video.play();
    }, 250);
    setTimeout(function () {
      document.querySelector(".enter").remove();
    }, 1000);
    audio.onended = function () {
      shuffledSongs.shift();
      if (shuffledSongs.length > 0) {
        audio.src = shuffledSongs[0];
        audio.play();
      }
    };
    allowContinue = false;
  }
}