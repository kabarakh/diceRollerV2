import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditButtonsComponent } from './edit-buttons.component';

describe('EditButtonsComponent', () => {
  let component: EditButtonsComponent;
  let fixture: ComponentFixture<EditButtonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditButtonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
