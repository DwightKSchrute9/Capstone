import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MatSidenav } from '@angular/material/sidenav';
import { UserService } from '../user.service';
import { AuthenticationService } from '../auth.service'; // importa il tuo servizio di autenticazione
import { Utente } from './utente.model';

@Component({
  selector: 'app-utente',
  templateUrl: './utente.component.html',
  styleUrls: ['./utente.component.scss']
})

export class UtenteComponent {
  //user = { name: '', surname: '', email: '', creditCard: '', password: '' };
  user: Utente = {} as Utente;


  // Dichiarazione della proprietà isFavorite
  isFavorite: boolean = false;

  menuItems = [
    { text: 'Home', link: '/home' },
    { text: 'Bet', link: '/bet' },
    { text: 'Matches', link: '/matches' },
  ];

  @ViewChild('sidenav')
  sidenav!: MatSidenav;

  constructor(private authService: AuthenticationService, private router: Router, public userService: UserService) {}


  ngOnInit(): void {
    this.getUserData();
  }

  getUserData(): void {
    this.authService.getUserData().subscribe(
      (userData) => {
        this.user = userData;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  onFavoriteClick() {
    this.isFavorite = !this.isFavorite;
  }

  onShareClick() {
    // ...
  }

  editUserInfo() {
    // ...
  }

  onLogoutClick(): void {
    this.authService.logout(); // esegue il logout dell'utente utilizzando il servizio di autenticazione
    this.router.navigate(['/home']); // reindirizza l'utente alla pagina home
  }

  toggleSidenav() {
    this.sidenav.toggle();
  }
}







