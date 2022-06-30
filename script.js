var imageContainer = document.getElementById("imageContainer");
var buttonContainer = document.getElementById("buttonContainer");
var logo = document.getElementById("logo");
var startButton = document.getElementById("startButton");

var scoreElement = document.getElementById("score");
scoreElement.style.display = "none";

var timer = document.getElementById("timer");
timer.style.display = "none";

var score = 0;

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
        mode: "easy",
        time: 60
    },
    {
        mode: "normal",
        time: 30
    },
    {
        mode: "hard",
        time: 15
    }
]

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
        img.onclick = function(){
            selectedImg = this;
            console.log(this);
            if(selectedBtn != "" && selectedImg != ""){
                if(selectedBtn.dataset.agent == selectedImg.dataset.agent){
                this.style.display = "none";
                selectedBtn.style.display = "none";
                selectedImg = "";
                selectedBtn = "";
                score++;
                scoreElement.innerText = "score: " + score;
                if (score == array.length){
                    console.log("you win");
                }
                }
                else{
                console.log("wrong");
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
            console.log(this);
            if(selectedBtn != "" && selectedImg != ""){
                if(selectedBtn.dataset.agent == selectedImg.dataset.agent){
                    this.style.display = "none";
                    selectedImg.style.display = "none";
                    selectedImg = "";
                    selectedBtn = "";
                    score++;
                    scoreElement.innerText = "score: " + score;
                    if (score == array.length){
                        console.log("you win");
                    }
                }
                else{
                    console.log("wrong");
                }
            }
        }
        buttonContainer.appendChild(button);
    }
}

function startTimer(difficulty){
    var time = difficulty;
    timer.innerText = time;
    var countDown = setInterval(function(){
        timer.innerText = time -1;
        time--;
        if(time == 0){
            clearInterval(countDown);
            gameOver();
        }
    }, 1000);
}

function gameOver(){
    imageContainer.style.display = "none";
    buttonContainer.style.display = "none";
}


startButton.onclick = function startGame(){

    startButton.style.display = "none";
    logo.style.display = "none";
    scoreElement.style.display = "block";
    timer.style.display = "block";
    createElements(agents);
    startTimer(5);

}


