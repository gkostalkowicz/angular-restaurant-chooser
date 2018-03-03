import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageRestaurantsEditScreenComponent } from './manage-restaurants-edit-screen.component';

describe('ManageRestaurantsEditScreenComponent', () => {
  let component: ManageRestaurantsEditScreenComponent;
  let fixture: ComponentFixture<ManageRestaurantsEditScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageRestaurantsEditScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageRestaurantsEditScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
