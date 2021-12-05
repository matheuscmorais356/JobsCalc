const express = require('express')
const server = express()
const routes = require('./routes')
const path = require('path')

// Configurando o EJS
server.set('view engine', 'ejs')

// Mudar a localização da pasta views
// __dirname é uma variável de ambiente que informa o caminho absoluto do diretório que contém o arquivo em execução no momento.
server.set('views', path.join(__dirname, 'views'))

//Habilitar arquivos statics
server.use(express.static('public'))

// Usar o req.body
server.use(express.urlencoded({extended: true}))

// routes
server.use(routes)

server.listen(3000, () => console.log('Rodando'))

