var webdriver = require('selenium-webdriver'),
  By = webdriver.By,
  until = webdriver.until

var driver = new webdriver.Builder()
  .forBrowser('firefox')
  .build();


//User can create an account;

driver.get('http://localhost:8080');
driver.findElement(By.tagName('signupBtn'))
  .click();
driver.findElement(By.id('inputUsername'))
  .sendKeys('selenium23');
driver.findElement(By.id('inputPassword'))
  .sendKeys('123');
driver.findElement(By.className('btn btn-lg btn-primary pull-right'))
  .click();
driver.quit();

//Homebutton is working and User can sign in;

driver.get('http://localhost:8080')
driver.findElement(By.name('homeBtn'))
  .click();
driver.wait(until.elementLocated(By.id('homeBtn')), 10000);
driver.findElement(By.name('logInOut'))
  .click();
driver.findElement(By.id('inputUsername'))
  .sendKeys('selenium23');
driver.findElement(By.id('inputPassword'))
  .sendKeys('123');
driver.findElement(By.className('btn btn-lg btn-primary pull-right'))
  .click();
driver.quit();

//User can list a place as a Stow

//User may book a Stow

//User may leave feedback

//User may log out

//User can search for a Stow

//User may filter by price within that search

//User may filter by city within that search

//User may access their account page when logged in

//User cannot access an account page when not logged in

//User redirected to login page when trying to list a stow without being logged in

//User recieves alert when asking to use location services

// driver.findElement(By.tagName('signupBtn'))
//   .click();
// driver.findElement(By.id('inputUsername'))
//   .sendKeys('selenium23');
// driver.findElement(By.id('inputPassword'))
//   .sendKeys('123');
// driver.findElement(By.className('btn btn-lg btn-primary pull-right'))
//   .click();
// driver.findElement(By.name('logInOut'))
//   .click();
// driver.findElement(By.id('inputUsername'))
//   .sendKeys('selenium23');
// driver.findElement(By.id('inputPassword'))
//   .sendKeys('123');
// driver.findElement(By.className('btn btn-lg btn-primary pull-right'))
//   .click();
//
//
// driver.quit();
