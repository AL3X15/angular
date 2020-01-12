import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AffichagePostulationComponent } from './affichage-postulation.component';

describe('AffichagePostulationComponent', () => {
  let component: AffichagePostulationComponent;
  let fixture: ComponentFixture<AffichagePostulationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AffichagePostulationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AffichagePostulationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
