import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

const AUTH_API = `${environment.apiUrl}/Vuelos/`;

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class VuelosService {
  constructor(private http: HttpClient) {}
  
  getAdmin(): Observable<any> {
    return this.http.get(`${AUTH_API}/getAdmin`,httpOptions);
  }
  
  get(): Observable<any> {
    return this.http.get(AUTH_API, httpOptions);
  }

  delete(id: string, vuelos: any): Observable<any> {
    return this.http.put(`${AUTH_API}/${id}`, vuelos);

  }


  update(id: string, post: any): Observable<any> {
    return this.http.put(`${AUTH_API}/${id}`, post);
  }
  getByID(id: string): Observable<any> {
    return this.http.get(`${AUTH_API}/${id}`);
  }
  getByForm(Origen: string,Destino: string, FechaI:string, FechaR: string): Observable<any> {
    return this.http.get(`${AUTH_API}/getByForm/?Origen=${Origen}&Destino=${Destino}&FechaI=${FechaI}&FechaR=${FechaR}`);
  }


  create(ID_Avion:String, CodigoVuelo:Number, Descripcion:String, Origen:String, Destino:String, FechaIda:String, FechaRegreso:String,EspaciosDisponibles:String): Observable<any> {
    return this.http.post(AUTH_API + 'create',
    {
      ID_Avion, CodigoVuelo, Descripcion, Origen, Destino, FechaIda, FechaRegreso,EspaciosDisponibles
    },
     httpOptions
    );
  }
}
