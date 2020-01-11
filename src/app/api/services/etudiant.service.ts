/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { EtudiantResumeDTOPagedResult } from '../models/etudiant-resume-dtopaged-result';
import { EtudiantDTO } from '../models/etudiant-dto';
@Injectable({
  providedIn: 'root',
})
class EtudiantService extends __BaseService {
  static readonly getEtudiantSignalementLignePath = '/Etudiant/signalement/{ligne}';
  static readonly getEtudiantIdPath = '/Etudiant/{id}';
  static readonly putEtudiantIdPath = '/Etudiant/{id}';
  static readonly deleteEtudiantIdPath = '/Etudiant/{id}';
  static readonly postEtudiantPath = '/Etudiant';
  static readonly putEtudiantPath = '/Etudiant';

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
  getEtudiantSignalementLigneResponse(ligne: number): __Observable<__StrictHttpResponse<EtudiantResumeDTOPagedResult>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/Etudiant/signalement/${ligne}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<EtudiantResumeDTOPagedResult>;
      })
    );
  }
  /**
   * @param ligne undefined
   * @return Success
   */
  getEtudiantSignalementLigne(ligne: number): __Observable<EtudiantResumeDTOPagedResult> {
    return this.getEtudiantSignalementLigneResponse(ligne).pipe(
      __map(_r => _r.body as EtudiantResumeDTOPagedResult)
    );
  }

  /**
   * @param id undefined
   * @return Success
   */
  getEtudiantIdResponse(id: string): __Observable<__StrictHttpResponse<EtudiantDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/Etudiant/${id}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<EtudiantDTO>;
      })
    );
  }
  /**
   * @param id undefined
   * @return Success
   */
  getEtudiantId(id: string): __Observable<EtudiantDTO> {
    return this.getEtudiantIdResponse(id).pipe(
      __map(_r => _r.body as EtudiantDTO)
    );
  }

  /**
   * @param id undefined
   */
  putEtudiantIdResponse(id: string): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/Etudiant/${id}`,
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
  putEtudiantId(id: string): __Observable<null> {
    return this.putEtudiantIdResponse(id).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param id undefined
   */
  deleteEtudiantIdResponse(id: number): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/Etudiant/${id}`,
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
  deleteEtudiantId(id: number): __Observable<null> {
    return this.deleteEtudiantIdResponse(id).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param body undefined
   * @return Success
   */
  postEtudiantResponse(body?: EtudiantDTO): __Observable<__StrictHttpResponse<EtudiantDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/Etudiant`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<EtudiantDTO>;
      })
    );
  }
  /**
   * @param body undefined
   * @return Success
   */
  postEtudiant(body?: EtudiantDTO): __Observable<EtudiantDTO> {
    return this.postEtudiantResponse(body).pipe(
      __map(_r => _r.body as EtudiantDTO)
    );
  }

  /**
   * @param body undefined
   * @return Success
   */
  putEtudiantResponse(body?: EtudiantDTO): __Observable<__StrictHttpResponse<EtudiantDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/Etudiant`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<EtudiantDTO>;
      })
    );
  }
  /**
   * @param body undefined
   * @return Success
   */
  putEtudiant(body?: EtudiantDTO): __Observable<EtudiantDTO> {
    return this.putEtudiantResponse(body).pipe(
      __map(_r => _r.body as EtudiantDTO)
    );
  }
}

module EtudiantService {
}

export { EtudiantService }
