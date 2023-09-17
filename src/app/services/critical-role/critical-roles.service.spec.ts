import { TestBed } from '@angular/core/testing';

import { CriticalRolesService } from './critical-roles.service';

describe('CriticalRolesService', () => {
  let service: CriticalRolesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CriticalRolesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
