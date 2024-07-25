//MÁSCARA INPUT CPF e VALIDAÇÃO DO CPF
function formatarCPF(cpf) {
    cpf = cpf.replace(/\D/g, ''); // Remove caracteres não numéricos
    cpf = cpf.replace(/(\d{3})(\d)/, '$1.$2'); // Insere ponto após os primeiros 3 dígitos
    cpf = cpf.replace(/(\d{3})(\d)/, '$1.$2'); // Insere ponto após os próximos 3 dígitos
    cpf = cpf.replace(/(\d{3})(\d{1,2})$/, '$1-$2'); // Insere hífen após os últimos 3 dígitos
    return cpf;
}
document.getElementById("cpf_cidadao").addEventListener('input',function(){
    var campoCPF = this
    setTimeout(function(){
        campoCPF.value = formatarCPF(campoCPF.value)
    }, 1)
})


/*
function acessar(){
    let nome_cidadao = document.getElementById("nome_cidadao").value
    let cpf_cidadao = document.getElementById("cpf_cidadao").value
    let resValidaCPF = validaCPF(cpf_cidadao)

    if (resValidaCPF == "false"){
      alert("Dados incompletos")
    }  

  //FUNÇÃO VALIDA CPF
  function validaCPF(cpf) {
      var Soma = 0
      var Resto
    
      var strCPF = String(cpf).replace(/[^\d]/g, '')
      
      if (strCPF.length !== 11)
        return false
      
      if ([
        '00000000000',
        '11111111111',
        '22222222222',
        '33333333333',
        '44444444444',
        '55555555555',
        '66666666666',
        '77777777777',
        '88888888888',
        '99999999999',
        ].indexOf(strCPF) !== -1)
        return "false"
    
      for (i=1; i<=9; i++)
        Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (11 - i);
    
      Resto = (Soma * 10) % 11
    
      if ((Resto == 10) || (Resto == 11)) 
        Resto = 0
    
      if (Resto != parseInt(strCPF.substring(9, 10)) )
        return "false"
    
      Soma = 0
    
      for (i = 1; i <= 10; i++)
        Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (12 - i)
    
      Resto = (Soma * 10) % 11
    
      if ((Resto == 10) || (Resto == 11)) 
        Resto = 0
    
      if (Resto != parseInt(strCPF.substring(10, 11) ) )
        return "false"
    
      return "true"
    }    
}
*/



//FUNÇÃO VALIDA CPF NO INPUT NAME
const inputName = document.getElementById("nome_cidadao")
inputName.addEventListener('input', ()=>{
  let nome_cidadao = document.getElementById("nome_cidadao").value
  let cpf_cidadao = document.getElementById("cpf_cidadao").value
  let irMenuCid = document.getElementById("form_cidadao")
  let resValidaCPF = validaCPF(cpf_cidadao)
  let validaDados = "invalido"//---------------

  if (Number(nome_cidadao.length) > 0 && resValidaCPF == "true"){
    document.getElementById("nome_cidadao").setAttribute("name", "nome_cidadao")   
    document.getElementById("form_cidadao").setAttribute("action", "/ir_menu_cidadao")
    document.getElementById("form_cidadao").setAttribute("method", "POST")
    validaDados = "valido"//--------------
    document.getElementById("cpf_status").innerHTML = "Dados completos <i class='fa-solid fa-check'></i>"//----------
  }
  if(validaDados == "invalido"){
    irMenuCid.removeAttribute("action")//------------
    irMenuCid.removeAttribute("method")//-------------
    document.getElementById("cpf_status").innerHTML = ""//----------
  }
   
 
  function validaCPF(cpf) {
    var Soma = 0
    var Resto
  
    var strCPF = String(cpf).replace(/[^\d]/g, '')
    
    if (strCPF.length !== 11)
      return false
    
    if ([
      '00000000000',
      '11111111111',
      '22222222222',
      '33333333333',
      '44444444444',
      '55555555555',
      '66666666666',
      '77777777777',
      '88888888888',
      '99999999999',
      ].indexOf(strCPF) !== -1)
      return "false"
  
    for (i=1; i<=9; i++)
      Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (11 - i);
  
    Resto = (Soma * 10) % 11
  
    if ((Resto == 10) || (Resto == 11)) 
      Resto = 0
  
    if (Resto != parseInt(strCPF.substring(9, 10)) )
      return "false"
  
    Soma = 0
  
    for (i = 1; i <= 10; i++)
      Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (12 - i)
  
    Resto = (Soma * 10) % 11
  
    if ((Resto == 10) || (Resto == 11)) 
      Resto = 0
  
    if (Resto != parseInt(strCPF.substring(10, 11) ) )
      return "false"
  
    return "true"
  } 
})





//FUNÇÃO VALIDA CPF NO INPUT CPF
const inputCPF = document.getElementById("cpf_cidadao").addEventListener('input', (event)=>{
  let nome_cidadao = document.getElementById("nome_cidadao").value
  let cpf_cidadao = document.getElementById("cpf_cidadao").value
  let irMenuCid = document.getElementById("form_cidadao")
  let resValidaCPF = validaCPF(cpf_cidadao)
  let validaDados = "invalido"//------------------------

  if (Number(nome_cidadao.length) > 0 && resValidaCPF == "true"){
    //falta colocar o prevent defalt
    document.getElementById("nome_cidadao").setAttribute("name", "nome_cidadao")   
    document.getElementById("form_cidadao").setAttribute("action", "/ir_menu_cidadao")
    document.getElementById("form_cidadao").setAttribute("method", "POST")
    validaDados = "valido"//--------------
    document.getElementById("cpf_status").innerHTML = "Dados completos <i class='fa-solid fa-check'></i>"//----------
  }
  if(validaDados == "invalido"){
    irMenuCid.removeAttribute("action")//------------
    irMenuCid.removeAttribute("method")//-------------
    document.getElementById("cpf_status").innerHTML = ""//----------
  }
   

  function validaCPF(cpf) {
    var Soma = 0
    var Resto
  
    var strCPF = String(cpf).replace(/[^\d]/g, '')
    
    if (strCPF.length !== 11)
      return false
    
    if ([
      '00000000000',
      '11111111111',
      '22222222222',
      '33333333333',
      '44444444444',
      '55555555555',
      '66666666666',
      '77777777777',
      '88888888888',
      '99999999999',
      ].indexOf(strCPF) !== -1)
      return "false"
  
    for (i=1; i<=9; i++)
      Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (11 - i);
  
    Resto = (Soma * 10) % 11
  
    if ((Resto == 10) || (Resto == 11)) 
      Resto = 0
  
    if (Resto != parseInt(strCPF.substring(9, 10)) )
      return "false"
  
    Soma = 0
  
    for (i = 1; i <= 10; i++)
      Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (12 - i)
  
    Resto = (Soma * 10) % 11
  
    if ((Resto == 10) || (Resto == 11)) 
      Resto = 0
  
    if (Resto != parseInt(strCPF.substring(10, 11) ) )
      return "false"
  
    return "true"
  } 
})



//MENSAGEM DE ERRO
function acessar(){
  let cpf_status = document.getElementById("cpf_status")
  if(cpf_status.innerHTML == ""){
    alert("Dados inválidos")
  }
}