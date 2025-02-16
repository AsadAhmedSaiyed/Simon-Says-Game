let gameSeq = [];
let userSeq = [];
let btns = ["yellow","purple","green","red"];
let arr = [];


let started = false;
let level = 0;



let h2 = document.querySelector("h2");

document.addEventListener("keypress",function(){
    if(started == false){
        console.log("Game started");
        started = true;
        levelUp();

    }
});

function levelUp(){
    userSeq = [];
   level++;
   let highestScore = max();
   h2.innerText = `Level ${level} Highest score = ${highestScore}`;
   let i = Math.floor(Math.random()*4);
   let randColor = btns[i];
   let randBtn = document.querySelector(`.${randColor}`);
   gameflash(randBtn);
//    console.log(randBtn);
//    console.log(i);
//    console.log(randColor);
   gameSeq.push(randColor);
   scores(level);



//    console.log(gameSeq);

}

function gameflash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250)
}

function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },250)
}

function checkSeq(idx){
    if(userSeq[idx] === gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
           setTimeout( levelUp,1000); 
        }
    }else{
        h2.innerHTML = `Game Over! Your score was <b>${level}<br></b> Press any key to start again`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function (){
            document.querySelector("body").style.backgroundColor = "white";
        },150);
        
        reset();
       
    }
}

function btnPress(){
  let btn = this;
   userFlash(btn);
   userSeq.push(btn.getAttribute("id"));
   checkSeq(userSeq.length-1);
}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress)
}

function reset(){
   started = false;
   gameSeq = [];
   userSeq = [];
   level = 0;
}


function scores(level){
     arr.push(level);
}

function max(){
     let score = 0 ;
     for(let i=0;i<(arr.length);i++){
        if(arr[i]>=score){
            score = arr[i];
        }
     }
     
     return score;    
}