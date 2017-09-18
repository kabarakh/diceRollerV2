import { FavoriteListPartInterface } from './../models/favoriteListPartInterface';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { FavoriteList } from './../models/favoriteList';
import { Injectable } from '@angular/core';

@Injectable()
export class FavoritesService {

  protected favoritesStorage: FavoriteListPartInterface[] = [];
  protected favorites = new BehaviorSubject<FavoriteListPartInterface[]>(this.favoritesStorage);

  constructor() {
    const localStorageFavorites = window.localStorage.getItem('diceRoller.favorites') || '';
    if (localStorageFavorites === '') {
      window.localStorage.setItem('diceRoller.favorites', '');
      this.favoritesStorage = [];
    } else {
      this.favoritesStorage = JSON.parse(localStorageFavorites);
      this.favorites.next(this.favoritesStorage);
    }
  }

  public getFavorites() {
    return this.favorites.asObservable();
  }

  public saveFavorites(favorites: FavoriteListPartInterface[]) {
    this.favoritesStorage = favorites;
    window.localStorage.setItem('diceRoller.favorites', JSON.stringify(this.favoritesStorage));
    this.favorites.next(this.favoritesStorage);
  }

}
