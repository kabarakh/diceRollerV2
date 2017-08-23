import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'dr2-input-form',
  templateUrl: './input-form.component.html',
  styleUrls: ['./input-form.component.scss']
})
export class InputFormComponent implements OnInit {
  @Output() onSubmitDiceInput = new EventEmitter<string>();

  diceInput = '';

  constructor() { }

  ngOnInit() {
  }

  submitDiceInput() {
    this.onSubmitDiceInput.emit(this.diceInput);
  }

}
