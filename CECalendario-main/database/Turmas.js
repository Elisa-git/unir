//Model: representação da tabela pelo js com sequelize
const Sequelize = require('sequelize')
const connection = require('./database')

const turmas = connection.define('turmas',{
    turma:{
        type: Sequelize.STRING,
        allowNull: false   //não aceita nulos
    },
    setor:{
        type: Sequelize.INTEGER,
        allowNull: false   //não aceita nulos
    },
    dtinicio:{
        type: Sequelize.DATE,
        allowNull: false   //não aceita nulos
    },
    dtfim:{
        type: Sequelize.DATE,
        allowNull: false   //não aceita nulos
    },
    numalunos:{
        type: Sequelize.INTEGER,
        allowNull: false   //não aceita nulos
    }
} )
/* turmas.sync({force: false}).then(() => {
    console.log('Tabela turmas criada!')
}) */   //sicronizar com o BD, force falso não vai forçar a criação da tabela se já existir no BD

module.exports = turmas