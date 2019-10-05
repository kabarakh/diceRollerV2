import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { DiceRoll } from '../models/dice-roll';
import {AbstractStorageService} from './abstractStorage.service';


@Injectable()
export class FavoritesService extends AbstractStorageService {
  storageName = 'favorites_fav';
  storageType = 'local';

  protected diceRollStorage: DiceRoll[] = [];
  protected diceRoll = new BehaviorSubject<DiceRoll[]>(this.diceRollStorage);

  constructor() {
    super();
  }

  public addDiceRoll(input: string) {
    if (input !== '') {
      const diceRoll = new DiceRoll(input);
      diceRoll.calculateRoll();

      this.diceRollStorage.unshift(diceRoll);
      this.diceRoll.next(this.diceRollStorage);
    }
  }

  public clearDiceRolls() {
    this.diceRollStorage = [];
    this.diceRoll.next(this.diceRollStorage);
  }

  public getDiceRolls() {
    return this.diceRoll.asObservable();
  }

}
