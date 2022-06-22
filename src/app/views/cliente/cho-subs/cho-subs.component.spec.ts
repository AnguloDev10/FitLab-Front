import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoSubsComponent } from './cho-subs.component';

describe('ChoSubsComponent', () => {
  let component: ChoSubsComponent;
  let fixture: ComponentFixture<ChoSubsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChoSubsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChoSubsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
