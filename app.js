let userScore=0;
let compScore=0;
const compChoices=["Rock","Paper","Scissor"]
userChoice="";
const msg=document.querySelector(".msg")
const user_score=document.querySelector("#user-score");
const comp_score=document.querySelector("#comp-score");

let rock=document.querySelector("#rock");
rock.addEventListener("click",()=>playGame("Rock"));
let paper=document.querySelector("#paper");
paper.addEventListener("click",()=>playGame("Paper"));
let scissor=document.querySelector("#scissor");
scissor.addEventListener("click",()=>playGame("Scissor"));

function playGame(userChoice){
    const compChoice=compChoices[Math.floor(Math.random() * compChoices.length)]
    if (userChoice===compChoice){
        msg.innerText="It's a Draw"
        msg.style.backgroundColor="#fabcb8";
        msg.style.color="#333";
        return;
    }
    let userWin=true;
    if (userChoice==="Rock"){
        userWin=compChoice==="Paper"?false:true;
    }else if (userChoice==="Paper"){
        userWin=compChoice==="Scissor"?false:true;
    }else {
        userWin=compChoice==="Rock"?false:true;
    }

    if(userWin){
        userScore++;
        msg.innerText="You Win"
        msg.style.backgroundColor="#7df72c";
        msg.style.color="#333";
        user_score.innerText=userScore;
    }else{
        compScore++;
        msg.innerText="You Lose"
        msg.style.backgroundColor="#ff2929";
        msg.style.color="white";
        comp_score.innerText=compScore;
    }
};