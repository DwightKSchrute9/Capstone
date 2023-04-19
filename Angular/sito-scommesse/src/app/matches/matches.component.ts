import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Match } from '../matches/matches.model';
import { MatchesService } from '../matches.service';
import { CartService } from '../cart.service';
import { BetType } from '../bet/betType.enum';
import { DoubleRange } from "../types";

@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.scss']
})
export class MatchesComponent implements OnInit {
  matches: Match[] = [];

  @Output() oddSelected = new EventEmitter<DoubleRange>();

  constructor(private matchesService: MatchesService, private cartService: CartService) { }

  addToCart(match: Match, betType: string, odd: number): void {
    console.log(`Aggiunto al carrello: ${match.homeTeam} - ${match.awayTeam} - ${odd}`);
    // aggiungi la logica per aggiungere le quote al carrello qui
    this.cartService.addBet(match, betType, odd);
  }

  onOddClick(odd: number) {
    this.oddSelected.emit(odd);
  }

  ngOnInit(): void {
    this.matchesService.getMatches()
      .subscribe((matches) => {
        this.matches = matches;
      });
  }
}




