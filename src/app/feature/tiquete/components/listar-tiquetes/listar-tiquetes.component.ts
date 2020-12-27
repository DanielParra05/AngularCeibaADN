import { Component, OnInit } from "@angular/core";
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

  public delete() {
    
  }
}
