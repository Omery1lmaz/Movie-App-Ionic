import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddMovieComponent } from './add-movie.component';
import { AddMovieRoutingModule } from './add-movie-routing.module';

@NgModule({
  declarations: [AddMovieComponent],
  exports: [AddMovieComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AddMovieRoutingModule,
    IonicModule,
    FormsModule,
  ],
})
export class AddMovieContainerComponentModule {}
