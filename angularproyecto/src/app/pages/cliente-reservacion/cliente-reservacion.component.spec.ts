import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteReservacionComponent } from './cliente-reservacion.component';

describe('ClienteReservacionComponent', () => {
  let component: ClienteReservacionComponent;
  let fixture: ComponentFixture<ClienteReservacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClienteReservacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClienteReservacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
