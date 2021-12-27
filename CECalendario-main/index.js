const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const connection = require('./database/database')

//Importações dos Models
const Disciplina = require('./database/Disciplina')  
const Aulas = require('./database/Aulas')
const Instrutores = require('./database/Instrutores')
const Locais = require('./database/Locais')
const Pilares = require('./database/Pilares')
const Turmas = require('./database/Turmas')
const disciplinas = require('./database/Disciplina')
const { Router } = require('express')

//Database (Promisse)
connection
.authenticate()
.then(() => {
  console.log('Conexão feita com o BD!')
})
.catch((msgErro) => {
  console.log(msgErro)
})

//Configuração HTML no EJS
app.set('view engine', 'ejs')
app.use(express.static("public"))

//BodyParser
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

//Rotas
app.get("/", (req, res) => {
  res.render("index")
})
app.get("/locais", (req, res) => {
  res.render("locais")
})
app.get("/aulas", (req, res) => {
  res.render("aulas")
})
app.get("/calendario", (req, res) => {
  res.render("calendario")
})
app.get("/pilares", (req, res) => {
  res.render("pilares")
})

app.get("/disciplinas", async (req, res) => {
  await Disciplina.findAll({raw: true, order:[['id', 'DESC']]}).then(disciplinas => { //   raw: true, pesquisa crua, somente os dados//order id desc: ordenar pelo id de forma decrescente
     res.render("disciplinas",{
      disciplinas: disciplinas
    }) 
  })    // select all from disciplinas
})

/app.post('/disciplinas/apagar', (req, res) => {
  var id = req.body.id
  if(id != undefined){

      if(!isNaN(id)){

        Disciplina.destroy({
          where: {
            id: id
          }
        }).then(() => {
            res.redirect('/disciplinas')
        })

      }else{     //Se não for um número
        res.redirect('/disciplinas')
      }
  }else{     //Se for nullo
    res.redirect('/disciplinas')
  }
})  

app.get("/instrutores", (req, res) => {
  res.render("instrutores")
})
app.get("/turmas", (req, res) => {
  res.render("turmas")
})

app.post('/disciplinas', async (req, res) => {
  var novadisciplina = req.body.novadisciplina;  //requisição bodyparser pelo name dos input/selects
  var setor = req.body.setor
  var turma = req.body.turma
  
  await Disciplina.create({   //INSERT dados no BD
    novadisciplina: novadisciplina,
    setor: setor,
    turma: turma
  })
  res.redirect('/disciplinas')
  })  
 

app.get("/instrutores", (req, res) => {
  res.render("instrutores")
})
app.get("/turmas", (req, res) => {
  res.render("turmas")
})

  
app.listen(8080, () => {
  console.log('Servidor Rodando!')
})