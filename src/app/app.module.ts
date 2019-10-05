import { DiceRollsService } from './services/dice-rolls.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { InputFormComponent } from './input-form/input-form.component';
import { OutputTableComponent } from './output-table/output-table.component';
import { DiceRollerComponent } from './dice-roller/dice-roller.component';
import { StatisticsTableComponent } from './statistics-table/statistics-table.component';
import { ListComponent } from './favorite/list/list.component';
import { SingleFavoriteComponent } from './favorite/single-favorite/single-favorite.component';
import { EditButtonComponent } from './favorite/edit-button/edit-button.component';
import { EditFavoriteComponent } from './favorite/edit-favorite/edit-favorite.component';
import { FavoriteGroupComponent } from './favorite/favorite-group/favorite-group.component';
import { SaveFavoriteDialogComponent } from './favorite/save-favorite-dialog/save-favorite-dialog.component';
import {FavoritesService} from './services/favorites.service';

@NgModule({
  declarations: [
    AppComponent,
    InputFormComponent,
    OutputTableComponent,
    DiceRollerComponent,
    StatisticsTableComponent,
    ListComponent,
    SingleFavoriteComponent,
    EditButtonComponent,
    EditFavoriteComponent,
    FavoriteGroupComponent,
    SaveFavoriteDialogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    DiceRollsService,
    FavoritesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
