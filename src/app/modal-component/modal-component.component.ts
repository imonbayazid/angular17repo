import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-modal-component',
  templateUrl: './modal-component.component.html',
  styleUrls: ['./modal-component.component.css'],
  standalone: true
})
export class ModalComponentComponent implements OnInit {

  @Input() model_title: string | undefined;
  @Input() model_description: string | undefined;

  @Output() confirmClicked = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  onConfirmClicked(){
    this.confirmClicked.emit("onConfirmClicked");
  }

}
