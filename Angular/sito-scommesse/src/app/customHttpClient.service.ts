import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CustomHttpClient {

  constructor(private http: HttpClient) {

  }

  get(url: string): Observable<any> {
    return this.http.get(url, this.getHttpOptions());
  }

  post(url: string, data: any): Observable<any> {
    return this.http.post(url, data, this.getHttpOptions());
  }

  put(url: string, data: any): Observable<any> {
    return this.http.put(url, data, this.getHttpOptions());
  }

  delete(url: string): Observable<any> {
    return this.http.get(url, this.getHttpOptions());
  }

  private getHttpOptions() {
    const token = localStorage.getItem('token');
    let httpOptions;

    if (token !== null && token !== undefined) {
      console.log(token)
      httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}` // aggiunge il token nell'header della richiesta
        })
      };
    } else {
      httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })
      };
    }

    return httpOptions;
  }
}
