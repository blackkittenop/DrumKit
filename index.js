//to get the number of the elements in drum class
var number = document.querySelectorAll(".drum").length;

// to apply eventListener to every elements in drum array when mouose clicked
for(var i=0;i<number;i++){
document.querySelectorAll("button")[i].addEventListener("click",function(){
var instrumentSelector = this.innerHTML;

makesound(instrumentSelector);

animationToButton(instrumentSelector);

});
}




// to get the event listener to particular elements by pressing of keyboard keys
document.addEventListener("keydown", function(event){
makesound(event.key);
animationToButton(event.key);
})

// make the function to respond to event by user and add sound to particular event pressed
function makesound(value){

//switch statement to respond to different buttons clicked by user
  switch(value)
  {
    case "w":
    var tom1 = new Audio('sounds/tom-1.mp3');
    tom1.play();
    break;

    case "a":
    var tom2 = new Audio('sounds/tom-2.mp3');
    tom2.play();
    break;

    case "s":
    var tom3 = new Audio('sounds/tom-3.mp3');
    tom3.play();
    break;

    case "d":
    var tom4 = new Audio('sounds/tom-4.mp3');
    tom4.play();
    break;

    case "j":
    var snare = new Audio('sounds/snare.mp3');
    snare.play();
    break;

    case "k":
    var kick = new Audio('sounds/kick-bass.mp3');
    kick.play();
    break;

    case "l":
    var crash = new Audio('sounds/crash.mp3');
    crash.play();
    break;
  }
}



//to give animation to buttons
function animationToButton(key){
  var currentKey = "."+key;



//to add class to particular element
document.querySelector(currentKey).classList.add("pressed");

//to remove class from particular element after 1 milisecond of timeinterval
setTimeout(function(){
  document.querySelector(currentKey).classList.remove("pressed");},100)
}
