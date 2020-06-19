let PlayerX=0;
let Dead=false;
let piuPiuObjY=-25;
let piuPiuObjX=17;
let GameOver=true;
let gameScore=0;
let continuousMovement=false;
let dirPlayer=1;
let stones=document.getElementsByClassName("stones");
let piuPiuObjElement=document.getElementById("piuPiuObj");
let meteorite= document.getElementById("meteorite");
function PiuPiu() {
    if(!GameOver)
       $("#piuPiuObj").show();
    Dead=true;
}
function piuToggle() {
    if(!Dead)
        return;
    var piuPiuObj=document.getElementById("piuPiuObj");
    piuPiuObjY-=8;
    piuPiuObj.style.top=piuPiuObjY;
    if(!Dead) {
            piuPiuObj.style.left=piuPiuObjX;
        }
    if(piuPiuObjY<=-window.innerHeight-30) {
            piuPiuObjY=-25;
            piuPiuObj.style.top=piuPiuObjY;
            piuPiuObj.style.left=piuPiuObjX;
            Dead=false;
            $(piuPiuObj).hide();
        }
}
function setRandomStonePosition() {
    for(let i=0;i<stones.length;i++) {
        let width=30;
        let height=30;
        $(stones[i]).css("left",rand(30,document.getElementById("map").offsetWidth-width));
        do
            $(stones[i]).css("top",rand(-window.innerHeight-170,-40));
        while((pushStone(i)));
    }
}
function rand(num1,num2)
{
    return Math.floor(Math.random()*(num2-num1+1))+num1;
}
function stoneMove() {
    if(GameOver)
        return;
    let yPos;
    for(let i=0;i<stones.length;i++) {
        yPos=parseInt($(stones[i]).css("top"));
        if(yPos>=window.innerHeight+20) {
            let width=parseInt($(stones[i]).attr("width"));
            let height=parseInt($(stones[i]).attr("height"));
            $(stones[i]).show();
            $(stones[i]).css("left",rand(10,document.getElementById("map").offsetWidth-width));
            do
                $(stones[i]).css("top",rand(-window.innerHeight-170,-40));
            while((pushStone(i)));
            continue;
        }
        stones[i].style.top=yPos+5;
    }
}
function pushStone(j) {
    var stones=document.getElementsByClassName("stones");
    for(var i=0;i<stones.length;i++)
        {
            if(i==j)
                continue;
            var height=parseInt($(stones[j]).attr("height"));
            var yPos=parseFloat($(stones[j]).css("top"));
            var _height=parseInt($(stones[i]).attr("height"));
            var _yPos=parseFloat($(stones[i]).css("top"));
            if(yPos<_yPos+_height  &&  yPos+height>_yPos)
                return true;
        }
        return false;
}
function PlayNow() {
    $("#map").show();
    $("#menu").hide();
    setRandomStonePosition();
    GameOver=false;
}
function stoneDestroy() {
    if(!Dead){
        return;
    }    
    for(let i=0;i<stones.length;i++) {
        var  sx=stones[i].offsetLeft;
        var  sy=stones[i].offsetTop;
        var  sh=stones[i].offsetHeight;
        var  sw=stones[i].offsetWidth;
        var piuPiuObj={
                x:piuPiuObjElement.offsetLeft +document.getElementById("playerGroup").offsetLeft,
                y:piuPiuObjElement.offsetTop +document.getElementById("playerGroup").offsetTop,
                h:piuPiuObjElement.offsetHeight,
                w:piuPiuObjElement.offsetWidth,
        }
        if(piuPiuObj.x < sx + sw &&
        piuPiuObj.x + piuPiuObj.w > sx &&
        piuPiuObj.y < sy + sh &&
        piuPiuObj.y + piuPiuObj.h > sy)
        {
            $(stones[i]).hide();
            piuPiuObjY=-25;
            document.getElementById("piuPiuObj").style.top=piuPiuObjY;
            document.getElementById("piuPiuObj").style.left=piuPiuObjX;
            Dead=false;
            $("#piuPiuObj").hide();
            gameScorePlus(100);
        }
    }
}
function gameScorePlus(gameScorebef){
    gameScore+=gameScorebef;
    document.getElementById("gameScore").innerHTML="gameScore: "+ gameScore;
}
function killPlayer() {
    if(GameOver){
        return;
    }
    for(let i=0;i<stones.length;i++) {
        let Player= {
            x:meteorite.offsetLeft+document.getElementById("playerGroup").offsetLeft,
            y:meteorite.offsetTop+document.getElementById("playerGroup").offsetTop,
            w:meteorite.offsetWidth,
            h:meteorite.offsetHeight
        }
        let CurrentStone= {
            x:stones[i].offsetLeft,
            y:stones[i].offsetTop,
            w:stones[i].offsetWidth,
            h:stones[i].offsetHeight
        }
        if(Player.x < CurrentStone.x + CurrentStone.w &&
            Player.x + Player.w > CurrentStone.x &&
            Player.y < CurrentStone.y + CurrentStone.h &&
            Player.y + Player.h > CurrentStone.y) {               
                GameOver=true;
                setTimeout(meteoriteCrash,100);
            }
    }
}
function meteoriteCrash(){
    $("#gameOverView").css("background","rgba(0,0,0,0.6)");
    $("#slope").css("top","0");
    $("#slope").css("bottom","0");
    $("#piuPiuObj").hide();
    $("#Player").hide();
    $("#playergameScore").html("gameScore : "+gameScore);
    for(var i=0;i<stones.length;i++)
        {
            stones[i].style.display="none";
        }
}
function rightDir() {
    continuousMovement=true;
    dirPlayer=4;
}
function leftDir() {
    continuousMovement=true;
    dirPlayer=-4;
}
function Move(number) {
    let Player=document.getElementById("Player");
    let meteorite=parseInt($("#meteorite").css("left"));
    PlayerX+=number;
    Player.style.left=PlayerX;
    document.getElementById("meteorite").style.left=meteorite+number;
    piuPiuObjX+=number;
    if(!Dead){
            document.getElementById("piuPiuObj").style.left=piuPiuObjX;
        }
}
function keys(dir) {
    if (dir.keyCode === 39) {
      rightDir();
    }
    else if (dir.keyCode === 37) {
      leftDir();/* izq */
    }
    else if(dir.keyCode === 32){
        PiuPiu();
    }
}
function keysUp(dir) {
    if (dir.keyCode === 39|dir.keyCode === 37) {
        continuousMovement=false;
    }
}
function movementPlayer() {
    var Player=document.getElementById("Player");
    var playerGroup=document.getElementById("playerGroup");
    if((!continuousMovement)|(Player.offsetLeft+playerGroup.offsetLeft>=window.innerWidth-Player.getAttribute("width") && dirPlayer==1)|(Player.offsetLeft+playerGroup.offsetLeft<=0  && dirPlayer==-1)) {
        return;
    }
    Move(dirPlayer);
}
setInterval(movementPlayer,.1);
setInterval(stoneMove,3);
setInterval(piuToggle,1);
setInterval(stoneDestroy,1);
setInterval(killPlayer,1);
$("#menu").fadeToggle(300);
let startw = document.getElementById("start");
startw.addEventListener('click',PlayNow)
document.addEventListener('keydown', keys);
document.addEventListener('keyup', keysUp);