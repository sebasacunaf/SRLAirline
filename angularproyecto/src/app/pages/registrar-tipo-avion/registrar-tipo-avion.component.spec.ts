import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarTipoAvionComponent } from './registrar-tipo-avion.component';

describe('RegistrarTipoAvionComponent', () => {
  let component: RegistrarTipoAvionComponent;
  let fixture: ComponentFixture<RegistrarTipoAvionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrarTipoAvionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrarTipoAvionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
