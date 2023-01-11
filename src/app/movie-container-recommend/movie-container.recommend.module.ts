import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MovieContainerRecommendComponent } from './movie-container.recommend.component';
import { SwiperModule } from 'swiper/angular';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, SwiperModule],
  declarations: [MovieContainerRecommendComponent],
  exports: [MovieContainerRecommendComponent],
})
export class MovieContainerRecommendComponentModule {}
