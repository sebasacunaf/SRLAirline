import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarReservacionClienteComponent } from './registrar-reservacion-cliente.component';

describe('RegistrarReservacionClienteComponent', () => {
  let component: RegistrarReservacionClienteComponent;
  let fixture: ComponentFixture<RegistrarReservacionClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrarReservacionClienteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrarReservacionClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
