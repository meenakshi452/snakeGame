// Game Constants & Variables
let inputDir = {x: 0, y: 0}; 
const foodSound = new Audio('music/food.mp3');
const gameOverSound = new Audio('music/gameover.mp3');
const moveSound = new Audio('music/move.mp3');
const musicSound = new Audio('music/music.mp3');
let speed = 5;
let score = 0;
let lastPaintTime = 0;
let snakes = [];
for(i = 2; i<50; i++){
    snakes[i] = snakeGenerator()
}
let level = 1;
// let snakeArr = [
//     {x: 5, y: 5}
// ];

let  arr = snakeGenerator();
let snakeArr2 = snakeGenerator();
snakes[0] = snakeArr2;
snakes[1]= arr;
// console.log(snakes);
let food = randomFoodGenerator();
let chip = randomChipGenerator();


const pauseBtn = document.querySelector('#buttonn');    

let running = false;
pauseBtn.addEventListener('click', pauseGame);


function randomFoodGenerator(){
    let a = Math.round(1 + (19)* Math.random());
    let b = Math.round(1 + (9)* Math.random());
    return {x: a, y: b};
}
function randomChipGenerator(){
    let a = Math.round(1 + (18)* Math.random());
    let b = Math.round(1 + (9)* Math.random());
    return {x: a, y: b};
}
// Game Functions
function main(ctime) {
    window.requestAnimationFrame(main);
    // console.log(ctime)
    if((ctime - lastPaintTime)/1000 < 1/speed){
        return;
    }
    lastPaintTime = ctime;
    gameEngine();
}

function snakeGenerator(){
    let f = Math.round(3 + (4)* Math.random());
    let snake = [];
    let a = Math.round(1 + (14)* Math.random());
    let b = Math.round(1 + (4)* Math.random());
    snake[0] = {x: a, y: b};
    for(let i = 1; i < f; i++){
        snake[i] = {x: 10, y: b};
        snake[i].x = snake[i-1].x +1;
    }
    return snake;
}

function snakeMove(arr){
    for (let i = arr.length-2; i>=0; i--) { 
        arr[i+1] = {...arr[i]};
    }
    let a2 = {x:0, y:1};
    let b2= {x:0, y:-1};
    let c2 = {x:1, y:0};
    let d2 = {x:-1, y:0};
    let f2 = Math.round(0 + (3)* Math.random());
    if(arr[0].y == arr[1].y){
        if(arr[0].x < arr[1].x){
            c2 = d2;
        }
    }
    else if(arr[0].x == arr[1].x){
        if(arr[0].y >arr[1].y ){
            b2 = d2;
        }
        else if(arr[0].y<arr[1].y ){
            a2= d2;
        }
    }
    if (f2==0) {
        arr[0].x = (arr[0].x +a2.x)%21;
        arr[0].y = (arr[0].y+a2.y)%9;
    }
    else if (f2==1){
        arr[0].x = (arr[0].x+b2.x)%21;
        arr[0].y = (arr[0].y+b2.y)%9;
    }
    else if (f2==2){
        arr[0].x = (arr[0].x+c2.x)%21;
        arr[0].y = (arr[0].y+c2.y)%9;
    }
}

function displayFood(){
    foodElement = document.createElement('div');
    foodElement.style.gridRowStart = food.y;
    foodElement.style.gridColumnStart = food.x;
    foodElement.classList.add('food')
    board.appendChild(foodElement);

}
function displayChip(){
    chipElement = document.createElement('div');
    chipElement.style.gridRowStart = chip.y;
    chipElement.style.gridColumnStart = chip.x;
    chipElement.classList.add('chip')
    board.appendChild(chipElement);

}
function displaySnake(arr){
    // board.innerHTML = "";
    
    arr.forEach((e, index)=>{
        // gameStart();
        snakeElement = document.createElement('div');
            snakeElement.style.gridRowStart = e.y;
            snakeElement.style.gridColumnStart = e.x;
        snakeElement.classList.add('snake');
        board.appendChild(snakeElement);
    });
}
function isCollide(snakesarr) {
    // If you bump into yourself 
    // for(let j= 0; i<snakes.length;i++){
        for (let i = 0; i < snakesarr.length; i++) {
            if(snakesarr[i].x == chip.x && snakesarr[i].y == chip.y){
                return true;
            }
            // console.log(snakes[j][i])
        }
    // }
    
    if(chip.x > 20 || chip.x <=0|| chip.y > 10|| chip.y <=0){
        return true;
    }
        
    return false;
}
function didwin(){
    
}

// function nextlevel(level){
//     snakes[level] = snakeGenerator();
//     snakeMove(snakes[level]);
//     displaySnake(snakes[level]);
// }

function gameEngine(){
    levelBox.innerHTML = "Level- " + level;
    
    
    
    for (let i = arr.length-2; i>=0; i--) { 
        arr[i+1] = {...arr[i]};
    }
    let a2 = {x:0, y:1};
    let b2= {x:0, y:-1};
    let c2 = {x:1, y:0};
    let d2 = {x:-1, y:0};
    let f2 = Math.round(0 + (3)* Math.random());
    if(arr[0].y == arr[1].y){
        if(arr[0].x < arr[1].x){
            c2 = d2;
        }
    }
    else if(arr[0].x == arr[1].x){
        if(arr[0].y >arr[1].y ){
            b2 = d2;
        }
        else if(arr[0].y<arr[1].y ){
            a2= d2;
        }
    }
    if (f2==0) {
        arr[0].x = (arr[0].x +a2.x)%21;
        arr[0].y = (arr[0].y+a2.y)%9;
    }
    else if (f2==1){
        arr[0].x = (arr[0].x+b2.x)%21;
        arr[0].y = (arr[0].y+b2.y)%9;
    }
    else if (f2==2){
        arr[0].x = (arr[0].x+c2.x)%21;
        arr[0].y = (arr[0].y+c2.y)%9;
    }
    
    
    


    // // arr = snakes[1];
    // for (let i = snakeArr2.length-2; i>=0; i--) { 
    //     snakeArr2[i+1] = {...snakeArr2[i]};
    // }
    // let a = {x:0, y:1};
    // let b= {x:0, y:-1};
    // let c = {x:1, y:0};
    // let d = {x:-1, y:0};
    // let f = Math.round(0 + (3)* Math.random());
    // if(snakeArr2[0].y == snakeArr2[1].y){
    //     if(snakeArr2[0].x < snakeArr2[1].x){
    //         c = d;
    //     }
    // }
    // else if(snakeArr2[0].x == snakeArr2[1].x){
    //     if(snakeArr2[0].y >snakeArr2[1].y ){
    //         b = d;
    //     }
    //     else if(snakeArr2[0].y<snakeArr2[1].y ){
    //         a= d;
    //     }
    // }
    // if (f==0) {
    //     snakeArr2[0].x = (snakeArr2[0].x +a.x)%21;
    //     snakeArr2[0].y = (snakeArr2[0].y+a.y)%9;
    // }
    // else if (f==1){
    //     snakeArr2[0].x = (snakeArr2[0].x+b.x)%21;
    //     snakeArr2[0].y = (snakeArr2[0].y+b.y)%9;
    // }
    // else if (f==2){
    //     snakeArr2[0].x = (snakeArr2[0].x+c.x)%21;
    //     snakeArr2[0].y = (snakeArr2[0].y+c.y)%9;
    // }
    board.innerHTML = "";
    displaySnake(arr);

    // snakeMove(snakeArr2);
    // displaySnake(snakeArr2);
    // snakeArr2.forEach((e, index)=>{
    //     // gameStart();
    //     snakeElement = document.createElement('div');
    //         snakeElement.style.gridRowStart = e.y;
    //         snakeElement.style.gridColumnStart = e.x;
    //     snakeElement.classList.add('snake');
    //     board.appendChild(snakeElement);
    // });
    displayFood();
    displayChip();
    

    if(chip.y == food.y && chip.x ==food.x){
        level++;
        foodSound.play();
        score += 10;
        if(score>hiscoreval){
            hiscoreval = score;
            localStorage.setItem("hiscore", JSON.stringify(hiscoreval));
            hiscoreBox.innerHTML = "HiScore: " + hiscoreval;
        }
        scoreBox.innerHTML = "Score: " + score;
        snakeArr2.unshift({x: snakeArr2[0].x + inputDir.x, y: snakeArr2[0].y + inputDir.y});
        food = randomFoodGenerator();
        levelBox.innerHTML = "Level- " + level;
        // snakes[level] = snakeGenerator();
        // snakeMove(snakeArr2)
        // displaySnake(snakeArr2);
        // return true;
    }
    for(i = 2; i<=level;i++){
        snakeMove(snakes[level])
        displaySnake(snakes[level]);
    }
    for(i=1;i<=level;i++){
        if(isCollide(snakes[i])){
            alert("Game Over. Press any key to play again!");
            chip = randomChipGenerator();
            score -= 10;
            scoreBox.innerHTML = "Score: " + score;
        }
    }
    
    
}


// Main logic starts here
musicSound.play();
let hiscore = localStorage.getItem("hiscore");
if(hiscore === null){
    hiscoreval = 0;
    localStorage.setItem("hiscore", JSON.stringify(hiscoreval))
}
else{
    hiscoreval = JSON.parse(hiscore);
    hiscoreBox.innerHTML = "HiScore: " + hiscore;
}

function pauseGame(){
    if(!running){
        let  myReq=window.requestAnimationFrame(main);
        buttonn.innerHTML = "pause";
        running = !running;
    }
    else{
        // window.cancelAnimationFrame(myReq);
        alert("Game is paused.Click OK to continue.")
        // running = !running;
    }
}
// let  myReq = window.requestAnimationFrame(main);
// console.log(Element.style.animationPlayState);
// window.cancelAnimationFrame(myReq);
window.addEventListener('keydown', e =>{
    inputDir = {x: 0, y: 1} // Start the game
    moveSound.play();
    switch (e.key) {
        case "ArrowUp":
            console.log("ArrowUp");
            // chip.x = 0;
            chip.y += -1;
            break;

        case "ArrowDown":
            console.log("ArrowDown");
            // inputDir.x = 0;
            chip.y += 1;
            break;

            
        case "ArrowLeft":
            console.log("ArrowLeft");
            chip.x += -1;
            // inputDir.y = 0;
            break;

        case "ArrowRight":
            console.log("ArrowRight");
            chip.x += 1;
            // inputDir.y = 0;
            break;
        default:
            break;
    }

});