const p1Display = document.querySelector('#p1Display');
const p2Display = document.querySelector('#p2Display');
const reset = document.querySelector('#reset')
const p1 = document.querySelector('#p1');
const p2 = document.querySelector('#p2');
const winUptoScore = document.querySelector('#playTo');

let p1Score = 0;
let p2Score = 0;
// let winningScore = 5;
let isGameOver = false;

p1.addEventListener('click',function(){
    if (!isGameOver){
        p1Score = p1Score + 1;
        if(p1Score === winningScore){
            isGameOver = true;
            p1Display.classList.add('winner');
            p2Display.classList.add('loser');
        }
    }
     p1Display.textContent = p1Score;
});

p2.addEventListener('click',function(){
    if (!isGameOver){
        p2Score = p2Score + 1;
        if(p2Score === winningScore){
            isGameOver = true;
            p2Display.classList.add('winner');
            p1Display.classList.add('loser');
        }
    }
     p2Display.textContent = p2Score;
});

winUptoScore.addEventListener('change', function(){
    winningScore = parseInt(this.value);
    resetGame();
})

reset.addEventListener('click', resetGame);

function resetGame(){
    isGameOver = false;
     p1Score = 0;
     p2Score = 0;
     p1Display.textContent = 0;
     p2Display.textContent = 0;
     p1Display.classList.remove('winner', 'loser');
     p2Display.classList.remove('winner', 'loser');
}