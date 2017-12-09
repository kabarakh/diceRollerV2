import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoriteGroupComponent } from './favorite-group.component';

describe('FavoriteGroupComponent', () => {
  let component: FavoriteGroupComponent;
  let fixture: ComponentFixture<FavoriteGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavoriteGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoriteGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
