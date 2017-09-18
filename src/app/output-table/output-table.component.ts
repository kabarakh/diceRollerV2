import { DiceRollsService } from './../services/dice-rolls.service';
import { DiceRoll } from './../models/dice-roll';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'dr2-output-table',
  templateUrl: './output-table.component.html',
  styleUrls: ['./output-table.component.scss']
})
export class OutputTableComponent implements OnInit, OnDestroy {
  public diceRolls: DiceRoll[];
  protected subject: Subscription;

  constructor(protected diceRollsService: DiceRollsService) { }

  ngOnInit() {
    this.subject = this.diceRollsService.getDiceRolls().subscribe(diceRolls => this.diceRolls = diceRolls);
  }

  ngOnDestroy() {
    this.subject.unsubscribe();
  }

  reroll(input: string) {
    this.diceRollsService.addDiceRoll(input);
  }
}
