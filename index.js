alert("Please Use Earphone for better Experience\n\nबेहतर अनुभव के लिए इयरफोन का उपयोग करें");
var numberOfDrumButtons = document.querySelectorAll(".drum").length;
var i=0;
while(i <numberOfDrumButtons)
{
  document.querySelectorAll(".drum")[i].addEventListener("click",function(){

  var button = this.innerHTML;
  playSound(button);
  addAnimation(button);

});
  i++;
}

document.addEventListener("keypress",function(event){
  playSound(event.key);
  addAnimation(event.key);
});

function playSound(key){
  switch (key) {
    case "q":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1 .play();
      break;

    case "i":
      var snare = new Audio("sounds/distortotom.mp3");
      snare.play();
      break;

    case "w":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "o":
      var crash = new Audio("sounds/electrotom.mp3");
      crash.play();
      break;

    case "e":
      var tom3 = new Audio("sounds/snare.mp3");
      tom3.play();
      break;

    case "p":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;

    case "a":
      var tom1 = new Audio("sounds/dhin.mp3");
      tom1 .play();
      break;

    case "s":
      var snare = new Audio("sounds/dha.mp3");
      snare.play();
      break;

    case "d":
      var tom2 = new Audio("sounds/tabla2.mp3");
      tom2.play();
      break;

    case "h":
      var crash = new Audio("sounds/tabla3.mp3");
      crash.play();
      break;

    case "l":
      var tom3 = new Audio("sounds/tabla5.mp3");
      tom3.play();
      break;

    case "k":
      var kick = new Audio("sounds/tabla6.mp3");
      kick.play();
      break;

    case "z":
      var tom1 = new Audio("sounds/guitar.mp3");
      tom1 .play();
      break;

    case "x":
      var snare = new Audio("sounds/guitar1.mp3");
      snare.play();
      break;

    case "c":
      var tom2 = new Audio("sounds/guitar2.mp3");
      tom2.play();
      break;

    case "b":
      var crash = new Audio("sounds/guitar3.mp3");
      crash.play();
      break;

    case "n":
      var tom3 = new Audio("sounds/guitar4.mp3");
      tom3.play();
      break;

    case "m":
      var kick = new Audio("sounds/crash.mp3");
      kick.play();
      break;
    default:
    console.log("button");
  }
}

function addAnimation(currentKey){
   var activeBtn = document.querySelector("."+currentKey);
   activeBtn.classList.add("pressed");
   setTimeout(function(){
     activeBtn.classList.remove("pressed");
   },100);

}
