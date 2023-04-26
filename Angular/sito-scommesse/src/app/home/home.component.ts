/*import { Component } from '@angular/core';
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
}*/

import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  showErrorMessage = false;
  isLoginOpen = false;
  isRegisterOpen = false;
  isUserLoggedIn = false;
  isDarkMode = false;
  curveValue = 0;
  defaultCurveValue = 350;
  curveRate = 3;
  ticking = false;

  constructor(private authService: AuthenticationService) {}


  ngOnInit(): void {
    this.checkIfLoggedIn();
  }

  checkIfLoggedIn(): void {
    if (!this.authService.isLoggedIn()) {
      this.showErrorMessage = true;
    }
  }


  onLoginButtonClick(): void {
    this.isLoginOpen = true;
    this.isRegisterOpen = false;
  }

  onCloseLogin(): void {
    this.isLoginOpen = false;
  }

  onRegisterButtonClick(): void {
    this.isRegisterOpen = true;
    this.isLoginOpen = false;
  }

  onCloseRegister(): void {
    this.isRegisterOpen = false;
  }

  toggleDarkMode(): void {
    this.isDarkMode = !this.isDarkMode;
  }

  onLogout(): void {
    this.isUserLoggedIn = false;
    // eventualmente chiamare un metodo di logout nella componente Utente che
    // fa ritornare alla home page e nasconde la toolbar dell'utente
  }
}








