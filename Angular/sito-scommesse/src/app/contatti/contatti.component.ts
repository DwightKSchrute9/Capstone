import { Component } from '@angular/core';

@Component({
  selector: 'app-contatti',
  templateUrl: './contatti.component.html',
  styleUrls: ['./contatti.component.scss']
})
export class ContattiComponent {
  showContacts: boolean = false;

  toggleContacts() {
    this.showContacts = !this.showContacts;
  }
}
