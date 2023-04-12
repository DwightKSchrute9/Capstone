import { Component } from '@angular/core';
import { AuthenticationService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  email!: string;
  password!: string;

  constructor(private authService: AuthenticationService) { }

  onSubmit(): void {
    this.authService.login(this.email, this.password)
      .subscribe(() => {
        
        // redirect to dashboard or home page
      });
  }
}
/////////////
onSubmit() {
  // inserisci qui il codice per effettuare il login
  // ...

  if (loginSuccesso) {
    // naviga all'URL "/utente"
    this.router.navigate(['/utente']);
  } else {
    // visualizza un messaggio di errore
    this.mostraMessaggioErrore();
  }
}
