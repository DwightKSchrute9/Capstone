import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private readonly API_URL = 'http://localhost:8080/api';


  private loggedIn = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient) { }

  login(email: string, password: string): Observable<any> {
    const url = `${this.API_URL}/login`;
    const data = { email, password };
    return this.http.post(url, data)
      .pipe(
        tap(() => {
          this.loggedIn.next(true);
        })
      );
  }

  logout(): void {
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
    const url = `${this.API_URL}/user`;
    return this.http.get(url);
  }

}
