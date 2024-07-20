let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector("#reset-btn");
let newGameBtn=document.querySelector("#new-btn")
let msgContainer=document.querySelector(".msg-container")
let msg=document.querySelector("#msg");
let turn0=true; //playerX,player0
let count=0;

const winPatterns =[

   [0,1,2],
   [0,3,6],
   [0,4,8],
   [1,4,7],
   [2,4,6],
   [2,5,8],
   [3,4,5],
   [6,7,8],

];
const resetGame=()=>{
    turn0=true; 
    count=0;
    enableBoxxes();
    msgContainer.classList.add("hide");

};

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        
       
        if(turn0){ //player0 turn
            box.innerText="0";//print kr denge 0
            turn0=false;//means player x ki turn aa gyi
        }
        else{//player X ki turn hain
            box.innerText="X";//print X
            turn0=true;//player0 ki turn hain
        }
        box.disabled=true;
        count++;
       let isWinner=checkWinner();
       if(count===9 && !isWinner){
        gameDraw();
       }
    });
});
const gameDraw = () => {
    msg.innerText = `Game was a Draw.`;
    msgContainer.classList.remove("hide");
    disableBoxes();
  };
const disabledBoxxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const enableBoxxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}

const showWinner=(winner)=>{
msg.innerText=`Congratulations!, winner is ${winner}`;
msgContainer.classList.remove("hide");
disabledBoxxes();
}

const checkWinner=()=>{
    for(let pattern of winPatterns){
          let pos1Val=boxes[pattern[0]].innerText;
          let pos2Val=boxes[pattern[1]].innerText;
          let pos3Val=boxes[pattern[2]].innerText;

          if(pos1Val!="" && pos2Val!==""&& pos3Val!==""){
             if(pos1Val===pos2Val && pos2Val===pos3Val){
                 

                 showWinner(pos1Val);
                 return true;
                 }
             }
          
        
    }

};
newGameBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);