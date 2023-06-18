let click = new Audio('./media/click.mp3');
let gameOver = new Audio('./media/gameWon.mp3');
let isgameOver = false;
// plyers name input 
let turn = 'X';


// Function to Change the Turn 
function changeTurn() {
    return turn === 'X' ? '0' : 'X'
}

//Function to Cheak the Win
function cheakWin() {
    let text = document.getElementsByClassName('text');
    let win = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ]
    win.forEach(e => {
        if ((text[e[0]].innerText === text[e[1]].innerText) && (text[e[2]].innerText === text[e[1]].innerText) && (text[e[0]].innerText !== "")) {
            document.querySelector('.gameInfo').innerText = `${text[e[0]].innerText} has won`;
            isgameOver = true;
            gameOver.play();

            if (isgameOver = true) {
                let container = document.querySelector('.main');
                let header = document.querySelector('header');
                let hiddenElements = document.getElementsByClassName("hidden");
                for (let i = 0; i < hiddenElements.length; i++) {
                    hiddenElements[i].style.display = "block";
                    hiddenElements[i].style.transition = ".5s";
                    document.querySelector("#popupWon").innerText =text[e[0]].innerText;
                    header.style.display = "none";
                    container.style.display = "none";
                }
                let resetBtn = document.querySelector("#reset");
                resetBtn.addEventListener("click", () => {
                    location.reload();
                });
            }
        }
    })
}
//Game Win logic 
let boxes = document.getElementsByClassName('box');
Array.from(boxes).forEach(element => {
    let text = element.querySelector(".text");
    element.addEventListener('click', () => {
        if (text.innerText === "") {
            text.innerText = turn;
            turn = changeTurn();
            click.play();
            cheakWin();
            if (!isgameOver) {
                document.getElementsByClassName("gameInfo")[0].innerText = `Turn for ${turn}`;
            }
        }
    })
})
