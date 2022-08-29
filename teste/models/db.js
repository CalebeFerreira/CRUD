const Sequelize = require ('sequelize')
// Conexão com o banco de dados Mysql  
const sequelize = new Sequelize('postapp', 'root', '123456', {
    host:"localhost",
    dialect: 'mysql',
    query:{raw:true}
})
/*sequelize.authenticate().then(function(){
    console.log("Conectado com sucesso")
}).catch(function(erro){
    console.log("Falha na conexao"+ erro)

})*/

//exportar os SEQUELIZES
    module.exports = {
        Sequelize: Sequelize,
        sequelize:sequelize
    }