import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Observable, throwError } from "rxjs";
import { catchError, map } from "rxjs/operators";
import { environment } from "src/environments/environment";
import Swal from "sweetalert2";
import { Tarifa } from "../model/tarifa";

@Injectable({
  providedIn: "root",
})
export class TarifaService {
  private httpHeaders = new HttpHeaders({ "Content-Type": "application/json" });

  constructor(private http: HttpClient, private router: Router) {}

  public getTarifas(): Observable<Tarifa[]> {
    return this.http
      .get(`${environment.url_api_tarifario}`)
      .pipe(map((response) => response as Tarifa[]));
  }

  public create(tarifa: Tarifa): Observable<any> {
    return this.http
      .post<Tarifa>(`${environment.url_api_tarifario}`, tarifa, {
        headers: this.httpHeaders,
      })
      .pipe(
        catchError((e) => {
          Swal.fire("Error al crear el tiquete", e.error.mensaje, "error");
          return throwError(e);
        })
      );
  }

  public delete(id: number): Observable<any> {
    return this.http
      .delete<void>(`${environment.url_api_tarifario}/${id}`, {
        headers: this.httpHeaders,
      })
      .pipe(
        catchError((e) => {
          Swal.fire("No se pudo eliminar", e.error.mensaje, "error");
          return throwError(e);
        })
      );
  }

  public update(tarifa: Tarifa): Observable<any> {
    return this.http
      .put<any>(`${environment.url_api_tarifario}/${tarifa.id}`, tarifa, {
        headers: this.httpHeaders,
      })
      .pipe(
        catchError((e) => {
          this.redirectTo('gestionar-tarifa');
          Swal.fire("Error al actualizar", e.error.mensaje, "error");
          return throwError(e);
        })
      );
  }

  public getTarifa(id: number): Observable<any> {
    return this.http.get<Tarifa>(`${environment.url_api_tarifario}/${id}`).pipe(
      catchError(e => {
        this.redirectTo('gestionar-tarifa');
        Swal.fire('Error al encontrar tarifa', e.error.mensaje, 'error');
        return throwError(e);
      })
    );
  }

  /**
   * Redirige a una determinada uri sin importar si el navegador actualmente se encuentra 
   * en la misma uri
   * @param uri 
   */
  public redirectTo(uri: string) {
    this.router
      .navigateByUrl("/", { skipLocationChange: true })
      .then(() => this.router.navigate([uri]));
  }
}
