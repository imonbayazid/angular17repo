import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MyServiceService } from './my-service.service';
import { MyModel } from './my-model';
import { CommonModule } from '@angular/common';
import { ModalComponentComponent } from './modal-component/modal-component.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, ModalComponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{

  movies : MyModel[] = [];
  showModal: boolean = false;
  modalTitle: string = "";
  modalDescription: string = "";
  constructor(private service: MyServiceService){}

  title = 'angular17testApp';

  ngOnInit(): void {
    this.service.getMovies().subscribe(
      res => {
        this.movies = res;
      }
    )
  }
  showModalDialog(title: string,desc: string){
    this.showModal = true;
    this.modalTitle = title;
    this.modalDescription = desc;

    console.log("sshow dialog",this.showModal);
  }

  onConfirm(e:any){
    console.log(e);
    this.showModal = false;
  }
}
