import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListarTiquetesComponent } from './components/listar-tiquetes/listar-tiquetes.component';
import { CrearTiqueteComponent } from './components/crear-tiquete/crear-actualizar.component';


const routes: Routes = [
      {path: 'crear-actualizar-tiquetes',  component: CrearTiqueteComponent },
      {path: 'crear-actualizar-tiquetes/:id',  component: CrearTiqueteComponent },
      { path: 'listar-tiquetes', component: ListarTiquetesComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TiqueteRoutingModule { }
