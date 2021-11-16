import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeReservacionesComponent } from './home-reservaciones.component';

describe('HomeReservacionesComponent', () => {
  let component: HomeReservacionesComponent;
  let fixture: ComponentFixture<HomeReservacionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeReservacionesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeReservacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
