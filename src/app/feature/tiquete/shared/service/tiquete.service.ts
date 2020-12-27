import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { catchError, map } from "rxjs/operators";
import { environment } from "src/environments/environment";
import Swal from "sweetalert2";
import { TiqueteParqueo } from "../model/tiquete-parqueo";

@Injectable({
  providedIn: "root",
})
export class TiqueteService {
  private httpHeaders = new HttpHeaders({ "Content-Type": "application/json" });

  constructor(private http: HttpClient) {}

  public getTiquetes(): Observable<TiqueteParqueo[]> {
    return this.http
      .get(`${environment.url_api_tiquetes}`)
      .pipe(map((response) => response as TiqueteParqueo[]));
  }

  public create(tiqueteParqueo: TiqueteParqueo) : Observable<any> {
    return this.http.post<TiqueteParqueo>(`${environment.url_api_tiquetes}`, tiqueteParqueo, {headers : this.httpHeaders}).pipe(
      catchError(e => {
        Swal.fire("Error al crear el tiquete", e.error.mensaje, 'error');
        return throwError(e);
      })
    );
  } 
}
