import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NutricionistaScheduleComponent } from './nutricionista-schedule.component';

describe('NutricionistaScheduleComponent', () => {
  let component: NutricionistaScheduleComponent;
  let fixture: ComponentFixture<NutricionistaScheduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NutricionistaScheduleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NutricionistaScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
