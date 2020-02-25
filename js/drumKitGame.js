// jshint esversion:6

document.addEventListener("keydown", function(e){ // add eventlistener
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`); // select the audio element based on the keycode of the key that was pressed
  if (!audio) return;   // for a key whose keycode has no audio tag, stop the function altogether
  
  audio.currentTime  = 0; // This ensures that the audio always starts from the beginning when the key is pressed repeatedly
  audio.play(); // play  the audio

  const pressedKey = document.querySelector(`div[data-key="${e.keyCode}"]`); // select the square whose sound you need to play
  pressedKey.classList.add("playing");  // add the class of "playing" to the pressed square to scale it up some
  setTimeout(() => {
    pressedKey.classList.remove("playing"); // timeout to remove the class of playing after 0.05 seconds
  }, 50);
});