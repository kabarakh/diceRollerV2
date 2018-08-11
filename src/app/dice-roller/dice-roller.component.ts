import { DiceRollsService } from '../services/dice-rolls.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dr2-dice-roller',
  templateUrl: './dice-roller.component.html',
  styleUrls: ['./dice-roller.component.scss']
})
export class DiceRollerComponent implements OnInit {

  constructor(protected diceRollsService: DiceRollsService) {}

  ngOnInit() {
  }

  public clearDiceRolls() {
    this.diceRollsService.clearDiceRolls();
  }
}
