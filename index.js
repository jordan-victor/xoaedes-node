const express = require('express')
const app = express()
const port = 1000

app.set('view engine', 'ejs')
app.use(express.static('public'))
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({'extended': false}))





app.get('/', async(req, res)=>{
    res.render('home')
})





//CIDADÃO
app.get('/termo_cidadao', async(req, res)=>{
    res.render('cidadao/termo_cidadao')
})

app.post('/login_cidadao', async(req, res)=>{
    res.render('cidadao/loginCidadao')
})

app.post('/ir_menu_cidadao', async(req, res)=>{
    let resultado = req.body.nome_cidadao
    let cpf_cid = req.body.cpf_cidadao
    res.render('cidadao/menu_cidadao',{
        resultado: resultado,
        cpf_cid: cpf_cid
    })
})

app.post('/inform', async(req, res)=>{
    let nome = req.body.nome
    let cpf = req.body.cpf
    res.render('inform',{
        nome: nome,
        cpf: cpf
    })
})

app.post('/informacoes', async(req, res)=>{
    res.render('informacoes')
})

app.post('/historico_cidadao', async(req, res)=>{
    let cpf = req.body.cpf;
    let  nome = req.body.nome;
    res.render('cidadao/historico_cidadao',{
        nome: nome,
        cpf: cpf
    })
})

app.post('/checklist', async(req, res)=>{
    let dia = new Date().getDate()
    let mes = new Date().getMonth()
    let ano = new Date().getFullYear()
    let data = `${dia}/${mes}/${ano}`

    let hora_agora = new Date().getHours()
    let minuto = new Date().getMinutes()
    let hora = `${hora_agora}:${minuto}`
    let nome = req.body.nome
    let cpf = req.body.cpf
    res.render('checklist',{
        data:data,
        hora:hora,
        nome:nome,
        cpf:cpf
    })
})




app.listen(port)