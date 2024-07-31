//ENVIANDO LOCALIZAÇÃO E CRIANDO MENSAGEM NA TELA
const btnFinalizar = document.getElementById("btn_alerta")
btnFinalizar.addEventListener("click", async(event)=>{
    event.preventDefault()
    //Obtendo os valores da latitude, logitude
    let profissional = document.getElementById('profissional').value
    let cpf_saude = document.getElementById('cpf_saude').value
    let ine_saude = document.getElementById('ine_saude').value
    let data = document.getElementById('data').value
    let latitude = document.getElementById('latitude').value
    let longitude = document.getElementById('longitude').value

    //Enviando novos registros para a API
    try{
        fetch("https://api-railway-production-7715.up.railway.app/alertaarboviroses", {
            method:'POST',
            headers:{'Content-Type': 'application/json'},
            body: JSON.stringify({
                profissional: profissional,
                cpf: cpf_saude.replace(".","").replace(".","").replace("-",""),
                ine: ine_saude,
                data: data,
                latitude: latitude,
                longitude: longitude
            })
        })

        document.getElementById("msg_alerta").innerHTML = "Alerta enviado - A geolocalização foi encaminhada para o núcleo responsável"
        document.getElementById("msg_alerta").style.color = "rgb(61, 112, 61)"
        document.getElementById("container_msg_alerta").style.display = "flex"
        document.getElementById("container_msg_alerta").style.background = "rgb(212, 255, 212)" 
        document.getElementById("close_msg").style.color = "rgb(61, 112, 61)" 
    }

    catch{
        alert("Erro ao enviar")
    }          
})




//FECHAR MENSAGEM
document.getElementById("close_msg").addEventListener('click', ()=>{
    document.getElementById("container_msg_alerta").style.display = "none"
})




//OBTER LOCALIZAÇÃO
function localizacao(){
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