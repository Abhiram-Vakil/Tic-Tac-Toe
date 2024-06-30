let boxes=document.querySelectorAll(".box");
let resetButton=document.querySelector("#resetButton");
let game=document.querySelector(".game");
let messageContainer=document.querySelector(".msg");
let message=document.querySelector("#msg");
let container=document.querySelector(".container")

//player X or O
let turnX=true;

//these are the winning states
const winningStates=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,4,8],
    [2,4,6],
    [0,3,6],
    [1,4,7],
    [2,5,8]];

//Different turns 
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turnX){
            box.innerText="X";
            turnX=false;
        }else{
            box.innerText="O";
            turnX=true;
        }
        box.disabled=true;
        let won=checkWinner();
        if(won===1 || won===-1){
            if(won===1){
                message.innerText="X won the game"
            }else{
                message.innerText="O won the game"
            }
            messageContainer.classList.remove("hide");
            container.classList.add("hide")
            console.log("Won");
            resetButton.innerText="New Game";
        }
    })
})

//win Check
const checkWinner = () => {

    for(state of winningStates){
        if(boxes[state[0]].innerText != '' && boxes[state[1]].innerText != '' && boxes[state[2]].innerText != ''){
            if(boxes[state[0]].innerText===boxes[state[1]].innerText && boxes[state[1]].innerText=== boxes[state[2]].innerText){
                if(boxes[state[0]].innerText==="X"){
                    return 1;
                }
                return -1;
                
            }
        }
    }
}

//Reset or New Game button
resetButton.onclick=() =>{
    for(box of boxes){
        box.innerText='';
        box.disabled=false;
    }
    messageContainer.classList.add("hide");
    container.classList.remove("hide");
    turnX=true;
    resetButton.innerText="Reset";

}



