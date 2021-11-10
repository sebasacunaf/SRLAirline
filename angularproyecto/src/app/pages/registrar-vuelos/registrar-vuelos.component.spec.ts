import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarVuelosComponent } from './registrar-vuelos.component';

describe('RegistrarVuelosComponent', () => {
  let component: RegistrarVuelosComponent;
  let fixture: ComponentFixture<RegistrarVuelosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrarVuelosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrarVuelosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
