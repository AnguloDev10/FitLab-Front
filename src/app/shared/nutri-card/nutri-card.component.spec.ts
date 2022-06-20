import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NutriCardComponent } from './nutri-card.component';

describe('NutriCardComponent', () => {
  let component: NutriCardComponent;
  let fixture: ComponentFixture<NutriCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NutriCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NutriCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
