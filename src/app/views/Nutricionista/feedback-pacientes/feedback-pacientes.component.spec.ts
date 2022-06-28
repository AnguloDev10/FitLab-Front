import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedbackPacientesComponent } from './feedback-pacientes.component';

describe('FeedbackPacientesComponent', () => {
  let component: FeedbackPacientesComponent;
  let fixture: ComponentFixture<FeedbackPacientesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeedbackPacientesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedbackPacientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
