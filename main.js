'use strict';

function playSound(elId) {
  var audioEls = document.getElementsByTagName('audio');
  var playEl;
  for (var i = 0; i < audioEls.length; i++) {
    var el = audioEls[i];
    if (el.id == elId) {
      playEl = el;
      continue;
    }
    if (!el.paused) {
      el.pause();
      el.currentTime = 0;
    }
  }
  if (playEl.paused) {
    playEl.play();
  } else {
    playEl.pause();
    playEl.currentTime = 0;
  }
}
