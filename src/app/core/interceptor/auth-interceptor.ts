import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { catchError } from 'rxjs/operators';
import { OAuthService } from 'src/app/feature/login/shared/service/oauth.service';

const UNAUTHORIZED = 401;
const FORBIDDEN = 403;

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private router: Router, private authService : OAuthService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler):
    Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError(error => {
        switch (error.status) {
          case UNAUTHORIZED:
            this.router.navigate(['/login']);
            //Cierre de sesion si el token expira
            if(this.authService.isAuthenticated()){
              this.authService.logout();
            }
            break;
          case FORBIDDEN:
            this.router.navigate(['/home']);
            break;
          default:
            return throwError(error);
        }
      })
    );
  }
}
