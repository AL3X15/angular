/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { AdministrateurDTO } from '../models/administrateur-dto';
@Injectable({
  providedIn: 'root',
})
class AdministrateurService extends __BaseService {
  static readonly getAdministrateurIdPath = '/Administrateur/{id}';
  static readonly deleteAdministrateurIdPath = '/Administrateur/{id}';
  static readonly postAdministrateurPath = '/Administrateur';
  static readonly putAdministrateurPath = '/Administrateur';

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
  getAdministrateurIdResponse(id: number): __Observable<__StrictHttpResponse<AdministrateurDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/Administrateur/${id}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<AdministrateurDTO>;
      })
    );
  }
  /**
   * @param id undefined
   * @return Success
   */
  getAdministrateurId(id: number): __Observable<AdministrateurDTO> {
    return this.getAdministrateurIdResponse(id).pipe(
      __map(_r => _r.body as AdministrateurDTO)
    );
  }

  /**
   * @param id undefined
   */
  deleteAdministrateurIdResponse(id: number): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/Administrateur/${id}`,
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
  deleteAdministrateurId(id: number): __Observable<null> {
    return this.deleteAdministrateurIdResponse(id).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param body undefined
   * @return Success
   */
  postAdministrateurResponse(body?: AdministrateurDTO): __Observable<__StrictHttpResponse<AdministrateurDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/Administrateur`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<AdministrateurDTO>;
      })
    );
  }
  /**
   * @param body undefined
   * @return Success
   */
  postAdministrateur(body?: AdministrateurDTO): __Observable<AdministrateurDTO> {
    return this.postAdministrateurResponse(body).pipe(
      __map(_r => _r.body as AdministrateurDTO)
    );
  }

  /**
   * @param body undefined
   * @return Success
   */
  putAdministrateurResponse(body?: AdministrateurDTO): __Observable<__StrictHttpResponse<AdministrateurDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/Administrateur`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<AdministrateurDTO>;
      })
    );
  }
  /**
   * @param body undefined
   * @return Success
   */
  putAdministrateur(body?: AdministrateurDTO): __Observable<AdministrateurDTO> {
    return this.putAdministrateurResponse(body).pipe(
      __map(_r => _r.body as AdministrateurDTO)
    );
  }
}

module AdministrateurService {
}

export { AdministrateurService }
