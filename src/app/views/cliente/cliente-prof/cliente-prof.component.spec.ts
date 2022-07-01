import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteProfComponent } from './cliente-prof.component';

describe('ClienteProfComponent', () => {
  let component: ClienteProfComponent;
  let fixture: ComponentFixture<ClienteProfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClienteProfComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClienteProfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
