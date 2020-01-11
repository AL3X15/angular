/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { EntrepriseResumeDTOPagedResult } from '../models/entreprise-resume-dtopaged-result';
import { EntrepriseDTO } from '../models/entreprise-dto';
@Injectable({
  providedIn: 'root',
})
class EntrepriseService extends __BaseService {
  static readonly getEntrepriseSignalementLignePath = '/Entreprise/signalement/{ligne}';
  static readonly getEntrepriseIdPath = '/Entreprise/{id}';
  static readonly putEntrepriseIdPath = '/Entreprise/{id}';
  static readonly deleteEntrepriseIdPath = '/Entreprise/{id}';
  static readonly getEntreprisePath = '/Entreprise';
  static readonly postEntreprisePath = '/Entreprise';
  static readonly putEntreprisePath = '/Entreprise';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @param ligne undefined
   * @return Success
   */
  getEntrepriseSignalementLigneResponse(ligne: number): __Observable<__StrictHttpResponse<EntrepriseResumeDTOPagedResult>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/Entreprise/signalement/${ligne}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<EntrepriseResumeDTOPagedResult>;
      })
    );
  }
  /**
   * @param ligne undefined
   * @return Success
   */
  getEntrepriseSignalementLigne(ligne: number): __Observable<EntrepriseResumeDTOPagedResult> {
    return this.getEntrepriseSignalementLigneResponse(ligne).pipe(
      __map(_r => _r.body as EntrepriseResumeDTOPagedResult)
    );
  }

  /**
   * @param id undefined
   * @return Success
   */
  getEntrepriseIdResponse(id: string): __Observable<__StrictHttpResponse<EntrepriseDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/Entreprise/${id}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<EntrepriseDTO>;
      })
    );
  }
  /**
   * @param id undefined
   * @return Success
   */
  getEntrepriseId(id: string): __Observable<EntrepriseDTO> {
    return this.getEntrepriseIdResponse(id).pipe(
      __map(_r => _r.body as EntrepriseDTO)
    );
  }

  /**
   * @param id undefined
   */
  putEntrepriseIdResponse(id: string): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/Entreprise/${id}`,
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
  putEntrepriseId(id: string): __Observable<null> {
    return this.putEntrepriseIdResponse(id).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param id undefined
   */
  deleteEntrepriseIdResponse(id: number): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/Entreprise/${id}`,
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
  deleteEntrepriseId(id: number): __Observable<null> {
    return this.deleteEntrepriseIdResponse(id).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @return Success
   */
  getEntrepriseResponse(): __Observable<__StrictHttpResponse<EntrepriseDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/Entreprise`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<EntrepriseDTO>;
      })
    );
  }
  /**
   * @return Success
   */
  getEntreprise(): __Observable<EntrepriseDTO> {
    return this.getEntrepriseResponse().pipe(
      __map(_r => _r.body as EntrepriseDTO)
    );
  }

  /**
   * @param body undefined
   * @return Success
   */
  postEntrepriseResponse(body?: EntrepriseDTO): __Observable<__StrictHttpResponse<EntrepriseDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/Entreprise`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<EntrepriseDTO>;
      })
    );
  }
  /**
   * @param body undefined
   * @return Success
   */
  postEntreprise(body?: EntrepriseDTO): __Observable<EntrepriseDTO> {
    return this.postEntrepriseResponse(body).pipe(
      __map(_r => _r.body as EntrepriseDTO)
    );
  }

  /**
   * @param body undefined
   * @return Success
   */
  putEntrepriseResponse(body?: EntrepriseDTO): __Observable<__StrictHttpResponse<EntrepriseDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/Entreprise`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<EntrepriseDTO>;
      })
    );
  }
  /**
   * @param body undefined
   * @return Success
   */
  putEntreprise(body?: EntrepriseDTO): __Observable<EntrepriseDTO> {
    return this.putEntrepriseResponse(body).pipe(
      __map(_r => _r.body as EntrepriseDTO)
    );
  }
}

module EntrepriseService {
}

export { EntrepriseService }
