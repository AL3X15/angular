/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { Entreprise } from '../models/entreprise';
@Injectable({
  providedIn: 'root',
})
class EnrepriseService extends __BaseService {
  static readonly getEnreprisePath = '/Enreprise';
  static readonly postEnreprisePath = '/Enreprise';
  static readonly putEnreprisePath = '/Enreprise';
  static readonly getEnrepriseIdPath = '/Enreprise/{id}';
  static readonly deleteEnrepriseIdPath = '/Enreprise/{id}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @return Success
   */
  getEnrepriseResponse(): __Observable<__StrictHttpResponse<Array<Entreprise>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/Enreprise`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<Entreprise>>;
      })
    );
  }
  /**
   * @return Success
   */
  getEnreprise(): __Observable<Array<Entreprise>> {
    return this.getEnrepriseResponse().pipe(
      __map(_r => _r.body as Array<Entreprise>)
    );
  }

  /**
   * @param body undefined
   * @return Success
   */
  postEnrepriseResponse(body?: Entreprise): __Observable<__StrictHttpResponse<Entreprise>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/Enreprise`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Entreprise>;
      })
    );
  }
  /**
   * @param body undefined
   * @return Success
   */
  postEnreprise(body?: Entreprise): __Observable<Entreprise> {
    return this.postEnrepriseResponse(body).pipe(
      __map(_r => _r.body as Entreprise)
    );
  }

  /**
   * @param body undefined
   * @return Success
   */
  putEnrepriseResponse(body?: Entreprise): __Observable<__StrictHttpResponse<Entreprise>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/Enreprise`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Entreprise>;
      })
    );
  }
  /**
   * @param body undefined
   * @return Success
   */
  putEnreprise(body?: Entreprise): __Observable<Entreprise> {
    return this.putEnrepriseResponse(body).pipe(
      __map(_r => _r.body as Entreprise)
    );
  }

  /**
   * @param id undefined
   * @return Success
   */
  getEnrepriseIdResponse(id: number): __Observable<__StrictHttpResponse<Entreprise>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/Enreprise/${id}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Entreprise>;
      })
    );
  }
  /**
   * @param id undefined
   * @return Success
   */
  getEnrepriseId(id: number): __Observable<Entreprise> {
    return this.getEnrepriseIdResponse(id).pipe(
      __map(_r => _r.body as Entreprise)
    );
  }

  /**
   * @param id undefined
   */
  deleteEnrepriseIdResponse(id: number): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/Enreprise/${id}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * @param id undefined
   */
  deleteEnrepriseId(id: number): __Observable<null> {
    return this.deleteEnrepriseIdResponse(id).pipe(
      __map(_r => _r.body as null)
    );
  }
}

module EnrepriseService {
}

export { EnrepriseService }
