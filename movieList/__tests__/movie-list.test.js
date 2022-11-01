const {Builder, Capabilities, By} = require('selenium-webdriver')

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()


beforeAll(async () => {
    await driver.get('http://127.0.0.1:5503/movieList/index.html')
})

afterAll(async() => {
    await driver.quit()
})


const deleteMovie = async (driver) => {
    await driver.findElement(By.xpath('//input')).sendKeys('Batman')

    await driver.findElement(By.xpath('//button')).click()

    await driver.findElement(By.id('Batman'))
    
    await driver.findElement(By.id('Batman')).click()
}

test('delete a movie', async() => { 
    await deleteMovie(driver)
    await driver.sleep(5000) 
})

const crossOffMovie = async (driver) => {
    await driver.findElement(By.xpath('//input')).sendKeys('Batman')

    await driver.findElement(By.xpath('//button')).click()

    await driver.findElement(By.xpath(`//span[text()='Batman']`)).click()
}

test('cross off movie', async() => {
    await crossOffMovie(driver)
    await driver.sleep(3000)
})




