import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MovieDetailContainerComponent } from './movie-detail-container.component';
import { SwiperModule } from 'swiper/angular';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, SwiperModule],
  declarations: [MovieDetailContainerComponent],
  exports: [MovieDetailContainerComponent],
})
export class MovieDetailContainerComponentModule {}
