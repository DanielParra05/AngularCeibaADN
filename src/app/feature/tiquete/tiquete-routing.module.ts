import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListarTiquetesComponent } from './components/listar-tiquetes/listar-tiquetes.component';
import { CrearTiqueteComponent } from './components/crear-tiquete/crear-tiquete.component';


const routes: Routes = [
      {path: 'crear-tiquetes',  component: CrearTiqueteComponent },
      { path: 'listar-tiquetes', component: ListarTiquetesComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TiqueteRoutingModule { }
