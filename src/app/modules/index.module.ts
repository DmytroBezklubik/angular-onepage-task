import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CoreModule } from '../core/core.module';
import { SharedModule } from '../shared/shared.module';
import { SlickCarouselModule } from 'ngx-slick-carousel';

import { IndexRoutingModule } from './index-routing.module';
import { SliderCarCardComponent } from './home/components/slider-car-card/slider-car-card.component';
import { HeroSliderComponent } from './home/components/hero-slider/hero-slider.component';
import { HomeComponent } from './home/home.component';
import { IndexComponent } from './index.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CarDetailCardComponent } from './home/components/car-detail-card/car-detail-card.component';

@NgModule({
  declarations: [
    HeroSliderComponent,
    HomeComponent,
    IndexComponent,
    SliderCarCardComponent,
    NotFoundComponent,
    CarDetailCardComponent
  ],
  imports: [
    HttpClientModule,
    HttpClientJsonpModule,
    CommonModule,
    IndexRoutingModule,
    SharedModule,
    CoreModule,
    SlickCarouselModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: []
})
export class IndexModule { }
