import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MyServiceService } from './my-service.service';
import { MyModel } from './my-model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{

  movies : MyModel[] = [];

  constructor(private service: MyServiceService){}

  title = 'angular17testApp';

  ngOnInit(): void {
    this.service.getMovies().subscribe(
      res => {
        this.movies = res;
      }
    )
  }
}
