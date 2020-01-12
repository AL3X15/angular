import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AffichageTagsComponent } from './affichage-tags.component';

describe('AffichageTagsComponent', () => {
  let component: AffichageTagsComponent;
  let fixture: ComponentFixture<AffichageTagsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AffichageTagsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AffichageTagsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
