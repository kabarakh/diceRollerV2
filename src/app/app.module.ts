import { DiceRollsService } from './services/dice-rolls.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { InputFormComponent } from './input-form/input-form.component';
import { OutputTableComponent } from './output-table/output-table.component';
import { DiceRollerComponent } from './dice-roller/dice-roller.component';

@NgModule({
  declarations: [
    AppComponent,
    InputFormComponent,
    OutputTableComponent,
    DiceRollerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    DiceRollsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
