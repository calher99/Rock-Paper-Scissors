
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

    let userChoice =  prompt("Please enter your choice:", "rock").toLowerCase();

console.log(computerChoice);
console.log(userChoice);

//Computer checks algorithm who wins

let winner = (user1_result,user2_result) =>{

    if (user1_result === user2_result){
        return 2;
    }else if (user1_result==="rock" && user2_result==="scissors"){
        return 1;
    }else if (user1_result==="paper" && user2_result==="scissors"){
        return 0;
    }else if (user1_result==="rock" && user2_result==="paper"){
        return 0;
    }else if (user1_result==="paper" && user2_result==="rock"){
        return 1;
    }else if (user1_result==="scissors" && user2_result==="rock"){
        return 0;
    }else if (user1_result==="scissors" && user2_result==="paper"){
        return 1;
    }

}

//Provide answer

let printWinner = value => {
    if (value === 1){
        return "You won!";
    }else if (value === 0){
        return "You lost";
    } else{
        return "Draw";
    }
}

console.log(printWinner(winner(userChoice,computerChoice)));