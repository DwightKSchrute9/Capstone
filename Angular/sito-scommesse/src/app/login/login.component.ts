import { Component } from '@angular/core';
import { AuthenticationService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  email!: string;
  password!: string;
  errorMessage: string = '';
  router: any;

  constructor(private authService: AuthenticationService) { }

  onSubmit(): void {
    this.authService.login(this.email, this.password)
      .subscribe(
        (login) => {
          if (login) {
            console.log(login);
            // naviga all'URL "/utente"
            this.router.navigate(['/utente']);
          } else {
            // visualizza un messaggio di errore
            this.errorMessage = 'Credenziali non valide.';
          }
        },
        (error) => {
          // gestisci l'errore
          this.errorMessage = 'Si è verificato un errore durante il login.';
          console.error(error);
        }
      );
  }
}






