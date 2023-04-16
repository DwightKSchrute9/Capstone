import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Bet } from './bet.model';
import { BetType } from './betType.enum';

@Component({
  selector: 'app-bet',
  templateUrl: './bet.component.html',
  styleUrls: ['./bet.component.scss']
})
export class BetComponent {
  @Input()
  matches: any[] = [];

  @Input()
  bet!: Bet;

  @Output()
  betSelected = new EventEmitter<any>();

  onOddClick(matchId: number, odd: number, betType: string) {
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
}
