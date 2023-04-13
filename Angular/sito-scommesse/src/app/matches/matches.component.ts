import { Component, Input, OnInit } from '@angular/core';
import { MatchesService } from '../matches.service';

@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.scss']
})
export class MatchesComponent implements OnInit {
  matches: any[] = [];

  id: number | undefined;
  date!: Date;
  homeTeam!: string;
  awayTeam!: string;
  stadium!: string;

  constructor(private matchesService: MatchesService) { }

  ngOnInit(): void {
    this.matchesService.getMatches()
      .subscribe((matches) => {
        this.matches = matches;
      });
  }
}

