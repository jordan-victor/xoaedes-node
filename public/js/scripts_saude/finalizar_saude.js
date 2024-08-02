const btnFinalizar = document.getElementById("btn_finalizar_saude")
btnFinalizar.addEventListener("click", async()=>{
    //pegando os valores dos inputs recebidos de outra página
    let nome = document.getElementById('nome').value
    let cpf = document.getElementById('cpf').value
    let data = document.getElementById('data').value
    let latitude = document.getElementById('latitude').value
    let longitude = document.getElementById('longitude').value
    let cpf_saude = document.getElementById('cpf_prof_saude').value
    let cns = document.getElementById('ine').value
    //pegando items values do checklist e informando se está checked true ou false
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
    try{
        fetch("https://api-railway-production-7715.up.railway.app/checklistdengue", {
            method:'POST',
            headers:{'Content-Type': 'application/json'},
            body: JSON.stringify({
            nome: nome,
            cpf_cidadao: cpf.replace(".","").replace(".","").replace("-",""),
            cpf_profissional: cpf_saude.replace(".","").replace(".","").replace("-",""),
            cnes: cns,
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


        //Voltando para a tela de menu cidadão
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
import { getFirestore, collection, getDocs, setDoc, addDoc, serverTimestamp } from 'https://www.gstatic.com/firebasejs/10.11.1/firebase-firestore.js';

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


    

    const btnFinalizar = document.getElementById("btn_finalizar_saude")
    btnFinalizar.addEventListener("click", async()=>{
        //pegando os valores dos inputs recebidos de outra página
        let nome = document.getElementById('nome').value
        let cpf = document.getElementById('cpf').value
        let data = document.getElementById('data').value
        let latitude = document.getElementById('latitude').value
        let longitude = document.getElementById('longitude').value
        let nome_saude = document.getElementById('nome_prof_saude').value
        let cpf_saude = document.getElementById('cpf_prof_saude').value
        let ine = document.getElementById('ine').value
        //pegando items values do checklist e informando se está checked true ou false
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
        const docRef = await addDoc(collection(db, 'checklistdengue'), {
            nome: nome,
            cpf_cidadao: cpf,
            data: data,
            latitude: latitude,
            longitude: longitude,
            //nome_profissional: nome_saude,
            cpf_profissional: cpf_saude,
            //ine: ine,
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




        //Voltando para a tela de menu  cidadão
        setTimeout(()=>{
            let formulario = document.getElementById("formChecklist")
            formulario.submit()
        }, 2501)
    })
        */