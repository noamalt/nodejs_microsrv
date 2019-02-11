/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PhonevalidatorService } from './phonevalidator.service';

describe('Service: Phonevalidator', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PhonevalidatorService]
    });
  });

  it('should ...', inject([PhonevalidatorService], (service: PhonevalidatorService) => {
    expect(service).toBeTruthy();
  }));
});
