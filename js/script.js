let click = new Audio('./media/click.mp3');
let gameOver = new Audio('./media/gameWon.mp3');
let isgameOver = false;
// plyers name input 
let turn = "⚔️";



let p1 = prompt("plyer One :");
let p2 = prompt("plyer Two :");
let randomNumber = Math.random();
let selectedPlyer;
if (randomNumber < 0.5) {
    selectedPlyer = p1;
} else {
    selectedPlyer = p2;
}
if (selectedPlyer !== "") {
    document.querySelector("#displayName").innerText = selectedPlyer;
    function changeName() {
        return selectedPlyer === p1 ? p2 : p1
    }


    // Function to Change the Turn 
    function changeTurn() {
        return turn === '⚔️' ? '⭕' : '⚔️'
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
                        if (turn) {
                            document.querySelector("#popupWon").innerText = selectedPlyer;
                        } else {
                            selectedPlyer !== selectedPlyer;
                            document.querySelector("#popupWon").innerText = selectedPlyer;
                        }
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
                selectedPlyer = changeName();
                if (!isgameOver) {
                    document.getElementsByClassName("gameInfo")[0].innerText = `Turn for ${selectedPlyer}`;
                }
            }
        })
    })
} else {
    let container = document.querySelector('.main');
    let resetName = document.querySelector("#resetNames")
    let resetNameBox = document.querySelector(".resetNames")
    let resetNameh2 = document.querySelector("#resetNameh2")
    container.style.display = "none";
    resetName.style.display = "block";
    resetNameh2.style.display = "block";
    resetNameBox.style.height = "85vh";

    let resetBtn = document.querySelector("#resetNames");
    resetBtn.addEventListener("click", () => {
        location.reload();
    });

}