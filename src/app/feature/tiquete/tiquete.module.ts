import { NgModule } from '@angular/core';

import { TiqueteRoutingModule } from './tiquete-routing.module';
import { ListarTiquetesComponent } from './components/listar-tiquetes/listar-tiquetes.component';
import { CrearTiqueteComponent } from './components/crear-tiquete/crear-tiquete.component';
import { SharedModule } from '@shared/shared.module';
import { TiqueteService } from './shared/service/tiquete.service';


@NgModule({
  declarations: [
    CrearTiqueteComponent,
    ListarTiquetesComponent
  ],
  imports: [
    TiqueteRoutingModule,
    SharedModule
  ],
  providers: [TiqueteService]
})
export class TiqueteModule { }
