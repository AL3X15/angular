/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { AnnonceDTO } from '../models/annonce-dto';
import { EtudiantDTO } from '../models/etudiant-dto';
import { PostulationDTO } from '../models/postulation-dto';
@Injectable({
  providedIn: 'root',
})
class PostulationService extends __BaseService {
  static readonly getPostulationPath = '/Postulation';
  static readonly getPostulationIdPath = '/Postulation/id';
  static readonly postPostulationIdPath = '/Postulation/{Id}';
  static readonly putPostulationIdPath = '/Postulation/{id}';
  static readonly deletePostulationIdPath = '/Postulation/{id}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @return Success
   */
  getPostulationResponse(): __Observable<__StrictHttpResponse<Array<AnnonceDTO>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/Postulation`,
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
   * @return Success
   */
  getPostulation(): __Observable<Array<AnnonceDTO>> {
    return this.getPostulationResponse().pipe(
      __map(_r => _r.body as Array<AnnonceDTO>)
    );
  }

  /**
   * @param id undefined
   * @return Success
   */
  getPostulationIdResponse(id?: number): __Observable<__StrictHttpResponse<Array<EtudiantDTO>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (id != null) __params = __params.set('id', id.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/Postulation/id`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<EtudiantDTO>>;
      })
    );
  }
  /**
   * @param id undefined
   * @return Success
   */
  getPostulationId(id?: number): __Observable<Array<EtudiantDTO>> {
    return this.getPostulationIdResponse(id).pipe(
      __map(_r => _r.body as Array<EtudiantDTO>)
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
}

module PostulationService {
}

export { PostulationService }
