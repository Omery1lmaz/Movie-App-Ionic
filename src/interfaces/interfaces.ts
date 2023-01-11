export interface IMovie {
  title: string;
  duration: number;
  imdb: number;
  release_date?: Date;
  categories: Array<ICategory>;
}

export interface ICategory {
  title: string;
}
