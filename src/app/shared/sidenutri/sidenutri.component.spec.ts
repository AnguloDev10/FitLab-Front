import { ComponentFixture, TestBed } from '@angular/core/testing';

<<<<<<<< HEAD:src/app/shared/sidenutri/sidenutri.component.spec.ts
import { SidenutriComponent } from './sidenutri.component';

describe('SidenutriComponent', () => {
  let component: SidenutriComponent;
  let fixture: ComponentFixture<SidenutriComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidenutriComponent ]
========
import { AdministradorComponent } from './administrador.component';

describe('AdministradorComponent', () => {
  let component: AdministradorComponent;
  let fixture: ComponentFixture<AdministradorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdministradorComponent ]
>>>>>>>> 18f897fe0c02f3b60161855e38711232a7f0bb23:src/app/views/administrador/administrador.component.spec.ts
    })
    .compileComponents();
  });

  beforeEach(() => {
<<<<<<<< HEAD:src/app/shared/sidenutri/sidenutri.component.spec.ts
    fixture = TestBed.createComponent(SidenutriComponent);
========
    fixture = TestBed.createComponent(AdministradorComponent);
>>>>>>>> 18f897fe0c02f3b60161855e38711232a7f0bb23:src/app/views/administrador/administrador.component.spec.ts
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
