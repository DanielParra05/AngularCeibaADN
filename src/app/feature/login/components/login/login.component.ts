import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import Swal from "sweetalert2";
import { Usuario } from "../../shared/model/usuario";
import { OAuthService } from "../../shared/service/oauth.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  usuario: Usuario = new Usuario();

  constructor(private oauthService: OAuthService, private router: Router) {}

  ngOnInit() {
    if(this.oauthService.isAuthenticated()) {
      this.router.navigate(['home']);
    }
   }

  public login(): void {
    if (this.usuario.username == null || this.usuario.password == null || this.usuario.username.trim() == "" || this.usuario.password.trim() == "") {
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "Debe diligenciar todos los campos del login!",
        showConfirmButton: false,
        timer: 1500,
      });
      return;
    }
      this.oauthService.login(this.usuario).subscribe((response) => {
      this.oauthService.guardarToken(response.access_token);
      this.oauthService.guardarUsuario(response.access_token);

      this.router.navigate(["home"]);
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Ha iniciado sesion con exito!",
        showConfirmButton: false,
        timer: 1500,
      });
    } ,err=> {
      if(err.status == 400){
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: "Usuario o clave incorrecta",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  }
}
