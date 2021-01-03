import { by, element } from "protractor";

export class HeaderPage {
  linkHome = element(by.xpath("/html/body/app-root/app-header/nav/a"));
  linkTiquete = element(by.xpath('//*[@id="navbarSupportedContent"]/ul/li[1]/a'));
  linkTarifario = element(by.xpath('//*[@id="navbarSupportedContent"]/ul/li[2]/a'));
  btnLogOut = element(by.id('btnLogout'));

  async clickLinkGestionTiquete() {
    await this.linkTiquete.click();
  }

  async clickLinkTarifario() {
    await this.linkTarifario.click();
  }

  async clickBtnLogOut() {
    await this.btnLogOut.click();
  }
}
