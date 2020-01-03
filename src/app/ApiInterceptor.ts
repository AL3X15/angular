import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpRequest, HttpHandler } from '@angular/common/http';
import { UtilisateurService } from './service/utilisateur.service';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class ApiInterceptor implements HttpInterceptor {
    /**
     *
     */
    constructor(private service: UtilisateurService) {

    }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // Apply the headers
        //TODO atacher le token
        if (this.service.estAuthentifie()) {
            req = req.clone({
                setHeaders: {
                    'Authorization': `bearer ${this.service.getToken().access_token}`
                }
            });
        }
        // Also handle errors globally
        return next.handle(req).pipe(
            tap(x => x, err => {
                // Handle this err
                //TODO intercepter les erreurs

                //if(err.status == 401)
                //    alert("pas authentifié");
                console.log(err);
            })
        );
    }
}