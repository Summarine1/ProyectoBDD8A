import { TestBed } from '@angular/core/testing';

import { LinuxService } from './linux.service';

describe('LinuxService', () => {
  let service: LinuxService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LinuxService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
