var webdriver = require('selenium-webdriver');
  By = webdriver.By,
  until = webdriver.until

var driver = new webdriver.Builder()
  .forBrowser('firefox')
  .build();

driver.get('http://localhost:8080');
driver.findElement(By.name('logInOut'))
  .click();
driver.findElement(By.id('inputUsername'))
  .sendKeys('selenium23');
driver.findElement(By.id('inputPassword'))
  .sendKeys('123');
driver.findElement(By.className('btn btn-lg btn-primary pull-right'))
  .click();



driver.quit();
