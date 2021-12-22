import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  sliderValue: number = 1;
  title = 'tiles-angular';
  onInputChange(event: any) {
    this.sliderValue = event.value;
  }
}
