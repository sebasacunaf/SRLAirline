import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

const AUTH_API = `${environment.apiUrl}/Horario/`;

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class HorarioService {
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
  create(ID_Ruta:String, Dia:String, HoraSalida:String, HoraLlegada:String, Precio:Number): Observable<any> {
    return this.http.post(AUTH_API + 'create',
    {
      ID_Ruta, Dia, HoraSalida, HoraLlegada, Precio
    },
     httpOptions
    );
  }

}
