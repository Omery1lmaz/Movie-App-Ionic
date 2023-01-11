import { ICategory } from './../../interfaces/interfaces';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../../service/api/api.service';
import { IMovie } from '../../interfaces/interfaces';
@Component({
  selector: 'add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.scss'],
})
export class AddMovieComponent implements OnInit {
  test!: any;
  categories: any;
  service: ApiService;
  constructor(private _fb: FormBuilder, service: ApiService) {
    this.service = service;
    console.log(this.categories, 'categories');
  }

  ngOnInit() {
    this.service.getCategories().then((res: any) => {
      this.categories = res;
    });

    this.test = this._fb.group({
      title: ['', [Validators.required, Validators.minLength(3)]],
      duration: ['', [Validators.required]],
      imdb: ['', [Validators.required, Validators.max(10)]],
      categories: [this.categories, [Validators.required]],
      release_date: ['', [Validators.required]],
    });
  }

  compareWith(o1: any, o2: any) {
    // console.log(this.test.value);
  }
  submitForm() {
    console.log(typeof this.test.value.release_date);
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
  handleChange(ev: any) {
    // this.currentFood = ev.target;
  }
}
