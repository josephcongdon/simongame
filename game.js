let buttonColours = ["red", "blue", "green", "yellow"];
let gamePattern = [];
let userClickedPattern = [];

let level = 0;

// if (level === 0){
// $(document).keydown(nextSequence);
// }

let started = false;
// nextSequence covers your random generated numbers-which color-what animation

function nextSequence() {
  userClickedPattern =[];
  const randomNumber = Math.floor(Math.random() * 4);
  const randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);


  // Your color put to animation and sound

  $("#" + randomChosenColour)
    .fadeIn(100)
    .fadeOut(100)
    .fadeIn(100);
    playSound(randomChosenColour);
    level++;

      $("#level-title")[0].innerHTML = "Level " + level;
}

function playSound(name) {
  let audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
};


// this logs which color button i push

$(".btn").click(function() {
  let btnClicked = $(this).attr("id");
  console.log(btnClicked);
  userClickedPattern.push(btnClicked);
  console.log(userClickedPattern);
  playSound(btnClicked);
  animatePress(btnClicked);
  console.log(animatePress);
  // nextSequence();
  checkAnswer(userClickedPattern.length-1);
});

function animatePress(currentColour) {
  $("#" + currentColour).addClass("pressed");
  setTimeout(function () {
  $("#" + currentColour).removeClass("pressed");
}, 100);
}

function startGame () {
    if(!started) {
  $("#level-title").text("Level" + level);
      nextSequence();
      started = true;
    }
};

document.addEventListener("keydown", startGame);


// $(document).on("keydown", function(){
//   nextSequence();
// });

const checkAnswer = () => {

let currentLevel = userClickedPattern.length - 1;

if (userClickedPattern[currentLevel] !== gamePattern[currentLevel])
{
  playSound("wrong");
 console.log ("wrong");
   $("#level-title").text("Game Over,Press Any Key to Restart");
   $("body").addClass("game-over");
   setTimeout(() => $("body").removeClass("game-over"),200);
   startOver();

}

if(userClickedPattern.length === gamePattern.length) {
  setTimeout(() => nextSequence(), 1000);
}
}

function startOver()
{  level = 0;
   // userClickedPattern = [];
   gamePattern =[];
   return started = false;
 }

// function checkAnswer(currentLevel) {
//
//   if (gamePattern[currentLevel] === userClickedPattern[currentLevel]){
//   console.log("success");
//    if (userClickedPattern.length === gamePattern.length){
//  setTimeout(function () {
//  nextSequence();
//  }, 1000);
// }
// } else {
// console.log("wrong");
//
// playSound("wrong");
// $("body").addClass("game-over");
// setTimeout(function(){
//   $("body").removeClass("game-over");
// }, 200);
//
// $("#level-title").text("Game Over, Press Any Key to Restart");
//
// startOver();
// }
// }
