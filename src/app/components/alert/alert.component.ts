import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss'],
})
export class AlertComponent {
  @Input() show: boolean = false;
  @Input() message: string = '';
  @Input() success: boolean = false;
  @Input() danger: boolean = false;

  closeAlert() {
    this.show = false;
  }
}
