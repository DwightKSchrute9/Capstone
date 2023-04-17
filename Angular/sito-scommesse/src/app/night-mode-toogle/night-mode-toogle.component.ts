

import { Component } from '@angular/core';

@Component({
  selector: 'app-night-mode-toggle',
  templateUrl: './night-mode-toggle.component.html',
  styleUrls: ['./night-mode-toggle.component.scss']
})
export class NightModeToggleComponent {
  isDarkMode = false;

  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;
    document.body.classList.toggle('dark-mode', this.isDarkMode);
  }
}
