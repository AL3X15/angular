import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AffichageAdministrateurComponent } from './affichage-administrateur.component';

describe('AffichageAdministrateurComponent', () => {
  let component: AffichageAdministrateurComponent;
  let fixture: ComponentFixture<AffichageAdministrateurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AffichageAdministrateurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AffichageAdministrateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
