//Model: representação da tabela pelo js com sequelize
const Sequelize = require('sequelize')
const connection = require('./database')

const instrutores = connection.define('instrutores',{
    instrutor:{
        type: Sequelize.STRING,
        allowNull: false   //não aceita nulos
    },
    abreviacao:{
        type: Sequelize.STRING,
        allowNull: false   //não aceita nulos
    },
    setor:{
        type: Sequelize.STRING,
        allowNull: false   //não aceita nulos
    },
    email:{
        type: Sequelize.STRING,
        allowNull: false   //não aceita nulos
    },
    disponibilidade:{
        type: Sequelize.STRING,
        allowNull: false   //não aceita nulos
    }
})

/* /instrutores.sync({force: false}).then(() => {
    console.log('Tabela instrutores criada!')
}) */     //sicronizar com o BD, force falso não vai forçar a criação da tabela se já existir no BD

module.exports = instrutores