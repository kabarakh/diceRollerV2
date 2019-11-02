import { countBy, reduce } from 'lodash';
import { DiceRollsService } from '../services/dice-rolls.service';
import { DiceRoll } from '../models/dice-roll';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'dr2-statistics-table',
  templateUrl: './statistics-table.component.html',
  styleUrls: ['./statistics-table.component.scss']
})
export class StatisticsTableComponent implements OnInit, OnDestroy {


  public diceRolls: DiceRoll[];
  protected subject: Subscription;
  public sumOfAllRolls = 0;
  public sumOfAllAverages = 0;
  public displayStatistics = false;
  public numberOfDiceRolls = {
    total: 0,
    betterThanAverage: 0,
    average: 0,
    worseThanAverage: 0
  };

  constructor(protected diceRollsService: DiceRollsService) { }

  ngOnInit() {
    this.subject = this.diceRollsService.getDiceRolls().subscribe(diceRolls => {
      this.diceRolls = diceRolls;
      this.numberOfDiceRolls.total = this.diceRolls.length;
      this.numberOfDiceRolls.average = countBy(this.diceRolls, (diceRoll: DiceRoll) => {
        return diceRoll.average === diceRoll.sum;
      }).true || 0;
      this.numberOfDiceRolls.betterThanAverage = countBy(this.diceRolls, (diceRoll: DiceRoll) => {
        return diceRoll.average < diceRoll.sum;
      }).true || 0;
      this.numberOfDiceRolls.worseThanAverage = countBy(this.diceRolls, (diceRoll: DiceRoll) => {
        return diceRoll.average > diceRoll.sum;
      }).true || 0;

      this.sumOfAllRolls = reduce(this.diceRolls, (result: number, diceRoll: DiceRoll) => {
        return result + diceRoll.sum;
      }, 0);

      this.sumOfAllAverages = reduce(this.diceRolls, (result: number, diceRoll: DiceRoll) => {
        return result + diceRoll.average;
      }, 0);
    });
  }

  ngOnDestroy() {
    this.subject.unsubscribe();
  }

  displayStatisticsPercentage(input: number = 0): string {
    if (input === 0) {
      return '-';
    }
    return (input / this.numberOfDiceRolls.total * 100).toFixed(2) + '%';
  }
}
