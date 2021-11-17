import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

const AUTH_API = `${environment.apiUrl}/Usuario/`;

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {

  constructor(private http: HttpClient) {}
  
  get(): Observable<any> {
    return this.http.get(AUTH_API, httpOptions);
  }
  create(post: any): Observable<any> {
    return this.http.post(AUTH_API, post);
  }
  delete(id: string): Observable<any> {
    return this.http.delete(`${AUTH_API}/${id}`);
  }

  edit(id: string, post: any): Observable<any> {
    return this.http.put(`${AUTH_API}/${id}`, post);
  }
  
  login(Usuario: string, Contrasenna: string): Observable<any> {
    return this.http.post(
      AUTH_API + 'signin',
      {
        Usuario,
        Contrasenna,
      },
      httpOptions
    );
  }

  register(Rol: String, Usuario:String, Contrasenna:String, Nombre:String, Apellidos:String, Celular:String, TelefonoTrabajo:String, Correo:String,FechaNacimiento:Date,
    Descripcion:String): Observable<any> {
    return this.http.post(
      AUTH_API + 'signup',
      {
        Rol, Usuario, Contrasenna, Nombre, Apellidos, Celular, TelefonoTrabajo, Correo,FechaNacimiento, Descripcion
      },
      httpOptions
    );
  }
}
