import { Component, OnInit } from "@angular/core";
import swal from "sweetalert2";
import { TiqueteParqueo } from "../../shared/model/tiquete-parqueo";
import { TiqueteService } from "../../shared/service/tiquete.service";

@Component({
  selector: "app-lista-tiquetes",
  templateUrl: "./listar-tiquetes.component.html",
})
export class ListarTiquetesComponent implements OnInit {
  titulo: String = "Gestión Parqueadero";
  tiquetes: TiqueteParqueo[];


  constructor(private tiqueteService: TiqueteService) {}

  ngOnInit() {
    this.getTiquetes();
  }

  public getTiquetes() {
    this.tiqueteService
      .getTiquetes()
      .subscribe((tiquete) => (this.tiquetes = tiquete));
  }

  public delete(id : number) {
    this.tiqueteService.delete(id).subscribe(
      () => {        
        swal.fire('El tiquete ha sido eliminado exitosamente!', '', 'success');
        this.getTiquetes();
      }
    );    
  }

  public actualizar(tiqueteParqueo : TiqueteParqueo) {
    tiqueteParqueo.fechaSalida = this.getCurrentDateWithJavaLocalDateTimeFormat();
    this.tiqueteService.update(tiqueteParqueo).subscribe(
      () => {
       swal.fire('Tiquete cerrado exitosamente!',  'Tiquete '+tiqueteParqueo.placaVehiculo+' actualizado correctamente!', 'success');       
       this.getTiquetes();
      });
  }

  public eliminarConfirmacion(tiquete : TiqueteParqueo){
    swal.fire({
      title: '¿Desea eliminar el tique #'+tiquete.id+' de placa '+tiquete.placaVehiculo+'?',
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: `Si`,
      denyButtonText: `No`,
    }).then((result) => {
      if (result.isConfirmed) {
        this.delete(tiquete.id);       
      } 
    })
  }

  public cerrarTiqueteConfirmacion(tiquete : TiqueteParqueo){
    swal.fire({
      title: '¿Desea cerrar el tique #'+tiquete.id+' de placa '+tiquete.placaVehiculo+'?',
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: `Si`,
      denyButtonText: `No`,
    }).then((result) => {
      if (result.isConfirmed) {
        this.actualizar(tiquete);
      } 
    })
  }

  private getCurrentDateWithJavaLocalDateTimeFormat(): any{
    var currentDate = new Date();
    var currentDateFormat = new Date(currentDate.getTime() - (currentDate.getTimezoneOffset() * 60000)).toISOString().replace("T"," ").split(".")[0];
    return currentDateFormat;
  }
}
