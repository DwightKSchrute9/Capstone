import { Component, Input, Output, EventEmitter } from '@angular/core';
import { BetElement } from './bet-element.model';
import { BetType } from './betType.enum';
import { BetService } from '../bet.service';
import { Match } from '../matches/matches.model';
import { CustomHttpClient } from '../customHttpClient.service';
@Component({
  selector: 'app-bet',
  templateUrl: './bet.component.html',
  styleUrls: ['./bet.component.scss']
})
export class BetComponent {
  @Input() matches: Match[] = [];
  @Input() bet!: BetElement;
  @Output() betSelected = new EventEmitter<any>();
  @Output() onRemoveBet = new EventEmitter<number>();

  constructor(private betService: BetService,private http: CustomHttpClient) {}

  ngOnInit() {
  }

  onOddClick(matchId: number, odd: number, betType: string) {
    this.betService.addBet(matchId, betType, odd);
    const betItem = {
      matchId: matchId,
      betType: betType,
      odd: odd
    };
    this.betSelected.emit(betItem);

  }

  getBetOn(): string {
    if (this.bet) {
      switch (this.bet.betType) {
        case BetType.HOME: return this.bet.match.homeTeam;
        case BetType.AWAY: return this.bet.match.awayTeam;
        case BetType.DRAW: return 'Draw';
      }
    }
    return '';
  }

  removeBet(matchId: number) {
    this.onRemoveBet.emit(matchId);
  }
}
