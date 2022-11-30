export  var SNAKE_SPEED = 15
import { getinputDirection } from "./input.js";
var SnakeBody=[{x:11 , y:11}]
var NewSegment = 0 

export function update(){
       addSegment()
       var inputdirection = getinputDirection() ; 


        for (var i = SnakeBody.length - 2 ; i >= 0; i--){
            SnakeBody[i+1] = {...SnakeBody[i]}
        }


        SnakeBody[0].x +=inputdirection.x
        SnakeBody[0].y +=inputdirection .y
}


export function draw(game_board){
   SnakeBody.forEach( element =>{
         var SnakeForm = document.createElement("div")
         SnakeForm.style.gridColumnStart = element.x ; 
         SnakeForm.style.gridRowStart = element.y ; 
         SnakeForm.classList.add("SnakeB") ; 
         game_board.appendChild(SnakeForm) ; 
   })
}


export function onSnake(position , { ignoreHead = false } = {}){
    return SnakeBody.some((segment , index)=>{
        if (ignoreHead && index === 0 )  return false ; 
       return  equalposition(position , segment )
    })
}




function equalposition (pos1 , pos2) {
    return pos1.x === pos2.x && pos1.y === pos2.y 
}



export function ExpandSnake (amount) {
    NewSegment+= amount
}



function addSegment(){
    for (var i = 0 ; i < NewSegment  ; i++) {
        SnakeBody.push({ ...SnakeBody[SnakeBody.length - 1]})
    }



    NewSegment = 0
}


export function GetSnakehead(){
    return SnakeBody[0]
}


export function Intesection(){
    return (onSnake(SnakeBody[0] , {ignoreHead : true}))
}