
var webdriver = require('selenium-webdriver'),
    By = require('selenium-webdriver').By,
    until = require('selenium-webdriver').until

console.log(webdriver)
//*opens builds then runs Firefox and maximizes the window
    var driver = new webdriver.Builder()
    withCapabilities(webdriver.Capabilities.firefox).
    build();
    driver.manage().window().maximize();

driver.get('http://localhost:8080/');

driver.findElement(webdriver.By.name('logInOut')).click();
driver.findElement(webdriver.By.id('inputUsername')).sendKeys('selenium123');
driver.findElement(webdriver.By.id('inputPassword')).sendKeys('123');
driver.findElement(webdriver.By.Type('submit').click());
driver.quit();
