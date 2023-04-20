import { Injectable } from "@angular/core";
import { BetElement } from "./bet/bet-element.model";
import { Match } from "./matches/matches.model";
import { BetType } from "./bet/betType.enum";

@Injectable({
  providedIn: 'root'
})
export class CartService {
  placeBet() {
    throw new Error('Method not implemented.');
  }
  bets: BetElement[] = [];
  betCount: any;
  selectedBet: any;
  betAmount: number = 0;

  addBet(match: Match, betType: string, odd: number) {
    if (!this.bets.find(existingBet => match.id === existingBet.match.id)) {
      this.bets.push({match: match, betType: this.getBetType(betType), odd: odd});
    }
  }

  removeBet(matchId: number) {
    this.bets = this.bets.filter(bet => bet.match.id !== matchId);
  }

  getBetType(betType: string): BetType {
    switch (betType) {
      case "HOME": return BetType.HOME;
      case "AWAY": return BetType.AWAY;
      case "DRAW": default: return BetType.DRAW;
    }
  }
}
