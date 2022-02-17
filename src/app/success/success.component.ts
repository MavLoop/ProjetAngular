import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css']
})
export class SuccessComponent implements OnInit {
  
  ngOnInit(): void {
    
  }

  @Input() message!: string;
  @Output() close = new EventEmitter<void>();

  onCloseSuccess() {
    this.close.emit();
  }

}
