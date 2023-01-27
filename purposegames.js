var elem = document.body;
var startButton = document.getElementById("startGame");

function eventFire(el, etype){
  if (el.fireEvent) {
    el.fireEvent('on' + etype);
  } else {
    var evObj = document.createEvent('Events');
    evObj.initEvent(etype, true, false);
    el.dispatchEvent(evObj);
  }
}

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

eventFire(startButton, "click");

setInterval(function(){
    if (elem) {
        elem.style.outline = "none";
        elem.style.zIndex = "unset";
    }

    elem = document.querySelectorAll('[data-text="' + document.getElementById("question-box").innerText + '"]')[1];

    elem.style.outline = "1px solid red";
    elem.style.outlineOffset = "4px";
    elem.style.zIndex = "999999";
    eventFire(elem, "click");
}, 10); // change to 300 if you actually want to get on the leaderboard without being detected
