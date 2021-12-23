import { Component, OnInit, HostListener } from '@angular/core';
import { Tile } from '../../Models/tile';
import { TileService } from '../../services/tile.service';
@Component({
  selector: 'app-tile-grid',
  templateUrl: './tile-grid.component.html',
  styleUrls: ['./tile-grid.component.css'],
  
})
export class TileGridComponent implements OnInit {

  constructor(public tileService: TileService) {   }
  windowSize: number = 1000;
  tiles: Tile[] = [];
  tileNumber: number = 1;

  tileWidth: number = this.windowSize / this.tileNumber;
  
  @HostListener('window:resize', ['$event'])
  onWindowsResize(){
    this.windowSize = window.innerWidth;
    this.tileWidth = this.windowSize / Math.sqrt(this.tiles.length);
  }
  ngOnInit(): void {
    this.tileService.getTiles().subscribe(tiles => this.tiles = tiles);
    this.tileService.getNumberOfTiles().subscribe(ts => this.tileWidth = this.windowSize / ts);

    this.windowSize = window.innerWidth;
    this.tileWidth = this.windowSize / Math.sqrt(this.tiles.length);


  }

}
