import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-success-sign-up',
  templateUrl: './success-sign-up.component.html',
  styleUrls: ['./success-sign-up.component.css']
})
export class SuccessSignUpComponent implements OnInit {

  ngOnInit(): void {
    
  }

  @Input() message!: string;
  @Output() close = new EventEmitter<void>();

  onCloseSuccess() {
    this.close.emit();
  }
}
