let boxeces = document.querySelectorAll(".box");
let rst_btn = document.querySelector("#rstbtn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turno = true;
const winningpaterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

const resetGame = () =>{
    turno = true;
    einabledBoxes();
    msgContainer.classList.add("hide");
};

boxeces.forEach((box) => {
    box.addEventListener("click", () => {
        // console.log("Box was clicked");
        if (turno) {
            box.innerText = "O";
            box.style.color = "#7455c4";
            turno = false;
        } else {
            box.innerText = "X";
            box.style.color = "black";
            turno = true;
        }
        box.disabled = true;

        checkWinner();
    });
});

const disabledBoxes = () =>{
    for(let box of boxeces){
        box.disabled = true;
    }
}

const einabledBoxes = () =>{
    for(let box of boxeces){
        box.disabled = false;
        box.innerText = "";
        box.backgroundColor = "";
    }
}


const showWinner = (winner) =>{
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disabledBoxes();
}


const checkWinner = () => {
    for (let pattern of winningpaterns) {
        let pos1Val = boxeces[pattern[0]].innerText;
        let pos2Val = boxeces[pattern[1]].innerText;
        let pos3Val = boxeces[pattern[2]].innerText;

        if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
            if (pos1Val === pos2Val && pos2Val === pos3Val) {
                // console.log("Winner", pos1Val);
                showWinner(pos1Val);
            }
        }

    }
};

newGameBtn.addEventListener("click", resetGame);
rstbtn.addEventListener("click", resetGame);