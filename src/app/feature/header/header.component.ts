import { Component, OnInit } from '@angular/core';
import { OAuthService } from '../login/shared/service/oauth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {

  constructor(public oauthService : OAuthService) { }

  ngOnInit() {
  }

  logout() : void{
    this.oauthService.logout();
  }

}
