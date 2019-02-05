import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpEvent } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: HttpClient
  ) { }

  post<T>(url: string, body: any, options: any): Observable<HttpEvent<T>> {
    return this.http.post<T>(`${environment.api_url}${url}`, body, options);
  }
}
