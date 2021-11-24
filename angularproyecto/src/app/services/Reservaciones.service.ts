import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

const AUTH_API = `${environment.apiUrl}/Reservaciones/`;

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class ReservacionesService {
  constructor(private http: HttpClient) {}
  
  get(): Observable<any> {
    return this.http.get(AUTH_API, httpOptions);
  }
  
  delete(id: string): Observable<any> {
    return this.http.delete(`${AUTH_API}/${id}`);
  }

  edit(id: string, post: any): Observable<any> {
    return this.http.put(`${AUTH_API}/${id}`, post);
  }
  getById(id: string): Observable<any> {
    return this.http.get(`${AUTH_API}/${id}`);
  }

  create(ID_Vuelo:String, ID_Usuario:String, numReservacion:number, CantidadAsientos:Number): Observable<any> {
    return this.http.post(AUTH_API + 'create',
    {
      ID_Vuelo, ID_Usuario, numReservacion, CantidadAsientos
    },
     httpOptions
    );
  }
}
