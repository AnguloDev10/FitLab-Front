import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidenutriComponent } from './sidenutri.component';

describe('SidenutriComponent', () => {
  let component: SidenutriComponent;
  let fixture: ComponentFixture<SidenutriComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidenutriComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidenutriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
