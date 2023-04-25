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
  @Output() closeList = new EventEmitter<void>();

  constructor(private matchesService: MatchesService, private cartService: CartService) { }

  addToCart(match: Match, betType: string, odd: number): void {
    console.log(`Aggiunto al carrello: ${match.homeTeam} - ${match.awayTeam} - ${odd}`);
    // aggiungi la logica per aggiungere le quote al carrello qui
    this.cartService.addBet(match, betType, odd);
  }

  onOddClick(odd: number) {
    this.oddSelected.emit(odd);
  }
  toggleSublist(event: MouseEvent): void {
    event.preventDefault();
    const sublist = (event.currentTarget as HTMLElement).nextElementSibling;
    if (sublist) {
      sublist.classList.toggle('show');
    }
  }

  ngOnInit(): void {
    this.matchesService.getMatches()
      .subscribe((matches) => {
        this.matches = matches;
      });

    const showListButton = document.querySelector('.show-list-button') as HTMLElement;
    const listContainer = document.querySelector('.list-container') as HTMLElement;

    showListButton.addEventListener('click', () => {
      listContainer.style.display = 'block';
      showListButton.style.display = 'none';
    });

    listContainer.addEventListener('click', (event) => {
      if (event.target === listContainer) {
        listContainer.style.display = 'none';
        showListButton.style.display = 'block';
      }
    });
  }
}
