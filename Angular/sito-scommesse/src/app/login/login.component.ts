
import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  username: string | undefined;
  password: string | undefined;
  showModal: boolean = false;

  constructor() {}

  open() {
    this.showModal = true;
  }

  close() {
    this.showModal = false;
  }

  login() {
    // gestione del login
  }
}
