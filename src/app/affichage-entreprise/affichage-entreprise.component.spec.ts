import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AffichageEntrepriseComponent } from './affichage-entreprise.component';

describe('AffichageEntrepriseComponent', () => {
  let component: AffichageEntrepriseComponent;
  let fixture: ComponentFixture<AffichageEntrepriseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AffichageEntrepriseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AffichageEntrepriseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
