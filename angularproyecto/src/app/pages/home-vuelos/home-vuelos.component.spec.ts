import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeVuelosComponent } from './home-vuelos.component';

describe('HomeVuelosComponent', () => {
  let component: HomeVuelosComponent;
  let fixture: ComponentFixture<HomeVuelosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeVuelosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeVuelosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
