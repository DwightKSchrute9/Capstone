import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MatSidenav } from '@angular/material/sidenav';
import { UserService } from '../user.service';

@Component({
  selector: 'app-utente',
  templateUrl: './utente.component.html',
  styleUrls: ['./utente.component.scss']
})

export class UtenteComponent {
  user = { email: '', creditCard: '', password: '' };

   // Dichiarazione della proprietà isFavorite
   isFavorite: boolean = false;

  menuItems = [
    { text: 'Home', link: '/home' },
    { text: 'Bet', link: '/bet' },
    { text: 'Matches', link: '/matches' },
  ];

  @ViewChild('sidenav')
  sidenav!: MatSidenav;

  constructor(private router: Router, private userService: UserService) {}

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







