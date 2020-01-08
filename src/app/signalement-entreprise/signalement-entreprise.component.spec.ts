import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalementEntrepriseComponent } from './signalement-entreprise.component';

describe('SignalementEntrepriseComponent', () => {
  let component: SignalementEntrepriseComponent;
  let fixture: ComponentFixture<SignalementEntrepriseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignalementEntrepriseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignalementEntrepriseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
