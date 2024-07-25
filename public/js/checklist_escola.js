function localizacao_escola(){
    function getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition);
        } else {
            alert("Geolocation is not supported by this browser.");
        }
    }

    function showPosition(position){
        var latitude = position.coords.latitude;
        var longitude = position.coords.longitude;
        document.getElementById("latitude").value = latitude;
        document.getElementById("longitude").value = longitude;
    }
    getLocation()  
}
localizacao()



/*
function addChecked(){
    let lista = document.getElementById("lista")
    let anotacao = document.getElementById("anotacao")
    //criando container principal onde ficará as imagens e a anotação, e diconado atributos
    let container = document.createElement("div")
    container.setAttribute("class", "container")
    container.setAttribute("name", "container")
    let lenghtLista = document.getElementsByName("container").length
    container.setAttribute("id", `anotacao${lenghtLista}`)

    //criando nova anotacao
    let novaAnotacao = document.createElement("p")
    novaAnotacao.setAttribute("class", "novaAnotacao")
    novaAnotacao.innerHTML = anotacao.value

    //criando ícone checado
    let ok = document.createElement("img")
    ok.setAttribute("src", "/img/iconesMenu/checked.png")
    

    //criando ícone apagar e a sua função de apagar
    let apagar = document.createElement("img")
    apagar.setAttribute("id", `apagar${lenghtLista}`)
    apagar.setAttribute("src", "/img/lixo.png")
    apagar.setAttribute("onclick", `apagar${lenghtLista}()`)


    //criando função javascript para cada anotação criada que apagará a sua repectiva anotação
    let novoScript = `function apagar${lenghtLista}(){
        document.getElementById("anotacao${lenghtLista}").style.display = 'none'
    }`
    let novaFunc = document.createElement("script")
    novaFunc.innerHTML = novoScript

    let body = document.getElementById("corpo")
    container.appendChild(novaFunc)
    //-----------------------------------------------------------------------------------------
      

    //adicionando os ícones e a nova anotação dentro do container principal criado anteriormente
    container.appendChild(ok)
    container.appendChild(novaAnotacao)
    container.appendChild(apagar)

    //colocando o container dentro da lista de anotacões
    lista.appendChild(container)
    
    //apagando o que foi digitado no input
    function apagarInput(){
        document.getElementById("anotacao").value = null
    }
    setTimeout(apagarInput, 100)
}
*/





function addChecked(){
    const estaVazio = document.getElementById("anotacao")
    if (estaVazio.value.length > 0){
        let lista = document.getElementById("lista")
        let anotacao = document.getElementById("anotacao")
        //criando container principal onde ficará as imagens e a anotação, e adicionando atributos
        let container = document.createElement("div")
        container.setAttribute("class", "container")
        container.setAttribute("name", "container")
        let lenghtLista = document.getElementsByName("container").length
        container.setAttribute("id", `anotacao${lenghtLista}`)

        //criando nova anotacao
        let novaAnotacao = document.createElement("p")
        novaAnotacao.setAttribute("class", "novaAnotacao")
        novaAnotacao.innerHTML = anotacao.value

        //criando ícone checado
        let ok = document.createElement("img")
        ok.setAttribute("src", "/img/iconesMenu/checked.png")
        

        //criando ícone apagar e a sua função de apagar
        let apagar = document.createElement("img")
        apagar.setAttribute("class", "apagar")
        apagar.setAttribute("id", `apagar${lenghtLista}`)
        apagar.setAttribute("src", "/img/lixo.png")
        apagar.setAttribute("onclick", `apagar${lenghtLista}()`)


        //criando função javascript para cada anotação criada que apagará a sua repectiva anotação
        let novoScript = `function apagar${lenghtLista}(){
            document.getElementById("anotacao${lenghtLista}").style.display = 'none'
        }`
        let novaFunc = document.createElement("script")
        novaFunc.innerHTML = novoScript

        let body = document.getElementById("corpo")
        container.appendChild(novaFunc)
        //-----------------------------------------------------------------------------------------
        

        //adicionando os ícones e a nova anotação dentro do container principal criado anteriormente
        container.appendChild(ok)
        container.appendChild(novaAnotacao)
        container.appendChild(apagar)

        //colocando o container dentro da lista de anotacões
        lista.appendChild(container)
        
        //apagando o que foi digitado no input
        function apagarInput(){
            document.getElementById("anotacao").value = null
        }
        setTimeout(apagarInput, 100)
    }
    else{
        alert("Faça as suas anotações")
    }
}