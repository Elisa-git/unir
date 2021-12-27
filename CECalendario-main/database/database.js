const Sequelize = require('sequelize')
const connection = new Sequelize('cecalendario', 'root', 'root',{
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = connection