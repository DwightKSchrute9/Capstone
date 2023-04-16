
import { Component, Input } from '@angular/core';
import { Match } from '../matches/matches.model';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.scss']
})
export class AsideComponent {
  @Input()
  betCount!: number;
  @Input()
  selectedBet!: string;
  @Input()
  isBetSelected!: boolean;

  constructor(public cartService: CartService) {

  }
}
