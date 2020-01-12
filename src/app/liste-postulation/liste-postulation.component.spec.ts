import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListePostulationComponent } from './liste-postulation.component';

describe('ListePostulationComponent', () => {
  let component: ListePostulationComponent;
  let fixture: ComponentFixture<ListePostulationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListePostulationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListePostulationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
