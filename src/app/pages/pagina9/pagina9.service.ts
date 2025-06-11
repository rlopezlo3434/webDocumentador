import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Pagina9Service {

  private apiUrl = 'https://digitalcook.info/accres/wp-content/themes/lbs/json/peaCP.json';

  constructor(private http: HttpClient) { }

  getData(codes: string[]): Observable<any> {
    const params = new HttpParams().set('CODES', codes.join(','));
    return this.http.get<any>(this.apiUrl, { params });
  }
}
