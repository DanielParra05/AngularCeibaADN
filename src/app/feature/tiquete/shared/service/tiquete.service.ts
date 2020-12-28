import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Observable, throwError } from "rxjs";
import { catchError, map } from "rxjs/operators";
import { environment } from "src/environments/environment";
import swal from "sweetalert2";
import { TiqueteParqueo } from "../model/tiquete-parqueo";

@Injectable({
  providedIn: "root",
})
export class TiqueteService {
  private httpHeaders = new HttpHeaders({ "Content-Type": "application/json" });

  constructor(private http: HttpClient, private router: Router) {}

  public getTiquetes(): Observable<TiqueteParqueo[]> {
    return this.http
      .get(`${environment.url_api_tiquetes}`)
      .pipe(map((response) => response as TiqueteParqueo[]));
  }

  public create(tiqueteParqueo: TiqueteParqueo) : Observable<any> {
    return this.http.post<TiqueteParqueo>(`${environment.url_api_tiquetes}`, tiqueteParqueo, {headers : this.httpHeaders}).pipe(
      catchError(e => {
        swal.fire("Error al crear el tiquete", e.error.mensaje, 'error');
        return throwError(e);
      })
    );
  }
  
  public delete(id: number): Observable<any> {
    return this.http.delete<void>(`${environment.url_api_tiquetes}/${id}`, {headers : this.httpHeaders}).pipe(
      catchError(e => {
        swal.fire("No se pudo eliminar", e.error.mensaje, 'error');
        return throwError(e);
      })
    );
  }

  public update(tiqueteParqueo: TiqueteParqueo): Observable<any> {
    return this.http.put<any>(`${environment.url_api_tiquetes}/${tiqueteParqueo.id}`, tiqueteParqueo, { headers: this.httpHeaders }).pipe(
      catchError(e => {
        this.router.navigate(['/listar-tiquetes']);
        swal.fire('Error al actualizar', e.error.mensaje, 'error');
        return throwError(e);
      })
    );    
  }

  public getTiquete(id: number): Observable<any> {
    return this.http.get<TiqueteParqueo>(`${environment.url_api_tiquetes}/${id}`).pipe(
      catchError(e => {
        this.router.navigate(['/listar-tiquetes']);
        swal.fire('Error al encontrar tiquete', e.error.mensaje, 'error');
        return throwError(e);
      })
    );
  }
}
