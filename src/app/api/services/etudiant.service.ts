/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { EtudiantDTOPagedResult } from '../models/etudiant-dtopaged-result';
import { EtudiantResumeDTOPagedResult } from '../models/etudiant-resume-dtopaged-result';
import { EtudiantDTO } from '../models/etudiant-dto';
@Injectable({
  providedIn: 'root',
})
class EtudiantService extends __BaseService {
  static readonly getEtudiantPageLignePath = '/Etudiant/page/{ligne}';
  static readonly getEtudiantSignalementPageLignePath = '/Etudiant/signalement/page/{ligne}';
  static readonly getEtudiantIdPath = '/Etudiant/{id}';
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
  getEtudiantPageLigneResponse(ligne: number): __Observable<__StrictHttpResponse<EtudiantDTOPagedResult>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/Etudiant/page/${ligne}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<EtudiantDTOPagedResult>;
      })
    );
  }
  /**
   * @param ligne undefined
   * @return Success
   */
  getEtudiantPageLigne(ligne: number): __Observable<EtudiantDTOPagedResult> {
    return this.getEtudiantPageLigneResponse(ligne).pipe(
      __map(_r => _r.body as EtudiantDTOPagedResult)
    );
  }

  /**
   * @param ligne undefined
   * @return Success
   */
  getEtudiantSignalementPageLigneResponse(ligne: number): __Observable<__StrictHttpResponse<EtudiantResumeDTOPagedResult>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/Etudiant/signalement/page/${ligne}`,
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
  getEtudiantSignalementPageLigne(ligne: number): __Observable<EtudiantResumeDTOPagedResult> {
    return this.getEtudiantSignalementPageLigneResponse(ligne).pipe(
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
