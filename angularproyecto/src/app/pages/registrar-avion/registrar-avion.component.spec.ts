import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarAvionComponent } from './registrar-avion.component';

describe('RegistrarAvionComponent', () => {
  let component: RegistrarAvionComponent;
  let fixture: ComponentFixture<RegistrarAvionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrarAvionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrarAvionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
