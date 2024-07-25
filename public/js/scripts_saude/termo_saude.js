let checkTermo = document.getElementById("checkTermo")
checkTermo.addEventListener('change',()=>{
    let button = document.getElementById("button") 
    let box = document.getElementById("checkTermo")
    let form = document.getElementById("form")
    
    if(box.checked){  
        form.setAttribute("method", "POST")
        form.setAttribute("action", "/login_saude")
        button.removeAttribute("class")
    }
    else{
        form.removeAttribute("method")
        form.removeAttribute("action")
        button.setAttribute("class", "desbleButton")
    }
})