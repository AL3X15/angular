/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { TagDTO } from '../models/tag-dto';
@Injectable({
  providedIn: 'root',
})
class TagService extends __BaseService {
  static readonly getTagIdPath = '/Tag/{id}';
  static readonly getTagPath = '/Tag';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @param id undefined
   * @return Success
   */
  getTagIdResponse(id: string): __Observable<__StrictHttpResponse<Array<TagDTO>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/Tag/${id}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<TagDTO>>;
      })
    );
  }
  /**
   * @param id undefined
   * @return Success
   */
  getTagId(id: string): __Observable<Array<TagDTO>> {
    return this.getTagIdResponse(id).pipe(
      __map(_r => _r.body as Array<TagDTO>)
    );
  }

  /**
   * @return Success
   */
  getTagResponse(): __Observable<__StrictHttpResponse<Array<TagDTO>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/Tag`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<TagDTO>>;
      })
    );
  }
  /**
   * @return Success
   */
  getTag(): __Observable<Array<TagDTO>> {
    return this.getTagResponse().pipe(
      __map(_r => _r.body as Array<TagDTO>)
    );
  }
}

module TagService {
}

export { TagService }
