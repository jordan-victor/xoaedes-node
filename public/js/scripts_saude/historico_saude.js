let pesquisar = document.getElementById("pesquisar")
pesquisar.addEventListener('click', async ()=>{
    //desabilitando o botão de pesquisa para que não haja repetição de informação com o clique duplo
    let desable_btn = document.getElementById("desable_btn")
    desable_btn.style.display = "block"

    //pegando os valores dos inputs recebidos de outra página
    let cpfConsulta = document.getElementById("cpf_pesquisa")

    //const consulta = await query(collection(db, 'checklistdengue'), where("cpf_cidadao", "==", cpfConsulta.value ), limit(10))
    //const querySnapshot = await getDocs(consulta)
    fetch(`https://api-railway-production-7715.up.railway.app/checklistdengue/${cpfConsulta.value.replace(".","").replace(".","").replace("-","")}`)
    .then(registros=>{
        return registros.json()
    })
    .then(registros=>{
        async function mostrarDados(){
            //pegando apenas um cpf para comparar se ele existe ou não no DB
            let cpf = []
            registros.forEach(registro=>{
                cpf.push(registros[0].cpf_cidadao)
            })
            let cpfComparacao = cpf[0]
            
            let historico = document.getElementById("corpo_historico_saude")
            let msg_pesquisa = document.getElementById("msg_pesquisa")
            if(cpfComparacao == cpfConsulta.value.replace(".","").replace(".","").replace("-","")){
                msg_pesquisa.innerHTML = null
                registros.forEach(registro=>{
                    let novoGegistro = document.createElement("tr")
                    novoGegistro.setAttribute("name", "registro")
                    let posicao = document.getElementsByName("registro").length + 1//pegando os índices de cada registro
                    
                    let indice = document.createElement("td")
                    indice.innerHTML = posicao
                    let td = document.createElement("td")
                    td.innerHTML = registro.data
                    //-------------------------------------------------------------------------------------
                    //CRIANDO COLUNAS PARA CADA IMAGEM E ADD UMA CLASSE PARA CADA COLUNA DE UMA IMAGEM
                    let i1 = document.createElement("td")
                    let i2 = document.createElement("td")
                    let i3 = document.createElement("td")
                    let i4 = document.createElement("td")
                    let i5 = document.createElement("td")
                    let i6 = document.createElement("td")
                    let i7 = document.createElement("td")
                    let i8 = document.createElement("td")
                    let i9 = document.createElement("td")
                    let i10 = document.createElement("td")
                    let i11 = document.createElement("td")
                    i1.setAttribute('name', 'imgItem')
                    i2.setAttribute('name', 'imgItem')
                    i3.setAttribute('name', 'imgItem')
                    i4.setAttribute('name', 'imgItem')
                    i5.setAttribute('name', 'imgItem')
                    i6.setAttribute('name', 'imgItem')
                    i7.setAttribute('name', 'imgItem')
                    i8.setAttribute('name', 'imgItem')
                    i9.setAttribute('name', 'imgItem')
                    i10.setAttribute('name', 'imgItem')
                    i11.setAttribute('name', 'imgItem')


                    let img1 = document.createElement('img')
                    img1.setAttribute('src', '/img/imgs_checklist/img1.jpg')
                    let img2 = document.createElement('img')
                    img2.setAttribute('src', '/img/imgs_checklist/img2.jpg')
                    let img3 = document.createElement('img')
                    img3.setAttribute('src', '/img/imgs_checklist/img3.jpg')
                    let img4 = document.createElement('img')
                    img4.setAttribute('src', '/img/imgs_checklist/img4.jpg')
                    let img5 = document.createElement('img')
                    img5.setAttribute('src', '/img/imgs_checklist/img5.jpg')
                    let img6 = document.createElement('img')
                    img6.setAttribute('src', '/img/imgs_checklist/img6.jpg')
                    let img7 = document.createElement('img')
                    img7.setAttribute('src', '/img/imgs_checklist/img7.jpg')
                    let img8 = document.createElement('img')
                    img8.setAttribute('src', '/img/imgs_checklist/img8.jpg')
                    let img9 = document.createElement('img')
                    img9.setAttribute('src', '/img/imgs_checklist/img9.jpg')
                    let img10 = document.createElement('img')
                    img10.setAttribute('src', '/img/imgs_checklist/img10.jpg')
                    let img11 = document.createElement('img')
                    img11.setAttribute('src', '/img/imgs_checklist/img11.jpg')
                    let imgs = [img1, img2, img3, img4,img5, img6, img7, img8, img9, img10, img11]
                    
                    



                    let items = [
                        registro.item01,
                        registro.item02,
                        registro.item03,
                        registro.item04,
                        registro.item05,
                        registro.item06,
                        registro.item07,
                        registro.item08,
                        registro.item09,
                        registro.item10,
                        registro.item11,
                    ]
                    
                    items.forEach(item=>{
                    if(item = true){
                            i1.innerHTML = items[0]
                            i2.innerHTML = items[1]
                            i3.innerHTML = items[2]
                            i4.innerHTML = items[3]
                            i5.innerHTML = items[4]
                            i6.innerHTML = items[5]
                            i7.innerHTML = items[6]
                            i8.innerHTML = items[7]
                            i9.innerHTML = items[8]
                            i10.innerHTML = items[9]
                            i11.innerHTML = items[10]
                    }       
                    })





                    novoGegistro.appendChild(indice)
                    novoGegistro.appendChild(td)
                    novoGegistro.appendChild(i1)
                    novoGegistro.appendChild(i2)
                    novoGegistro.appendChild(i3)
                    novoGegistro.appendChild(i4)
                    novoGegistro.appendChild(i5)
                    novoGegistro.appendChild(i6)
                    novoGegistro.appendChild(i7)
                    novoGegistro.appendChild(i8)
                    novoGegistro.appendChild(i9)
                    novoGegistro.appendChild(i10)
                    novoGegistro.appendChild(i11)
                    historico.appendChild(novoGegistro)
                })

                //ADICIONANDO O ÍCONE DE CHECKED APENAS NAS OPÇÕES TRUE
                let itemsMarcados = document.getElementsByName("imgItem")
                itemsMarcados.forEach(itemMarcado=>{
                    if(itemMarcado.innerHTML == "true"){
                        itemMarcado.innerHTML = "<i class='fa-solid fa-check'></i>"
                    }
                    else if(itemMarcado.innerHTML == "false"){
                        itemMarcado.innerHTML = ""
                    }
                })
            }//endif
            else{//removendo os registros listados na tela, caso um cpf que não esteja no banco de dados for pesquisado
                let registros = document.getElementsByName("registro")
                let arrayRegistros = Array.from(registros)
                arrayRegistros.forEach(registro=>{
                    registro.parentNode.removeChild(registro)
                })
        
                msg_pesquisa.innerHTML = "Registro não encontrado"
            }
        }
        mostrarDados()
        
    })
})










//Remover itens na tela, caso um CPF que não estiver no banco de dados for digitado
let inputCpf = document.getElementById("cpf_pesquisa")
inputCpf.addEventListener('input',()=>{
    let desable_btn = document.getElementById("desable_btn")
    desable_btn.style.display = "none"

    let registros = document.getElementsByName("registro")
    let arrayRegistros = Array.from(registros)
    arrayRegistros.forEach(registro=>{
        registro.parentNode.removeChild(registro)
    })    
})







/*MÁSCARA DE CPF*/
function formatarCPF(cpf) {
    cpf = cpf.replace(/\D/g, ''); // Remove caracteres não numéricos
    cpf = cpf.replace(/(\d{3})(\d)/, '$1.$2'); // Insere ponto após os primeiros 3 dígitos
    cpf = cpf.replace(/(\d{3})(\d)/, '$1.$2'); // Insere ponto após os próximos 3 dígitos
    cpf = cpf.replace(/(\d{3})(\d{1,2})$/, '$1-$2'); // Insere hífen após os últimos 3 dígitos
    return cpf;
}
document.getElementById("cpf_pesquisa").addEventListener('input',function(){
    var campoCPF = this
    setTimeout(function(){
        campoCPF.value = formatarCPF(campoCPF.value)
    }, 1)
})
/*
import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js';
import { getAnalytics } from 'https://www.gstatic.com/firebasejs/10.11.1/firebase-analytics.js';
import { getFirestore, collection, getDocs, setDoc, addDoc, query, where, orderBy, limit } from 'https://www.gstatic.com/firebasejs/10.11.1/firebase-firestore.js';

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


let pesquisar = document.getElementById("pesquisar")
pesquisar.addEventListener('click', async ()=>{
    //desabilitando o botão de pesquisa para que não haja repetição de informação com o clique duplo
    let desable_btn = document.getElementById("desable_btn")
    desable_btn.style.display = "block"

    //pegando os valores dos inputs recebidos de outra página
    let cpfConsulta = document.getElementById("cpf_pesquisa")
    let data = new Date()
    let mesAtual = data.getMonth()
    let nomeMeses = ["JANEIRO", "FEVEREIRO", "MARÇO", "ABRIL", "MAIO", "JUNHO", "JULHO", "AGOSTO", "SETEMBRO", "OUTUBRO", "NOVEMBRO", "DEZEMBRO"]
    let mes_agora = nomeMeses[mesAtual]
    let mes = document.getElementById('mes').innerHTML

    const consulta = await query(collection(db, 'checklistdengue'), where("cpf_cidadao", "==", cpfConsulta.value ), limit(10))
    const querySnapshot = await getDocs(consulta)

    //pegando apenas um cpf para comparar se ele existe ou não no DB
    let cpf = []
    querySnapshot.forEach((cpfs)=>{
        cpf.push(cpfs.data().cpf_cidadao)
    })
    let cpfComparacao = cpf[0]
    //--------------------------------------------------------------

    let historico = document.getElementById("corpo_historico_saude")
    let msg_pesquisa = document.getElementById("msg_pesquisa")
    if(cpfComparacao == cpfConsulta.value){
        msg_pesquisa.innerHTML = null
        querySnapshot.forEach((doc)=>{
            let novoGegistro = document.createElement("tr")
            novoGegistro.setAttribute("name", "registro")
            let posicao = document.getElementsByName("registro").length + 1//pegando os índices de cada registro
            
            let indice = document.createElement("td")
            indice.innerHTML = posicao
            let td = document.createElement("td")
            td.innerHTML = doc.data().data
            //-------------------------------------------------------------------------------------
            //CRIANDO COLUNAS PARA CADA IMAGEM E ADD UMA CLASSE PARA CADA COLUNA DE UMA IMAGEM
            let i1 = document.createElement("td")
            let i2 = document.createElement("td")
            let i3 = document.createElement("td")
            let i4 = document.createElement("td")
            let i5 = document.createElement("td")
            let i6 = document.createElement("td")
            let i7 = document.createElement("td")
            let i8 = document.createElement("td")
            let i9 = document.createElement("td")
            let i10 = document.createElement("td")
            let i11 = document.createElement("td")
            i1.setAttribute('name', 'imgItem')
            i2.setAttribute('name', 'imgItem')
            i3.setAttribute('name', 'imgItem')
            i4.setAttribute('name', 'imgItem')
            i5.setAttribute('name', 'imgItem')
            i6.setAttribute('name', 'imgItem')
            i7.setAttribute('name', 'imgItem')
            i8.setAttribute('name', 'imgItem')
            i9.setAttribute('name', 'imgItem')
            i10.setAttribute('name', 'imgItem')
            i11.setAttribute('name', 'imgItem')


            let img1 = document.createElement('img')
            img1.setAttribute('src', '/img/imgs_checklist/img1.jpg')
            let img2 = document.createElement('img')
            img2.setAttribute('src', '/img/imgs_checklist/img2.jpg')
            let img3 = document.createElement('img')
            img3.setAttribute('src', '/img/imgs_checklist/img3.jpg')
            let img4 = document.createElement('img')
            img4.setAttribute('src', '/img/imgs_checklist/img4.jpg')
            let img5 = document.createElement('img')
            img5.setAttribute('src', '/img/imgs_checklist/img5.jpg')
            let img6 = document.createElement('img')
            img6.setAttribute('src', '/img/imgs_checklist/img6.jpg')
            let img7 = document.createElement('img')
            img7.setAttribute('src', '/img/imgs_checklist/img7.jpg')
            let img8 = document.createElement('img')
            img8.setAttribute('src', '/img/imgs_checklist/img8.jpg')
            let img9 = document.createElement('img')
            img9.setAttribute('src', '/img/imgs_checklist/img9.jpg')
            let img10 = document.createElement('img')
            img10.setAttribute('src', '/img/imgs_checklist/img10.jpg')
            let img11 = document.createElement('img')
            img11.setAttribute('src', '/img/imgs_checklist/img11.jpg')
            let imgs = [img1, img2, img3, img4,img5, img6, img7, img8, img9, img10, img11]
            
            



            let items = [
                doc.data().item01,
                doc.data().item02,
                doc.data().item03,
                doc.data().item04,
                doc.data().item05,
                doc.data().item06,
                doc.data().item07,
                doc.data().item08,
                doc.data().item09,
                doc.data().item10,
                doc.data().item11,
            ]
            
            items.forEach(item=>{
               if(item = true){
                    i1.innerHTML = items[0]
                    i2.innerHTML = items[1]
                    i3.innerHTML = items[2]
                    i4.innerHTML = items[3]
                    i5.innerHTML = items[4]
                    i6.innerHTML = items[5]
                    i7.innerHTML = items[6]
                    i8.innerHTML = items[7]
                    i9.innerHTML = items[8]
                    i10.innerHTML = items[9]
                    i11.innerHTML = items[10]
               }       
            })





            novoGegistro.appendChild(indice)
            novoGegistro.appendChild(td)
            novoGegistro.appendChild(i1)
            novoGegistro.appendChild(i2)
            novoGegistro.appendChild(i3)
            novoGegistro.appendChild(i4)
            novoGegistro.appendChild(i5)
            novoGegistro.appendChild(i6)
            novoGegistro.appendChild(i7)
            novoGegistro.appendChild(i8)
            novoGegistro.appendChild(i9)
            novoGegistro.appendChild(i10)
            novoGegistro.appendChild(i11)
            historico.appendChild(novoGegistro)
            //---------------------------------------------------------------------------------------    
        })




        //ADICIONANDO O ÍCONE DE CHECKED APENAS NAS OPÇÕES TRUE
        let itemsMarcados = document.getElementsByName("imgItem")
        itemsMarcados.forEach(itemMarcado=>{
            if(itemMarcado.innerHTML == "true"){
                itemMarcado.innerHTML = "<i class='fa-solid fa-check'></i>"
            }
            else if(itemMarcado.innerHTML == "false"){
                itemMarcado.innerHTML = ""
            }
        })
    }
    else{//removendo os registros listados na tela, caso um cpf que não esteja no banco de dados for pesquisado
        let registros = document.getElementsByName("registro")
        let arrayRegistros = Array.from(registros)
        arrayRegistros.forEach(registro=>{
            registro.parentNode.removeChild(registro)
        })

        msg_pesquisa.innerHTML = "Registro não encontrado"
    }
})
*/