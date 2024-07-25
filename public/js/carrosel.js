//CARROSEL DE IMAGENS
function next(){
    let contador = document.getElementById("contador").innerHTML
    let cont = Number(contador) + 1
    let co = document.getElementById("contador").innerHTML = cont

    let imagens = document.getElementById("imgs")
    let imagensLenght = document.getElementsByName("img")
    
    imagens.style.transform = `translateX(${Number(co) * -100}%)`

    if(cont > imagensLenght.length - 1){
        cont = 0
        document.getElementById("contador").innerHTML = 0
        imagens.style.transform = "translateX(0%)"
    }
    console.log(imagensLenght.length)

    //--------------------------indicadores de slide----------------------------
    let currentRadio = document.getElementById("contador").innerHTML
    if(currentRadio == "0"){
        document.getElementById("radio1").style.backgroundColor = "rgb(77, 77, 77)"
        document.getElementById("radio2").style.backgroundColor = "transparent"
        document.getElementById("radio3").style.backgroundColor = "transparent"
        document.getElementById("radio4").style.backgroundColor = "transparent"
        document.getElementById("radio5").style.backgroundColor = "transparent"
        document.getElementById("radio6").style.backgroundColor = "transparent"
        document.getElementById("radio7").style.backgroundColor = "transparent"
        document.getElementById("radio8").style.backgroundColor = "transparent"
        document.getElementById("radio9").style.backgroundColor = "transparent"
        document.getElementById("radio10").style.backgroundColor = "transparent"
        document.getElementById("radio11").style.backgroundColor = "transparent"
    }
    else if(currentRadio == "1"){
        document.getElementById("radio1").style.backgroundColor = "transparent"
        document.getElementById("radio2").style.backgroundColor = "rgb(77, 77, 77)"
        document.getElementById("radio3").style.backgroundColor = "transparent"
        document.getElementById("radio4").style.backgroundColor = "transparent"
        document.getElementById("radio5").style.backgroundColor = "transparent"
        document.getElementById("radio6").style.backgroundColor = "transparent"
        document.getElementById("radio7").style.backgroundColor = "transparent"
        document.getElementById("radio8").style.backgroundColor = "transparent"
        document.getElementById("radio9").style.backgroundColor = "transparent"
        document.getElementById("radio10").style.backgroundColor = "transparent"
        document.getElementById("radio11").style.backgroundColor = "transparent"
    }
    else if(currentRadio == "2"){
        document.getElementById("radio1").style.backgroundColor = "transparent"
        document.getElementById("radio2").style.backgroundColor = "transparent"
        document.getElementById("radio3").style.backgroundColor = "rgb(77, 77, 77)"
        document.getElementById("radio4").style.backgroundColor = "transparent"
        document.getElementById("radio5").style.backgroundColor = "transparent"
        document.getElementById("radio6").style.backgroundColor = "transparent"
        document.getElementById("radio7").style.backgroundColor = "transparent"
        document.getElementById("radio8").style.backgroundColor = "transparent"
        document.getElementById("radio9").style.backgroundColor = "transparent"
        document.getElementById("radio10").style.backgroundColor = "transparent"
        document.getElementById("radio11").style.backgroundColor = "transparent"
    }
    else if(currentRadio == "3"){
        document.getElementById("radio1").style.backgroundColor = "transparent"
        document.getElementById("radio2").style.backgroundColor = "transparent"
        document.getElementById("radio3").style.backgroundColor = "transparent"
        document.getElementById("radio4").style.backgroundColor = "rgb(77, 77, 77)"
        document.getElementById("radio5").style.backgroundColor = "transparent"
        document.getElementById("radio6").style.backgroundColor = "transparent"
        document.getElementById("radio7").style.backgroundColor = "transparent"
        document.getElementById("radio8").style.backgroundColor = "transparent"
        document.getElementById("radio9").style.backgroundColor = "transparent"
        document.getElementById("radio10").style.backgroundColor = "transparent"
        document.getElementById("radio11").style.backgroundColor = "transparent"
    }
    else if(currentRadio == "4"){
        document.getElementById("radio1").style.backgroundColor = "transparent"
        document.getElementById("radio2").style.backgroundColor = "transparent"
        document.getElementById("radio3").style.backgroundColor = "transparent"
        document.getElementById("radio4").style.backgroundColor = "transparent"
        document.getElementById("radio5").style.backgroundColor = "rgb(77, 77, 77)"
        document.getElementById("radio6").style.backgroundColor = "transparent"
        document.getElementById("radio7").style.backgroundColor = "transparent"
        document.getElementById("radio8").style.backgroundColor = "transparent"
        document.getElementById("radio9").style.backgroundColor = "transparent"
        document.getElementById("radio10").style.backgroundColor = "transparent"
        document.getElementById("radio11").style.backgroundColor = "transparent"
    }
    else if(currentRadio == "5"){
        document.getElementById("radio1").style.backgroundColor = "transparent"
        document.getElementById("radio2").style.backgroundColor = "transparent"
        document.getElementById("radio3").style.backgroundColor = "transparent"
        document.getElementById("radio4").style.backgroundColor = "transparent"
        document.getElementById("radio5").style.backgroundColor = "transparent"
        document.getElementById("radio6").style.backgroundColor = "rgb(77, 77, 77)"
        document.getElementById("radio7").style.backgroundColor = "transparent"
        document.getElementById("radio8").style.backgroundColor = "transparent"
        document.getElementById("radio9").style.backgroundColor = "transparent"
        document.getElementById("radio10").style.backgroundColor = "transparent"
        document.getElementById("radio11").style.backgroundColor = "transparent"
    }
    else if(currentRadio == "6"){
        document.getElementById("radio1").style.backgroundColor = "transparent"
        document.getElementById("radio2").style.backgroundColor = "transparent"
        document.getElementById("radio3").style.backgroundColor = "transparent"
        document.getElementById("radio4").style.backgroundColor = "transparent"
        document.getElementById("radio5").style.backgroundColor = "transparent"
        document.getElementById("radio6").style.backgroundColor = "transparent"
        document.getElementById("radio7").style.backgroundColor = "rgb(77, 77, 77)"
        document.getElementById("radio8").style.backgroundColor = "transparent"
        document.getElementById("radio9").style.backgroundColor = "transparent"
        document.getElementById("radio10").style.backgroundColor = "transparent"
        document.getElementById("radio11").style.backgroundColor = "transparent"
    } 
    else if(currentRadio == "7"){
        document.getElementById("radio1").style.backgroundColor = "transparent"
        document.getElementById("radio2").style.backgroundColor = "transparent"
        document.getElementById("radio3").style.backgroundColor = "transparent"
        document.getElementById("radio4").style.backgroundColor = "transparent"
        document.getElementById("radio5").style.backgroundColor = "transparent"
        document.getElementById("radio6").style.backgroundColor = "transparent"
        document.getElementById("radio7").style.backgroundColor = "transparent"
        document.getElementById("radio8").style.backgroundColor = "rgb(77, 77, 77)"
        document.getElementById("radio9").style.backgroundColor = "transparent"
        document.getElementById("radio10").style.backgroundColor = "transparent"
        document.getElementById("radio11").style.backgroundColor = "transparent"
    }
    else if(currentRadio == "8"){
        document.getElementById("radio1").style.backgroundColor = "transparent"
        document.getElementById("radio2").style.backgroundColor = "transparent"
        document.getElementById("radio3").style.backgroundColor = "transparent"
        document.getElementById("radio4").style.backgroundColor = "transparent"
        document.getElementById("radio5").style.backgroundColor = "transparent"
        document.getElementById("radio6").style.backgroundColor = "transparent"
        document.getElementById("radio7").style.backgroundColor = "transparent"
        document.getElementById("radio8").style.backgroundColor = "transparent"
        document.getElementById("radio9").style.backgroundColor = "rgb(77, 77, 77)"
        document.getElementById("radio10").style.backgroundColor = "transparent"
        document.getElementById("radio11").style.backgroundColor = "transparent"
    }
    else if(currentRadio == "9"){
        document.getElementById("radio1").style.backgroundColor = "transparent"
        document.getElementById("radio2").style.backgroundColor = "transparent"
        document.getElementById("radio3").style.backgroundColor = "transparent"
        document.getElementById("radio4").style.backgroundColor = "transparent"
        document.getElementById("radio5").style.backgroundColor = "transparent"
        document.getElementById("radio6").style.backgroundColor = "transparent"
        document.getElementById("radio7").style.backgroundColor = "transparent"
        document.getElementById("radio8").style.backgroundColor = "transparent"
        document.getElementById("radio9").style.backgroundColor = "transparent"
        document.getElementById("radio10").style.backgroundColor = "rgb(77, 77, 77)"
        document.getElementById("radio11").style.backgroundColor = "transparent"
    }
    else if(currentRadio == "10"){
        document.getElementById("radio1").style.backgroundColor = "transparent"
        document.getElementById("radio2").style.backgroundColor = "transparent"
        document.getElementById("radio3").style.backgroundColor = "transparent"
        document.getElementById("radio4").style.backgroundColor = "transparent"
        document.getElementById("radio5").style.backgroundColor = "transparent"
        document.getElementById("radio6").style.backgroundColor = "transparent"
        document.getElementById("radio7").style.backgroundColor = "transparent"
        document.getElementById("radio8").style.backgroundColor = "transparent"
        document.getElementById("radio9").style.backgroundColor = "transparent"
        document.getElementById("radio10").style.backgroundColor = "transparent"
        document.getElementById("radio11").style.backgroundColor = "rgb(77, 77, 77)"
    }  
    //------------------------------------------------------------
}

//setInterval(next, 18000)

function back(){
    let imagens = document.getElementById("imgs")
    let imagensLenght = document.getElementsByName("img")

    let contador = document.getElementById("contador").innerHTML
    let cont = Number(contador) - 1
    let co = document.getElementById("contador").innerHTML = cont

    imagens.style.transform = `translateX(${Number(co) * -100}%)`

    if(cont < 0){     
        document.getElementById("contador").innerHTML = 10
        cont = 11
        imagens.style.transform = `translateX(-1000%)`
    }

    //--------------------------indicadores de slide----------------------------
    let currentRadio = document.getElementById("contador").innerHTML
    if(currentRadio == "0"){
        document.getElementById("radio1").style.backgroundColor = "rgb(77, 77, 77)"
        document.getElementById("radio2").style.backgroundColor = "transparent"
        document.getElementById("radio3").style.backgroundColor = "transparent"
        document.getElementById("radio4").style.backgroundColor = "transparent"
        document.getElementById("radio5").style.backgroundColor = "transparent"
        document.getElementById("radio6").style.backgroundColor = "transparent"
        document.getElementById("radio7").style.backgroundColor = "transparent"
        document.getElementById("radio8").style.backgroundColor = "transparent"
        document.getElementById("radio9").style.backgroundColor = "transparent"
        document.getElementById("radio10").style.backgroundColor = "transparent"
        document.getElementById("radio11").style.backgroundColor = "transparent"
    }
    else if(currentRadio == "1"){
        document.getElementById("radio1").style.backgroundColor = "transparent"
        document.getElementById("radio2").style.backgroundColor = "rgb(77, 77, 77)"
        document.getElementById("radio3").style.backgroundColor = "transparent"
        document.getElementById("radio4").style.backgroundColor = "transparent"
        document.getElementById("radio5").style.backgroundColor = "transparent"
        document.getElementById("radio6").style.backgroundColor = "transparent"
        document.getElementById("radio7").style.backgroundColor = "transparent"
        document.getElementById("radio8").style.backgroundColor = "transparent"
        document.getElementById("radio9").style.backgroundColor = "transparent"
        document.getElementById("radio10").style.backgroundColor = "transparent"
        document.getElementById("radio11").style.backgroundColor = "transparent"
    }
    else if(currentRadio == "2"){
        document.getElementById("radio1").style.backgroundColor = "transparent"
        document.getElementById("radio2").style.backgroundColor = "transparent"
        document.getElementById("radio3").style.backgroundColor = "rgb(77, 77, 77)"
        document.getElementById("radio4").style.backgroundColor = "transparent"
        document.getElementById("radio5").style.backgroundColor = "transparent"
        document.getElementById("radio6").style.backgroundColor = "transparent"
        document.getElementById("radio7").style.backgroundColor = "transparent"
        document.getElementById("radio8").style.backgroundColor = "transparent"
        document.getElementById("radio9").style.backgroundColor = "transparent"
        document.getElementById("radio10").style.backgroundColor = "transparent"
        document.getElementById("radio11").style.backgroundColor = "transparent"
    }
    else if(currentRadio == "3"){
        document.getElementById("radio1").style.backgroundColor = "transparent"
        document.getElementById("radio2").style.backgroundColor = "transparent"
        document.getElementById("radio3").style.backgroundColor = "transparent"
        document.getElementById("radio4").style.backgroundColor = "rgb(77, 77, 77)"
        document.getElementById("radio5").style.backgroundColor = "transparent"
        document.getElementById("radio6").style.backgroundColor = "transparent"
        document.getElementById("radio7").style.backgroundColor = "transparent"
        document.getElementById("radio8").style.backgroundColor = "transparent"
        document.getElementById("radio9").style.backgroundColor = "transparent"
        document.getElementById("radio10").style.backgroundColor = "transparent"
        document.getElementById("radio11").style.backgroundColor = "transparent"
    }
    else if(currentRadio == "4"){
        document.getElementById("radio1").style.backgroundColor = "transparent"
        document.getElementById("radio2").style.backgroundColor = "transparent"
        document.getElementById("radio3").style.backgroundColor = "transparent"
        document.getElementById("radio4").style.backgroundColor = "transparent"
        document.getElementById("radio5").style.backgroundColor = "rgb(77, 77, 77)"
        document.getElementById("radio6").style.backgroundColor = "transparent"
        document.getElementById("radio7").style.backgroundColor = "transparent"
        document.getElementById("radio8").style.backgroundColor = "transparent"
        document.getElementById("radio9").style.backgroundColor = "transparent"
        document.getElementById("radio10").style.backgroundColor = "transparent"
        document.getElementById("radio11").style.backgroundColor = "transparent"
    }
    else if(currentRadio == "5"){
        document.getElementById("radio1").style.backgroundColor = "transparent"
        document.getElementById("radio2").style.backgroundColor = "transparent"
        document.getElementById("radio3").style.backgroundColor = "transparent"
        document.getElementById("radio4").style.backgroundColor = "transparent"
        document.getElementById("radio5").style.backgroundColor = "transparent"
        document.getElementById("radio6").style.backgroundColor = "rgb(77, 77, 77)"
        document.getElementById("radio7").style.backgroundColor = "transparent"
        document.getElementById("radio8").style.backgroundColor = "transparent"
        document.getElementById("radio9").style.backgroundColor = "transparent"
        document.getElementById("radio10").style.backgroundColor = "transparent"
        document.getElementById("radio11").style.backgroundColor = "transparent"
    }
    else if(currentRadio == "6"){
        document.getElementById("radio1").style.backgroundColor = "transparent"
        document.getElementById("radio2").style.backgroundColor = "transparent"
        document.getElementById("radio3").style.backgroundColor = "transparent"
        document.getElementById("radio4").style.backgroundColor = "transparent"
        document.getElementById("radio5").style.backgroundColor = "transparent"
        document.getElementById("radio6").style.backgroundColor = "transparent"
        document.getElementById("radio7").style.backgroundColor = "rgb(77, 77, 77)"
        document.getElementById("radio8").style.backgroundColor = "transparent"
        document.getElementById("radio9").style.backgroundColor = "transparent"
        document.getElementById("radio10").style.backgroundColor = "transparent"
        document.getElementById("radio11").style.backgroundColor = "transparent"
    } 
    else if(currentRadio == "7"){
        document.getElementById("radio1").style.backgroundColor = "transparent"
        document.getElementById("radio2").style.backgroundColor = "transparent"
        document.getElementById("radio3").style.backgroundColor = "transparent"
        document.getElementById("radio4").style.backgroundColor = "transparent"
        document.getElementById("radio5").style.backgroundColor = "transparent"
        document.getElementById("radio6").style.backgroundColor = "transparent"
        document.getElementById("radio7").style.backgroundColor = "transparent"
        document.getElementById("radio8").style.backgroundColor = "rgb(77, 77, 77)"
        document.getElementById("radio9").style.backgroundColor = "transparent"
        document.getElementById("radio10").style.backgroundColor = "transparent"
        document.getElementById("radio11").style.backgroundColor = "transparent"
    }
    else if(currentRadio == "8"){
        document.getElementById("radio1").style.backgroundColor = "transparent"
        document.getElementById("radio2").style.backgroundColor = "transparent"
        document.getElementById("radio3").style.backgroundColor = "transparent"
        document.getElementById("radio4").style.backgroundColor = "transparent"
        document.getElementById("radio5").style.backgroundColor = "transparent"
        document.getElementById("radio6").style.backgroundColor = "transparent"
        document.getElementById("radio7").style.backgroundColor = "transparent"
        document.getElementById("radio8").style.backgroundColor = "transparent"
        document.getElementById("radio9").style.backgroundColor = "rgb(77, 77, 77)"
        document.getElementById("radio10").style.backgroundColor = "transparent"
        document.getElementById("radio11").style.backgroundColor = "transparent"
    }
    else if(currentRadio == "9"){
        document.getElementById("radio1").style.backgroundColor = "transparent"
        document.getElementById("radio2").style.backgroundColor = "transparent"
        document.getElementById("radio3").style.backgroundColor = "transparent"
        document.getElementById("radio4").style.backgroundColor = "transparent"
        document.getElementById("radio5").style.backgroundColor = "transparent"
        document.getElementById("radio6").style.backgroundColor = "transparent"
        document.getElementById("radio7").style.backgroundColor = "transparent"
        document.getElementById("radio8").style.backgroundColor = "transparent"
        document.getElementById("radio9").style.backgroundColor = "transparent"
        document.getElementById("radio10").style.backgroundColor = "rgb(77, 77, 77)"
        document.getElementById("radio11").style.backgroundColor = "transparent"
    }
    else if(currentRadio == "10"){
        document.getElementById("radio1").style.backgroundColor = "transparent"
        document.getElementById("radio2").style.backgroundColor = "transparent"
        document.getElementById("radio3").style.backgroundColor = "transparent"
        document.getElementById("radio4").style.backgroundColor = "transparent"
        document.getElementById("radio5").style.backgroundColor = "transparent"
        document.getElementById("radio6").style.backgroundColor = "transparent"
        document.getElementById("radio7").style.backgroundColor = "transparent"
        document.getElementById("radio8").style.backgroundColor = "transparent"
        document.getElementById("radio9").style.backgroundColor = "transparent"
        document.getElementById("radio10").style.backgroundColor = "transparent"
        document.getElementById("radio11").style.backgroundColor = "rgb(77, 77, 77)"
    }   
    //------------------------------------------------------------
}