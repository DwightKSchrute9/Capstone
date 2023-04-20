
import { Component, Input } from '@angular/core';
import { CartService } from '../cart.service';
import { AuthenticationService } from '../auth.service';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.scss']
})
export class AsideComponent {
  @Input() isBetSelected: boolean = false;
  selectedBet: any;
  showErrorMessage: boolean = false;

  constructor(public cartService: CartService, public authService: AuthenticationService) {}

  updateSelectedBet(bet: any) {
    this.selectedBet = bet;
    this.isBetSelected = true;
  }

  placeBet() {
    if (this.authService.isLoggedIn()) {
      if (this.cartService.betAmount <= 0) {
        alert("Inserire un importo valido per la scommessa.");
      } else {
        this.cartService.placeBet();
      }
    } else {
      this.showErrorMessage = true;
    }
  }


  moltiplicatore() {
    let result = 1;
    for (const bet of this.cartService.bets) {
      result *= bet.odd;
    }
    return result.toFixed(2);
  }

  isLoggedIn() {
    return this.authService.isLoggedIn();
  }
}
