import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {

  @Output() close = new EventEmitter<void>();

  toggleSublist(event: MouseEvent): void {
    event.preventDefault();
    const sublist = (event.currentTarget as HTMLElement).nextElementSibling;
    if (sublist) {
      sublist.classList.toggle('show');
    }
  }


  closeList(): void {
    this.close.emit();
  }

}
