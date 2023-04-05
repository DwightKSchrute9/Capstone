import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';


@Component({
  selector: 'app-animazione',
  templateUrl: './animazione.component.html',
  styleUrls: ['./animazione.component.css']
})
export class AnimazioneComponent implements OnInit {

  displayLogo = true;

  constructor(private router: Router) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.displayLogo = false;
      this.router.navigate(['/home']);
    }, 3000);

  }

}
