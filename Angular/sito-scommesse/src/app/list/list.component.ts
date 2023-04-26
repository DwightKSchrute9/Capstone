import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { BetService } from '../bet.service';
import { BetElement } from '../bet/bet-element.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  bets: BetElement[] = [];

  constructor(private betService: BetService) { }

  ngOnInit(): void {
    this.betService.getBetsFromDatabase()
      .subscribe((bets: BetElement[]) => {
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

  closeList(): void {
    this.close.emit();
  }

}
