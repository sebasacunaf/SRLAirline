import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeAvionComponent } from './home-avion.component';

describe('HomeAvionComponent', () => {
  let component: HomeAvionComponent;
  let fixture: ComponentFixture<HomeAvionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeAvionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeAvionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
