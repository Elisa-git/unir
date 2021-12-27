const Sequelize = require('sequelize')
const connection = new Sequelize('cecalendario', 'root', 'senha',{
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = connection