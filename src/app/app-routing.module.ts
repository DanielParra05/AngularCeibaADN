import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { SecurityGuard } from "@core/guard/security.guard";
import { HomeComponent } from "@home/home.component";

const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "home", component: HomeComponent, canActivate: [SecurityGuard] },
  {
    path: "gestionar-tarifa",
    loadChildren: () =>
      import("./feature/tarifario/tarifario.module").then(
        (m) => m.TarifarioModule
      ),
  },
  {
    path: "listar-tiquetes",
    loadChildren: () =>
      import("./feature/tiquete/tiquete.module").then((m) => m.TiqueteModule),
  },{
    path: "login",
    loadChildren: () =>
      import("./feature/login/login.module").then((m) => m.LoginModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
