import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

const AUTH_API = `${environment.apiUrl}/Avion/`;

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class AvionService {
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
  create(ID_TipoAvion:String, ID_Horario:String, CodigoAvion:Number): Observable<any> {
    return this.http.post(AUTH_API + 'create',
    {
      ID_TipoAvion, ID_Horario, CodigoAvion
    },
     httpOptions
    );
  }
}
