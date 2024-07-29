//ESCONDER O ÍCONE DEINDICAÇÃO DE ROLAGEM QUNADO O USUÁRIO DER O SCROLL NA TABELA DO HISTÓRICO
const scroll = document.getElementById("tabela")
scroll.addEventListener('scroll', ()=>{
    let scrollIcon = document.getElementById("scrollIcon")
    scrollIcon.style.display = 'none'
})