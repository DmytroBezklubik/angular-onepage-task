import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-car-detail-card',
  templateUrl: './car-detail-card.component.html',
  styleUrls: ['./car-detail-card.component.scss']
})
export class CarDetailCardComponent implements OnInit {
  @Input()
  selectedCar: any;
  marketStatus = [
    {
      title: 'Today',
      value: 1
    },
    {
      title: 'Yesterday',
      value: 2
    },
    {
      title: 'Two days ago',
      value: 3
    },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
