/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SendemailtemplateService } from './sendemailtemplate.service';

describe('Service: Sendemailtemplate', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SendemailtemplateService]
    });
  });

  it('should ...', inject([SendemailtemplateService], (service: SendemailtemplateService) => {
    expect(service).toBeTruthy();
  }));
});
