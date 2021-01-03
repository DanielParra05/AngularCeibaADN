import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListarTiquetesComponent } from './components/listar-tiquetes/listar-tiquetes.component';
import { CrearTiqueteComponent } from './components/crear-tiquete/crear-actualizar.component';
import { SecurityGuard } from '@core/guard/security.guard';


const routes: Routes = [
      {path:'', component:ListarTiquetesComponent},
      {path: 'crear-actualizar-tiquetes',  component: CrearTiqueteComponent, canActivate : [SecurityGuard] },
      {path: 'crear-actualizar-tiquetes/:id',  component: CrearTiqueteComponent, canActivate : [SecurityGuard] },
      
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TiqueteRoutingModule { }
