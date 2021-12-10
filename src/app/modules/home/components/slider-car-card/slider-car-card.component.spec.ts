import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderCarCardComponent } from './slider-car-card.component';

describe('SliderCarCardComponent', () => {
  let component: SliderCarCardComponent;
  let fixture: ComponentFixture<SliderCarCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SliderCarCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SliderCarCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
