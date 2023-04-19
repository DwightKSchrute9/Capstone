
import { Component, Input } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.scss']
})
export class AsideComponent {
  @Input() isBetSelected: boolean = false;
  selectedBet: any;

  constructor(public cartService: CartService) {}

  updateSelectedBet(bet: any) {
    this.selectedBet = bet;
    this.isBetSelected = true;
  }

  placeBet() {
    // Implement the code for placing a bet here
    this.cartService.placeBet();
    
  }

  moltiplicatore() {
    let result = 1;
    for (const bet of this.cartService.bets) {
      result *= bet.odd;
    }
    return result.toFixed(2);
  }
}
