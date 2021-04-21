var Help = require('./helpers')

let Trello = function(){

     var help = new Help()
   
     this.buttonLogin = element(by.xpath('/html/body/header/nav/div/a[1]'))
     this.inputEmail = element(by.xpath('//*[@id="user"]'))
     this.inputSenha = element(by.css('input[placeholder="Digitar senha"]'))
     this.buttonEntrar = element(by.xpath('//*[@id="login"]'))
     this.buttonEntrar2 = element(by.xpath('//*[@id="login-submit"]'))
     
     this.modalCriarQuadro = element(by.cssContainingText('.board-tile.mod-add', 'Criar'))
     this.inputDigiteAlgo = element(by.css('input[aria-label="Adicionar título do quadro"]'))
     this.buttonCriarQuadro = element(by.css('button[data-test-id="create-board-submit-button"]'))
    

     this.inserirTituloLista = element(by.css('input[placeholder="Insira o título da lista..."]'))
     this.buttonAdicionarLista = element(by.css('input[value="Adicionar Lista"]'))

     this.adicionarUmCartao = $$('.js-add-a-card').get(0)
     this.inserirUmCartao = element(by.css('textarea[placeholdere="Insira um título para este cartão..."]'))
     this.buttonAdicionarCartao = element(by.css('input[value="Adicionar Cartão"]'))
     this.buttonEditarPrimeiroCartao = element(by.tagName('a')).element(by.cssContainingText('.list-card-title.js-card-name', 'primeiro'))
     this.modalDescricao =
     
     
     this.buttonMenuExtra = element(by.xpath('//*[@id="board"]/div[1]/div/div[1]/div[2]'))
     this.buttonMoverLista = element(by.cssContainingText('.js-move-cards', 'Cartões'))
     this.buttonAndamento = element(by.cssContainingText('.js-select-list.highlight-icon ', 'andamento'))
     

     this.acessoTrello = function(){ 

        help.waitElement(this.buttonLogin)
        this.buttonLogin.click()
        help.waitElement(this.inputEmail)
        this.inputEmail.click()
        this.inputEmail.sendKeys('barroslima470@gmail.com')
        this.buttonEntrar.click()
        help.waitElement(this.inputSenha)
        this.inputSenha.click()
        this.inputSenha.sendKeys('lolabolota')
        this.buttonEntrar2.click()
     }

     this.publicarTrello = function(){

        let nomeProjeto = `${Math.floor(Math.random() * 89999) + 10000}Novo Projeto`
        console.log("Meu projeto se chama: ", nomeProjeto)
        help.waitElement(this.modalCriarQuadro)
        this.modalCriarQuadro.click()
        help.waitElement(this.inputDigiteAlgo)
        this.inputDigiteAlgo.click()
        this.inputDigiteAlgo.sendKeys(nomeProjeto)
        this.buttonCriarQuadro.click()
        
     }

     this.criarNovaLista = function(){

      console.log('chegou em criar nova lista')
      help.waitElement(this.inserirTituloLista)
      this.inserirTituloLista.click()
      this.inserirTituloLista.sendKeys('To do')
      this.buttonAdicionarLista.click()
      help.waitElement(this.inserirTituloLista)
      this.inserirTituloLista.click()
      this.inserirTituloLista.sendKeys('Doing')
      this.buttonAdicionarLista.click()
      help.waitElement(this.inserirTituloLista)
      this.inserirTituloLista.click()
      this.inserirTituloLista.sendKeys('Done')
      this.buttonAdicionarLista.click()
      console.log('chegou no final de criar nova lista')
     }

     this.adicionarCartao = function(){

      console.log('chegou em adicionar o primeiro cartao')
      help.waitElement(this.adicionarUmCartao)
      this.adicionarUmCartao.click()
      this.inserirUmCartao.sendKeys('Criando primeiro card')
      this.buttonAdicionarCartao.click()
      help.waitElement(this.buttonEditarPrimeiroCartao)
      this.buttonEditarPrimeiroCartao.click()
      browser.sleep(5000)
      console.log('criando o primeiro cartao')


     /* help.waitElement(this.adicionarUmCartao)
      this.adicionarUmCartao.click()
      this.adicionarUmCartao.sendKeys('Projeto fase 2')
      this.buttonAdicionarCartao.click()
      help.waitElement(this.adicionarUmCartao)
      this.adicionarUmCartao.click()
      this.adicionarUmCartao.sendKeys('projeto fase 3')
      this.buttonAdicionarCartao.click()
      
      help.waitElement(this.buttonMenuExtra)
      this.buttonMenuExtra.click()
      this.buttonMoverLista.click()
      help.waitElement(this.buttonAndamento)
      this.buttonAndamento.click()*/

     }
      
      


     }



 module.exports = Trello 