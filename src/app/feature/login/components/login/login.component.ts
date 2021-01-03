import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import Swal from "sweetalert2";
import { Usuario } from "../../shared/model/usuario";
import { LoginService } from "../../shared/service/login.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  usuario: Usuario = new Usuario();

  constructor(private loginService: LoginService, private router: Router) {}

  ngOnInit() {
    if(this.loginService.isAuthenticated()) {
      this.router.navigate(['home']);
    }
   }

  public login(): void {
    console.log(this.usuario);

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

    this.loginService.login(this.usuario).subscribe((response) => {
      this.loginService.guardarToken(response.access_token);
      this.loginService.guardarUsuario(response.access_token);

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
