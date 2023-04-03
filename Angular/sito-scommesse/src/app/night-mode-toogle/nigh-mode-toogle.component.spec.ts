import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NighModeToogleComponent } from './nigh-mode-toogle.component';

describe('NighModeToogleComponent', () => {
  let component: NighModeToogleComponent;
  let fixture: ComponentFixture<NighModeToogleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NighModeToogleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NighModeToogleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
