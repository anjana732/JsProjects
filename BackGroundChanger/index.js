const randomColor =  function(){
    const hex = "0123456789ABCDEF";
    let color = "#";
    for (let index = 0; index < 6; index++) {
       color += hex[Math.floor(Math.random() * 16)]; 
    }
    return color;
}
let intervalId;
console.log(randomColor());

const startChangingColor = function(){
    if(!intervalId){
        intervalId = setInterval(chnageBgColor,1000);
    }
    
    function chnageBgColor(){
        document.body.style.backgroundColor = randomColor();
    }
    
}
document.getElementById('start').addEventListener('click',startChangingColor);
const stopChangingColor = function(){
    clearInterval(intervalId);
    intervalId = null;
}
document.getElementById('stop').addEventListener('click', stopChangingColor);
