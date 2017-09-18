import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveFavoriteComponent } from './save-favorite.component';

describe('SaveFavoriteComponent', () => {
  let component: SaveFavoriteComponent;
  let fixture: ComponentFixture<SaveFavoriteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaveFavoriteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaveFavoriteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
