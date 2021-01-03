import { HttpErrorResponse } from '@angular/common/http';
import { ErrorHandler, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { environment } from '../../../environments/environment';
import { HTTP_ERRORES_CODIGO } from './http-codigo-error';

const UNAUTHORIZED = 401;

@Injectable()
export class ManejadorError implements ErrorHandler {

  constructor(private router: Router) {}

  handleError(error: string | Error): void {
    const mensajeError = this.mensajePorDefecto(error);
    this.imprimirErrorConsola(mensajeError);
    if(mensajeError.error != undefined){
      Swal.fire("Error", mensajeError.error.mensaje, 'error');
    }    
  }

  private mensajePorDefecto(error) {
    if (error instanceof HttpErrorResponse) {
      if (!navigator.onLine) {
        return HTTP_ERRORES_CODIGO.NO_HAY_INTERNET;
      }
      if (error.hasOwnProperty('status') && !error.error.hasOwnProperty('mensaje')) {
        if(error.status == UNAUTHORIZED){
        this.router.navigate(['/login']);
        }
        return this.obtenerErrorHttpCode(error.status);
      }
    }
    return error;
  }

  private imprimirErrorConsola(mensaje): void {
    const respuesta = {
      fecha: new Date().toLocaleString(),
      path: window.location.href,
      mensaje,
    };
    if (!environment.production) {
      window.console.error('Error inesperado:\n', respuesta);
    }
  }

  public obtenerErrorHttpCode(httpCode: number): string {
    console.log(HTTP_ERRORES_CODIGO[httpCode]);
    if (HTTP_ERRORES_CODIGO.hasOwnProperty(httpCode)) {
      return HTTP_ERRORES_CODIGO.PETICION_FALLIDA;
    }
    return HTTP_ERRORES_CODIGO[httpCode];
  }
}