import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  submitted;

  constructor() {

  }

  onSubmit(value) {
    this.submitted = value;
  }

  onReset() {
    this.submitted = null;
  }
}
