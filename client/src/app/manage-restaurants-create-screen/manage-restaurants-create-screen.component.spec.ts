import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageRestaurantsCreateScreenComponent } from './manage-restaurants-create-screen.component';

describe('ManageRestaurantsCreateScreenComponent', () => {
  let component: ManageRestaurantsCreateScreenComponent;
  let fixture: ComponentFixture<ManageRestaurantsCreateScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageRestaurantsCreateScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageRestaurantsCreateScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
