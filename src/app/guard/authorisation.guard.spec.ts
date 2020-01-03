import { TestBed, async, inject } from '@angular/core/testing';

import { AuthorisationGuard } from './authorisation.guard';

describe('AuthorisationGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthorisationGuard]
    });
  });

  it('should ...', inject([AuthorisationGuard], (guard: AuthorisationGuard) => {
    expect(guard).toBeTruthy();
  }));
});
