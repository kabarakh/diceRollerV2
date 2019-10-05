import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'dr2-save-favorite-dialog',
  templateUrl: './save-favorite-dialog.component.html',
  styleUrls: ['./save-favorite-dialog.component.scss']
})
export class SaveFavoriteDialogComponent implements OnInit {
  @Input() input: string;
  displayModal = false;
  favoriteTitle = '';

  constructor() { }

  ngOnInit() {
  }

  closeModal(): void {
    console.log('i\'m here');
    this.displayModal = false;
    this.favoriteTitle = '';
  }

  saveFavorite(): void {
    console.log('I\m where I wanna be');
    this.displayModal = false;
    this.favoriteTitle = '';
  }

}
