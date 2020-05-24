
//click action sound
var noOfDrums = document.querySelectorAll(".drum").length;
for (var i = 0; i < noOfDrums; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", function() {
    var valueInnerHtml = this.innerHTML;
    createMusic(valueInnerHtml);
    buttonAnimation(valueInnerHtml);
  })
}

//keypress action sound
document.addEventListener("keypress", function(event) {
createMusic(event.key);
  buttonAnimation(event.key);
})

//Generic Method to create Music
function createMusic(key) {
  switch (key) {
    case "M":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;
    case "a":
      var kick = new Audio("sounds/tom-4.mp3");
      kick.play();
      break;
    case "Y":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;
    case "N":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;
    case "k":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
    case "❤️":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;
    default:
    var tom4 = new Audio("sounds/kick-bass.mp3");
    tom4.play();
  }
}

//Method to create color change on keypress or click

function buttonAnimation(currentKey) {
  var currentButton = document.querySelector("." + currentKey);
  currentButton.classList.add("pressed");

  setTimeout(function() {
    currentButton.classList.remove("pressed");
  }, 100);
}
