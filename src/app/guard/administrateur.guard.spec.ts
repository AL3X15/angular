import { TestBed, async, inject } from '@angular/core/testing';

import { AdministrateurGuard } from './administrateur.guard';

describe('AdministrateurGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdministrateurGuard]
    });
  });

  it('should ...', inject([AdministrateurGuard], (guard: AdministrateurGuard) => {
    expect(guard).toBeTruthy();
  }));
});
