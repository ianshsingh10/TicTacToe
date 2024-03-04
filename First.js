let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector(".resetbtn");
let msg=document.querySelector(".showwin");
let winn=document.querySelector(".winner");
let back=document.querySelector(".back");
let b1=document.querySelector("#b1");
let b2=document.querySelector("#b2");
let b3=document.querySelector("#b3");
let b4=document.querySelector("#b4");
let b5=document.querySelector("#b5");
let b6=document.querySelector("#b6");
let b7=document.querySelector("#b7");
let b8=document.querySelector("#b8");
let b9=document.querySelector("#b9");
let turn="X";
let count=0;
let backk;
const winPattern=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];

const resetgm=()=>{
    turn="X";
    count=0;
    enbox();
    msg.innerText=`Player1 will play first!`;
    resetbtn.innerText="RESET";
    winn.classList.add("hide");
}

const draw=()=>{
    msg.classList.add("hide");
    resetbtn.innerText="NEW GAME";
    winn.innerText=`Draw`;
    winn.classList.remove("hide");
}

const disbox=()=>{
    for(box of boxes){
        box.disabled= true;
    }
}

const enbox=()=>{
    for(box of boxes){
        box.disabled= false;
        box.innerText="";
    }
}

const backgm=()=>{
    for(box of boxes){
        if(box.innerText==""){
            box.disabled=false;
        }
    }
}

const showwin =(winner)=>{
    if(winner=="X"){
        msg.classList.add("hide");
        winn.innerText="Player 1 Wins";
        winn.classList.remove("hide");
    }
    else if (winner=="O"){
        msg.classList.add("hide");
        winn.innerText="Player 2 Wins";
        winn.classList.remove("hide");
    }
    resetbtn.innerText="NEW GAME";
}

const checkwinner=()=>{
    for(pattern of winPattern){
        let pos1=boxes[pattern[0]].innerText;
        let pos2=boxes[pattern[1]].innerText;
        let pos3=boxes[pattern[2]].innerText;

        if(pos1!="" && pos2!="" && pos3!=""){
            if(count==9)
            {
                draw();
                disbox();
            }
            if(pos1===pos2 && pos2=== pos3){
                showwin(pos1);
                disbox();
            }
        }
    }
};

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turn=="X"){
            box.innerText="X";
            turn="O";
            msg.innerText=`Player2 Turn`;
        }
        else{
            box.innerText="O";
            turn="X";
            msg.innerText=`Player1 Turn`;
        }
        back.disabled= false;
        box.disabled= true;
        count++;
        backk=box.getAttribute("id");
        checkwinner();
    });
});
let backbtn=()=>{
    if(backk=="b1"){
        b1.innerText="";
        b1.disabled=false;
    }
    else if(backk=="b2"){
        b2.innerText="";
        b2.disabled=false;
    }
    else if(backk=="b3"){
        b3.innerText="";
        b3.disabled=false;
    }
    else if(backk=="b4"){
        b4.innerText="";
        b4.disabled=false;
    }
    else if(backk=="b5"){
        b5.innerText="";
        b5.disabled=false;
    }
    else if(backk=="b6"){
        b6.innerText="";
        b6.disabled=false;
    }
    else if(backk=="b7"){
        b7.innerText="";
        b7.disabled=false;
    }
    else if(backk=="b8"){
        b8.innerText="";
        b8.disabled=false;
    }
    else if(backk=="b9"){
        b9.innerText="";
        b9.disabled=false;
    }
}
resetbtn.addEventListener("click",resetgm);
back.addEventListener("click",()=>{
    back.disabled= true;
    backbtn();
    count--;
    resetbtn.innerText="RESET";
    if(turn=="X"){
        turn="O";
        msg.innerText=`Player2 Turn`;
        winn.classList.add("hide");
        msg.classList.remove("hide");
    }
    else{
        turn="X";
        msg.innerText=`Player1 Turn`;
        winn.classList.add("hide");
        msg.classList.remove("hide");
    }
    backgm();
});
