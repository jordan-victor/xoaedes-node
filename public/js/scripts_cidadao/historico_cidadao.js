async function historicoCidadao(){
    //pegando os valores dos inputs recebidos de outra página
    let cpfConsulta = document.getElementById("cpf")

    let cpf_historico = document.getElementById("cpf_historico")
    let todosCpf = []

    let data = new Date()
    let mesAtual = data.getMonth()
    let nomeMeses = ["JANEIRO", "FEVEREIRO", "MARÇO", "ABRIL", "MAIO", "JUNHO", "JULHO", "AGOSTO", "SETEMBRO", "OUTUBRO", "NOVEMBRO", "DEZEMBRO"]
    let mes_agora = nomeMeses[mesAtual]

    let mes = document.getElementById('mes').innerHTML

    let historico = document.getElementById("corpo_historico")

    fetch(`https://api-railway-production-7715.up.railway.app/checklistdengue/${cpfConsulta.value.replace(".","").replace(".","").replace("-","")}`)//${cpfConsulta.value.replace(".","").replace(".","").replace("-","")}
    .then(registros=>{
        return registros.json()
    })
    .then(registros=>{
        
        async function mostrarDados(){
            registros.forEach(registro=>{
                todosCpf.push(registros[0].cpf_cidadao)

            

                //CRIANDO A TABELA DE HISTÓRICO
                let novoGegistro = document.createElement("tr")
                novoGegistro.setAttribute("name", "registro")
                let posicao = document.getElementsByName("registro").length + 1//pegando so índices de cada registro

                let indice = document.createElement("td")
                indice.innerHTML = posicao
                let td = document.createElement("td")
                td.innerHTML = registro.data

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
                
                //--------------------------------------------------------------------------------------------------------------------------------------
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
                
                let checked = document.createElement("td")
                

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
                
                //---------------------------------------------------------------------------------------------------------------------------------------
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
        }
        mostrarDados()
        

   





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



        if(todosCpf.length < 1){
            cpf_historico.innerHTML = "Sem registro de atividades"
        }
        else{
            let umCpf = todosCpf[0]
            cpf_historico.innerHTML = "CPF: " + umCpf
        }  
    })
}
historicoCidadao()