import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulaireAdministrateurComponent } from './formulaire-administrateur.component';

describe('FormulaireAdministrateurComponent', () => {
  let component: FormulaireAdministrateurComponent;
  let fixture: ComponentFixture<FormulaireAdministrateurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormulaireAdministrateurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormulaireAdministrateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
