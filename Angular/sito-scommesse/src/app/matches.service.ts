import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MatchesService {
  private matchesUrl = 'http://localhost:3000/api/partite'; // Inserisci l'URL corretto per le tue API

  constructor(private http: HttpClient) { }

  getMatches(): Observable<any> {
    return this.http.get<any>(this.matchesUrl);
  }
}
