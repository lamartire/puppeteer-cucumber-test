const puppeteer = require('puppeteer')

const browser = await puppeteer.launch({
  headless: false
})
const page = await browser.newPage()

await page.goto('https://google.com')
await page.type('[name=q]', 'hello world')
await page.keyboard.down('Enter')
await page.waitForSelector('#ires')
await page.screenshot({path: 'screenshots/example.png'})

await browser.close()
