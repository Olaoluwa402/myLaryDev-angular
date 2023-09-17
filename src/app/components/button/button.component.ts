import {
  Injectable,
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
@Injectable()
export class ButtonComponent implements OnInit {
  @Input() text: string = '';
  @Input() bgColor: string = '';
  @Input() color: string = '';
  @Output() btnClick = new EventEmitter();
background: any;

  constructor() {}

  ngOnInit(): void {}

  onClick() {
    this.btnClick.emit();
  }
}
