import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.scss'],
})
export class AddFormComponent implements OnInit {
  email: string = '';
  password: string = '';
  checkMeOut: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  submitHandler() {
    console.log('submit form');
    const data = {
      email: this.email,
      password: this.password,
      checkMeOut: this.checkMeOut,
    };
    console.log(data);
  }
}
