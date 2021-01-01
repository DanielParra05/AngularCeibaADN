import { Component, OnInit } from "@angular/core";
import { TiqueteParqueo } from "../../shared/model/tiquete-parqueo";
import { TiqueteService } from "../../shared/service/tiquete.service";
import Swal from 'sweetalert2';
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-crear-tiquete",
  templateUrl: "./crear-actualizar.component.html",
})
export class CrearTiqueteComponent implements OnInit {
  titulo: String = "Gestión Parqueadero";
  tiqueteParqueo: TiqueteParqueo = new TiqueteParqueo();
  constructor(private tiqueteService: TiqueteService,
    private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.cargarTiquete();
  }

  public cargarTiquete(): void {
    this.activatedRoute.params.subscribe(params => {
      let id = params.id;
      if (id) { // Si existe el id
        this.tiqueteService.getTiquete(id).subscribe((tiqueteParqueo) => this.tiqueteParqueo = tiqueteParqueo);
      }
    });
  }

  public create(): void {
    this.tiqueteService.create(this.tiqueteParqueo).subscribe(
      () => {
        this.router.navigate(['/listar-tiquetes']);
        Swal.fire('El tiquete ha sido guardado', 'El tiquete ha sido creado con exito!', 'success');
      }
    );
  }

  update(): void {
    this.tiqueteService.update(this.tiqueteParqueo, false).subscribe(
      () => {
        this.router.navigate(['/listar-tiquetes']);
       Swal.fire('Tiquete actualizado!',  `Tiquete de placa ${this.tiqueteParqueo.placaVehiculo} actualizado correctamente!`, 'success');
      });
  }
}
