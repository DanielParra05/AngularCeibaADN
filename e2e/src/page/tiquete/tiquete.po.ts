import { by, element } from 'protractor';

export class TiquetePage {    
    //                       ----- Pantalla Listar --------
    private botonIrACrearProducto = element(by.id('crearActualizarTiquetes'));
    //Iconos de la primera fila
    private linkEditar=element(by.xpath('//*[@id="table"]/tbody/tr[last()]/td[6]/div/div[1]/div/a'));
    private linkGenerarSalida=element(by.xpath('//*[@id="table"]/tbody/tr[last()]/td[6]/div/div[3]/div/a'));
    private linkEliminar=element(by.xpath('//*[@id="table"]/tbody/tr[last()]/td[6]/div/div/div/a'));
    //                      ----- Pantalla Crear/Actualizar --------
    //Campos de creacion / actualizacion
    private inputPlacaVehiculo = element(by.id('placaVehiculo'));
    private optionMoto =  element(by.xpath('//*[@id="tipoVehiculo"]/option[1]'));
    //Botones
    private btnCrear = element(by.id('crearTiquete'));
    private btnActualizar = element(by.id('actualizarTiquete'));
    
    /**
     * METODOS DE INTERACCION CON LAS PANTALLAS DE TIQUETES
     */
    async clickLinkEditarPrimeraFila(){
        await this.linkEditar.click();
    }
    async clicklinkEliminarPrimeraFila(){
        await this.linkEliminar.click();
    }
    async clicklinkGenerarSalidaPrimeraFila(){
        await this.linkGenerarSalida.click();
    }

    async clickBtnActualizar(){
        await this.btnActualizar.click();
    }

    async clickBtnCrear(){
        await this.btnCrear.click();
    }

    async clickIraCrearTiquete() {
        await this.botonIrACrearProducto.click();
    }

    async ingresarPlaca(placa) {
        await this.inputPlacaVehiculo.sendKeys(placa);
    }

    async elegirTipoVehiculo() {
       await this.optionMoto.click();
    }

    getNoRegistrosBdText() {
        return element(by.id('divNoRegistros')).getText() as Promise<string>;
    }
}
