import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-progress-card',
  templateUrl: './progress-card.component.html',
  styleUrls: ['./progress-card.component.scss']
})
export class ProgressCardComponent implements OnInit {
  @Input()
  title: any;
  @Input()
  description: any;
  @Input()
  progress: any;
  @Input()
  imgUrl: any;

  constructor() { }

  ngOnInit(): void {
  }

}
