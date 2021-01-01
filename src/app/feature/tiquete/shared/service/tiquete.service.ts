import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Observable, throwError } from "rxjs";
import { catchError, map } from "rxjs/operators";
import { environment } from "src/environments/environment";
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
    tiqueteParqueo.fechaIngreso = this.getCurrentDateWithJavaLocalDateTimeFormat();
    return this.http.post<TiqueteParqueo>(`${environment.url_api_tiquetes}`, tiqueteParqueo, {headers : this.httpHeaders}).pipe(
      catchError(e => {
        this.redirectTo('listar-tiquetes');
        return throwError(e);
      })
    );
  }
  
  public delete(id: number): Observable<any> {
    return this.http.delete<void>(`${environment.url_api_tiquetes}/${id}`, {headers : this.httpHeaders}).pipe();
  }

  public update(tiqueteParqueo: TiqueteParqueo, cerrarTiquete : boolean): Observable<any> {
    if (cerrarTiquete){
      tiqueteParqueo.fechaSalida = this.getCurrentDateWithJavaLocalDateTimeFormat() ;
    }
    return this.http.put<any>(`${environment.url_api_tiquetes}/${tiqueteParqueo.id}`, tiqueteParqueo, { headers: this.httpHeaders }).pipe(
      catchError(e => {
        this.redirectTo('listar-tiquetes');
        return throwError(e);
      })
    );    
  }

  public getTiquete(id: number): Observable<any> {
    return this.http.get<TiqueteParqueo>(`${environment.url_api_tiquetes}/${id}`).pipe(
      catchError(e => {
        this.redirectTo('listar-tiquetes');
        return throwError(e);
      })
    );
  }

  /**
   * Redirige a una determinada uri sin importar si el navegador actualmente se encuentra 
   * en la misma uri
   * @param uri 
   */
  redirectTo(uri: string) {
    this.router
      .navigateByUrl("/", { skipLocationChange: true })
      .then(() => this.router.navigate([uri]));
  }

  private getCurrentDateWithJavaLocalDateTimeFormat(): any{
    var currentDate = new Date();
    var currentDateFormat = new Date(currentDate.getTime() - (currentDate.getTimezoneOffset() * 60000)).toISOString().replace("T"," ").split(".")[0];
    return currentDateFormat;
  }
}
