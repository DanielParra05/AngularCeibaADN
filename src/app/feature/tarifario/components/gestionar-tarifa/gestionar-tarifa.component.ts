import { Component, OnInit } from "@angular/core";
import Swal from "sweetalert2";
import { Tarifa } from "../../shared/model/tarifa";
import { TarifaService } from "../../shared/service/tarifa.service";

@Component({
  selector: "app-listar-tarifa",
  templateUrl: "./gestionar-tarifa.component.html",
})
export class GestionarTarifaComponent implements OnInit {
  titulo: String = "Tarifario";
  tarifas: Tarifa[];
  tarifaCrearActualizar: Tarifa = new Tarifa();

  constructor(private tarifaService: TarifaService) {}

  ngOnInit() {
    this.getTarifas();
  }

  public getTarifas() {
    this.tarifaService
      .getTarifas()
      .subscribe((tarifas) => (this.tarifas = tarifas));
  }

  private eliminar(id: number): void {
    this.tarifaService.delete(id).subscribe(() => {
      Swal.fire("La tarifa ha sido eliminado exitosamente!", "", "success");
      this.getTarifas();
    });
  }

  public eliminarTarifa(tarifa: Tarifa) {
    Swal.fire({
      title: "¿Desea eliminar la tarifa de " + tarifa.llave + "?",
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: `Si`,
      denyButtonText: `No`,
    }).then((result) => {
      if (result.isConfirmed) {
        this.eliminar(tarifa.id);
      }
    });
  }

  public create(): void {
    document.getElementById("btnCerrarModalCrearActualizar").click();
    this.tarifaService.create(this.tarifaCrearActualizar).subscribe(() => {
      this.getTarifas();
      Swal.fire(
        "La tarifa ha sido guardada",
        "La tarifa ha sido creada con exito!",
        "success"
      );
    });
  }

  public update(): void {
    document.getElementById("btnCerrarModalCrearActualizar").click();
    this.tarifaService.update(this.tarifaCrearActualizar).subscribe(() => {
      Swal.fire(
        "La tarifa ha sido actualizada",
        "La tarifa ha sido actualizada con exito!",
        "success"
      );
      this.getTarifas();
    });
  }

  cargarTarifaSeleccionadaEnModal(id: number) {
    this.tarifaService
      .getTarifa(id)
      .subscribe((tarifa) => (this.tarifaCrearActualizar = tarifa));
  }

  limpiarTarifaSeleccionadaEnModal() {
    this.tarifaCrearActualizar = new Tarifa();
  }
}
