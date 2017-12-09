import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveFavoriteDialogComponent } from './save-favorite-dialog.component';

describe('SaveFavoriteDialogComponent', () => {
  let component: SaveFavoriteDialogComponent;
  let fixture: ComponentFixture<SaveFavoriteDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaveFavoriteDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaveFavoriteDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
