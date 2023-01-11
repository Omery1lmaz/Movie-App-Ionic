import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { EditMovieComponent } from './edit-movie.component';
import { EditMovieRoutingModule } from './edit-movie-routing.module';

@NgModule({
  declarations: [EditMovieComponent],
  exports: [EditMovieComponent],
  imports: [
    CommonModule,
    EditMovieRoutingModule,
    IonicModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class EditMovieContainerComponentModule {}
