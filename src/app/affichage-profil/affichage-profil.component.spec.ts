import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AffichageProfilComponent } from './affichage-profil.component';

describe('AffichageProfilComponent', () => {
  let component: AffichageProfilComponent;
  let fixture: ComponentFixture<AffichageProfilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AffichageProfilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AffichageProfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
