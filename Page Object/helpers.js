let Help = function(){

    this.waitElement = function(clickable){
        var EC = protractor.ExpectedConditions
        var isClickable = EC.elementToBeClickable(clickable)
        browser.wait(isClickable, 20000)
    }
}

module.exports = Help