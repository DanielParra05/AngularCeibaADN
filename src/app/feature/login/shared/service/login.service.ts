import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Usuario } from "../model/usuario";

const TOKEN = "token";

@Injectable({
  providedIn: "root",
})
export class LoginService {
  private _usuario: Usuario;
  private _token: string;

  constructor(private http: HttpClient) {}

  login(user: Usuario): Observable<any> {
    const credenciales = btoa("angularapp:12345");
    const httpHeaders = new HttpHeaders({
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: `Basic ${credenciales}`,
    });
    let params = new URLSearchParams();
    params.set("grant_type", "password");
    params.set("username", user.username);
    params.set("password", user.password);

    //Llamado al servicio
    return this.http.post<any>(`${environment.url_auth}`, params.toString(), {
      headers: httpHeaders,
    });
  }

  public get token(): string {
    if (this._token != null) {
      return this._token;
    } else if (sessionStorage.getItem(TOKEN) != null) {
      this._token = sessionStorage.getItem(TOKEN);
      return this._token;
    }
    return null;
  }

  guardarUsuario(accessToken: string): void {
    let payload = this.obtenerDatosToken(accessToken);
    this._usuario = new Usuario();
    this._usuario.username = payload.user_name;

    sessionStorage.setItem("usuario", JSON.stringify(this._usuario));
  }

  guardarToken(accessToken: string): void {
    this._token = accessToken;
    sessionStorage.setItem(TOKEN, this._token);
  }

  obtenerDatosToken(accessToken: string): any {
    if (accessToken != null) {
      return JSON.parse(atob(accessToken.split(".")[1]));
    }
    return null;
  }

  isAuthenticated(): boolean {
    let payload = this.obtenerDatosToken(this.token);
    if(payload != null && payload.user_name && payload.user_name.length > 0){
      return true;
    }
    return false;
  }

  public logout():void{
    this._token = null;
    this._usuario = null;
    sessionStorage.clear();
  }
}
