//Model: representação da tabela pelo js com sequelize
const Sequelize = require('sequelize')
const connection = require('./database')

const pilares = connection.define('pilares',{
    novaturma:{
        type: Sequelize.STRING,
        allowNull: false   //não aceita nulos
    },
    setor:{
        type: Sequelize.INTEGER,
        allowNull: false   //não aceita nulos
    }
} )
/* pilares.sync({force: false}).then(() => {
    console.log('Tabela pilares criada!')
}) */   //sicronizar com o BD, force falso não vai forçar a criação da tabela se já existir no BD

module.exports = pilares