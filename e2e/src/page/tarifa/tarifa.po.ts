import { by, element } from 'protractor';

export class TarifaPage {
  private btnIrACrearTarifa = element(by.id('btnCrearTarifa'));
  private linkModificarTarifa = element(
    by.xpath('//*[@id="table"]/tbody/tr[last()]/td[3]/div/div[1]/div/a')
  );
  private linkEliminarTarifa = element(
    by.xpath('//*[@id="table"]/tbody/tr[last()]/td[3]/div/div[2]/div/a')
  );
  //Form
  private inputNombreTarifa = element(by.id('inputLlave'));
  private inputValorTarifa = element(by.id('inputValor'));
  private btnCrearTarifa = element(by.id('crearTarifa'));
  private btnActualizarTarifa = element(by.id('actualizarTarifa'));

  /**
   * METODOS DE INTERACCION CON LAS PANTALLAS DE TIQUETES
   */
  async clickLinkEditarUltimaFila() {
    await this.linkModificarTarifa.click();
  }

  async clicklinkEliminarUltimaFila() {
    await this.linkEliminarTarifa.click();
  }

  async clickBtnActualizar() {
    await this.btnActualizarTarifa.click();
  }

  async clickBtnIrACrearTarifa() {
    await this.btnIrACrearTarifa.click();
  }

  async clickBtnCrear() {
    await this.btnCrearTarifa.click();
  }

  async ingresarNombreTarifa(nombre) {
    await this.inputNombreTarifa.sendKeys(nombre);
  }

  async ingresarValorTarifa(valor) {
    await this.inputValorTarifa.sendKeys(valor);
  }
}
