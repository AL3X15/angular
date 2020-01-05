import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulaireChangelentPasswordComponent } from './formulaire-changelent-password.component';

describe('FormulaireChangelentPasswordComponent', () => {
  let component: FormulaireChangelentPasswordComponent;
  let fixture: ComponentFixture<FormulaireChangelentPasswordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormulaireChangelentPasswordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormulaireChangelentPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
