import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeRutaComponent } from './home-ruta.component';

describe('HomeRutaComponent', () => {
  let component: HomeRutaComponent;
  let fixture: ComponentFixture<HomeRutaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeRutaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeRutaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
