import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { FormulaireEntrepriseComponent } from './formulaire-entreprise/formulaire-entreprise.component';
import { FormulaireAnnonceComponent } from './formulaire-annonce/formulaire-annonce.component';
import { MenuComponent } from './menu/menu.component';
import { ApiModule } from './api/api.module';

@NgModule({
  declarations: [
    AppComponent,
    AcceuilComponent,
    FormulaireEntrepriseComponent,
    FormulaireAnnonceComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
	AppRoutingModule,
	HttpClientModule,
	ReactiveFormsModule,
	NoopAnimationsModule,
	ApiModule.forRoot({rootUrl : "http://localhost:5000"})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
