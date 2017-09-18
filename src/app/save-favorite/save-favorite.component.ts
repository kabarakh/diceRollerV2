import { FavoriteListPartInterface } from './../models/favoriteListPartInterface';
import { Subscription } from 'rxjs/Subscription';
import { FavoritesService } from './../services/favorites.service';
import { Component, OnInit, Input, Output, EventEmitter, OnDestroy } from '@angular/core';

@Component({
  selector: 'dr2-save-favorite',
  templateUrl: './save-favorite.component.html',
  styleUrls: ['./save-favorite.component.scss']
})
export class SaveFavoriteComponent implements OnInit, OnDestroy {
  @Input() input: string;

  protected displayModal: boolean;
  title = '';
  protected subject: Subscription;
  favoriteList: FavoriteListPartInterface[];

  constructor(protected favoritesService: FavoritesService) { }

  ngOnInit() {
    this.subject = this.favoritesService.getFavorites().subscribe(favoriteList => this.favoriteList = favoriteList);
  }

  ngOnDestroy() {
    this.subject.unsubscribe();
  }

  openModal(input) {
    this.input = input;
    this.displayModal = true;
  }

  closeModal() {
    this.displayModal = false;
    this.title = '';
  }

  saveFavoriteList() {
    this.favoritesService.saveFavorites(this.favoriteList);
  }

}
