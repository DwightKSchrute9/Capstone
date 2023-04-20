
import { Component, Input } from '@angular/core';
import { CartService } from '../cart.service';
import { AuthenticationService } from '../auth.service';
import { HttpClient } from '@angular/common/http';
import { CustomHttpClient } from '../customHttpClient.service';




@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.scss']
})
export class AsideComponent {
  @Input() isBetSelected: boolean = false;
  selectedBet: any;
  showErrorMessage: boolean = false;

  constructor(public cartService: CartService, public authService: AuthenticationService, private http: CustomHttpClient) {}

  updateSelectedBet(bet: any) {
    this.selectedBet = bet;
    this.isBetSelected = true;
  }

  placeBet() {
    if (this.isLoggedIn() && !this.showErrorMessage) {
      const betElements = this.cartService.bets;
      const betAmount = this.cartService.betAmount;
      const data = { betElements, betAmount };
      this.http.post('http://localhost:8080/api/bets/', data).subscribe((response) => {
        console.log('Scommessa effettuata con successo');
        // qui puoi aggiornare la UI del componente per mostrare un messaggio di conferma o aggiornare i dati della schedina
      }, (error) => {
        console.log('Errore durante l\'invio della scommessa', error);
        // qui puoi aggiornare la UI del componente per mostrare un messaggio di errore
      });
    }
  }


  moltiplicatore(): number {
    let result = 1;
    for (const bet of this.cartService.bets) {
      result *= bet.odd;
    }
    return result;
    /*
    const montepremi = parseFloat(this.cartService.betAmount) * parseFloat(result.toFixed(2));
    return parseFloat(montepremi.toFixed(2));
    */
  }




  isLoggedIn() {
    return this.authService.isLoggedIn();
  }
}
