import { Component, Input } from '@angular/core';
import { SwiperComponent } from 'swiper/angular';

// import Swiper core and required modules
import SwiperCore, { EffectCards } from 'swiper';
SwiperCore.use([EffectCards]);

// install Swiper modules
@Component({
  selector: 'movie-detail-container',
  templateUrl: './movie-detail-container.component.html',
  styleUrls: ['./movie-detail-container.component.scss'],
})

// install Swiper modules
export class MovieDetailContainerComponent {
  @Input() name?: string;
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
