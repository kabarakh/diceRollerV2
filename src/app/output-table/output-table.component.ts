import { DiceRoll } from './../models/dice-roll';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'dr2-output-table',
  templateUrl: './output-table.component.html',
  styleUrls: ['./output-table.component.scss']
})
export class OutputTableComponent implements OnInit {
  @Input() diceRolls: DiceRoll[];
  @Output() onRerollClick = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  reroll(input: string) {
    this.onRerollClick.emit(input);
  }

}
