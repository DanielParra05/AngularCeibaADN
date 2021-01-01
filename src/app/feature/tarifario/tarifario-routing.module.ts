import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GestionarTarifaComponent } from './components/gestionar-tarifa/gestionar-tarifa.component';


const routes: Routes = [
 {
   path:'',
   component: GestionarTarifaComponent
 }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TarifarioRoutingModule { }
