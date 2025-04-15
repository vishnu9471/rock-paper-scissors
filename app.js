// console.log("vishnu kant pandey");

let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
 const msg = document.querySelector("#msg");

 const userScorePara = document.querySelector("#user-score");
 const compScorePara = document.querySelector("#comp-score");



const genCompChoice = () => {
    const options = ["rock", " paper", " scissors"];
    const randIdx = Math.floor(Math.random() *3 );
    return options[randIdx];


    // rock , paper , scissors 
};

const drawGame = () => {
    // console.log(" Oops! 😒, Game was  Draw.  ");
    msg.innerText = "Oh !! Game Draw🫤";
    msg.style.backgroundColor = "pink"; 
};

const showWinner = (userWin , userChoice , compChoice) => {
    if (userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        // console.log("You Win!!");
        msg.innerText = `You Win 😁😁 !! your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green"; 
    } else {
        compScore++;
        compScorePara.innerText = compScore;
        // console.log("you lose");
        msg.innerText = `You Lose😒!,play Again😊  ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red"; 
    }
}


const playGame = (userChoice) => {
    // console.log("user choice = ", userChoice);

    // generate computer choices 
    const compChoice = genCompChoice();
    // console.log("computer choice = ", compChoice);


    if (userChoice === compChoice) {
        drawGame();
    } else {
        let userWin = true;
        if (userChoice === "rock") {
            userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            userWin = compChoice === "scissors" ? false : true;
        } else {
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin , userChoice , compChoice);
    }


};


choices.forEach((choice) => {
    // console.log(choice);
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id")
        // console.log("choice was Clicked ", userChoice);
        playGame(userChoice);
    });
});










































