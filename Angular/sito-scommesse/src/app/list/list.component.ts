import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { BetService } from '../bet.service';
import { BetElement } from '../bet/bet-element.model';
import { Bet } from '../bet/bet.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  isOpen: boolean = false;

  bets: Bet[] = [];

  constructor(private betService: BetService) { }

  ngOnInit(): void {
    this.betService.getBetsFromDatabase()
      .subscribe((bets: Bet[]) => {
        this.bets = bets;
      });
  }

  @Output() close = new EventEmitter<void>();

  toggleSublist(event: MouseEvent): void {
    event.preventDefault();
    const sublist = (event.currentTarget as HTMLElement).nextElementSibling;
    if (sublist) {
      sublist.classList.toggle('show');
    }
  }
  toggleList(): void {
    this.isOpen = !this.isOpen;
  }

  closeList(): void {
    this.close.emit();
  }

}
