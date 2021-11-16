import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeHorarioComponent } from './home-horario.component';

describe('HomeHorarioComponent', () => {
  let component: HomeHorarioComponent;
  let fixture: ComponentFixture<HomeHorarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeHorarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeHorarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
