import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReuListComponent } from './reu-list.component';

describe('ReuListComponent', () => {
  let component: ReuListComponent;
  let fixture: ComponentFixture<ReuListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReuListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReuListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
