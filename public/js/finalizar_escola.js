const btnFinalizar = document.getElementById("btn_finalizar")
btnFinalizar.addEventListener("click", async()=>{
    //pegando os values nome, inep, data, hora, latitude e longitude
    let professor = document.getElementById("professor").value
    let nome = document.getElementById('nome_escola').value
    let inep = document.getElementById('inep_escola').value
    let data = document.getElementById('data').value
    let latitude = document.getElementById('latitude').value
    let longitude = document.getElementById('longitude').value
    //pegando items values do checklist
    let item01 = ""
    let item02 = ""
    let item03 = ""
    let item04 = ""
    let item05 = ""
    let item06 = ""
    let item07 = ""
    let item08 = ""
    let item09 = ""
    let item10 = ""
    let item11 = ""

    let checkboxes = document.querySelectorAll(".checkbox")
    if(checkboxes[0].checked){
        item01 = true
    }
    else{
        item01 = false
    }

    if(checkboxes[1].checked){
        item02 = true
    }
    else{
        item02 = false
    }
    
    if(checkboxes[2].checked){
        item03 = true
    }
    else{
        item03 = false
    }

    if(checkboxes[3].checked){
        item04 = true
    }
    else{
        item04 = false
    }

    if(checkboxes[4].checked){
        item05 = true
    }
    else{
        item05 = false
    }

    if(checkboxes[5].checked){
        item06 = true
    }
    else{
        item06 = false
    }

    if(checkboxes[6].checked){
        item07 = true
    }
    else{
        item07 = false
    }

    if(checkboxes[7].checked){
        item08 = true
    }
    else{
        item08 = false
    }

    if(checkboxes[8].checked){
        item09 = true
    }
    else{
        item09 = false
    }

    if(checkboxes[9].checked){
        item10 = true
    }
    else{
        item10 = false
    }

    if(checkboxes[10].checked){
        item11 = true
    }
    else{
        item11 = false
    }
    //Enviando novos registros para a API
    try{
        fetch("https://api-xoaedes.onrender.com/checklistescolas", {
            method:'POST',
            headers:{'Content-Type': 'application/json'},
            body: JSON.stringify({
            professor: professor,
            escola: nome,
            inep: inep,
            data: data,
            latitude: latitude,
            longitude: longitude,
            item01: item01,
            item02: item02,
            item03: item03,
            item04: item04,
            item05: item05,
            item06: item06,
            item07: item07,
            item08: item08,
            item09: item09,
            item10: item10,
            item11: item11
            })
        })

        //criando mensagem na tela
        let msgContainer = document.getElementById("msg")
        msgContainer.style.display = "flex"
        let checklistContainer = document.getElementById("checks")
        checklistContainer.style.display = "none"

        setTimeout(()=>{
        let msgContainer = document.getElementById("msg")
        msgContainer.style.display = "none"
        let checklistContainer = document.getElementById("checks")
        checklistContainer.style.display = "flex" 
        }, 2500)


        //Voltando para a tela de menu escola
        setTimeout(()=>{
            let formulario = document.getElementById("formChecklist")
            formulario.submit()
        }, 2501)
    }

    catch{
        alert("Erro ao enviar")
    }
})


























/*
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
console.log(db)

const btnFinalizar = document.getElementById("btn_finalizar")
btnFinalizar.addEventListener("click", async()=>{
    //pegando os values nome, inep, data, hora, latitude e longitude
    let professor = document.getElementById("professor").value
    let nome = document.getElementById('nome_escola').value
    let inep = document.getElementById('inep_escola').value
    let data = document.getElementById('data').value
    let latitude = document.getElementById('latitude').value
    let longitude = document.getElementById('longitude').value
    //pegando items values do checklist
    let item01 = ""
    let item02 = ""
    let item03 = ""
    let item04 = ""
    let item05 = ""
    let item06 = ""
    let item07 = ""
    let item08 = ""
    let item09 = ""
    let item10 = ""
    let item11 = ""

    let checkboxes = document.querySelectorAll(".checkbox")
    if(checkboxes[0].checked){
        item01 = true
    }
    else{
        item01 = false
    }

    if(checkboxes[1].checked){
        item02 = true
    }
    else{
        item02 = false
    }
    
    if(checkboxes[2].checked){
        item03 = true
    }
    else{
        item03 = false
    }

    if(checkboxes[3].checked){
        item04 = true
    }
    else{
        item04 = false
    }

    if(checkboxes[4].checked){
        item05 = true
    }
    else{
        item05 = false
    }

    if(checkboxes[5].checked){
        item06 = true
    }
    else{
        item06 = false
    }

    if(checkboxes[6].checked){
        item07 = true
    }
    else{
        item07 = false
    }

    if(checkboxes[7].checked){
        item08 = true
    }
    else{
        item08 = false
    }

    if(checkboxes[8].checked){
        item09 = true
    }
    else{
        item09 = false
    }

    if(checkboxes[9].checked){
        item10 = true
    }
    else{
        item10 = false
    }

    if(checkboxes[10].checked){
        item11 = true
    }
    else{
        item11 = false
    }
    //Enviando novos registros para o firestore
    const docRef = await addDoc(collection(db, 'ChecklistEscola'), {
        professor: professor,
        escola: nome,
        inep: inep,
        data: data,
        latitude: latitude,
        longitude: longitude,
        item01: item01,
        item02: item02,
        item03: item03,
        item04: item04,
        item05: item05,
        item06: item06,
        item07: item07,
        item08: item08,
        item09: item09,
        item10: item10,
        item11: item11, 
    });


    //criando mensagem na tela
    let msgContainer = document.getElementById("msg")
    msgContainer.style.display = "flex"
    let checklistContainer = document.getElementById("checks")
    checklistContainer.style.display = "none"

    setTimeout(()=>{
    let msgContainer = document.getElementById("msg")
    msgContainer.style.display = "none"
    let checklistContainer = document.getElementById("checks")
    checklistContainer.style.display = "flex" 
    }, 2500)



    //Voltando para a tela de menu escola
    setTimeout(()=>{
        let formulario = document.getElementById("formChecklist")
        formulario.submit()
    }, 2501)
})
*/