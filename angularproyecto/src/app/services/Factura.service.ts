import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

const AUTH_API = `${environment.apiUrl}/Factura/`;

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class FacturaService {
  constructor(private http: HttpClient) {}
  
  get(): Observable<any> {
    return this.http.get(AUTH_API, httpOptions);
  }
  
  delete(id: string): Observable<any> {
    return this.http.delete(`${AUTH_API}/${id}`);
  }

  update(id: string, post: any): Observable<any> {
    return this.http.put(`${AUTH_API}/${id}`, post);
  }
  getByID(id: string): Observable<any> {
    return this.http.get(`${AUTH_API}/${id}`);
  }
  create(ID_Reservacion:String, NumeroFactura:String, Descripcion:String, TotalColones:Number, TotalDolares:Number, FechaReservacion:String): Observable<any> {
    return this.http.post(AUTH_API + 'create',
    {
      ID_Reservacion, NumeroFactura, Descripcion, TotalColones, TotalDolares, FechaReservacion
    },
     httpOptions
    );
  }
}
