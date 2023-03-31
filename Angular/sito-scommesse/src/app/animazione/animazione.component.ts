import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-animazione',
  templateUrl: './animazione.component.html',
  styleUrls: ['./animazione.component.css']
})
export class AnimazioneComponent implements OnInit {

  displayLogo = true;

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.displayLogo = false;
    }, 3000);

  }

}
