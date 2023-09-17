import { Component, OnInit } from '@angular/core';
import { setTheme } from 'ngx-bootstrap/utils';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor() {
    setTheme('bs5'); // or 'bs4'
  }
  title = 'myxalary';
  role = 'Admin';

  ngOnInit(): void {}
}
