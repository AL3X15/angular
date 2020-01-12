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
                console.log(err);
                // Handle this err
                switch (err.status) {
                    case 400:
                        alert(err.error);
                        break;
                    case 401:
                        alert("non identifié");
                        break;
                    case 403:
                        alert("acces interdit");
                        break;
                    case 404: 
                        alert("pas trouvé");
                        break;
                    case 409:
                        alert("risque d'acces concurent");
                        break;
                    case 500:
                        alert("erreur server");
                        break;
                    case 502:
                        alert("bad gateway");
                        break;
                    case 503:
                        alert("service unavailable");
                        break;
                    default:
                        alert("erreur inconue");
                        break;
                }
            })
        );
    }
}