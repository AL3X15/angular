import { TestBed, async, inject } from '@angular/core/testing';

import { EntrepriseGuard } from './entreprise.guard';

describe('EntrepriseGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EntrepriseGuard]
    });
  });

  it('should ...', inject([EntrepriseGuard], (guard: EntrepriseGuard) => {
    expect(guard).toBeTruthy();
  }));
});
