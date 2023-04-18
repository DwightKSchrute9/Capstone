import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  getCurrentUser() {
    throw new Error('Method not implemented.');
  }

  private readonly API_URL = 'http://localhost:8080/api/users';

  constructor(private http: HttpClient) { }

  register(name: string, surname: string, email: string, password: string, creditCard: string): Observable<any> {
    const url = `${this.API_URL}/register`;
    const data = { name, surname, email, password, creditCard };
    return this.http.post(url, data);
  }

  getUserProfile(): Observable<any> {
    const url = `${this.API_URL}/profile`;
    return this.http.get(url);
  }

  updateUserProfile(userProfile: any): Observable<any> {
    const url = `${this.API_URL}/profile`;
    return this.http.put(url, userProfile);
  }

  deleteUserProfile(): Observable<any> {
    const url = `${this.API_URL}/profile`;
    return this.http.delete(url);
  }

  getUserData(): Observable<any> {
    const url = `${this.API_URL}/data`;
    return this.http.get(url);
  }

}
