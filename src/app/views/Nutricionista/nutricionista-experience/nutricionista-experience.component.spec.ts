import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NutricionistaExperienceComponent } from './nutricionista-experience.component';

describe('NutricionistaExperienceComponent', () => {
  let component: NutricionistaExperienceComponent;
  let fixture: ComponentFixture<NutricionistaExperienceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NutricionistaExperienceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NutricionistaExperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
