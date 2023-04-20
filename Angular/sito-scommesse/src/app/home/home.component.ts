import { Component } from '@angular/core';
import { MatchesComponent } from '../matches/matches.component';
import { BetComponent } from '../bet/bet.component'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  isLoginOpen = false;
  isRegisterOpen = false;
  isUserLoggedIn = false; // aggiunta la variabile isUserLoggedIn


  onLoginButtonClick() {
    this.isLoginOpen = true;
    this.isRegisterOpen = false;
  }

  onCloseLogin() {
    this.isLoginOpen = false;
  }

  onRegisterButtonClick(): void {
    this.isRegisterOpen = true;
    this.isLoginOpen = false;
  }

  onCloseRegister(): void {
    this.isRegisterOpen = false;
  }

  isDarkMode: boolean = false;

  toggleDarkMode(): void {
    this.isDarkMode = !this.isDarkMode;
  }
  onLogout(): void {
    this.isUserLoggedIn = false;
    // eventualmente chiamare un metodo di logout nella componente Utente che
    // fa ritornare alla home page e nasconde la toolbar dell'utente
  }
}






