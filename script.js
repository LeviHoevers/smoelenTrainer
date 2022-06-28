var selectedBtn = "";
var selectedImage = "";

var agents = ["astra", "chamber", "jett", "skye", "viper", "kayo", "sova", "reyna", "raze", "killjoy"];

shuffleArray(agents, 10);
console.log(agents);

var scoreElement = document.getElementById("score");
var score = 0;

allBtns = document.querySelectorAll(".button");
allImages = document.querySelectorAll(".image");

for(i = 0; i < allBtns.length; i++){
    allBtns[i].onclick = function(){
        selectedBtn = this;
        if((selectedImage != "" && selectedBtn != "") && selectedBtn.dataset["agent"] == selectedImage.dataset["agent"]){
            this.style.display = "none";
            selectedImage.style.display = "none";
            score++;
            scoreElement.innerText = "score: " + score;
        }
    }
}

for(i = 0; i < allImages.length; i++){
    allImages[i].onclick = function(){
        selectedImage = this;
        if((selectedImage != "" && selectedBtn != "") && selectedImage.dataset["agent"] == selectedBtn.dataset["agent"]){
            this.style.display = "none";
            selectedBtn.style.display = "none";
            score++;
            scoreElement.innerText = "score: " + score;

        }
    }
}

function shuffleArray(array, shuffle){
    for(i = 0; i < shuffle; i++){
        for (var j = array.length - 1; j > 0; j--) {
            var x = Math.floor(Math.random() * (j + 1));
            var temp = array[j];
            array[j] = array[x];
            array[x] = temp;
        }

    }
}
