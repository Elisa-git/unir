//Model: representação da tabela pelo js com sequelize
const Sequelize = require('sequelize')
const connection = require('./database')

const locais = connection.define('locais',{
    local:{
        type: Sequelize.STRING,
        allowNull: false   //não aceita nulos
    },
    capacidade:{
        type: Sequelize.INTEGER,
        allowNull: false   //não aceita nulos
    },
    sistemas:{
        type: Sequelize.STRING,
        allowNull: false   //não aceita nulos
    }
} )
/* locais.sync({force: false}).then(() => {
    console.log('Tabela locais criada!')
}) */   //sicronizar com o BD, force falso não vai forçar a criação da tabela se já existir no BD

module.exports = locais