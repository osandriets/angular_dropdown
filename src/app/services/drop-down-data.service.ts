import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Movie} from './model';
import {HttpClient, HttpParams} from '@angular/common/http';
import {environment} from '../../environments/environment';
import 'rxjs/add/operator/map';


@Injectable()
export class DropDownDataService {

  constructor(private httpClient: HttpClient) {
  }

  getPopularMovies(): Observable<Movie[]> {
    return this.httpClient.get<Movie[]>(`${environment.movieUrl}?api_key=${environment.apiKey}`)
      .map(
        (x: any) => {
          if (x.results) {
            return x.results as Movie[];
          } else {
            return [];
          }
        });
  }
}
