const express = require('express')
const app = express()
const port = 1000

app.set('view engine', 'ejs')
app.use(express.static('public'))
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({'extended': false}))




//HOME
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





//ESCOLA
app.get('/termo_escola', async(req , res)=>{
    res.render('escola/termo_escola')
})

app.post('/login_escola', async(req, res)=>{
    res.render('escola/login_escola')
})

app.post('/menu_escola', async(req, res)=>{
    let professor = req.body.professor;
    let inep_escola = req.body.inep_escola;
    let nome_escola = req.body.nome_escola;
    res.render('escola/menu_escola',{
        nome_escola: nome_escola,
        inep_escola: inep_escola,
        professor: professor    
    })
})

app.post('/inform_escola', async(req, res)=>{
    let professor = req.body.professor;
    let inep_escola = req.body.inep_escola;
    let nome_escola = req.body.nome_escola;
    res.render('escola/inform_escola',{
        nome_escola: nome_escola,
        inep_escola: inep_escola,
        professor: professor 
    })
})

app.post('/historico_escola', async(req, res)=>{
    let professor = req.body.professor;
    let inep_escola = req.body.inep_escola;
    let nome_escola = req.body.nome_escola;
    res.render('escola/historico_escola',{
        nome_escola: nome_escola,
        inep_escola: inep_escola,
        professor: professor 
    })
})

app.post('/informacoes_escola', async(req, res)=>{
    res.render('escola/informacoes_escola')
})

app.post('/checklist_escola', async(req, res)=>{
    let dia = new Date().getDate()
    let mes = new Date().getMonth()
    let ano = new Date().getFullYear()
    let data = `${dia}/${mes}/${ano}`

    let hora_agora = new Date().getHours()
    let minuto = new Date().getMinutes()
    let hora = `${hora_agora}:${minuto}`

    let professor = req.body.professor;
    let inep_escola = req.body.inep_escola;
    let nome_escola = req.body.nome_escola;
    res.render('escola/checklist_escola',{
        data:data,
        hora:hora,
        nome_escola: nome_escola,
        inep_escola: inep_escola,
        professor: professor
    })
})





//SAUDE
app.get('/termo_saude', async(req , res)=>{
    res.render('saude/termo_saude')
})

app.post('/login_saude', async(req, res)=>{
    res.render('saude/login_saude')
})

app.post('/ir_menu_saude', async(req, res)=>{
    let equipe_saude = req.body.equipe_saude;
    let nome_saude = req.body.nome_saude;
    let ine_saude = req.body.ine_saude;
    let cpf_saude = req.body.cpf_saude;
    res.render('saude/menu_saude',{
        equipe_saude: equipe_saude,
        nome_saude: nome_saude,
        ine_saude: ine_saude,
        cpf_saude: cpf_saude 
    })
})

app.post('/login_saude_cidadao', async(req, res)=>{
    let equipe_saude = req.body.equipe_saude;
    let nome_saude = req.body.nome_saude;
    let ine_saude = req.body.ine_saude;
    let cpf_saude = req.body.cpf_saude;
    res.render('saude/login_saude_cidadao',{
        equipe_saude: equipe_saude,
        nome_saude: nome_saude,
        ine_saude: ine_saude,
        cpf_saude: cpf_saude
    })
})

app.post('/informacoes_saude', async(req, res)=>{
    let equipe_saude = req.body.equipe_saude;
    let nome_saude = req.body.nome_saude;
    let ine_saude = req.body.ine_saude;
    let cpf_saude = req.body.cpf_saude;
    res.render('saude/informacoes_saude',{
        equipe_saude: equipe_saude,
        nome_saude: nome_saude,
        ine_saude: ine_saude,
        cpf_saude: cpf_saude
    })
})

app.post('/historico_saude', async(req, res)=>{
    let equipe_saude = req.body.equipe_saude;
    let nome_saude = req.body.nome_saude;
    let ine_saude = req.body.ine_saude;
    let cpf_saude = req.body.cpf_saude;
    res.render('saude/historico_saude',{
        equipe_saude: equipe_saude,
        nome_saude: nome_saude,
        ine_saude: ine_saude,
        cpf_saude: cpf_saude 
    })
})

app.post('/checklist_saude',  async(req, res)=>{
    let dia = new Date().getDate()
    let mes = new Date().getMonth()
    let ano = new Date().getFullYear()
    let data = `${dia}/${mes}/${ano}`

    let hora_agora = new Date().getHours()
    let minuto = new Date().getMinutes()
    let hora = `${hora_agora}:${minuto}`

    let nome = req.body.nome;
    let cpf = req.body.cpf;
    let equipe_saude = req.body.equipe_saude;
    let nome_saude = req.body.nome_saude;
    let ine_saude = req.body.ine_saude;
    let cpf_saude = req.body.cpf_saude;
    res.render('saude/checklist_saude',{
        data:data,
        hora:hora,
        nome:nome,
        cpf:cpf,
        equipe_saude: equipe_saude,
        nome_saude: nome_saude,
        ine_saude: ine_saude,
        cpf_saude: cpf_saude
    })
})


//falta a rota do alerta

app.listen(port)