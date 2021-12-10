import { Component, OnInit, Input, HostListener } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input()
  logo: string = 'http://placehold.it/350x150/000000';

  constructor(
    private route: ActivatedRoute,
  ) {}

  ngOnInit() {}
}
