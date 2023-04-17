import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NightModeToggleComponent } from './night-mode-toogle.component';

describe('NighModeToogleComponent', () => {
  let component: NightModeToggleComponent;
  let fixture: ComponentFixture<NightModeToggleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NightModeToggleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NightModeToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
