import { Component, OnInit } from '@angular/core';
import { Tile } from '../Models/tile';
import { Input } from '@angular/core';
@Component({
  selector: 'app-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.css']
})
export class TileComponent implements OnInit {

  constructor() { }
  @Input() tile?: Tile;
  ngOnInit(): void {
  }

}
