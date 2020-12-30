import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceTrmService {

constructor(private http: HttpClient) {}

public getTrm(): Observable<any> {
  return this.http.get<any>(`${environment.url_api_trm}`).pipe(
    catchError(e => {
      console.log(e.error.mensaje);
      return throwError(e);
    })
  );
}

}
