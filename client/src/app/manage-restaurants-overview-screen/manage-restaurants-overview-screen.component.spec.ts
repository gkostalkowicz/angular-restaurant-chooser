import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageRestaurantsOverviewScreenComponent } from './manage-restaurants-overview-screen.component';

describe('ManageRestaurantsOverviewScreenComponent', () => {
  let component: ManageRestaurantsOverviewScreenComponent;
  let fixture: ComponentFixture<ManageRestaurantsOverviewScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageRestaurantsOverviewScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageRestaurantsOverviewScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
