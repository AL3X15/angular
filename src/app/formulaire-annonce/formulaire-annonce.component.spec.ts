import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulaireAnnonceComponent } from './formulaire-annonce.component';

describe('FormulaireAnnonceComponent', () => {
  let component: FormulaireAnnonceComponent;
  let fixture: ComponentFixture<FormulaireAnnonceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormulaireAnnonceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormulaireAnnonceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
