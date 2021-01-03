import { NgModule } from '@angular/core';
import { LoginComponent } from './components/login/login.component';
import { SharedModule } from '@shared/shared.module';
import { OAuthService } from './shared/service/oauth.service';
import { LoginRoutingModule } from './login-router.module';

@NgModule({
  imports: [SharedModule, LoginRoutingModule
  ],
  declarations: [LoginComponent],
  providers: [OAuthService],
})
export class LoginModule { }
