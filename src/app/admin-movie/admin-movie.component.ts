import { Component, OnInit } from '@angular/core';
import { SwiperComponent } from 'swiper/angular';

// import Swiper core and required modules
import SwiperCore, { EffectCards } from 'swiper';
SwiperCore.use([EffectCards]);

@Component({
  selector: 'admin-movie',
  templateUrl: './admin-movie.component.html',
  styleUrls: ['./admin-movie.component.scss'],
})
export class AdminMovieComponent {
  constructor() {}
  movies: Array<Number> = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  slideOpts = {
    slidesPerView: 3,
    spaceBetween: 30,
    centeredSlides: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  };
}
