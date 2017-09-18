import { FavoritesService } from './services/favorites.service';
import { DiceRollsService } from './services/dice-rolls.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { InputFormComponent } from './input-form/input-form.component';
import { OutputTableComponent } from './output-table/output-table.component';
import { DiceRollerComponent } from './dice-roller/dice-roller.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { SaveFavoriteComponent } from './save-favorite/save-favorite.component';
import { FavoriteListComponent } from './favorite-list/favorite-list.component';

@NgModule({
  declarations: [
    AppComponent,
    InputFormComponent,
    OutputTableComponent,
    DiceRollerComponent,
    FavoritesComponent,
    SaveFavoriteComponent,
    FavoriteListComponent
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
