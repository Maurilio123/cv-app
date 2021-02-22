var pessoa = require('./pessoa.json')
var skills = require('./skills.json')
var language = require('./language.json')
var formacao = require('./formacao.json')
var atividade = require('./atividade.json')

console.log(pessoa);
module.exports = function (app) {
    app.get('/', function (req, res) {
        res.render('index', { pessoa, skills, language, formacao, atividade })
    })
}