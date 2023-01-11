import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MovieContainerComponent } from './movie-container.component';
import { SwiperModule } from "swiper/angular";

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, SwiperModule],
  declarations: [MovieContainerComponent],
  exports: [MovieContainerComponent],
})
export class MovieContainerComponentModule {}
