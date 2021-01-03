import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SecurityGuard } from '@core/guard/security.guard';
import { GestionarTarifaComponent } from './components/gestionar-tarifa/gestionar-tarifa.component';


const routes: Routes = [
 {
   path:'',
   component: GestionarTarifaComponent,
   canActivate : [SecurityGuard]
 }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TarifarioRoutingModule { }
