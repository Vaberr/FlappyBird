let canvas  = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

canvas.width = 500;
canvas.height = 650;

let fon = new Image();
let bird = new Image();
let tube1 = new Image();
let tube2 = new Image();
let start = new Image();
let death = new Image();
let coin = new Image();
let  nameBird = "bird.png";
let nameCoin = "coin.png";

fon.src = "back.png";
bird.src = "bird.png";
tube1.src = "tube1.png";
tube2.src = "tube2.png";
coin.src = nameCoin;
window.onload = function(){
    ctx.drawImage(fon, 0, 0, 500, 700);
    ctx.drawImage(bird, 50, 450, 75, 70);
    ctx.drawImage(tube1, 400, 500, 100, 404);
    ctx.drawImage(tube2, 400, 0, 100, 404);
}




let dxFon = 0;
let dxBird = 50;
let yBird = 325;
let dyBird = 3;
let y1 = Math.floor(Math.random()*300+300);
let y2 = y1-200-404;
let x = 700;
let dx = -8;
let yCoin = y1-110;
let play = false;
let playCoin = false;


document.addEventListener("keydown", PlayGame);

let move = "down";

let score = 0;
let allscore = 0;
if(localStorage.getItem("score")){
    allscore = localStorage.getItem("score")
}
else{
    allscore = 0;
}

function PlayGame(event){
    if(event.key == "Enter" && play == false){
        play = true;
        score = 0;
        document.getElementById("score").innerHTML = score;
        dxFon = 0;
        dxBird = 50;
        yBird = 325;
        dyBird = 3;
        playCoin = false;
        bird.src = nameBird;
        coin.src = nameCoin;
        x = 700;
        requestAnimationFrame(draw);
    }
    if (event.code == "Space"){
        move = "up";
    }
}



function draw(){
    if (play==true)requestAnimationFrame(draw);
    dxFon--;
    x= x+ dx;

    if(dxFon <= -679){
        dxFon=0;
    }
    if( x<= -100){
        x= 700;
        y1 = Math.floor(Math.random()*300+300);
        y2 = y1-200-404;
        yCoin = y1-110;
        playCoin=true;
    }

    if(move == 'down'){
        yBird = yBird + dyBird;
        if(yBird >= 575){
            play = false;
        }
    }
    if(move == 'up'){
        yBird = yBird - 80;
        move="down"
        if(yBird <=0){
            play = false;
        }
    }
    if(yBird < y2 + 404 && yBird > y2 && dxBird > x  && dxBird < x+100 ){
        play = false;
    }
    if(yBird+70 < y1 + 404 && yBird+70 > y1 && dxBird > x  && dxBird < x+100 ){
        play = false; 
    }
    if(yBird < yCoin && yBird+70 > yCoin && dxBird+75 > x+35 && dxBird < x+35 && playCoin==true){
        playCoin = false;
        score = score+1;
        document.getElementById("score").innerHTML = score;
    }

    ctx.drawImage(fon, dxFon, 0, 1179, 700);
    ctx.drawImage(tube1, x, y1, 100, 404);
    ctx.drawImage(tube2, x, y2, 100, 404);
    ctx.drawImage(bird, dxBird, yBird, 75, 70);
    if (playCoin==true)

        ctx.drawImage(coin, x+35, yCoin, 30, 50);
    if (play == false){
        allscore = allscore+score;
        localStorage.setItem("score", allscore);
        bird.src = "die.png";
        death.src = "over.png";

        ctx.drawImage(fon, dxFon, 0, 1179, 700);
        ctx.drawImage(death, 50, 75, 400, 500);
        ctx.drawImage(bird, dxBird, yBird, 75, 70);
    }   

}

function market(){
    document.getElementById("dialog").showModal();
    document.getElementById("allscore").innerHTML = allscore + "$";
}

function bird1(){
    if(allscore >= 10 ){
        allscore=allscore - 10;
        document.getElementById("allscore").innerHTML = allscore + "$";
        localStorage.setItem("score", allscore);
        nameBird = "bird1.png";
       
    }
    else if(allscore < 10){
        alert("У вас недостаточно средств");
    }
    
}

function angry(){
    if(allscore >= 15 ){
        allscore=allscore - 15;
        document.getElementById("allscore").innerHTML = allscore + "$";
        localStorage.setItem("score", allscore);
        nameBird = "bird2.png";
       
    }
    else if(allscore < 15){
        alert("У вас недостаточно средств");
    }
    
}
    
function angry(){
    if(allscore >= 15 ){
        allscore=allscore - 15;
        document.getElementById("allscore").innerHTML = allscore + "$";
        localStorage.setItem("score", allscore);
        nameBird = "bird2.png";
       
    }
    else if(allscore < 15){
        alert("У вас недостаточно средств");
    }
    
}function hamburger(){
    if(allscore >= 15 ){
        allscore=allscore - 15;
        document.getElementById("allscore").innerHTML = allscore + "$";
        localStorage.setItem("score", allscore);
        nameCoin = "hamburger.png";
       
    }
    else if(allscore < 15){
        alert("У вас недостаточно средств");
    }
    
}

function heart(){
    if(allscore >= 20 ){
        allscore=allscore - 20;
        document.getElementById("allscore").innerHTML = allscore + "$";
        localStorage.setItem("score", allscore);
        nameCoin = "heart.png";
       
    }
    else if(allscore < 20){
        alert("У вас недостаточно средств");
    }
    
}

function star(){
    if(allscore >= 20 ){
        allscore=allscore - 20;
        document.getElementById("allscore").innerHTML = allscore + "$";
        localStorage.setItem("score", allscore);
        nameBird = "strar.png";
       
    }
    else if(allscore < 20){
        alert("У вас недостаточно средств");
    }
    
}function cat(){
    if(allscore >= 35 ){
        allscore=allscore - 35;
        document.getElementById("allscore").innerHTML = allscore + "$";
        localStorage.setItem("score", allscore);
        nameBird = "cat.png";
       
    }
    else if(allscore < 35){
        alert("У вас недостаточно средств");
    }
}



