import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CustomHttpClient } from './customHttpClient.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private API_URL = 'https://api.example.com';

  constructor(private http: CustomHttpClient) { }

  getUserData(): Observable<any> {
    const url = `${this.API_URL}/data`;
    return this.http.get(url);
  }
}
