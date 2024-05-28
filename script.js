let boxes = document.querySelectorAll(".btn");
let y = document.querySelector(".reset")
let newgamebtn = document.querySelector("#newgame");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let turnO = true;
const winpattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [5, 6, 8],
];

const reset = () => {
    turnO = true;
    enabledboxes();
    msgcontainer.classList.add("hide");
}
boxes.forEach((btn) => {
    btn.addEventListener("click", () => {
        console.log("clicked");
        if (turnO) {
            btn.innerHTML = "X"
            turnO = false;
            

        } else {
            btn.innerHTML = "O"
            turnO = true;
        }
        btn.disabled = true;
        checkwinner();
    })

});
const disabledboxes = () => {
    for (let btn of boxes) {
        btn.disabled = true;
    }
}
const enabledboxes = () => {
    for (let btn of boxes) {
        btn.disabled = false;
        btn.innerText = "";
    }
}
function showWinner(winner) {
    msg.innerText = `Conguralation winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disabledboxes();
}
function checkwinner() {
    for (pattern of winpattern) {
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;
        if (pos1 != "" && pos2 != "" && pos3 != "") {
            if (pos1 === pos2 && pos2 === pos3) {
                console.log("winner", pos1);
                showWinner(pos1);
            }

        }
    }
}

newgamebtn.addEventListener("click",reset);
y.addEventListener("click",reset);