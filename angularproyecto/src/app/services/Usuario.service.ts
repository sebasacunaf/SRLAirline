import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ObjectId } from 'mongoose';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

const AUTH_API = `${environment.apiUrl}/Usuario/`;

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  constructor(private http: HttpClient) {}
  
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

  register(ID_Rol: ObjectId, Usuario:String, Contrasenna:String, Nombre:String, Apellidos:String, Celular:String, TelefonoTrabajo:String, Correo:String,FechaNacimiento:Date, Latitud:Number,Longitud:Number, 
    Descripcion:String): Observable<any> {
    return this.http.post(
      AUTH_API + 'signup',
      {
        ID_Rol, Usuario, Contrasenna, Nombre, Apellidos, Celular, TelefonoTrabajo, Correo,FechaNacimiento, Latitud,Longitud, 
        Descripcion
      },
      httpOptions
    );
  }
}
