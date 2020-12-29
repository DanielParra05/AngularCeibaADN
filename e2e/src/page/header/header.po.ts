import { by, element } from 'protractor';

export class HeaderPage {
    linkHome = element(by.xpath('/html/body/app-root/app-header/nav/a'));
    linkTiquete = element(by.xpath('/html/body/app-root/app-header/nav/div/ul/li/a'));
  
    async clickLinkGestionTiquete() {
        await this.linkTiquete.click();
    }    
}
