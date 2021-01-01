import { Component, OnInit } from "@angular/core";
import Swal from "sweetalert2";
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
        Swal.fire('El tiquete ha sido eliminado exitosamente!', '', 'success');
        this.getTiquetes();
      }
    );    
  }

  public generarSalida(tiqueteParqueo : TiqueteParqueo) {
    this.tiqueteService.update(tiqueteParqueo, true).subscribe(
      () => {
        Swal.fire('Tiquete cerrado exitosamente!',  `Tiquete ${tiqueteParqueo.placaVehiculo} actualizado correctamente!`, 'success');       
       this.getTiquetes();
      });
  }

  public eliminarConfirmacion(tiquete : TiqueteParqueo){
    Swal.fire({
      title: `¿Desea eliminar el tique #${tiquete.id} de placa ${tiquete.placaVehiculo}?`,
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
    Swal.fire({
      title: `¿Desea cerrar el tique ${tiquete.id} de placa ${tiquete.placaVehiculo}?`,
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: `Si`,
      denyButtonText: `No`,
    }).then((result) => {
      if (result.isConfirmed) {
        this.generarSalida(tiquete);
      } 
    })
  }


}
