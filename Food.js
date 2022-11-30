import { getRandomposition } from "./Grid.js";
var food = getnewfoodposition()

var EXPANSION_RATE = 1 ; 
import { onSnake , ExpandSnake } from "./Snake.js";
export function update(){
       if (onSnake(food)){
         ExpandSnake(EXPANSION_RATE) ; 
         food = getnewfoodposition()
       }
   }
   
   
   export function draw(game_board){
            var foodform = document.createElement("div")
            foodform.style.gridColumnStart = food.x ; 
            foodform.style.gridRowStart = food.y ; 
            foodform.classList.add("FoodB") ; 
            game_board.appendChild(foodform) ; 
   }





   function getnewfoodposition(){
      while (newfoodposition == null || onSnake(newfoodposition)){
         var newfoodposition = getRandomposition()
      }
      return newfoodposition ;
   }