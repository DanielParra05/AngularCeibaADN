import { browser } from "protractor";
import { HeaderPage } from "../page/header/header.po";
import { SwalPopUp } from "../page/swal/swal.po";
import { TarifaPage } from "../page/tarifa/tarifa.po";

describe("workspace-project Tarifa", () => {
  let header: HeaderPage;
  let tarifa: TarifaPage;
  let swal: SwalPopUp;

  beforeEach(() => {
    header = new HeaderPage();
    tarifa = new TarifaPage();
    swal = new SwalPopUp();
  });

  it("Deberia crear tarifa", () => {
    header.clickLinkTarifario();
    tarifa.clickBtnIrACrearTarifa();
    const NOMBRE_TARIFA = "test";
    const VALOR_TARIFA = "3500";

    tarifa.ingresarNombreTarifa(NOMBRE_TARIFA);
    tarifa.ingresarValorTarifa(VALOR_TARIFA);
    tarifa.clickBtnCrear();
    expect(swal.getContentTextPopUp()).toEqual(
      "La tarifa ha sido creada con exito!"
    );
    browser.navigate().refresh();
  });

  it("Deberia actualizar tarifa", () => {
    const VALOR_TARIFA_ACTUALIZAR = "3500";
    tarifa.clickLinkEditarUltimaFila();
    tarifa.ingresarValorTarifa(VALOR_TARIFA_ACTUALIZAR);
    tarifa.clickBtnActualizar();

    expect(swal.getContentTextPopUp()).toEqual(
      "La tarifa ha sido actualizada con exito!"
    );
    browser.navigate().refresh();
  });

  it("Deberia eliminar tarifa", () => {
    tarifa.clicklinkEliminarUltimaFila();
    swal.clickBtnOkSi();

    expect(swal.getTitleTextPopUp()).toEqual(
      "La tarifa ha sido eliminado exitosamente!"
    );
    swal.clickBtnOkSi();
  });
});
