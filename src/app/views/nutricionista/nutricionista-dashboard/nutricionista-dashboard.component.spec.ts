import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NutricionistaDashboardComponent } from './nutricionista-dashboard.component';

describe('NutricionistaDashboardComponent', () => {
  let component: NutricionistaDashboardComponent;
  let fixture: ComponentFixture<NutricionistaDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NutricionistaDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NutricionistaDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});