import { Injectable } from "@angular/core";
import { Bet } from "./bet/bet.model";
import { Match } from "./matches/matches.model";
import { BetType } from "./bet/betType.enum";

@Injectable({
  providedIn: 'root'
})
export class CartService {
  bets: Bet[] = [];

  addBet(match: Match, betType: string, odd: DoubleRange) {
    if (!this.bets.find(existingBet => match.id === existingBet.match.id)) {
      this.bets.push({match: match, betType: this.getBetType(betType), odd: odd});
    }
  }

  getBetType(betType: string): BetType {
    switch (betType) {
      case "HOME": return BetType.HOME;
      case "AWAY": return BetType.AWAY;
      case "DRAW": default: return BetType.DRAW;
    }
  }
}
