/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SendsmsService } from './sendsms.service';

describe('Service: Sendsms', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SendsmsService]
    });
  });

  it('should ...', inject([SendsmsService], (service: SendsmsService) => {
    expect(service).toBeTruthy();
  }));
});
