/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/


var scores, roundScore, activePlayer, dice, gamePlaying, prevRoll;

init();

document.querySelector('.btn-roll').addEventListener('click', () => {
    
    if (gamePlaying) {
        // Generate random num for dice
        var dice_1 = Math.floor(Math.random() * 6) + 1;
        var dice_2 = Math.floor(Math.random() * 6) + 1;
        
        // Show corresponding dice pic
        document.getElementById('dice-1').style.display = 'block';
        document.getElementById('dice-2').style.display = 'block';
    
        document.getElementById('dice-1').src = 'dice-' + dice_1 + '.png';
        document.getElementById('dice-2').src = 'dice-' + dice_2 + '.png';
        
        if(dice_1 !== 1 && dice_2 != 1){
            roundScore += dice_1 + dice_2;
            document.querySelector('#current-'+activePlayer).textContent = roundScore;
        } else {
            nextPlayer();
        }
    }
        /*
        // Show corresponding dice pic
        var diceDOM = document.querySelector('.dice');
        diceDOM.style.display = 'block';
        diceDOM.src = 'dice-' + dice + '.png';

        // Update the round if the rolled number wasn't a 1
        if ( dice == 6 && prevRoll == 6 ) {
            scores[activePlayer] = 0;
            document.querySelector('#score-'+activePlayer).textContent = scores[activePlayer];
            nextPlayer();
        }else if(dice !== 1){
            roundScore += dice;            
            prevRoll = dice;
            document.querySelector('#current-'+activePlayer).textContent = roundScore;
        } else {
            nextPlayer();
        }
        prevRoll = dice;
    } */
});


document.querySelector('.btn-hold').addEventListener('click', () => {
    if (gamePlaying) {
        // Add to the main scores array
        scores[activePlayer] += roundScore;

        // Update UI 
        document.querySelector('#score-'+activePlayer).textContent = scores[activePlayer];
        
        // Check if the player won
        input = document.querySelector('.final-score').value;
        
        if(input){
            winningScore = input;
        }
        
        if (scores[activePlayer] >= winningScore) {
            document.querySelector('#name-'+activePlayer).textContent = "Winner!";
            document.getElementById('dice-1').style.display = 'none';
            document.getElementById('dice-2').style.display = 'none';
            document.querySelector('.player-'+activePlayer+'-panel').classList.add('winner');
            document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active');
            gamePlaying = false;
        }else{
            nextPlayer();        
        }
    }
})


document.querySelector('.btn-new').addEventListener('click', init);


function init() {
    scores = [0, 0]
    activePlayer = 0;
    roundScore = 0;
    gamePlaying = true;
    winningScore = 100;
    
    document.querySelector('#name-0').textContent = "Player 1";
    document.querySelector('#name-1').textContent = "Player 2";
    document.querySelector('#current-0').textContent = 0;
    document.querySelector('#current-1').textContent = 0;
    
    document.querySelector('#score-0').textContent = 0;
    document.querySelector('#score-1').textContent = 0;
    
    document.getElementById('dice-1').style.display = 'none';
    document.getElementById('dice-2').style.display = 'none';
    
    document.querySelector('.player-0-panel').className = 'player-0-panel active';
    document.querySelector('.player-1-panel').className = 'player-1-panel';    
}

function nextPlayer() {
    activePlayer = activePlayer == 0? 1: 0;
    roundScore = 0;
    document.querySelector('#current-0').textContent = 0;
    document.querySelector('#current-1').textContent = 0;

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    document.getElementById('dice-1').style.display = 'none';
    document.getElementById('dice-2').style.display = 'none';
}






