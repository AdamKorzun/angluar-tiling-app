import { Component, OnInit } from '@angular/core';
import { TileService } from 'src/app/services/tile.service';
@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  constructor(private tileService: TileService) { }
  sliderValue: number = 1;
  onInputChange(event: any) {
    this.sliderValue = event.value;
    this.tileService.generateTiles(this.sliderValue);
  }
  ngOnInit(): void {
    this.tileService.generateTiles(this.sliderValue);

  }

}
