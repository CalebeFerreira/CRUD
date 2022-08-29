const db = require('./db')

const Post = db.sequelize.define('postagens', {
    titulo: {
        type: db.Sequelize.STRING
    }, 
    conteudo:{
        type: db.Sequelize.TEXT
    }
} )

//comando para criação da tabela,deve usar somente uma vez.
//Post.sync({force: false})

//exporta no POST
module.exports = Post 