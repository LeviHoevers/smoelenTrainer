var selectedBtn = "";
var selectedImage = "";

var scoreElement = document.getElementById("score")
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
