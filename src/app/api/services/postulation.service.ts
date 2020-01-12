/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { PostulationDTO } from '../models/postulation-dto';
import { PostulationResumeDTOPagedResult } from '../models/postulation-resume-dtopaged-result';
@Injectable({
  providedIn: 'root',
})
class PostulationService extends __BaseService {
  static readonly getPostulationIdPath = '/Postulation/{id}';
  static readonly putPostulationIdPath = '/Postulation/{id}';
  static readonly deletePostulationIdPath = '/Postulation/{id}';
  static readonly getPostulationMesPostulationsLignePath = '/Postulation/mesPostulations/{ligne}';
  static readonly getPostulationPostulationsLignePath = '/Postulation/postulations/{ligne}';
  static readonly getPostulationIdLignePath = '/Postulation/{id}/{ligne}';
  static readonly postPostulationIdPath = '/Postulation/{Id}';

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
  getPostulationIdResponse(id: number): __Observable<__StrictHttpResponse<PostulationDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/Postulation/${id}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<PostulationDTO>;
      })
    );
  }
  /**
   * @param id undefined
   * @return Success
   */
  getPostulationId(id: number): __Observable<PostulationDTO> {
    return this.getPostulationIdResponse(id).pipe(
      __map(_r => _r.body as PostulationDTO)
    );
  }

  /**
   * @param id undefined
   * @return Success
   */
  putPostulationIdResponse(id: number): __Observable<__StrictHttpResponse<PostulationDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/Postulation/${id}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<PostulationDTO>;
      })
    );
  }
  /**
   * @param id undefined
   * @return Success
   */
  putPostulationId(id: number): __Observable<PostulationDTO> {
    return this.putPostulationIdResponse(id).pipe(
      __map(_r => _r.body as PostulationDTO)
    );
  }

  /**
   * @param id undefined
   */
  deletePostulationIdResponse(id: number): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/Postulation/${id}`,
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
  deletePostulationId(id: number): __Observable<null> {
    return this.deletePostulationIdResponse(id).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param ligne undefined
   * @return Success
   */
  getPostulationMesPostulationsLigneResponse(ligne: number): __Observable<__StrictHttpResponse<PostulationResumeDTOPagedResult>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/Postulation/mesPostulations/${ligne}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<PostulationResumeDTOPagedResult>;
      })
    );
  }
  /**
   * @param ligne undefined
   * @return Success
   */
  getPostulationMesPostulationsLigne(ligne: number): __Observable<PostulationResumeDTOPagedResult> {
    return this.getPostulationMesPostulationsLigneResponse(ligne).pipe(
      __map(_r => _r.body as PostulationResumeDTOPagedResult)
    );
  }

  /**
   * @param ligne undefined
   * @return Success
   */
  getPostulationPostulationsLigneResponse(ligne: number): __Observable<__StrictHttpResponse<PostulationResumeDTOPagedResult>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/Postulation/postulations/${ligne}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<PostulationResumeDTOPagedResult>;
      })
    );
  }
  /**
   * @param ligne undefined
   * @return Success
   */
  getPostulationPostulationsLigne(ligne: number): __Observable<PostulationResumeDTOPagedResult> {
    return this.getPostulationPostulationsLigneResponse(ligne).pipe(
      __map(_r => _r.body as PostulationResumeDTOPagedResult)
    );
  }

  /**
   * @param params The `PostulationService.GetPostulationIdLigneParams` containing the following parameters:
   *
   * - `ligne`:
   *
   * - `id`:
   *
   * @return Success
   */
  getPostulationIdLigneResponse(params: PostulationService.GetPostulationIdLigneParams): __Observable<__StrictHttpResponse<PostulationResumeDTOPagedResult>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/Postulation/${params.id}/${params.ligne}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<PostulationResumeDTOPagedResult>;
      })
    );
  }
  /**
   * @param params The `PostulationService.GetPostulationIdLigneParams` containing the following parameters:
   *
   * - `ligne`:
   *
   * - `id`:
   *
   * @return Success
   */
  getPostulationIdLigne(params: PostulationService.GetPostulationIdLigneParams): __Observable<PostulationResumeDTOPagedResult> {
    return this.getPostulationIdLigneResponse(params).pipe(
      __map(_r => _r.body as PostulationResumeDTOPagedResult)
    );
  }

  /**
   * @param id undefined
   * @return Success
   */
  postPostulationIdResponse(id: number): __Observable<__StrictHttpResponse<PostulationDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/Postulation/${id}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<PostulationDTO>;
      })
    );
  }
  /**
   * @param id undefined
   * @return Success
   */
  postPostulationId(id: number): __Observable<PostulationDTO> {
    return this.postPostulationIdResponse(id).pipe(
      __map(_r => _r.body as PostulationDTO)
    );
  }
}

module PostulationService {

  /**
   * Parameters for getPostulationIdLigne
   */
  export interface GetPostulationIdLigneParams {
    ligne: number;
    id: number;
  }
}

export { PostulationService }
