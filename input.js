var inputdirection = {x:0 , y:0}
var lastinputDirection = {x:0, y:0}
  window.addEventListener("keydown", (e)=>{
    switch(e.key) {
        case "ArrowUp":
            if(lastinputDirection.y !== 0 ) break ; 
            inputdirection = {x:0, y:-1} ; 
            break ;
        case "ArrowDown":
            if(lastinputDirection.y !== 0 ) break ; 
            inputdirection = {x:0, y:1} ; 
            break ;
        case "ArrowLeft":
            if(lastinputDirection.x !== 0 ) break ; 
            inputdirection = {x:-1, y:0} ; 
            break ;
        case "ArrowRight":
            if(lastinputDirection.x !== 0 ) break ; 
            inputdirection = {x:1, y:0} ; 
            break ;

    }
  })



export function getinputDirection(){
    lastinputDirection = inputdirection ; 
    return inputdirection
}