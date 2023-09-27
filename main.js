const player0 = document.querySelector('.player0')
const player1 = document.querySelector('.player1')

const score0 = document.getElementById('score0')
const score1 = document.getElementById('score1')

const current0 =document.getElementById('current0')
const current1 =document.getElementById('current1')

const new_btn = document.querySelector('.btn_new')
const hold_btn = document.querySelector('.btn_hold')
const roll_btn = document.querySelector('.btn_roll')

const dice = document.querySelector('.dice')
const audio = document.querySelector('.audio1')
const audio2 = document.querySelector('.audio2')


let scores,activePlayer,currentScore,game

function initialState(){
    scores=[0,0];
    currentScore=0;
    activePlayer=0;
    game=true;

    score0.textContent=0;
    score1.textContent=0;
    current0.textContent=0;
    current1.textContent=0;

    dice.classList.add('hidden')

    player0.classList.remove('player_winner')
    player1.classList.remove('player_winner')
    player0.classList.add('player_active')
    player1.classList.remove('player_active')

}

initialState()

roll_btn.addEventListener('click',function(){
    if(game){
        const random_dice = Math.floor(Math.random()*6+1)
        dice.classList.remove('hidden')
        dice.src = `pics/${random_dice}.png`
        audio.play()
        if (random_dice !== 1 ){
            currentScore+=random_dice;
            console.log(currentScore)
            document.getElementById(`current${activePlayer}`).textContent= currentScore
            }
        else{
            switchPlayer()
        }
    }
    
})

hold_btn.addEventListener('click',function(){
    scores[activePlayer]+=currentScore
    document.getElementById(`score${activePlayer}`).textContent=scores[activePlayer]
    if(scores[activePlayer]>=20){
        game=false
        dice.classList.add('hidden')
        document.querySelector(`.player${activePlayer}`).classList.add('player_winner')
        audio2.play()
        document.querySelector(`.player${activePlayer}`).classList.remove('player_active')
    }
    else{
        switchPlayer()
    }
})

function switchPlayer(){
    document.getElementById(`current${activePlayer}`).textContent=0;
    currentScore=0
    if(activePlayer==1){
        activePlayer=0
    }
    else{
        activePlayer=1
    }
    player0.classList.toggle('player_active')
    player1.lassList.toggle('player_active')
    
}

new_btn.addEventListener('click',initialState)