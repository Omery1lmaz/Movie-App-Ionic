import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { MovieContainerComponentModule } from '../movie-container/movie-container.module';
import { MovieContainerRecommendComponentModule } from '../movie-container-recommend/movie-container.recommend.module';
import { MovieContainerTopComponentModule } from '../movie-container-top/movie-container.top.module';
import { Tab1PageRoutingModule } from './tab1-routing.module';
import { FavoriContainerComponentModule } from '../favori-container/favori-container.module';
import { Tab2PageModule } from '../tab2/tab2.module';
import { MovieDetailContainerComponentModule } from '../movie-detail/movie-detail-container.module';
import { AddMovieContainerComponentModule } from '../add-movie/add-movie.module';
import { AdminMovieContainerComponentModule } from '../admin-movie/admin-movie.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    Tab1PageRoutingModule,
    MovieContainerComponentModule,
    MovieContainerRecommendComponentModule,
    MovieContainerTopComponentModule,
    MovieDetailContainerComponentModule,
    FavoriContainerComponentModule,
    Tab2PageModule,
    AddMovieContainerComponentModule,
    AdminMovieContainerComponentModule,
  ],
  declarations: [Tab1Page],
})
export class Tab1PageModule {}
