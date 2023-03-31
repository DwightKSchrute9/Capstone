import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimazioneComponent } from './animazione.component';

describe('AnimazioneComponent', () => {
  let component: AnimazioneComponent;
  let fixture: ComponentFixture<AnimazioneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimazioneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnimazioneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
