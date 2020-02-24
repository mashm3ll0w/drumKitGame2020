// jshint esversion:6

function playSound(pressedKey){
  const audio = document.querySelectorAll(`audio[data-key="${pressedKey.keyCode}"]`);
  const key = document.querySelectorAll(`div[data-key="${pressedKey.key}"]`);
  if(!audio) return;

  audio.currentTime = 0;
  audio.play();
}