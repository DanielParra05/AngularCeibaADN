import { by, element } from "protractor";

export class LoginPage {
  inputUsername = element(by.id("login"));
  inputPassword = element(by.id('password'));
  btnLogin = element(by.xpath('//*[@id="formContent"]/form/input[3]'));

  async ingresarDatosLogin() {
    await this.inputUsername.sendKeys('daniel.parra');
    await this.inputPassword.sendKeys('daniel123');
  }

  async clickBtnLogin() {
    await this.btnLogin.click();
  }
}
