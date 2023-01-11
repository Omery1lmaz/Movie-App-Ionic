import { ICategory } from './../../interfaces/interfaces';
import { Injectable } from '@angular/core';
import * as Bucket from '@spica-devkit/bucket';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor() {
    Bucket.initialize({
      apikey: environment.API_KEY,
      publicUrl: environment.PUBLIC_URL,
    });
  }
  // MOVIE CRUD
  getMovies() {
    Bucket.data
      .getAll(environment.MOVIE_BUKCET_ID)
      .then((movies: any) => {
        console.log(movies, 'movies');
        return movies;
      })
      .catch((err) => {
        return err;
      });
  }

  getMovie(id: string): any {
    const Option = {
      queryParams: {
        relation: true,
      },
    };
    return Bucket.data.get(environment.MOVIE_BUKCET_ID, id, Option);
  }
  putMovie(id: string, movie: any) {
    Bucket.data
      .update(environment.MOVIE_BUKCET_ID, id, {
        movie,
      })
      .then((movie: any) => {
        console.log(movie, 'category path ');
        return movie;
      })
      .catch((err) => {
        return err;
      });
  }
  addMovie(movie: any) {
    return Bucket.data.insert(environment.MOVIE_BUKCET_ID, movie);
  }
  removeMovie(id: string) {
    Bucket.data
      .remove(environment.MOVIE_BUKCET_ID, id)
      .then((movie: any) => {
        console.log(movie, 'category remove');
        return movie;
      })
      .catch((err) => {
        return err;
      });
  }

  // Categories CRUD
  getCategories(): Promise<any> {
    return Bucket.data.getAll(environment.MOVIE_CATEGORIES_BUCKET_ID);
  }
  getCategory(id: string) {
    Bucket.data
      .get(environment.MOVIE_CATEGORIES_BUCKET_ID, id)
      .then((category: any) => {
        console.log(category, 'get category');
        return category;
      })
      .catch((err) => {
        return err;
      });
  }
  putCategory(id: string, category: any) {
    Bucket.data
      .update(environment.MOVIE_CATEGORIES_BUCKET_ID, id, {
        category,
      })
      .then((category: any) => {
        console.log(category, 'category path ');
        return category;
      })
      .catch((err) => {
        return err;
      });
  }
  addCategory(category: any) {
    Bucket.data
      .insert(environment.MOVIE_CATEGORIES_BUCKET_ID, category)
      .then((category: any) => {
        console.log(category, 'category add');
        return category;
      })
      .catch((err) => {
        return err;
      });
  }
  removeCategory(id: string) {
    Bucket.data
      .remove(environment.MOVIE_CATEGORIES_BUCKET_ID, id)
      .then((category: any) => {
        console.log(category, 'category remove');
        return category;
      })
      .catch((err) => {
        return err;
      });
  }
}
