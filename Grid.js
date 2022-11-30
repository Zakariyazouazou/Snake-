var Grid = 21 ; 

export function getRandomposition(){
    return{
        x:Math.floor(Math.random() * Grid )+1  ,
        y:Math.floor(Math.random() * Grid ) +1 ,
    }
}


export function OustSideGrid(position){
    return position.x < 1 || position.y < 1 || position.x > Grid || position.y > Grid 
}