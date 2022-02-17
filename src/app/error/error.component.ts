import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {
  @Input() messageError!: string;
  @Output() close = new EventEmitter<void>();
  constructor() { }

  ngOnInit(): void {
  }
  onCloseError(){

  }
}
