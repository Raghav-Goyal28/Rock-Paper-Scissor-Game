let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoce=()=>{
const options=["rock","paper","scisoors"];
const randidx=Math.floor(Math.random()*3);
return options[randidx];
}

const drawGame=()=>{
console.log("game draw");
msg.innerText="Game was Draw";
msg.style.backgroundColor="#081b31";
}

const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        console.log("win");
        msg.innerText=`you win! ${userChoice} beats ${compChoice}  `;
        msg.style.backgroundColor="green";
    }
    else{
        compScore++;
    compScorePara.innerText = compScore;
        console.log("loose");
        msg.innerText=`you Lost! ${compChoice} beats ${userChoice}  `;
        msg.style.backgroundColor="red";
    }
}

// 2
const playGame=(userChoice)=>{
    console.log(userChoice);
// Generate Comp choice
const compChoice = genCompChoce();
console.log(compChoice);

if(userChoice === compChoice){
drawGame();
}else{
    let userWin=true;
    if(userChoice === "rock"){
        //scissor,paper
      userWin =  compChoice === "paper" ? false:true;
    } else if(userChoice === "paper"){
        // rock,sciss
      userWin =  compChoice === "scissors" ? false:true;
    }
    else{
        //rock,pap
       userWin= compChoice === "rock"? false : true;
    }
    showWinner(userWin,userChoice,compChoice);
}
}

//user1
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
    const userChoice=choice.getAttribute("id");
    playGame(userChoice);
    })
})