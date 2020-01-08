import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AffichageEtudiantComponent } from './affichage-etudiant.component';

describe('AffichageEtudiantComponent', () => {
  let component: AffichageEtudiantComponent;
  let fixture: ComponentFixture<AffichageEtudiantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AffichageEtudiantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AffichageEtudiantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
