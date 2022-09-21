
//Computer selects r/p/s


let getComputerChoice = () => {
    let randomNumber = Math.floor(100*Math.random());

    if (randomNumber<=33){
            return "rock";
    } else if (randomNumber<=66) {
            return "paper";
    }else {
            return "scissors";
    }
}

//User provides choice

let getUserChoice = () => {

    let userChoice = prompt("Please enter your choice:", "rock").toLowerCase();

    while (userChoice !== "scissors" && userChoice !== "rock" && userChoice !== "paper")  {
        userChoice =  prompt("Please enter a valid choice:", "rock").toLowerCase();
    }

    return userChoice;
} 


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


//Play repeatedly

function playRound(){
    const computerChoice = getComputerChoice();
    const userChoice = getUserChoice();
    console.log(printWinner(winner(userChoice,computerChoice)));
}

for (let i =0; i < 5 ; i++){
    playRound();
}