let Inicializando = function(){

    this.url = "https://trello.com/pt-BR"

    this.iniciandoTrello = function(){
        browser.waitForAngularEnabled(false);     
        browser.driver.get(this.url);
        browser.driver.manage().window().maximize();
        
    }
}

module.exports = Inicializando 