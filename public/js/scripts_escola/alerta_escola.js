import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js';
import { getAnalytics } from 'https://www.gstatic.com/firebasejs/10.11.1/firebase-analytics.js';
import { getFirestore, collection, getDocs, setDoc, addDoc } from 'https://www.gstatic.com/firebasejs/10.11.1/firebase-firestore.js';
   
const firebaseConfig = {
    apiKey: 'AIzaSyBnXGx-Rsvi0rvDV2FR4MIG0RQEr8DdgTA',
    authDomain: 'bancorural.firebaseapp.com',
    databaseURL: 'https://bancorural-default-rtdb.firebaseio.com',
    projectId: 'bancorural',
    storageBucket: 'bancorural.appspot.com',
    messagingSenderId: '822599092496',
    appId: '1:822599092496:web:a8ab6325373fe1926bbd95',
    measurementId: 'G-WVVD9QLPKB'
};  
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);





const btnFinalizar = document.getElementById("btn_alerta")
btnFinalizar.addEventListener("click", async(event)=>{
    event.preventDefault()
    //Obtendo os valores da latitude, logitude, nome e cpf do form
    let latitude = document.getElementById('latitude').value
    let longitude = document.getElementById('longitude').value
    let escola = document.getElementById("nome_escola").value
    let inep = document.getElementById("inep_escola").value
    let data = document.getElementById("data").value

    //Obtendo os valores marcados no checkbox dos sintomas e fazendo validação, caso nenhum sintoma for marcado
    let sintomas = document.querySelectorAll(".sintoma:checked")
    let listaSintomas = []
    sintomas.forEach(sintoma=>{
        listaSintomas.push(sintoma.value)
    })
    if (listaSintomas.length < 1) {
        document.getElementById("msg_alerta").innerHTML = "Informe os sintomas"
        document.getElementById("msg_alerta").style.color = "rgb(163, 82, 82)"
        document.getElementById("msg_alerta_container").style.display = "flex"
        document.getElementById("msg_alerta_container").style.background = "rgb(255, 235, 235)"
        document.getElementById("close_msg").style.color = "rgb(163, 82, 82)"
    }
    else{
        //Enviando novos registros para o firestore
        const docRef = await addDoc(collection(db, 'ChecklistEscola'), {
            escola: escola,
            inep: inep,
            latitude: latitude,
            longitude: longitude,
            sintomas: listaSintomas,
            data: data,
        });

        document.getElementById("msg_alerta").innerHTML = "Alerta enviado"
        document.getElementById("msg_alerta").style.color = "rgb(61, 112, 61)"
        document.getElementById("msg_alerta_container").style.display = "flex"
        document.getElementById("msg_alerta_container").style.background = "rgb(212, 255, 212)" 
        document.getElementById("close_msg").style.color = "rgb(61, 112, 61)"   
    }
})



document.getElementById("close_msg").addEventListener('click', ()=>{
    document.getElementById("msg_alerta_container").style.display = "none"
})


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