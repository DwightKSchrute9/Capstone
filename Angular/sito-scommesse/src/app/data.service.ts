import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private API_URL = 'https://api.example.com';
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem('token')
    })
  };

  constructor(private http: HttpClient) { }

  getUserData(): Observable<any> {
    const url = `${this.API_URL}/data`;
    return this.http.get(url, this.httpOptions);
  }
}
