//Model: representação da tabela pelo js com sequelize
const { truncate } = require('graceful-fs') 
const Sequelize = require('sequelize')
const connection = require('./database')

const disciplinas = connection.define('disciplina',{
    novadisciplina:{
        type: Sequelize.STRING,
        allowNull: false   //não aceita nulos
    },
    setor:{
        type: Sequelize.STRING,
        allowNull: false   //não aceita nulos
    },
    turma:{
        type: Sequelize.STRING,
        allowNull: false   //não aceita nulos
    }
} ) 
      disciplinas.sync({force: false}).then(() => {
    console.log('Tabela disciplina criada!') 
 })         //sicronizar com o BD, force falso não vai forçar a criação da tabela se já existir no BD */
  
module.exports = disciplinas