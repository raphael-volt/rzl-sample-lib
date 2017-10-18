import { TestBed, inject } from '@angular/core/testing';

import { SampleServiceService } from '../src/sample-service.service';

describe('SampleServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SampleServiceService]
    });
  });

  it('should be created', inject([SampleServiceService], (service: SampleServiceService) => {
    expect(service).toBeTruthy();
  }));
});
