
import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js';
import { getAnalytics } from 'https://www.gstatic.com/firebasejs/10.11.1/firebase-analytics.js';
import { getFirestore, collection, getDocs, setDoc, addDoc, serverTimestamp } from 'https://www.gstatic.com/firebasejs/10.11.1/firebase-firestore.js';
import { getStorage,ref, listAll, getDownloadURL, uploadBytes } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-storage.js";

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
const storage = getStorage()

const storageRef = ref(storage)
const imagesRef = ref(storageRef,'DECOM')
const spaceRef = ref(storage,`${imagesRef}/1.jpeg`)
//console.log(spaceRef)



//LISTANDO IMAGENS NA TELA E CRIANDO
async function listarImagens(){  
    let slide = document.getElementById("imgs")
    let listaImg = []
    const imagens = await listAll(imagesRef)

    imagens.items.forEach(async(imagem)=>{
        listaImg.push(imagem)
        //alert(listaImg.length)
        let novaImg = document.createElement('img')
        novaImg.setAttribute('src',`https://firebasestorage.googleapis.com/v0/b/bancorural.appspot.com/o/DECOM%2F${listaImg.length}.jpeg?alt=media&token=64a9bc81-f1c8-4d05-ba8e-5bdb0e53cb49`)
        novaImg.setAttribute('name','imgSlide')
        slide.appendChild(novaImg)
        
        //CRIANDO RADIOS DE ACORDO COM O NÚMERO DE IMAGENS
        let raiosContainer = document.getElementById("radios")
        let div1 = document.createElement('div')
        div1.setAttribute('class', 'radio')
        div1.setAttribute('id', `r${listaImg.length}`)

        let div2 = document.createElement('div')
        div2.setAttribute('class', 'miniRadio')
        div2.setAttribute('name', 'radio')
        div2.setAttribute('id', `radio${listaImg.length}`)

        div1.appendChild(div2)
        raiosContainer.appendChild(div1)

    })
}
listarImagens()











//Avançar slide
const next = document.getElementById("next")

next.addEventListener('click',()=>{
    let contador = document.getElementById("cont").innerHTML
    let i = Number(contador) + 1
    document.getElementById("cont").innerHTML = i
    let imgs = document.getElementById("imgs")
    imgs.style.transform = `translateX(${Number(i*-100)}%)`

    let limite = document.getElementsByName("imgSlide")
    if(i> limite.length-1){
        document.getElementById("cont").innerHTML = "0"
        imgs.style.transform = `translateX(0)`
    }


    //Avançando o slider indicator
    let radios = document.getElementsByName("radio")
    let contadorRadios = document.getElementById("cont").innerHTML
    let currentRadio = []

    radios.forEach(radio=>{
        currentRadio.push("item")
        if(Number(currentRadio.length) - 1 == contadorRadios){
            radio.style.backgroundColor = "black"
        }
        else{//Retirando a bolinhas dos radios restantes
            radio.style.backgroundColor = "transparent"
        }  
    })
})










//Voltar slide
const back = document.getElementById("back")

back.addEventListener('click',()=>{
    let contador = document.getElementById("cont").innerHTML
    let i = Number(contador) - 1
    document.getElementById("cont").innerHTML = i
    let imgs = document.getElementById("imgs")
    imgs.style.transform = `translateX(${Number(i*-100)}%)`

    let limite = document.getElementsByName("imgSlide")
    let avançarTudo = document.getElementById("cont").innerHTML
    if(Number(avançarTudo) < 0){
        //alert(i)
        document.getElementById("cont").innerHTML = Number(limite.length) - 1
        imgs.style.transform = `translateX(${Number((limite.length-1)*-100)}%)`
        //imgs.style.transform = `translateX(-600%)` 
    }


    //voltando o slider indicator
    let radios = document.getElementsByName("radio")
    let contadorRadios = document.getElementById("cont").innerHTML
    let currentRadio = []

    radios.forEach(radio=>{
        currentRadio.push("item")
        if(Number(currentRadio.length) - 1 == contadorRadios){
            radio.style.backgroundColor = "black"
        }
        else{//Retirando a bolinhas dos radios restantes
            radio.style.backgroundColor = "transparent"
        }  
    })
})