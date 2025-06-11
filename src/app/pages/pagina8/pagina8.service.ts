import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Pagina8Service {

   constructor(private http: HttpClient) { }
 
   getData(codes: string[], dist: string): Observable<any> {
    
    // const  apiUrl = 'http://localhost:3000/api/datos_poblacion/pet';
    const  apiUrl = 'https://apilbs-production.up.railway.app/api/datos_poblacion/pet';

     const params = new HttpParams().set('cpp', codes.join(','));
     return this.http.get<any>(apiUrl, { params });
   }

   getPea(distrito: string): Observable<any> {
    // const apiUrl = 'http://localhost:3000/api/datos_poblacion/pea_nopea';
    const apiUrl = 'https://apilbs-production.up.railway.app/api/datos_poblacion/pea_nopea';

    const params = new HttpParams().set('distrito', distrito);

    return this.http.get<any>(apiUrl, { params });

   }
  
}
