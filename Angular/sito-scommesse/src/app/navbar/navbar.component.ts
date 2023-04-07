import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  isLoginOpen = false;

  onLoginButtonClick() {
    this.isLoginOpen = true;
  }

  onCloseLogin() {
    this.isLoginOpen = false;
  }

  isDarkMode: boolean = false;

  toggleDarkMode(): void {
    this.isDarkMode = !this.isDarkMode;
  }
}
