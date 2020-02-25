// jshint esversion:6

document.addEventListener("keydown", function(e){ // add eventlistener
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`); // select the audio element based on the keycode of the key that was pressed
  if (!audio) return;   // for a key whose keycode has no audio tag, stop the function altogether
  
  audio.currentTime  = 0; // This ensures that the audio always starts from the beginning when the key is pressed repeatedly
  audio.play(); // play  the audio
});