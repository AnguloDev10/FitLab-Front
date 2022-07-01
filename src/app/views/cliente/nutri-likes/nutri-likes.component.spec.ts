import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NutriLikesComponent } from './nutri-likes.component';

describe('NutriLikesComponent', () => {
  let component: NutriLikesComponent;
  let fixture: ComponentFixture<NutriLikesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NutriLikesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NutriLikesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
