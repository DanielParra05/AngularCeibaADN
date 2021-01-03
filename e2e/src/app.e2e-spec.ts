import { AppPage } from './app.po';
import { browser, logging } from 'protractor';
import { LoginPage } from './page/login/login.po';

describe('workspace-project App', () => {
  let page: AppPage;
  let login: LoginPage;

  beforeEach(() => {
    page = new AppPage();
    login = new LoginPage();
  });

  it('Deberia hacer login y mostrar mensaje de bienvenida', () => {
    page.navigateTo();
    login.ingresarDatosLogin();
    login.clickBtnLogin();
    expect(page.getTitleText()).toEqual('Bienvenido a Parking Tickets');
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
