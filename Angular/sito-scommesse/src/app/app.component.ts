

import { Component, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-root',


  template: `
  <nav>
    <a routerLink="/utente">Utente</a>
  </nav>
  <router-outlet></router-outlet>
`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isDarkMode: boolean = false;

  constructor(private renderer: Renderer2) {}

  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;
    if (this.isDarkMode) {
      this.renderer.addClass(document.body, 'dark-mode');
    } else {
      this.renderer.removeClass(document.body, 'dark-mode');
    }
  }
}
