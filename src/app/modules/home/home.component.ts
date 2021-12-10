import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// import { isEmpty } from 'lodash-es';
// import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  carsList: any;
  selectedCar: any;


  weekStats = [
    {
      title: 'This week',
      value: 1
    },
    {
      title: 'Last week',
      value: 2
    },
    {
      title: 'Two week ago',
      value: 3
    },
  ];
  countries = [
    {
      title: 'United States',
      value: 1
    },
    {
      title: 'Canada',
      value: 2
    },
    {
      title: 'Russia Federation',
      value: 3
    },
  ];
  provinces = [
    {
      title: 'San Francisco',
      value: 1
    },
    {
      title: 'Nevada',
      value: 2
    },
    {
      title: 'New York',
      value: 3
    },
  ];
  cities = [
    {
      title: 'Hispanic',
      value: 1
    },
    {
      title: 'Moscow',
      value: 2
    },
    {
      title: 'New York',
      value: 3
    },
  ];

  constructor(
    private route: ActivatedRoute,
    // private api: ApiService,
  ) {}

  ngOnInit() {
    this.carsList = [
      {
        id: 1,
        title: "BMW 3 Series Gran Limousine",
        logo: "assets/images/bmw-logo.png",
        imgUrl: "assets/images/0.png",
        brandName: "BMW",
        fuel: "Petrol",
        seachVolumn: "7.5k",
        visitedCount: "17.2k",
        soldCount: "1k",
        progress: 100
      },
      {
        id: 2,
        title: "BMW 3 Series Gran Limousine",
        logo: "assets/images/honda.png",
        imgUrl: "assets/images/2.png",
        brandName: "Honda",
        fuel: "Petrol",
        seachVolumn: "7.5k",
        visitedCount: "17.2k",
        soldCount: "1k",
        progress: 80
      },
      {
        id: 3,
        title: "BMW 3 Series Gran Limousine",
        logo: "assets/images/honda.png",
        imgUrl: "assets/images/3.png",
        brandName: "Toyota",
        fuel: "Petrol",
        seachVolumn: "7.5k",
        visitedCount: "17.2k",
        soldCount: "1k",
        progress: 30
      },
      {
        id: 4,
        title: "BMW 3 Series Gran Limousine",
        logo: "assets/images/honda.png",
        imgUrl: "assets/images/4.png",
        brandName: "Chevrolet",
        fuel: "Petrol",
        seachVolumn: "7.5k",
        visitedCount: "17.2k",
        soldCount: "1k",
        progress: 40
      },
      {
        id: 5,
        title: "BMW 3 Series Gran Limousine",
        logo: "assets/images/honda.png",
        imgUrl: "assets/images/5.png",
        brandName: "Volkswagen",
        fuel: "Petrol",
        seachVolumn: "7.5k",
        visitedCount: "17.2k",
        soldCount: "1k",
        progress: 60
      },
      {
        id: 6,
        title: "BMW 3 Series Gran Limousine",
        logo: "assets/images/honda.png",
        imgUrl: "assets/images/6.png",
        brandName: "Skoda",
        fuel: "Petrol",
        seachVolumn: "7.5k",
        visitedCount: "17.2k",
        soldCount: "1k",
        progress: 20
      },
      {
        id: 7,
        title: "BMW 3 Series Gran Limousine",
        logo: "assets/images/honda.png",
        imgUrl: "assets/images/7.png",
        brandName: "Nissan",
        fuel: "Petrol",
        seachVolumn: "7.5k",
        visitedCount: "17.2k",
        soldCount: "1k",
        progress: 50
      },
    ];

    this.selectedCar = this.carsList[0];
  }
}
