import { Builder, By} from 'selenium-webdriver';
import { ServiceBuilder } from 'selenium-webdriver/chrome';
import chromeDriver = require('@sitespeed.io/chromedriver');

async function bootstrap() {

  const url = 'https://translate.google.fr/?hl=fr';
  const chromeDriverService = new ServiceBuilder(chromeDriver.binPath());

  let driver = await new Builder()
  .forBrowser('chrome')
  .setChromeService(chromeDriverService)
  .build();  
  try {
    await driver.manage().window().maximize();
    await driver.get(url);

    /*
    console.log(await driver.getTitle());
    console.log(await driver.getCurrentUrl());
    console.log(await driver.getPageSource());
    */
   await driver.findElement(By.id('source')).sendKeys(' السلام عليكم هذا اخر مثال في التعامل مع سلينيوم بلغة الجافا سكريبت');
   await driver.sleep(1000);
   let result = await driver.findElement(By.className('tlid-translation'));
   let strResult = await result.getAttribute('innerText');
   console.log('---------------------------------');
   console.log(strResult);
   console.log('---------------------------------');
  }
  finally {
    await driver.quit();  
  }


}
bootstrap();
