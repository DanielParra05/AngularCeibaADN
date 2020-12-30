import { NgModule } from "@angular/core";
import { SharedModule } from "@shared/shared.module";
import { GestionarTarifaComponent } from "./components/gestionar-tarifa/gestionar-tarifa.component";
import { TarifaService } from "./shared/service/tarifa.service";
import { TarifarioRoutingModule } from "./tarifario-routing.module";

@NgModule({
  declarations: [GestionarTarifaComponent],
  imports: [TarifarioRoutingModule, SharedModule],
  providers: [TarifaService],
})
export class TarifarioModule {}
