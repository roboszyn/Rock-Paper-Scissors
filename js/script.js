var newGameBtn = document.getElementById('js-newGameButton');
	pickRock = document.getElementById('js-playerPick_rock');
    pickPaper = document.getElementById('js-playerPick_paper');
    pickScissors = document.getElementById('js-playerPick_scissors');
    newGameBtn = document.getElementById('js-newGameButton');
    newGameElem = document.getElementById('js-newGameElement');
    pickElem = document.getElementById('js-playerPickElement');
    resultsElem = document.getElementById('js-resultsTableElement');
    playerPointsElem = document.getElementById('js-playerPoints');
    playerNameElem = document.getElementById('js-playerName');
    computerPointsElem = document.getElementById('js-computerPoints');
    playerPickElem = document.getElementById('js-playerPick');
    computerPickElem = document.getElementById('js-computerPick');
    playerResultElem = document.getElementById('js-playerResult');
    computerResultElem = document.getElementById('js-computerResult');
    gameState = 'notStarted',  //started // ended
    player = {
        name: '',
        score: 0
    },
    computer = {
        name: 'computer',
        score: 0
    };

newGameBtn.addEventListener('click', newGame);

pickRock.addEventListener('click', function() { 
	playerPick('rock') 
});
pickPaper.addEventListener('click', function() { 
	playerPick('paper') 
});
pickScissors.addEventListener('click', function() { 
	playerPick('scissors') 
});

function setGameElements() {
	switch(gameState) {
    	case 'started':
        	newGameElem.style.display = 'none';
        	pickElem.style.display = 'block';
        	resultsElem.style.display = 'block'; 
        break;
    	case 'ended':
        	newGameBtn.innerText = 'Another game';
            playerPickElem.innerText = "Player's pick";
            computerPickElem.innerText = "Computer's pick";
            playerResultElem.innerText = "Player's score";
            computerResultElem.innerText = "Computer's score";
    	case 'notStarted':
    	default:
        	newGameElem.style.display = 'block';
        	pickElem.style.display = 'none';
        	resultsElem.style.display = 'none';
  	}
}

setGameElements();

function newGame() {
	player.name = prompt('What is your name?', "player's name");
  	if (player.name) {
    	player.score = computer.score = 0;
    	gameState = 'started';
    	setGameElements();

    	playerNameElem.innerHTML = player.name;
    	setGamePoints();
  	}

}

function getComputerPick() {
    var possiblePicks = ['rock', 'paper', 'scissors'];
    return possiblePicks[Math.floor(Math.random()*3)];
}

function playerPick(playerPick) {
    var computerPick = getComputerPick();
    
    playerPickElem.innerHTML = playerPick;
    computerPickElem.innerHTML = computerPick;

    checkRoundWinner(playerPick, computerPick);
}

function checkRoundWinner(playerPick, computerPick) {
  playerResultElem.innerHTML = computerResultElem.innerHTML = '';

  var winnerIs = 'player';

    if (playerPick == computerPick) {
        winnerIs = 'noone'; // remis
    } else if (
        (computerPick == 'rock' &&  playerPick == 'scissors') ||
        (computerPick == 'scissors' &&  playerPick == 'paper') ||
        (computerPick == 'paper' &&  playerPick == 'rock')) {
        
        winnerIs = 'computer';
    }

    if (winnerIs == 'player') {
        playerResultElem.innerHTML = "Won!";
        player.score++;
    } else if (winnerIs == 'computer') {
        computerResultElem.innerHTML = "Won!";
        computer.score++;
    } else {
        playerResultElem.innerHTML = computerResultElem.innerHTML = "Draw!";
    }

    setGamePoints();
    endGame();
}

function setGamePoints() {
	playerPointsElem.innerHTML = player.score;
	computerPointsElem.innerHTML = computer.score;
}

function endGame() {
    if (player.score === 10) {
        alert('The winner is: ' + player.name);
        gameState = 'ended';
        setGameElements();
    }

    if (computer.score === 10) {
        alert('The winner is: ' + computer.name);
        gameState = 'ended';
        setGameElements();
    }
}
