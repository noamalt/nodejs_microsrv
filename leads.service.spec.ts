/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { LeadsService } from './leads.service';

describe('Service: Leads', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LeadsService]
    });
  });

  it('should ...', inject([LeadsService], (service: LeadsService) => {
    expect(service).toBeTruthy();
  }));
});
