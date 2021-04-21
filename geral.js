var Inicializando = require('./Page Object/inicializando')
var Trello = require('./Page Object/loginTrello')

describe('login Trello', function() {

    var inicializando = new Inicializando()
    var trello = new Trello()
    
    it('inicializando', function() {
        inicializando.iniciandoTrello()    
    }); 

   it('trello', function(){
        trello.acessoTrello()
    })

    it('publicar trello', function(){
        trello.publicarTrello()
    })

    it('criar projeto', function(){
        trello.criarNovaLista()
    })

    it('adicionar cartões', function(){
        trello.adicionarCartao()
    })

});
 

  