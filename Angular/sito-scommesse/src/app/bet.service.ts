import { Injectable } from '@angular/core';
import { BetElement } from './bet/bet-element.model';


@Injectable({
  providedIn: 'root'
})
export class BetService {
  private bets: BetElement[] = [];

  addBet(matchId: number, betType: string, odd: number) {
    this.bets.push({ match: { id: matchId } as any, betType, odd });
  }

  removeBet(matchId: number) {
    const index = this.bets.findIndex(b => b.match.id === matchId);
    if (index !== -1) {
      this.bets.splice(index, 1);
    }
  }

  getBets(): BetElement[] {
    return this.bets;
  }

  clearBets() {
    this.bets = [];
  }

  getTotalOdds(): number {
    return this.bets.reduce((total, b) => total * b.odd, 1);
  }
}
