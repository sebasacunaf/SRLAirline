import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

const AUTH_API = `${environment.apiUrl}/TipoAvion/`;

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class TipoAvionService {

  constructor(private http: HttpClient) {}
  
  get(): Observable<any> {
    return this.http.get(AUTH_API, httpOptions);
  }
  create(Anno:String, Modelo:String, Marca:String, CantidadPasajeros:Number, CantidadFilas:Number, CantidadColumnas:Number): Observable<any> {
    return this.http.post(AUTH_API + 'create',
    {
      Anno, Modelo, Marca, CantidadPasajeros, CantidadFilas, CantidadColumnas
    },
     httpOptions
    );
  }
  delete(id: string, tipo: any): Observable<any> {
    return this.http.put(`${AUTH_API}/${id}`, tipo);

  }

  update(id: string, post: any): Observable<any> {
    return this.http.put(`${AUTH_API}/${id}`, post);
  }
  getByID(id: string): Observable<any> {
    return this.http.get(`${AUTH_API}/${id}`);
  }

}
