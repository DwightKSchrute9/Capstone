import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username!: string; // aggiunta della proprietà username
  user = { username: '', password: '' }; // Inizializza qui l'oggetto user
  loginForm: FormGroup;
  hidePassword = true; // indica se la password deve essere nascosta
  errorMessage: string | null = null; // Aggiunta della proprietà errorMessage

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      console.log('Form submitted');
      console.log(this.loginForm.value); // inviare i dati del form al server
    } else {
      this.errorMessage = 'Username e password obbligatori'; // Imposta il messaggio di errore
    }
  }
}
