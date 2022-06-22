import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideclientComponent } from './sideclient.component';

describe('SideclientComponent', () => {
  let component: SideclientComponent;
  let fixture: ComponentFixture<SideclientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SideclientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SideclientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
