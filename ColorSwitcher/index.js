const bg = document.querySelector("body");
const btn = document.querySelectorAll('.button');


btn.forEach((button)=>{
    console.log(button);
    button.addEventListener('click', function(e){
        console.log(e);
        console.log(e.target);
        if(e.target.id === 'grey'){
            bg.style.backgroundColor = e.target.id;
        }
        if(e.target.id === 'yellow'){
            bg.style.backgroundColor = 'rgb(236, 236, 106)'
        
        }
        if(e.target.id === 'white'){
            bg.style.backgroundColor = e.target.id;
           
        }
        if(e.target.id === 'red'){
            bg.style.backgroundColor = 'rgb(241, 126, 126)';
           
        }
    })  
});
