import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AffichageAnnonceComponent } from './affichage-annonce.component';

describe('AffichageAnnonceComponent', () => {
  let component: AffichageAnnonceComponent;
  let fixture: ComponentFixture<AffichageAnnonceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AffichageAnnonceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AffichageAnnonceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
