import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-slider-car-card',
  templateUrl: './slider-car-card.component.html',
  styleUrls: ['./slider-car-card.component.scss']
})
export class SliderCarCardComponent implements OnInit {
  @Input()
  carInfo: any;

  constructor() { }

  ngOnInit(): void {
  }

}
