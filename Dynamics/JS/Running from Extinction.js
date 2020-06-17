function right(){
    dir=1;
    continuous = true;
}
function left(){
    dir=-1;
    continuous = true;
}
function moves(){
    rightButton.addEventListener("mousedown",right);
    rightButton.addEventListener("mouseup",stop);
    leftButton.addEventListener("mousedown",left);
    leftButton.addEventListener("mouseup",stop);
}
function movingcont(){
    if((!continuos)|(P1.offsetLeft+player.offsetLeft>=window.innerWidth-P1.getAttribute("width")&&dir == 1)|(P1.offsetLeft+player.offsetLeft<=0 && dir == -1)){
        return;
    }
    else{
        move(dir);
    }
}
function stop(){
    continuous=false;
}
function move(num){
    wll=parseInt($("#wll").css("left"));
    coordX+=num;
    P1.style.left=coordX;

}
function play(){
    moves();
}

let body = document.getElementsByTagName("body");
let menu = document.createElement("div");
let container = document.createElement("div");
let end = document.createElement("div");
let loading = document.createElement("div");
let player = document.getElementById("player");
let P1 = document.getElementById("P1");
let leftButton = document.createElement("button");
let rightButton = document.createElement("button");
let continuous = false;
let wll=0;
let coordX=0;
leftButton.innerHTML="Left";
rightButton.innerHTML="Right";
leftButton.classList.add("left");
rightButton.classList.add("right");
player.appendChild(rightButton);
player.appendChild(leftButton);
/* Direcciones y continuos es para que se mueva mientras se presione */
play();