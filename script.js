
let getComputerChoice = () => {
    let randomNumber = Math.floor(100*Math.random());

    if (randomNumber<=33){
            return "rock";
    } else if (randomNumber<=66) {
            return "paper";
    }else {
            return "scissors";
    }
};



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

function printWinner(value) {
    if (value === 1){
        updateUserCounter();
    }else if (value === 0){
        updateComputerCounter();
    } else{
        return;
    }
}

function updateUserCounter(){
    const result = document.querySelector('.user');
    result.textContent= parseInt(result.textContent)+1;

}

function updateComputerCounter(){
    const result = document.querySelector('.computer');
    result.textContent= parseInt(result.textContent)+1;
}


function startGame (e){
    playRound(e.target.classList.value);
};

function playRound(userChoice){
    const computerChoice = getComputerChoice();
    printWinner(winner(userChoice,computerChoice));
}


const btns = document.querySelectorAll('button');
btns.forEach (btn => btn.addEventListener('click',startGame));




/*
for (let i =0; i < 5 ; i++){
    playRound();
}*/