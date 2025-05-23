let gameSeq = [];
let userSeq = [];

let btns = ["red", "yellow", "blue", "green"];

let h2 = document.querySelector("h2");

let started = false;
let level = 0;

document.addEventListener("keypress", function () {
    if (started == false) {
        started = true;
        console.log("game started");
    }
    levelUp();
});
function gameFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");

    }, 250);
}

function userFlash(btn) {
    btn.classList.add("userFlash");
    setTimeout(function () {
        btn.classList.remove("userFlash");

    }, 250);
}


function levelUp() {
    userSeq=[];
    level++;
    h2.innerText = `level ${level}`;
  

    let rndIdx = Math.floor(Math.random() * 4);

    let rndcolor = btns[rndIdx];
    let rndbtn = document.querySelector(`.${rndcolor}`);

    gameSeq.push(rndcolor);
    console.log(gameSeq);

    gameFlash(rndbtn);
}
function checkAns(idx){
    // console.log("current level",level);
    
    if(userSeq[idx]=== gameSeq[idx])
    {
        if(userSeq.length === gameSeq.length)
        {
            setTimeout(() => {
                levelUp();
            }, 1000);
        }
    }else{
        h2.innerHTML=`Game Over!! Your score was: <b>${level}</b> <br> Press any key to restart.`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        },250);
        reset();
    }


}
function btnPress() {
    let btn = this;
    userFlash(btn);

    let userColor=btn.getAttribute("id");
    console.log(userColor);

    userSeq.push(userColor);
    checkAns(userSeq.length-1);

}

let allBtns = document.querySelectorAll(".btn");
for (btn of allBtns) {
    btn.addEventListener("click", btnPress);
}
function reset(){
    started=false;
    gameSeq=[];
    userSeq=[];
    level=0;
}