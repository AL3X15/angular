import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AffichageAdresseComponent } from './affichage-adresse.component';

describe('AffichageAdresseComponent', () => {
  let component: AffichageAdresseComponent;
  let fixture: ComponentFixture<AffichageAdresseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AffichageAdresseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AffichageAdresseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
