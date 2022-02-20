import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Alert } from '../common/model/alert.model';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {
  @Input() alert!: Alert;
  @Output() close = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

  onCloseAlert() {
    this.close.emit();
  }

}
