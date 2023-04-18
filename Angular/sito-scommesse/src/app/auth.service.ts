import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private readonly API_URL = 'http://localhost:8080/api';

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  };

  private loggedIn = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<any> {
    const url = `${this.API_URL}/auth/login`;
    const data = { username, password };
    return this.http.post(url, data, this.httpOptions)
      .pipe(
        tap((response: any) => {
          console.log(response)
          localStorage.setItem('token', response.accessToken); // salva il token nel localStorage
          this.loggedIn.next(true);
        })
      );
  }

  logout(): void {
    localStorage.removeItem('token'); // rimuove il token dal localStorage
    this.loggedIn.next(false);
  }

  isLoggedIn(): Observable<boolean> {
    return this.loggedIn.asObservable();
  }

  register(name: string, username: string, email: string, password: string, creditCard: string): Observable<any> {
    const url = `${this.API_URL}/auth/register`;
    const data = { name, username: username, email, password, creditCard };
    return this.http.post(url, data);
  }

  getUserData(): Observable<any> {
    const url = `${this.API_URL}/auth/user`;
    const token = localStorage.getItem('token'); // recupera il token dal localStorage
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}` // aggiunge il token nell'header della richiesta
      })
    };
    return this.http.get(url, httpOptions);
  }
}
