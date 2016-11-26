/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { OuraAPIManager } from './oura-apimanager.service';

describe('Service: OuraAPIManager', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OuraAPIManager]
    });
  });

  it('should ...', inject([OuraAPIManager], (service: OuraAPIManager) => {
    expect(service).toBeTruthy();
  }));
});
