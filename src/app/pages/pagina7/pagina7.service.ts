import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Pagina7Service {


  constructor(private http: HttpClient) { }

  getData(codes: string[]): Observable<any> {
    
    // const apiUrl = 'http://localhost:3000/api/datos_poblacion';
    const apiUrl = 'https://apilbs-production.up.railway.app/api/datos_poblacion';

    const params = new HttpParams().set('cpp', codes.join(','));
    return this.http.get<any>(apiUrl, { params });
  }
}
