import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarTipoAvionComponent } from './editar-tipo-avion.component';

describe('EditarTipoAvionComponent', () => {
  let component: EditarTipoAvionComponent;
  let fixture: ComponentFixture<EditarTipoAvionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarTipoAvionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarTipoAvionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
