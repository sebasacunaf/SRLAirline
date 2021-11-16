import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeTipoAvionComponent } from './home-tipo-avion.component';

describe('HomeTipoAvionComponent', () => {
  let component: HomeTipoAvionComponent;
  let fixture: ComponentFixture<HomeTipoAvionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeTipoAvionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeTipoAvionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
