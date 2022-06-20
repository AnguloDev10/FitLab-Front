import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideadminComponent } from './sideadmin.component';

describe('SideadminComponent', () => {
  let component: SideadminComponent;
  let fixture: ComponentFixture<SideadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SideadminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SideadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
