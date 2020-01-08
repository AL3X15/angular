import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalementEtudiantComponent } from './signalement-etudiant.component';

describe('SignalementEtudiantComponent', () => {
  let component: SignalementEtudiantComponent;
  let fixture: ComponentFixture<SignalementEtudiantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignalementEtudiantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignalementEtudiantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
