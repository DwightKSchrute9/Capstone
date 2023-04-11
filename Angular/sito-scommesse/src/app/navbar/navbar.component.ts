import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  isLoginOpen = false;
  isRegisterOpen = false;


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
}
