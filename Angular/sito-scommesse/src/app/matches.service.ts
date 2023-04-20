import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Match } from './matches/matches.model';
import { CustomHttpClient } from './customHttpClient.service';

@Injectable({
  providedIn: 'root'
})
export class MatchesService {
  private apiUrl = 'http://localhost:8080/api/matches/';

  constructor(private http: CustomHttpClient) { }

  getMatches(): Observable<Match[]> {
    return this.http.get(this.apiUrl);
  }
}
