import { TestBed } from '@angular/core/testing';

import { SampleErrorHandlerService } from './sample-error-handler.service';

describe('SampleErrorHandlerService', () => {
  let service: SampleErrorHandlerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SampleErrorHandlerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
