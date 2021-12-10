import { Component, OnInit, Input } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'hero-slider',
  templateUrl: './hero-slider.component.html',
  styleUrls: ['./hero-slider.component.scss']
})
export class HeroSliderComponent implements OnInit {
  @Input()
  carsList: any;

  disabled: boolean = false;
  clicked: boolean = false;

  constructor(private router: Router) { }

  slideConfig = {
    arrows: true,
    variableWidth: false,
    adaptiveHeight: true,
    infinite: false,
    swipeToSlide: true,
    edgeFriction: 0,
    slidesToShow: 4,
    prevArrow: '<span class="slick-prev">←</span>',
    nextArrow: '<span class="slick-next">→</span>',
    responsive:[
      // {
      //   breakpoint: 2051,
      //   settings: {
      //     slidesToShow: 8,
      //   }
      // },
      // {
      //   breakpoint: 1901,
      //   settings: {
      //     slidesToShow: 8,
      //   }
      // },
      // {
      //   breakpoint: 1751,
      //   settings: {
      //     slidesToShow: 7
      //   }
      // },
      // {
      //   breakpoint: 1601,
      //   settings: {
      //     slidesToShow: 6
      //   }
      // },
      // {
      //   breakpoint: 1451,
      //   settings: {
      //     slidesToShow: 5
      //   }
      // },
      // {
      //   breakpoint: 1301,
      //   settings: {
      //     slidesToShow: 4
      //   }
      // },
      // {
      //   breakpoint: 1150,
      //   settings: {
      //     slidesToShow: 3
      //   }
      // },
      {
        breakpoint: 1041,
        settings: {
          slidesToShow: 4
        }
      },
      // {
      //   breakpoint: 751,
      //   settings: {
      //     slidesToShow: 4
      //   }
      // },
      // {
      //   breakpoint: 601,
      //   settings: {
      //     slidesToShow: 2
      //   }
      // },
      {
        breakpoint: 536,
        settings: {
          // arrows: false,
          slidesToShow: 2
        }
      }
    ]
  };

  ngOnInit() {}
  
  slickInit() {
  }
  
  breakpoint() {
  }
  
  afterChange() {
    this.clicked = false;
    this.disabled = false;
  }
  
  beforeChange() {
    this.clicked = false;
    this.disabled = false;
  }

  isDisabled() {
    return this.disabled;
  }

  onMouseDown(event: any) {
    this.clicked = true;
  }

  onMouseUp(event: any) {
    this.clicked = false;
    this.disabled = false;
  }

  onMouseMove(event: any) {
    if (!this.clicked) {
      this.disabled = false;
    }

    if (this.clicked && !this.disabled) {
      this.disabled = true;
    }
  }
}
