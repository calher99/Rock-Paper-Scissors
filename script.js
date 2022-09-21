
//Computer selects r/p/s

    let randomNumber = Math.floor(100*Math.random());
    let getComputerChoice = random => {

        if (random<=33){
            return "rock";
        } else if (random<=66) {
            return "paper";
        }else {
            return "scissors";
        }
    }
    const computerChoice = getComputerChoice(randomNumber);

//User provides choice

    let userChoice = prompt("Please enter your choice:", "rock");

console.log(computerChoice);
console.log(userChoice);
//Computer checks algorithm who wins

if (computerChoice === userChoice){
    console.log("draw");
} else if (computerChoice==="rock" && userChoice==="scissors"){
    console.log("you lost");
}  else if (computerChoice==="paper" && userChoice==="scissors"){
    console.log("you won");
}  else if (computerChoice==="rock" && userChoice==="paper"){
    console.log("you won");
}  else if (computerChoice==="paper" && userChoice==="rock"){
    console.log("you lost");
}  else if (computerChoice==="scissors" && userChoice==="rock"){
    console.log("you won");
}    else if (computerChoice==="scissors" && userChoice==="paper"){
        console.log("you lost");
}

//Provide answer



