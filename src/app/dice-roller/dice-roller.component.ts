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
    const confirmation = confirm('Are you sure you want to reset the table and statistics? This cannot be undone!');
    if (confirmation) {
      this.diceRollsService.clearDiceRolls();
    }
  }
}
