import { AppPage } from './app.po';
import { browser, logging, element, by } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  const username: any = element(by.id('username'));
  const password: any = element(by.id('password'));
  const loginButton: any = element(by.id('login_button'));

  it('不輸入使用者與密碼點擊登入', () => {
    browser.get('/');
    loginButton.click();
    browser.getCurrentUrl().then(res => {
      expect(res).toBe('http://localhost:4200/');
    });
    console.log(element(by.id('message')));
  });

  it('輸入使用者與密碼點擊登入', () => {
    browser.get('/');
    browser.actions().mouseMove(username).click().sendKeys('admin').perform();
    browser.sleep(2000);
    browser.actions().mouseMove(password).click().sendKeys('admin').perform();
    browser.sleep(2000);
    loginButton.click();
    browser.sleep(2000);
    browser.getCurrentUrl().then(res => {
      expect(res).toBe('http://localhost:4200/home')
    });
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
