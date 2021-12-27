//Model: representação da tabela pelo js com sequelize
const Sequelize = require('sequelize')
const connection = require('./database')

const aulas = connection.define('aulas',{
    turma:{
        type: Sequelize.STRING,
        allowNull: false   //não aceita nulos
    },
    instrutor:{
        type: Sequelize.STRING,
        allowNull: false   //não aceita nulos
    },
    local:{
        type: Sequelize.STRING,
        allowNull: false   //não aceita nulos
    },
    disciplina:{
        type: Sequelize.STRING,
        allowNull: false   //não aceita nulos
    },
    data:{
        type: Sequelize.DATE,
        allowNull: false   //não aceita nulos
    },
    horarioInicial:{
        type: Sequelize.TIME,
        allowNull: true   //não aceita nulos
    },
    horarioFim:{
        type: Sequelize.TIME,
        allowNull: true   //não aceita nulos
    }
} )
/* aulas.sync({force: false}).then(() => {
    console.log('Tabela aulas criada!')
}) */   //sicronizar com o BD, force falso não vai forçar a criação da tabela se já existir no BD

module.exports = aulas