import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent {
  @ViewChild('cardContainer', { static: true })
  cardContainer!: ElementRef;

  scrollLeft(): void {
    this.cardContainer.nativeElement.scrollLeft -= 200; // sposta la scrollbar a sinistra di 200px
  }

  scrollRight(): void {
    this.cardContainer.nativeElement.scrollLeft += 200; // sposta la scrollbar a destra di 200px
  }

  onResize(event: { target: { innerWidth: any; }; }): void {
    const screenWidth = event.target.innerWidth;
    const cardContainer = this.cardContainer.nativeElement;
    const cardWidth = cardContainer.children[0].offsetWidth;
    const cardsPerScreen = Math.floor(screenWidth / cardWidth);
    const newWidth = cardsPerScreen * cardWidth;
    cardContainer.style.width = newWidth + 'px';
  }
}
