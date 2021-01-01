import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { SecurityGuard } from "@core/guard/security.guard";
import { HomeComponent } from "@home/home.component";
import { LoginComponent } from "./feature/login/login.component";

const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "home", component: HomeComponent, canActivate: [SecurityGuard] },
  { path: "login", component: LoginComponent},
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
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
