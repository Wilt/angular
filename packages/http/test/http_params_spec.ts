/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { HttpParams } from '@angular/common/http';

describe('HttpParams', () => {

  it('should encode single string value correctly to query string', () => {
    const object = { foo: 'bar' };
    const httpParams = new HttpParams({
      fromObject:  object,
    });
    const result = httpParams.toString();
    return expect(result).toBe('foo=bar');
  });

  it('should encode single value in array correctly to query string', () => {
    const object = { foo: ['bar'] };
    const httpParams = new HttpParams({
      fromObject:  object,
    });
    const result = httpParams.toString();
    // TODO: Consider if result should actually be foo[]=bar in this case
    return expect(result).toBe('foo=bar');
  });

  it('should encode several values in array correctly to query string', () => {
    const object = { foo: ['bar1', 'bar2'] };
    const httpParams = new HttpParams({
      fromObject:  object,
    });
    const result = httpParams.toString();
    return expect(result).toBe('foo[]=bar1&foo[]=bar2');
  });

});
