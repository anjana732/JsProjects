const clock = document.getElementById('clock');

setInterval(function(){
    const dt = new Date();
    clock.innerHTML = dt.toLocaleTimeString();
},1000);