import { Injectable } from '@angular/core';
import { Tile } from './Models/tile';
import { BehaviorSubject, Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TileService {
  private numberOfTilesSubject: BehaviorSubject<number> = new BehaviorSubject<number>(1);
  tiles: Tile[] = [{id: 1, color: this.getRandomColor()}];
  generateTiles(numberOfTiles: number): void {
    let savedNumber = this.numberOfTilesSubject.value;
    if (savedNumber > numberOfTiles){
      for (let counter = 0; counter < savedNumber * savedNumber - numberOfTiles * numberOfTiles; counter++){
        this.tiles.pop();
      }
    }
    else{
      for (let counter = 0; counter < numberOfTiles * numberOfTiles - savedNumber * savedNumber; counter++){
        this.tiles.push({id: savedNumber + counter, color: this.getRandomColor()});
      }
    }
    this.numberOfTilesSubject.next(numberOfTiles);
  }
  getNumberOfTiles(): Observable<number> {
    return  this.numberOfTilesSubject.asObservable();
  }
  getRandomColor() : string {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  
  getTiles(): Observable<Tile[]> {
    return of(this.tiles);
  }

 
  constructor() { 
  }
}
