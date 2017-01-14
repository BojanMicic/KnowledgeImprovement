describe('deezer', function() {
  it('should login', function() {
    browser.ignoreSynchronization = true;
    browser.get('http://micke.turshija.com/test/');

    //element(by.id('register_form_mail_input')).sendKeys('blaaaaa');
    //var iframe = document.getElementById('iframeid');
   // var innerDoc = iframe.contentDocument || iframe.contentWindow.document;

    browser.switchTo().frame('iframeid');
    element(by.css('[id="register_form_mail_input"]')).sendKeys('blaaaaa');

    //innerDoc.element(by.css('[id="register_form_mail_input"]')).sendKeys('blaaaaa');

    element(by.buttonText('Log in')).click();
/*
    browser.ignoreSynchronization = false;
    
    var logoutCheck = element(by.cssContainingText('.pointer-cursor', 'Log Out'));
    expect(logoutCheck.isDisplayed()).toBe(true);
    element(by.id('facialSearch')).click();
    
   // element(by.css('[class="btn btn-info pull-right"]')).click();
    //element(by.className('.btn .btn-info .pull-right')).click();
   // var listButtons = element.all(by.className('.btn-sm'));
    //listButtons.get(1).click();
    
    var listButtons = element.all(by.css('[ng-click="grid.appScope.setPopupData(row.entity)"]'));
    listButtons.get(1).click();
    
    var itemOpen = element(by.id('probeImageFS'));
    expect(itemOpen.isDisplayed()).toBe(true);
     
    

    var todoList = element.all(by.repeater('todo in todoList.todos'));
    expect(todoList.count()).toEqual(3);
    expect(todoList.get(2).getText()).toEqual('write first protractor test');



    todoList.get(2).element(by.css('input')).click();
    var completedAmount = element.all(by.css('.done-true'));
    expect(completedAmount.count()).toEqual(2);
*/
  });
});