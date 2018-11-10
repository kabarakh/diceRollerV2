import { DiceRoll } from '../models/dice-roll';
import { Injectable } from '@angular/core';
import { AbstractStorageService } from './abstractStorage.service';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class DiceRollsService extends AbstractStorageService {

  protected diceRollStorage: DiceRoll[] = [];
  protected diceRoll = new BehaviorSubject<DiceRoll[]>(this.diceRollStorage);
  storageName = 'diceRolls';
  storageType = 'local';

  constructor() {
    super();
  }

  public addDiceRoll(input: string) {
    if (input !== '') {
      const diceRoll = new DiceRoll(input);
      diceRoll.calculateRoll();

      this.diceRollStorage.unshift(diceRoll);
      this.storeData(this.diceRollStorage);
      this.diceRoll.next(this.diceRollStorage);
    }
  }

  public clearDiceRolls() {
    this.diceRollStorage = [];
    this.clear();
    this.diceRoll.next(this.diceRollStorage);
  }

  public getDiceRolls() {
    this.diceRollStorage = this.loadData();
    if (this.diceRollStorage === null) {
      this.diceRollStorage = [];
      this.storeData(this.diceRollStorage) ;
    }

    this.diceRoll.next(this.diceRollStorage);

    return this.diceRoll.asObservable();
  }

}
