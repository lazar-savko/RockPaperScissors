const buttons = document.getElementsByClassName("choice");

const result = document.getElementById("result");

result.style.display = "none";

for(let i = 0; i < 3; i++){
    buttons[i].addEventListener("click", function(event){
        // console.log(event);
        // event.stopPropagation();

        let num = Math.floor(Math.random() * 3);

        const whoWon = document.getElementById("whoWon");
        const newImage = document.getElementById("resultImage");
        const enemyImage = document.getElementById("enemyImage");
        if(buttons[i].id == "rock"){
            newImage.src = "public/Rock.png"
            let word = "";
            if(num == 0){
                enemyImage.src = "public/Rock.png";
                word = "tie";
            }
            else if(num == 1){
                enemyImage.src = "public/Paper.png";
                word = "lose";
            }
            else{
                enemyImage.src = "public/Scissors.png";
                word = "win"
            }
            whoWon.innerText = word;
        }
        else if(buttons[i].id == "paper"){
            newImage.src = "public/Paper.png"
            let word = "";
            if(num == 0){
                enemyImage.src = "public/Rock.png";
                word = "win";
            }
            else if(num == 1){
                enemyImage.src = "public/Paper.png";
                word = "tie";
            }
            else{
                enemyImage.src = "public/Scissors.png";
                word = "lose"
            }
            whoWon.innerText = word;
        }
        else if(buttons[i].id == "scissors"){
            newImage.src = "public/Scissors.png"
            let word = "";
            if(num == 0){
                enemyImage.src = "public/Rock.png";
                word = "lose";
            }
            else if(num == 1){
                enemyImage.src = "public/Paper.png";
                word = "win";
            }
            else{
                enemyImage.src = "public/Scissors.png";
                word = "tie"
            }
            whoWon.innerText = word;
        }
        result.style.display = "block";
        const bottom = document.getElementById("bottom");
        bottom.remove();
        
    });
}