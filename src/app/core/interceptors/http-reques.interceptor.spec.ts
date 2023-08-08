import { TestBed } from '@angular/core/testing';

import { HttpRequesInterceptor } from './http-reques.interceptor';

describe('HttpRequesInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      HttpRequesInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: HttpRequesInterceptor = TestBed.inject(HttpRequesInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
