import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { MyModel } from './my-model';

@Injectable({
  providedIn: 'root',
})
export class MyServiceService {
  url =
    'https://api.themoviedb.org/3/movie/now_playing?api_key=73b2fc9fab947354d61cb3faa1a40405';

  constructor(private http: HttpClient) {}

  getMovies(): Observable<MyModel[]> {
    return this.http.get(this.url).pipe(
      map((data: any) => {
        const dt = data.results;
        return dt.map((res: any) => ({
          id: res.id,
          title: res.title,
          original_language: res.original_language,
          overview: res.overview
        }));
      })
    );
  }
}
