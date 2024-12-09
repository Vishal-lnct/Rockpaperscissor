let userscore = 0;
let comscore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userscorepara = document.querySelector("#user-score");
const compscorepara = document.querySelector("#comp-score");
const rockElement = document.querySelector("#rock"); 

const gencompchoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    console.log(randIdx);
    return options[randIdx];
};

const drawgame = () => {
    console.log("game was draw");
    msg.innerText = "Game was a draw. Play again!";
    msg.style.backgroundColor = "white"; 
};

const showwinner = (userwin) => {
    if (userwin) {
        userscore++;
        userscorepara.innerText = userscore;
        console.log("You win!");
        msg.innerText = "You win!";
        msg.style.color = "green"; 
    } else {
        comscore++;
        compscorepara.innerText = comscore;
        console.log("You lose");
        msg.innerText = "You lose!";
        msg.style.backgroundColor = "white"; 
        msg.style.color = "red"; 
    }
};

const playGame = (userchoice) => {
    console.log("User choice =", userchoice);
    const compchoice = gencompchoice();
    console.log("Comp choice =", compchoice);

    if (userchoice === compchoice) {
        drawgame();
    } else {
        let userwin = true;

        if (userchoice === "rock") {
            userwin = compchoice === "paper" ? false : true;
        } else if (userchoice === "paper") {
            userwin = compchoice === "scissors" ? false : true;
        } else {
            userwin = compchoice === "rock" ? false : true;
        }

        showwinner(userwin);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id");
        console.log("Choice was clicked", userchoice);
        playGame(userchoice);
    });
});