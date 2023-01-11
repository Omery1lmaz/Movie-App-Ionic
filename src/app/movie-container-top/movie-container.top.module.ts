import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MovieContainerTopComponent } from './movie-container.top.component';
import { SwiperModule } from "swiper/angular";

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, SwiperModule],
  declarations: [MovieContainerTopComponent],
  exports: [MovieContainerTopComponent],
})
export class MovieContainerTopComponentModule {}
