/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { AnnonceDTO } from '../models/annonce-dto';
import { CritereRechercheDTO } from '../models/critere-recherche-dto';
import { AnnonceResumeDTOPagedResult } from '../models/annonce-resume-dtopaged-result';
@Injectable({
  providedIn: 'root',
})
class AnnonceService extends __BaseService {
  static readonly getAnnoncePath = '/Annonce';
  static readonly postAnnoncePath = '/Annonce';
  static readonly getAnnonceIdPath = '/Annonce/{id}';
  static readonly deleteAnnonceIdPath = '/Annonce/{id}';
  static readonly getAnnonceMesAnnoncesLignePath = '/Annonce/mesAnnonces/{ligne}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @param body undefined
   * @return Success
   */
  getAnnonceResponse(body?: CritereRechercheDTO): __Observable<__StrictHttpResponse<Array<AnnonceDTO>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/Annonce`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<AnnonceDTO>>;
      })
    );
  }
  /**
   * @param body undefined
   * @return Success
   */
  getAnnonce(body?: CritereRechercheDTO): __Observable<Array<AnnonceDTO>> {
    return this.getAnnonceResponse(body).pipe(
      __map(_r => _r.body as Array<AnnonceDTO>)
    );
  }

  /**
   * @param body undefined
   * @return Success
   */
  postAnnonceResponse(body?: AnnonceDTO): __Observable<__StrictHttpResponse<AnnonceDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/Annonce`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<AnnonceDTO>;
      })
    );
  }
  /**
   * @param body undefined
   * @return Success
   */
  postAnnonce(body?: AnnonceDTO): __Observable<AnnonceDTO> {
    return this.postAnnonceResponse(body).pipe(
      __map(_r => _r.body as AnnonceDTO)
    );
  }

  /**
   * @param id undefined
   * @return Success
   */
  getAnnonceIdResponse(id: number): __Observable<__StrictHttpResponse<AnnonceDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/Annonce/${id}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<AnnonceDTO>;
      })
    );
  }
  /**
   * @param id undefined
   * @return Success
   */
  getAnnonceId(id: number): __Observable<AnnonceDTO> {
    return this.getAnnonceIdResponse(id).pipe(
      __map(_r => _r.body as AnnonceDTO)
    );
  }

  /**
   * @param id undefined
   * @return Success
   */
  deleteAnnonceIdResponse(id: number): __Observable<__StrictHttpResponse<AnnonceDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/Annonce/${id}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<AnnonceDTO>;
      })
    );
  }
  /**
   * @param id undefined
   * @return Success
   */
  deleteAnnonceId(id: number): __Observable<AnnonceDTO> {
    return this.deleteAnnonceIdResponse(id).pipe(
      __map(_r => _r.body as AnnonceDTO)
    );
  }

  /**
   * @param ligne undefined
   * @return Success
   */
  getAnnonceMesAnnoncesLigneResponse(ligne: number): __Observable<__StrictHttpResponse<AnnonceResumeDTOPagedResult>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/Annonce/mesAnnonces/${ligne}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<AnnonceResumeDTOPagedResult>;
      })
    );
  }
  /**
   * @param ligne undefined
   * @return Success
   */
  getAnnonceMesAnnoncesLigne(ligne: number): __Observable<AnnonceResumeDTOPagedResult> {
    return this.getAnnonceMesAnnoncesLigneResponse(ligne).pipe(
      __map(_r => _r.body as AnnonceResumeDTOPagedResult)
    );
  }
}

module AnnonceService {
}

export { AnnonceService }
