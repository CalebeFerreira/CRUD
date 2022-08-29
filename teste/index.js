const express = require ('express');
const app = express();
const handlebars = require('express-handlebars');
const Post = require('./models/Post');

//const bodyParser = require('body-parser') (Não está mais usando)

// configuração
    //tamplete engine
    app.engine('handlebars', handlebars.engine({defaultLayout:'main'}))
    app.set('view engine', 'handlebars')

    //Body Parser

    app.use(express.urlencoded({extended:false}))
    app.use(express.json())


    //ROTAS
    //Home do projeto
    app.get('/', function(req, res){
        Post.findAll({order:[['id', 'DESC']]}).then(function(posts){
            res.render('home', {posts: posts})
        })
    })

    // rota para a tela de cadastrado   
    app.get('/cad', function(req, res){
        res.render('formulario')
    })    
      //res.send('ROTA de cadastro de posts')
    app.post('/add', function(req,res){
        Post.create({

            titulo: req.body.titulo,
            conteudo: req.body.conteudo
        }).then (function(){
            res.redirect('/')
            //res.send("poste criado com sucesso")
        }).catch (function(erro){
            res.send("Houve um erro"+erro)
        })

        //res.send("texto: "+req.body.titulo+"conteudo:"+req.body.conteudo)


        //res.send(`Texto: ${req.body.titulo} Conteudo: ${req.body.conteudo} `);
    })
    
// Deletar
    app.get('/deletar/:id', function(req, res){
        Post.destroy({where:{'id': req.params.id}}).then(function(){
            //res.send("Postagem deletada com sucesso")
            res.redirect('/')

        }).catch(function(erro){
            res.send("houve problema na aplicação")    
        })
    })
//Criando o servidor 
app.listen(8081, function(){
    console.log("Servidor rodadno na url http://localhost:8081")
})