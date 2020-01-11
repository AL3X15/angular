import { TestBed } from '@angular/core/testing';

import { AnnonceSelectioneeService } from './annonce-selectionee.service';

describe('AnnonceSelectioneeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AnnonceSelectioneeService = TestBed.get(AnnonceSelectioneeService);
    expect(service).toBeTruthy();
  });
});
