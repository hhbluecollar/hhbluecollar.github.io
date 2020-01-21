
"use strict";
//declare variables 
let start, stop, animation, size, speed, textarea;
let animationValue = "Blank", delay = 250, interval, fontsize = "7pt";
let splitText = "=====\n", currentPosition = 0;

//start functions after page is loaded
window.onload = function () {

    start = document.getElementById('start');
    stop = document.getElementById('stop');
    animation = document.getElementById('animation');
    size = document.getElementById('fontsize');
    speed = document.getElementById('turbo');
    textarea = document.getElementById('text-area');
    /*
        load clickable(s)
    */
    start.onclick = startAnimation;
    stop.onclick = stopAnimation;
    animation.onclick = animationSelect;
    size.onclick = sizeSelect;
    speed.onclick = speedChange;
}

//start the animation process
function startAnimation() {
    console.log("STARTED");
    textarea.value = "";
    start.disabled = true;
    stop.disabled = false;
    animation.disabled = true;
    animationProgress();
}
//this function progresses for a selected type of animation with the given delay
function animationProgress(){
    animationValue = animation.options[animation.selectedIndex].value;
    let data = ANIMATIONS[animationValue].split(splitText);

    interval = setInterval(function () {
    fontsize = size.options[size.selectedIndex].value;
    textarea.style.fontSize = fontsize;

        if (currentPosition === data.length) {
            textarea.value = "";
            currentPosition = 0;
        }
        textarea.value = data[currentPosition];
        currentPosition++;
    }, delay);
}

function stopAnimation() {

    stop.disabled = true;
    start.disabled = false;
    animation.disabled = false;
    currentPosition = 0;
    clearInterval(interval);
}

function animationSelect() {
    animationValue = animation.options[animation.selectedIndex].value;
    textarea.value = ANIMATIONS[animationValue];
}

function sizeSelect() {
    fontsize = size.options[size.selectedIndex].value;
    textarea.style.fontSize = fontsize;
}
//changes the speed when the turbo checkbox is clicked. 
function speedChange() {
    if (speed.checked) {
        delay = 50; 
       console.log("SPEED Faster! delay of " + delay);
    } 
    else {
        delay = 250;
        console.log("SPEED slower! delay of " + delay);        
    }

    clearInterval(interval);
    animationProgress();
}
