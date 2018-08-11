import { DiceRollsService } from '../services/dice-rolls.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dr2-input-form',
  templateUrl: './input-form.component.html',
  styleUrls: ['./input-form.component.scss']
})
export class InputFormComponent implements OnInit {
  diceInput = '';

  constructor(protected diceRollsService: DiceRollsService) { }

  ngOnInit() {
  }

  submitDiceInput() {
      this.diceRollsService.addDiceRoll(this.diceInput);
  }
}
