//import { AppPage } from '../app.po';
import { HeaderPage } from "../page/header/header.po";
import { SwalPopUp } from "../page/swal/swal.po";
import { TiquetePage } from "../page/tiquete/tiquete.po";

describe("workspace-project Tiquete", () => {
  let header: HeaderPage;
  let tiquete: TiquetePage;
  let swal: SwalPopUp;

  beforeEach(() => {
    header = new HeaderPage();
    tiquete = new TiquetePage();
    swal = new SwalPopUp();
  });

  it("Deberia crear tiquete", () => {
    const PLACA_VEHICULO = "KDL100";

    header.clickLinkGestionTiquete();
    tiquete.clickIraCrearTiquete();
    tiquete.ingresarPlaca(PLACA_VEHICULO);
    tiquete.elegirTipoVehiculo();
    tiquete.clickBtnCrear();

    expect(swal.getContentTextPopUp()).toEqual(
      "El tiquete ha sido creado con exito!"
    );
    swal.clickBtnOkSi();
  });

  it("Deberia actualizar tiquete", () => {
    const PLACA_VEHICULO = "KDL102";

    tiquete.clickLinkEditarPrimeraFila();
    tiquete.ingresarPlaca(PLACA_VEHICULO);
    tiquete.clickBtnActualizar();

    expect(swal.getTitleTextPopUp()).toEqual("Tiquete actualizado!");
    swal.clickBtnOkSi();
  });

  it("Deberia cerrar tiquete", () => {
    tiquete.clicklinkGenerarSalidaPrimeraFila();
    swal.clickBtnOkSi();
    expect(swal.getTitleTextPopUp()).toEqual("Tiquete cerrado exitosamente!");
    swal.clickBtnOkSi();
  });

  it("Deberia eliminar tiquete", () => {
    tiquete.clicklinkEliminarPrimeraFila();
    swal.clickBtnOkSi();
    expect(swal.getTitleTextPopUp()).toEqual(
      "El tiquete ha sido eliminado exitosamente!"
    );
  });
});
