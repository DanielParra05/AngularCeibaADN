import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Observable} from "rxjs";
import { map } from "rxjs/operators";
import { environment } from "src/environments/environment";
import { Tarifa } from "../model/tarifa";

@Injectable()
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
      .pipe();
  }

  public delete(id: number): Observable<any> {
    return this.http
      .delete<void>(`${environment.url_api_tarifario}/${id}`, {
        headers: this.httpHeaders,
      })
      .pipe();
  }

  public update(tarifa: Tarifa): Observable<any> {
    return this.http
      .put<any>(`${environment.url_api_tarifario}/${tarifa.id}`, tarifa, {
        headers: this.httpHeaders,
      })
      .pipe();
  }

  public getTarifa(id: number): Observable<any> {
    return this.http
      .get<Tarifa>(`${environment.url_api_tarifario}/${id}`)
      .pipe();
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
