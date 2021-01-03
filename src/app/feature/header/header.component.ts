import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { LoginService } from '../login/shared/service/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {

  constructor(public loginService : LoginService) { }

  ngOnInit() {
  }

  logout() : void{
    this.loginService.logout();
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Sesion finalizada!",
      showConfirmButton: false,
      timer: 1500,
    });
  }

}
