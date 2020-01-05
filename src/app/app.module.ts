import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Provider, forwardRef } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { FormulaireEntrepriseComponent } from './formulaire-entreprise/formulaire-entreprise.component';
import { FormulaireAnnonceComponent } from './formulaire-annonce/formulaire-annonce.component';
import { MenuComponent } from './menu/menu.component';
import { ApiModule } from './api/api.module';
import { ApiInterceptor } from './ApiInterceptor';
import { PostulationComponent } from './postulation/postulation.component';
import { SignalementComponent } from './signalement/signalement.component';
import { ListeAnnonceComponent } from './liste-annonce/liste-annonce.component';
import { FormulaireAdministrateurComponent } from './formulaire-administrateur/formulaire-administrateur.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AffichageProfilComponent } from './affichage-profil/affichage-profil.component';
import { FormulaireChangelentPasswordComponent } from './formulaire-changelent-password/formulaire-changelent-password.component';


export const API_INTERCEPTOR_PROVIDER: Provider = {
	provide: HTTP_INTERCEPTORS,
	useExisting: forwardRef(() => ApiInterceptor),
	multi: true
};

@NgModule({
	declarations: [
		AppComponent,
		AcceuilComponent,
		FormulaireEntrepriseComponent,
		FormulaireAnnonceComponent,
		MenuComponent,
		PostulationComponent,
		SignalementComponent,
		ListeAnnonceComponent,
		FormulaireAdministrateurComponent,
		AffichageProfilComponent,
		FormulaireChangelentPasswordComponent
	],
	imports: [
		BrowserModule,
		NgbModule,
		AppRoutingModule,
		HttpClientModule,
		ReactiveFormsModule,
		NoopAnimationsModule,
		ApiModule.forRoot({rootUrl : "http://localhost:5000"})
	],
	providers: [ApiInterceptor,
		API_INTERCEPTOR_PROVIDER],
	bootstrap: [AppComponent]
})
export class AppModule { }
