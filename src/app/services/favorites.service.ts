import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class DiceRollsService {

  protected diceRollStorage: DiceRoll[] = [];
  protected diceRoll = new BehaviorSubject<DiceRoll[]>(this.diceRollStorage);

  constructor() {}

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
