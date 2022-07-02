var imageContainer = document.getElementById("imageContainer");
var buttonContainer = document.getElementById("buttonContainer");

var logo = document.getElementById("logo");
var startButton = document.getElementById("startButton");
var restartButton = document.getElementById("restartButton");

var dropDownButton = document.getElementById("dropDownButton");
var dropDownContainer = document.getElementById("dropDownContainer");
dropDownContainer.style.display = "none";
var condition = "hidden";

var easyButton = document.getElementById("easyButton");
var normalButton = document.getElementById("normalButton");
var hardButton = document.getElementById("hardButton");

var gameOverContainer = document.getElementById("gameOver");
var result = document.getElementById("result");
var timeLeftElement = document.getElementById("timeLeft");

var selectedDiff = document.getElementById("selectedDiff");

var finalScore = document.getElementById("finalScore");
var finalWrong = document.getElementById("finalWrong");
var highScoreElement = document.getElementById("highScoreElement");

var scoreElement = document.getElementById("score");
scoreElement.style.display = "none";

var wrongElement = document.getElementById("wrong");
wrongElement.style.display = "none";

var timer = document.getElementById("timer");
timer.style.display = "none";

var timeLeft = 0;
var highScore = 0;
var score = 0;
var wrong = 0;

var mode = 1;

var selectedBtn = "";
var selectedImg = "";

var agents = [
    {
        agent: "Astra",
        src: "images/astra.png"
    },
    {
        agent: "Chamber",
        src: "images/chamber.png"
    },
    {
        agent: "Jett",
        src: "images/jett.png"
    },
    {
        agent: "Kayo",
        src: "images/kayo.png"
    },
    {
        agent: "Killjoy",
        src: "images/killjoy.png"
    },
    {
        agent: "Raze",
        src: "images/raze.png"
    },
    {
        agent: "Reyna",
        src: "images/reyna.png"
    },
    {
        agent: "Skye",
        src: "images/skye.png"
    },
    {
        agent: "Sova",
        src: "images/sova.png"
    },
    {
        agent: "Viper",
        src: "images/viper.png"
    },
]

var difficulty = [
    {
        name: "Easy",
        time: 60
    },
    {
        name: "Normal",
        time: 30
    },
    {
        name: "Hard",
        time: 15
    }
]

dropDownButton.onclick = function dropDown(){
    console.log("yes")
    if(condition == "hidden"){
        dropDownContainer.style.display = "block";
        condition = "visible";
    }
    else if(condition == "visible"){
        dropDownContainer.style.display = "none";
        condition = "hidden";
    }
}

easyButton.onclick = function selectEasy(){
    mode = 0;
    selectedDiff.innerText = "selected: " + difficulty[mode].name;
}

normalButton.onclick = function selectNormal(){
    mode = 1;
    selectedDiff.innerText = "selected: " + difficulty[mode].name;
}

hardButton.onclick = function selectHard(){
    mode = 2;
    selectedDiff.innerText = "selected: " + difficulty[mode].name;
}

function shuffle(array, shuffleAmount){
    for(i = 0; i < shuffleAmount; i++){
        for(j = 0; j < array.length; j++){
            var randomNumber = Math.floor(Math.random() * array.length);
            var temp = array[j];
            array[j] = array[randomNumber];
            array[randomNumber] = temp;
        }
    }
    return array
}

function createElements(array){

    shuffle(array, 6);
    for(i = 0; i < array.length; i++){
        var img = document.createElement("img");
        img.src = array[i]["src"];
        img.dataset.agent = array[i]["agent"];
        img.classList.add("border", "border-secondary", "rounded", "m-2");
        img.style.height = "225px";
        img.onclick = function(){
            selectedImg = this;
            if(selectedBtn != "" && selectedImg != ""){
                if(selectedBtn.dataset.agent == selectedImg.dataset.agent){
                this.style.display = "none";
                selectedBtn.style.display = "none";
                selectedImg = "";
                selectedBtn = "";
                score++;
                scoreElement.innerText = "score: " + score;
                }
                else{
                    wrongMatch();
                } 
            }    
        }
        imageContainer.appendChild(img);
    }

    shuffle(array, 6)
    for(i = 0; i < array.length; i++){
        var button = document.createElement("button");
        button.innerHTML = array[i]["agent"];
        button.dataset.agent = array[i]["agent"];
        button.classList.add("btn-lg", "btn-danger", "m-3");
        button.onclick = function() {
            selectedBtn = this;
            if(selectedBtn != "" && selectedImg != ""){
                if(selectedBtn.dataset.agent == selectedImg.dataset.agent){
                    this.style.display = "none";
                    selectedImg.style.display = "none";
                    selectedImg = "";
                    selectedBtn = "";
                    score++;
                    scoreElement.innerText = "score: " + score;
                }
                else{
                    wrongMatch();
                }
            }
        }
        buttonContainer.appendChild(button);
    }
}

function wrongMatch(){
    wrong++
    wrongElement.innerText = "wrong: " + wrong;
    selectedImg = "";
    selectedBtn = "";
}

function startTimer(difficulty){
    var time = difficulty.time;
    timer.innerText = time;
    var countDown = setInterval(function(){
        timer.innerText = time - 1;
        time--;
        timeLeft = time;
        if(time == 0 || score == agents.length){
            clearInterval(countDown);
            gameOver();
        }
    }, 1000);
}

function gameOver(){
    imageContainer.style.display = "none";
    buttonContainer.style.display = "none";
    scoreElement.style.display = "none";
    timer.style.display = "none";
    wrongElement.style.display = "none";
    gameOverContainer.style.display = "block";
    if(score == agents.length){
        result.innerText = "You win!";
    }
    else{
        result.innerText = "Nice try.";
    }
    if(highScore <= score){
        highScore = score;
    }
    highScoreElement.innerText = "High Score: " + highScore;
    timeLeftElement.innerText = "Time Left: " + timeLeft;
    finalScore.innerText = "score: " + score;
    finalWrong.innerText = "wrong: " + wrong;
    highScoreElement.innerText
}

startButton.onclick = startGame;

function startGame(){
    dropDownContainer.style.display = "none";
    dropDownButton.style.display = "none";
    gameOverContainer.style.display = "none";
    scoreElement.innerText = "score: 0";
    wrongElement.innerText = "wrong: 0";

    imageContainer.style.display = "block";
    buttonContainer.style.display = "block";
    imageContainer.innerHTML = "";
    buttonContainer.innerHTML = "";

    timeLeft = 0;
    score = 0;
    wrong = 0;
    startButton.style.display = "none";
    logo.style.display = "none";
    scoreElement.style.display = "block";
    wrongElement.style.display = "block";
    timer.style.display = "block";
    createElements(agents);
    startTimer(difficulty[mode]);
}

restartButton.onclick = startGame;


