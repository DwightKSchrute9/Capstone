import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {

  @ViewChild('myCanvas', { static: true })
  canvasRef!: ElementRef;
  private ctx!: CanvasRenderingContext2D;

  constructor() { }

  ngOnInit(): void {
    this.ctx = this.canvasRef.nativeElement.getContext('2d');
    // qui puoi inserire il codice per creare il tuo banner con Canvas
  }

}

