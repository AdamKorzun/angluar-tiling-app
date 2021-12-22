import { Component, OnInit } from '@angular/core';
import { Tile } from '../Models/tile';
import { TileService } from '../tile.service';
@Component({
  selector: 'app-tile-grid',
  templateUrl: './tile-grid.component.html',
  styleUrls: ['./tile-grid.component.css']
})
export class TileGridComponent implements OnInit {

  constructor(public tileService: TileService) { }
  tiles: Tile[] = [];
  ngOnInit(): void {
    this.tileService.getTiles().subscribe(tiles => this.tiles = tiles)

  }

}
