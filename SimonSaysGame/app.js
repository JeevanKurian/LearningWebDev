let gameSeq=[];
let userSeq=[];
let level=0;
let started="false";

let textDesc=document.querySelector("#textDesc");

let colorArr=["red","green","blue","yellow"];

document.addEventListener("keypress",function(){
    if(started=="false"){
        started="true";
        levelUp();
    }
})

let btnelems=document.querySelectorAll(".colorBtn");
for(btn of btnelems){
    btn.addEventListener("click",function(){
        btnpress(this)
    })
}

function btnpress(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250)
    let userColor=btn.id;
    userSeq.push(userColor)
    let idx=userSeq.length -1;
    check(idx);
}
function check(idx){
    if(userSeq[idx]!==gameSeq[idx]){
        textDesc.innerText=`Game Over!! Your Score is ${level} Press any key to restart`
        gameSeq=[];
        userSeq=[];
        level=0;
        started="false";
    }
    else if(userSeq.length==gameSeq.length){
        setTimeout(function(){
            levelUp();
        },1000);
    }
    
}
function levelUp(){
    level++;
    userSeq = [];  // Clear user sequence for the new level
    textDesc.innerText=`Level ${level}`;
    let randIdx= Math.floor(Math.random()*4);
    let randcolor=colorArr[randIdx];
    gameSeq.push(randcolor);
    let randBtn=document.querySelector(`#${randcolor}`);
    gameflash(gameSeq);
}

function gameflash(btnarr){
    for(let i=0;i<btnarr.length;i++){
        setTimeout(function(){
            let btn=document.querySelector(`#${btnarr[i]}`);
            btn.classList.add("flash");
            setTimeout(function(){
                btn.classList.remove("flash");
            },250);
        },i*600);
    }
}