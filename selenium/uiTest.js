const { Builder, By, Capabilities, Key, until } = require('selenium-webdriver')
const assert = require('assert')
const capabilities = Capabilities.chrome()

let driver

describe('画面遷移の確認', () => {
  before(() => {
    driver = new Builder().forBrowser('chrome').build()
    process.on('unhandledRejection', console.dir)
  })

  after(() => {
    return driver.quit()
  })

  it('メインから記事1への遷移', async () => {
    // テスト対象のページへアクセス
    await driver.get('http://localhost:3000')

    // リンクをクリック
    await driver
      .wait(until.elementLocated(By.id('20201108')), 5000)
      .sendKeys(Key.ENTER)

    // 遷移先のタイトルが想定と一致しているか
    const expected =
      '「WSL2、Docker、VSCodeで劇的に改善されるWindows開発環境」を作った話'
    await driver.wait(until.titleIs(expected), 10000)
    const title = await driver
      .wait(until.elementLocated(By.id('post_title')), 5000)
      .getText()

    assert.equal(title, expected)
  })
})
