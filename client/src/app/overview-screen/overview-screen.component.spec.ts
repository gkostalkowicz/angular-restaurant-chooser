import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OverviewScreenComponent } from './overview-screen.component';

describe('OverviewScreenComponent', () => {
  let component: OverviewScreenComponent;
  let fixture: ComponentFixture<OverviewScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OverviewScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OverviewScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
