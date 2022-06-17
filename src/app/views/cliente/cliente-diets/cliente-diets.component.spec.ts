import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteDietsComponent } from './cliente-diets.component';

describe('ClienteDietsComponent', () => {
  let component: ClienteDietsComponent;
  let fixture: ComponentFixture<ClienteDietsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClienteDietsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClienteDietsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
