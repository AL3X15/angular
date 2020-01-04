import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { FormulaireEntrepriseComponent } from './formulaire-entreprise/formulaire-entreprise.component';
import { FormulaireAnnonceComponent } from './formulaire-annonce/formulaire-annonce.component';
import { AuthorisationGuard } from './guard/authorisation.guard';
import { PostulationComponent } from './postulation/postulation.component';


const routes: Routes = [
	{
		path: "acceuil",
		component: AcceuilComponent,
	},{
		path: "entreprise",
		component: FormulaireEntrepriseComponent,
	},{
		path: "annonce",
		component: FormulaireAnnonceComponent,
		canActivate: [AuthorisationGuard],
	},{
		path: "postulation",
		component: PostulationComponent,
		canActivate: [AuthorisationGuard],
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
