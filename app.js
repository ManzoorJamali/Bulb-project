let btn = document.getElementById('toggle-btn');
let bulb = document.getElementById('bulb');
btn.addEventListener('click', togglebulb);

function togglebulb(e){
    if(btn.textContent.includes('on')){
        bulb.src = ".//assets/img/btn-on.png" 
       
        btn.textContent="Turn off"

    }
    else{
         bulb.src = ".//assets/img/bulb-off.png"
        
        btn.textContent="Turn on"
    }
    
    

}
