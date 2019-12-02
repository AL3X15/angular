import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { FormulaireEntrepriseComponent } from './formulaire-entreprise/formulaire-entreprise.component';
import { FormulaireAnnonceComponent } from './formulaire-annonce/formulaire-annonce.component';


const routes: Routes = [
	{
		path: "acceuil",
		component: AcceuilComponent,
		data: { title: "Details"}
	},{
		path: "entreprise",
		component: FormulaireEntrepriseComponent,
		data: {title : "Search"}
	},{
		path: "annonce",
		component: FormulaireAnnonceComponent,
		data: {title : "Search"}
	},{
		path: "",
		redirectTo: "/acceuil",
		pathMatch: "full"
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
