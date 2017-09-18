import { FavoriteListPartInterface } from './../models/favoriteListPartInterface';
import { FavoriteList } from './../models/favoriteList';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'dr2-favorite-list',
  templateUrl: './favorite-list.component.html',
  styleUrls: ['./favorite-list.component.scss']
})
export class FavoriteListComponent implements OnInit {
  @Input() favoriteList: FavoriteListPartInterface[];
  @Output() addFavoriteListPart = new EventEmitter<FavoriteListPartInterface[]>();

  public newTitle = '';

  constructor() { }

  ngOnInit() {
  }

  public addFavorite() {
    const newFavorite = new FavoriteList(this.newTitle);
    this.favoriteList.push(newFavorite);
    this.favoriteList.sort((left, right) => left.title.toLowerCase().localeCompare(right.title.toLowerCase()));
    this.newTitle = '';
    this.addFavoriteListPart.emit(this.favoriteList);
  }

  public passFavoriteListToParent() {
    this.addFavoriteListPart.emit(this.favoriteList);
  }

  public deleteFavorite(favoriteComponentToDelete: FavoriteListPartInterface) {
    this.favoriteList.forEach((singleFavoriteComponent, index) => {
      if (singleFavoriteComponent === favoriteComponentToDelete) {
          this.favoriteList.splice(index, 1);
      }
    });
    this.addFavoriteListPart.emit(this.favoriteList);
  }
}
