const { defineSupportCode } = require('cucumber')
const gPage = require('./g-search.page')

defineSupportCode(({ Before, Given, When, Then, After }) => {
  Before(async () => {
    await gPage.init()
  })

  Given('open google page', async () => {
    await gPage.open('https://google.com')
  })

  When('type {string}', async (string) => {
    await gPage.typeRequest(string)
  })

  When('press enter', async () => {
    await gPage.pressEnter()
  })

  Then('results were showed', async () => {
    await gPage.assertResults()
    await gPage.screenshot()
  })
})
