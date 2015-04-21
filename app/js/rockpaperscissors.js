////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    return move = move || getInput();
}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    return move = move || randomPlay();
}

function getWinner(playerMove,computerMove) {
    var winner;
    var a = 'player';
    var b = 'computer';
    var c = 'tie';
    var d = 'no one';
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    switch (computerMove) {
        case 'paper':
        if (playerMove === 'scissors') {
		  winner = a;
          console.log("You Win!")
		}
	else if (playerMove === 'rock') {
		winner = b;
        console.log("You Lose!")
		}
    else if (playerMove === 'paper') {
        winner = c;
        console.log("It's a Tie!")
	}
    else {
        winner = d;
        console.log("Learn to read fucking directions.")
    }
break;
case 'scissors':
        if (playerMove === 'rock') {
		  winner = a;
          console.log("You Win!")
		}
	else if (playerMove === 'paper') {
		winner = b;
        console.log("You Lose!")
		}
    else if (playerMove === 'scissors') {
        winner = c;
        console.log("It's a Tie!")
	}
    else {
        winner = d;
        console.log("Learn to read fucking directions.")
    }
break;
    case 'rock':
        if (playerMove === 'paper') {
		  winner = a;
          console.log("You Win!")
		}
	else if (playerMove === 'scissors') {
		winner = b;
        console.log("You Lose!")
		}
    else if (playerMove === 'rock') {
        winner = c;
        console.log("It's a Tie!")
	}
    else {
        winner = d;
        console.log("Learn to read fucking directions.")
    }    
}
return winner;
}

function playToFive(playerWins, computerWins) {
    console.log("Let's play RPS!");
    var playerWins = 0;
    var computerWins = 0;
    while(computerWins < 5 && playerWins < 5) {
    var playerMove = getPlayerMove();
    var computerMove = getComputerMove();
    var winner = getWinner(playerMove,computerMove);
    	if (winner === "player") {
    		playerWins += 1;
    	}
    	else if (winner === "computer") {
    		computerWins += 1;
    	}
    	console.log("You chose '" + playerMove + "' while the computer chose '" + computerMove + "'.");
    	console.log("The score is currently " + playerWins + " to " + computerWins + ".\n");
    }
}

//     	return [playerWins, computerWins];

playToFive();