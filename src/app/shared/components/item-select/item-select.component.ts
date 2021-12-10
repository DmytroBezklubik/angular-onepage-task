import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-item-select',
  templateUrl: './item-select.component.html',
  styleUrls: ['./item-select.component.scss']
})
export class ItemSelectComponent implements OnInit {
  @Input()
  label: any;
  @Input()
  data: any;
  @Input()
  itemValue: any;

  constructor() { }

  ngOnInit(): void {
  }

}
