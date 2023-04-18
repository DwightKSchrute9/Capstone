import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private readonly API_URL = 'http://localhost:8080/api/users';

  constructor(private http: HttpClient) { }

  register(name: string, surname: string, email: string, password: string, creditCard: string): Observable<any> {
    const url = `${this.API_URL}/register`;
    const data = { name, surname, email, password, creditCard };
    return this.http.post(url, data);
  }

  getUserProfile(): Observable<any> {
    const url = `${this.API_URL}/profile`;
    const headers = new HttpHeaders({
      Authorization: `Bearer ${localStorage.getItem('token')}` // aggiunge il token JWT all'header della richiesta
    });
    return this.http.get(url, { headers });
  }

  updateUserProfile(userProfile: any): Observable<any> {
    const url = `${this.API_URL}/profile`;
    const headers = new HttpHeaders({
      Authorization: `Bearer ${localStorage.getItem('token')}` // aggiunge il token JWT all'header della richiesta
    });
    return this.http.put(url, userProfile, { headers });
  }

  deleteUserProfile(): Observable<any> {
    const url = `${this.API_URL}/profile`;
    const headers = new HttpHeaders({
      Authorization: `Bearer ${localStorage.getItem('token')}` // aggiunge il token JWT all'header della richiesta
    });
    return this.http.delete(url, { headers });
  }

  getUserData(jwt: string): Observable<any> {
    const url = `${this.API_URL}/data`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${jwt}`
    });
    return this.http.get(url, { headers });
  }
}
