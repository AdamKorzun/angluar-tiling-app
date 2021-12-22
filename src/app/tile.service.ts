import { Injectable } from '@angular/core';
import { Tile } from './Models/tile';
import { TILES } from './mock-tiles';
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TileService {

  getTiles(): Observable<Tile[]> {
    return of(TILES);
  }
  constructor() { }
}
