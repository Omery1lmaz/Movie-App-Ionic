import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../../service/api/api.service';
import { IMovie } from '../../interfaces/interfaces';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'edit-movie',
  templateUrl: './edit-movie.component.html',
  styleUrls: ['./edit-movie.component.scss'],
})
export class EditMovieComponent implements OnInit {
  test!: any;
  movie!: IMovie;
  categories: any;
  selected: any;
  id!: string;
  test2: any = ['Action', 'Comedy'];
  constructor(
    private _fb: FormBuilder,
    private service: ApiService,
    private _route: ActivatedRoute
  ) {}

  async ngOnInit() {
    this.id = this._route.snapshot.paramMap.get('id') as string;

    this.categories = await this.service.getCategories().catch((err) => {
      this.categories = ['Kategori Yok'];
    });

    this.movie = await this.service.getMovie(this.id).catch((err: any) => {
      this.movie = err;
    });

    this.test = this._fb.group({
      title: [this.movie.title, [Validators.required, Validators.minLength(3)]],
      duration: [this.movie.duration, [Validators.required]],
      imdb: [this.movie.imdb, [Validators.required, Validators.max(10)]],
      categories: [this.movie.categories, [Validators.required]],
      release_date: [this.movie.release_date, [Validators.required]],
    });
    console.log(this.test.value.release_date, 'test');
  }

  submitForm() {
    const movie = {
      title: this.test.value.title,
      duration: this.test.value.duration,
      imdb: this.test.value.imdb,
      categories: this.test.value.categories,
      release_date: new Date(this.test.value.release_date),
    };
    this.service
      .addMovie(movie)
      .then((res) => {
        console.log(res, 'başarılı');
      })
      .catch((err) => {
        console.log('başarısız', err);
      });
  }
}
