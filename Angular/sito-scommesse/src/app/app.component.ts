import { Component } from '@angular/core';



@Component({
  selector: 'app-root',
  template: `
    <nav>
      <a routerLink="/user">Utente</a>
    </nav>
    <router-outlet></router-outlet>
  `,
  styles: [`
    nav {
      background-color: #333;
      color: white;
      padding: 10px;
    }
    a {
      color: white;
      margin-right: 10px;
      text-decoration: none;
    }
    a:hover {
      text-decoration: underline;
    }
  `]
})


export class AppComponent {
  title = 'sito-scommesse';
}
