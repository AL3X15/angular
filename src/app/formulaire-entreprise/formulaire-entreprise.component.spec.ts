import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulaireEntrepriseComponent } from './formulaire-entreprise.component';

describe('FormulaireEntrepriseComponent', () => {
  let component: FormulaireEntrepriseComponent;
  let fixture: ComponentFixture<FormulaireEntrepriseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormulaireEntrepriseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormulaireEntrepriseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
