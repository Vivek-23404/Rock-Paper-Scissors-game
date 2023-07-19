let score = JSON.parse(localStorage.getItem('score'));

if (score === null) {
    score = {
        wins: 0,
        loose: 0,
        ties: 0
    }
}

updateScoreElement();








function pickCompurtmove() {

    const randomNumber = Math.random();
    let computerMove = '';
    if (randomNumber >= 0 && randomNumber < 1 / 3) {
        computerMove = 'Rock';
    }
    else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {

        computerMove = 'Paper';
    }
    else if (randomNumber >= 2 / 3 && randomNumber <= 3) {
        computerMove = 'Scissor';
    }

    return computerMove;

}



function playGame(playerMove) {


    const computerMove = pickCompurtmove();

    let winner;

    if (playerMove === 'Scissor') {
        if (computerMove === 'Rock') {
            winner = 'you loose';
        }
        else if (computerMove === 'Paper') {
            winner = 'you win';
        }
        else if (computerMove === 'Scissor') {
            winner = 'tie';
        }
    }

    else if (playerMove === 'Paper') {
        if (computerMove === 'Rock') {
            winner = 'you win';
        }
        else if (computerMove === 'Paper') {
            winner = 'tie';
        }
        else if (computerMove === 'Scissor') {
            winner = 'you loose';
        }

    }
    else if (playerMove === 'Rock') {
        if (computerMove === 'Rock') {
            winner = 'tie';
        }
        else if (computerMove === 'Paper') {
            winner = 'you loose';
        }
        else if (computerMove === 'Scissor') {
            winner = 'you win';
        }
    }

    if (winner === 'you win') {
        score.wins = score.wins + 1;

    }
    else if (winner === 'you loose') {
        score.loose = score.loose + 1;
    }
    else if (winner === 'tie') {
        score.ties = score.ties + 1;
    }

    //localStirage only support a string so we conver the score object to string to store the value //in localStorage

    localStorage.setItem('score', JSON.stringify(score));


    updateScoreElement();

    document.querySelector('.js-winner')
        .innerHTML = `${winner}`;

    document.querySelector('.js-moves')
        .innerHTML = `you
        <img class="move-icon" src="${playerMove}-emoji.png" alt="">
        <img class="move-icon" src="${computerMove}-emoji.png" alt="">
        Computer`;



    //             alert(`you chose ${playerMove}, Computer chose ${computerMove} , ${winner}
    // Wins : ${score.wins}, Loose : ${score.loose}, Ties : ${score.ties}`);
}

function updateScoreElement() {
    document.querySelector('.js-score')
        .innerHTML = `Wins : ${score.wins}, Loose : ${score.loose}, Ties : ${score.ties}`;
}

function moves() {
    document.querySelector('.js-moves')
        .innerHTML = `you chose ${playerMove}, Computer chose ${computerMove} , ${winner}`;
}