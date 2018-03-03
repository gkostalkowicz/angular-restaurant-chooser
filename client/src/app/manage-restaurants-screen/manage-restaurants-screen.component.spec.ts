import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageRestaurantsScreenComponent } from './manage-restaurants-screen.component';

describe('ManageRestaurantsScreenComponent', () => {
  let component: ManageRestaurantsScreenComponent;
  let fixture: ComponentFixture<ManageRestaurantsScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageRestaurantsScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageRestaurantsScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
