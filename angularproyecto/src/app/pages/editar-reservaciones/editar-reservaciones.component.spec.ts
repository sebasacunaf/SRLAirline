import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarReservacionesComponent } from './editar-reservaciones.component';

describe('EditarReservacionesComponent', () => {
  let component: EditarReservacionesComponent;
  let fixture: ComponentFixture<EditarReservacionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarReservacionesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarReservacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
