//FOR CURRENT TIME
function myTimer() {
    const date = new Date();
    document.getElementById("timer").innerHTML = date.toLocaleTimeString();
}
var currentTime = document.getElementById("timer").innerHTML = myTimer();
setInterval(myTimer, 1000);

//FOR CURRENT TIME ON TIME BUTTON
var timer = document.getElementById("timer");
var timeBtn = document.getElementById("time-btn");
timeBtn.addEventListener("click", function(){
    heartRate.style.display ="none";
    timer.style.display = "block";

});

//FOR HEART BEAT
var heartRate = document.getElementById("heart-rate");
var hearBtn = document.getElementById("heart-btn");
hearBtn.addEventListener("click", function () {
    timer.style.display = "none";
    heartRate.style.display = "block";
})

//FOR WATCH COLOR
var image = document.getElementById("watch-img");
var blueWatch = document.getElementById("blue");
blueWatch.addEventListener("click",function(){
    image.src = "blueWatch.png";
})

var blackWatch = document.getElementById("black");
blackWatch.addEventListener("click", function(){
    image.src = '/black.png';
})

var redWatch = document.getElementById("red");
redWatch.addEventListener("click", function(){
    image.src = '/red.png';
})

var purpleWatch = document.getElementById("purple");
purpleWatch.addEventListener("click", function(){
    image.src = '/purple.png';
})

var pinkWatch = document.getElementById("pink");
pinkWatch.addEventListener("click", function(){
    image.src = '/pink.png';
})


