import { by, element } from 'protractor';

export class SwalPopUp {
    //Elemento que tiene el contenido del pop up
    private contentElement = element(by.id('swal2-content'));
    //Elemento titulo del pop up
    private titleElement = element(by.id('swal2-title'));
    //Botones
    private btnOkSi = element(by.xpath('/html/body/div/div/div[3]/button[1]'));
    private btnNo = element(by.xpath('/html/body/div/div/div[3]/button[2]'));
    private btnCancel = element(by.xpath('/html/body/div/div/div[3]/button[3]'));

    async getContentTextPopUp(){
        return this.contentElement.getText() as Promise<string>;
    }
    
    async getTitleTextPopUp(){
        return this.titleElement.getText() as Promise<string>;
    }

    async clickBtnOkSi(){
        await this.btnOkSi.click();
    }

    async clickBtnNo(){
        await this.btnNo.click();
    }

    async clickBtnCancel(){
        await this.btnCancel.click();
    }
}