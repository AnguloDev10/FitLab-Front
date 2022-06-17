import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NutricionistaHomeComponent } from './nutricionista-home.component';

describe('NutricionistaHomeComponent', () => {
  let component: NutricionistaHomeComponent;
  let fixture: ComponentFixture<NutricionistaHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NutricionistaHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NutricionistaHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
