
import { Router } from '@angular/router';
import { MatSidenav } from '@angular/material/sidenav';
import { Component, ViewChild, ElementRef } from '@angular/core';



@Component({
  selector: 'app-utente',
  templateUrl: './utente.component.html',
  styleUrls: ['./utente.component.css']
})

export class UtenteComponent {
  user = { email: 'example@example.com', creditCard: '1234 5678 9012 3456', password: '********' };

   // Dichiarazione della proprietà isFavorite
   isFavorite: boolean = false;

  menuItems = [
    { text: 'Home', link: '/home' },
    { text: 'Bet', link: '/bet' },
    { text: 'Matches', link: '/matches' },
  ];

  @ViewChild('sidenav')
  sidenav!: MatSidenav;

  constructor(private router: Router) {}

  onFavoriteClick() {
    this.isFavorite = !this.isFavorite;
  }

  onShareClick() {
    // ...
  }

  editUserInfo() {
    // ...
  }

  onLogoutClick() {
    // ...
  }
  toggleSidenav() {
    this.sidenav.toggle();
}
}








