import { Component, OnInit } from "@angular/core";
import { TiqueteParqueo } from "../../shared/model/tiquete-parqueo";
import { TiqueteService } from "../../shared/service/tiquete.service";
import swal from 'sweetalert2';
import { Router } from "@angular/router";

@Component({
  selector: "app-crear-tiquete",
  templateUrl: "./crear-tiquete.component.html",
})
export class CrearTiqueteComponent implements OnInit {
  titulo: String = "Gestión Parqueadero";
  tiqueteParqueo: TiqueteParqueo = new TiqueteParqueo();
  constructor(private tiqueteService: TiqueteService,
    private router: Router) {}

  ngOnInit() {}

  public create(): void {
    this.tiqueteParqueo.fechaIngreso = this.getCurrentDateWithJavaLocalDateTimeFormat();
    this.tiqueteService.create(this.tiqueteParqueo).subscribe(
      response => {
        this.router.navigate(['/listar-tiquetes']);
        swal.fire('El tiquete ha sido guardado', 'El tiquete #'+response.valor+' ha sido creado con exito!', 'success');
      }
    );
  }


  private getCurrentDateWithJavaLocalDateTimeFormat(): any{
    var currentDate = new Date();
    var currentDateFormat = new Date(currentDate.getTime() - (currentDate.getTimezoneOffset() * 60000)).toISOString().replace("T"," ").split(".")[0];
    return currentDateFormat;
  }
}
