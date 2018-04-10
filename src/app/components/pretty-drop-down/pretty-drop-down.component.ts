import { Component, OnInit } from '@angular/core';
import {DropDownDataService} from '../../services/drop-down-data.service';
import {Movie} from '../../services/model';
import {Observable} from 'rxjs/Observable';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-pretty-drop-down',
  templateUrl: './pretty-drop-down.component.html',
  styleUrls: ['./pretty-drop-down.component.css']
})
export class PrettyDropDownComponent implements OnInit {

  moviesList: Observable<Movie[]>;
  myControl: FormControl = new FormControl();

  constructor(public moviesService: DropDownDataService) {
    this.moviesList = this.moviesService.getPopularMovies();
  }

  ngOnInit() {
    this.myControl.setValue('Movie:');
  }

  onClearClick() {
    this.myControl.setValue('Movie:');
  }
}
