import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminMovieComponent } from './admin-movie.component';
import { AdminMovieRoutingModule } from './admin-movie-routing.module';

@NgModule({
  declarations: [AdminMovieComponent],
  exports: [AdminMovieComponent],
  imports: [CommonModule, AdminMovieRoutingModule, IonicModule, FormsModule],
})
export class AdminMovieContainerComponentModule {}
