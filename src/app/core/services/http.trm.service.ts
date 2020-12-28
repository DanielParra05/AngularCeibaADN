import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import swal from "sweetalert2";

@Injectable({
  providedIn: 'root'
})
export class HttpServiceTrmService {

constructor(private http: HttpClient) {}

public getTrm(): Observable<any> {
  return this.http.get<any>(`${environment.url_api_trm}`).pipe(
    catchError(e => {
      swal.fire('Error al consultar TRM', e.error.mensaje, 'error');
      return throwError(e);
    })
  );
}

}
