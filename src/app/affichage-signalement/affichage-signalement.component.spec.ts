import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AffichageSignalementComponent } from './affichage-signalement.component';

describe('AffichageSignalementComponent', () => {
  let component: AffichageSignalementComponent;
  let fixture: ComponentFixture<AffichageSignalementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AffichageSignalementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AffichageSignalementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
