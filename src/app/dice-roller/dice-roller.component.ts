import { Component, OnInit } from '@angular/core';
import { DiceRoll } from '../models/dice-roll';

@Component({
  selector: 'dr2-dice-roller',
  templateUrl: './dice-roller.component.html',
  styleUrls: ['./dice-roller.component.scss']
})
export class DiceRollerComponent implements OnInit {

  diceRolls: DiceRoll[] = [];

  constructor() { }

  ngOnInit() {
  }

  createDiceRoll(diceInput: string) {
    let diceRoll = new DiceRoll(diceInput);
    diceRoll.calculateRoll();

    this.diceRolls.unshift(diceRoll);
  }
}
