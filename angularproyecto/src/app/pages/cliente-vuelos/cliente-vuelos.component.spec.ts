import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteVuelosComponent } from './cliente-vuelos.component';

describe('ClienteVuelosComponent', () => {
  let component: ClienteVuelosComponent;
  let fixture: ComponentFixture<ClienteVuelosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClienteVuelosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClienteVuelosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
