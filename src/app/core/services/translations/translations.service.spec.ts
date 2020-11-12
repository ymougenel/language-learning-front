/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TranslationsService } from './translations.service';

describe('TranslationsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TranslationsService]
    });
  });

  it('should ...', inject([TranslationsService], (service: TranslationsService) => {
    expect(service).toBeTruthy();
  }));
});
