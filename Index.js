var lastRanderTime = 0
import { update as updateSnake ,
     draw as drawSnake,
      SNAKE_SPEED  ,
      Intesection ,
      GetSnakehead
} from "./Snake.js";
import { draw as drawFood , 
update as updateFood ,
} from "./Food.js";
import { OustSideGrid } from "./Grid.js";
var  GameOver = false ; 
var game_board = document.querySelector('.game_board')




function main(currentTime){
    if(GameOver){
        if(confirm('Are you sure you want to continue')){
            window.location='/Snake.html';
        }
        return;
    }
    window.requestAnimationFrame(main)
    var seconcondlastTime = (currentTime - lastRanderTime) / 1000 ; 
     if (seconcondlastTime < 1 / SNAKE_SPEED) return; 
    lastRanderTime = currentTime ; 




    update()
    draw()
    
}



window.requestAnimationFrame(main)






function  update(){
   updateSnake()
   updateFood()
   sheckdeath()
}


function  draw(){
    game_board.innerHTML=" "
    drawSnake(game_board)
    drawFood(game_board)
}

function sheckdeath(){
    GameOver = OustSideGrid(GetSnakehead()) || Intesection() ; 
}