import { Component, OnInit } from '@angular/core';
import { Match } from '../matches/matches.model';
import { MatchesService } from '../matches.service';

@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.scss']
})
export class MatchesComponent implements OnInit {
  matches: Match[] = [];

  constructor(private matchesService: MatchesService) { }

  ngOnInit(): void {
    this.matchesService.getMatches()
      .subscribe((matches) => {
        this.matches = matches;
      });
  }
}

