const PageObject = require('../../util/pageObject')
const puppeteer = require('puppeteer')

class GPage extends PageObject {
  constructor () {
    super({
      scenarioName: 'g-search',
      headless: false
    })
  }

  async typeRequest (text) {
    await this.page.type('[name=q]', text)
  }

  async pressEnter () {
    await this.page.keyboard.down('Enter')
  }

  async assertResults () {
    await this.page.waitForSelector('#ires')
  }
}

module.exports = new GPage()
