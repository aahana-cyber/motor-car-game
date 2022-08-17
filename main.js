var blueCar = document.getElementById("bluecar");
var raceCar = document.getElementById("racecar");
var result = document.getElementById("result");
const score = document.getElementById("score");
var game = document.getElementById("game");
var counter = 0;
var jumpsound = document.getElementById("jumpsound");

//blue car movement
blueCar.addEventListener("animationiteration", function(){
  var ran = ((Math.floor(Math.random() * 3))*130)
  blueCar.style.left = ran + "px";
  counter++;
})

//race car movement
window.addEventListener("keydown", function(e){

 if(e.keyCode == "39"){
   var raceCarLeft = parseInt(window.getComputedStyle(raceCar).getPropertyValue("left"))
   if(raceCarLeft < 260){
      raceCar.style.left = (raceCarLeft + 130) + "px"
  }
  jumpsound.play()
}

if(e.keyCode == "37"){
  var raceCarLeft = parseInt(window.getComputedStyle(raceCar).getPropertyValue("left"))
  if(raceCarLeft > 0){
    raceCar.style.left = (raceCarLeft - 130) + "px"
    jumpsound.play()
  }
}
})

//game over
setInterval(function Gameover()
{
  var blueCarTop = parseInt(window.getComputedStyle(blueCar).getPropertyValue("top"));
  var raceCarTop = parseInt(window.getComputedStyle(raceCar).getPropertyValue("top"));
  var blueCarLeft = parseInt(window.getComputedStyle(blueCar).getPropertyValue("left"));
  var raceCarLeft = parseInt(window.getComputedStyle(raceCar).getPropertyValue("left"));

  if((blueCarLeft === raceCarLeft) && (raceCarTop <= blueCarTop+100) && (raceCarTop+100 >= blueCarTop)){
    result.style.display = "block";
    game.style.display = "none";
    score.innerHTML = `Score: ${counter} `;

    counter = 0;
  }
}, 10)
