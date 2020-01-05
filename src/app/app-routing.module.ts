import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { FormulaireEntrepriseComponent } from './formulaire-entreprise/formulaire-entreprise.component';
import { FormulaireAnnonceComponent } from './formulaire-annonce/formulaire-annonce.component';
import { AuthorisationGuard } from './guard/authorisation.guard';
import { PostulationComponent } from './postulation/postulation.component';
import { SignalementComponent } from './signalement/signalement.component';
import { ListeAnnonceComponent } from './liste-annonce/liste-annonce.component';
import { EntrepriseGuard } from './guard/entreprise.guard';
import { AdministrateurGuard } from './guard/administrateur.guard';
import { FormulaireAdministrateurComponent } from './formulaire-administrateur/formulaire-administrateur.component';
import { AffichageProfilComponent } from './affichage-profil/affichage-profil.component';
import { FormulaireChangelentPasswordComponent } from './formulaire-changelent-password/formulaire-changelent-password.component';



const routes: Routes = [
	{
		path: "acceuil",
		component: AcceuilComponent,
	},{
		path: "entrepriseForm",
		component: FormulaireEntrepriseComponent,
	},{
		path: "annonce",
		component: FormulaireAnnonceComponent,
		canActivate: [AuthorisationGuard,EntrepriseGuard],
	},{
		path: "postulation",
		component: PostulationComponent,
		canActivate: [AuthorisationGuard,EntrepriseGuard],
	},{
		path: "signalement",
		component: SignalementComponent,
		canActivate: [AuthorisationGuard,AdministrateurGuard],
	},{
		path: "administrateurForm",
		component: FormulaireAdministrateurComponent,
		canActivate: [AuthorisationGuard,AdministrateurGuard],
	},{
		path: "mesAnnonces",
		component: ListeAnnonceComponent,
		canActivate: [AuthorisationGuard,EntrepriseGuard],
	},{
		path: "profil",
		component: AffichageProfilComponent,
		canActivate: [AuthorisationGuard],
	},{
		path: "modifPassword",
		component: FormulaireChangelentPasswordComponent,
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
