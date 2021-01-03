import { NgModule } from '@angular/core';
import { LoginComponent } from './components/login/login.component';
import { SharedModule } from '@shared/shared.module';
import { LoginService } from './shared/service/login.service';
import { LoginRoutingModule } from './login-router.module';

@NgModule({
  imports: [SharedModule, LoginRoutingModule
  ],
  declarations: [LoginComponent],
  providers: [LoginService],
})
export class LoginModule { }
