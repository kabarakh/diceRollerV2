import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleFavoriteComponent } from './single-favorite.component';

describe('SingleFavoriteComponent', () => {
  let component: SingleFavoriteComponent;
  let fixture: ComponentFixture<SingleFavoriteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleFavoriteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleFavoriteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
