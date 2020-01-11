import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { FormulaireEntrepriseComponent } from './formulaire-entreprise/formulaire-entreprise.component';
import { FormulaireAnnonceComponent } from './formulaire-annonce/formulaire-annonce.component';
import { AuthorisationGuard } from './guard/authorisation.guard';
import { PostulationComponent } from './postulation/postulation.component';
import { ListeAnnonceComponent } from './liste-annonce/liste-annonce.component';
import { EntrepriseGuard } from './guard/entreprise.guard';
import { AdministrateurGuard } from './guard/administrateur.guard';
import { FormulaireAdministrateurComponent } from './formulaire-administrateur/formulaire-administrateur.component';
import { AffichageProfilComponent } from './affichage-profil/affichage-profil.component';
import { FormulaireChangelentPasswordComponent } from './formulaire-changelent-password/formulaire-changelent-password.component';
import { SignalementEntrepriseComponent } from './signalement-entreprise/signalement-entreprise.component';
import { SignalementEtudiantComponent } from './signalement-etudiant/signalement-etudiant.component';
import { AffichageSignalementComponent } from './affichage-signalement/affichage-signalement.component';
import { EntrepriseSignalementResolver } from './resolver/EntrepriseSignalementResolver';
import { EtudiantSignalementResolver } from './resolver/EtudiantSignalementResolver';
import { TagsResolver } from './resolver/tagsResolver';
import { AnnonceResolver } from './resolver/AnnonceResolver';
import { AffichageAnnonceComponent } from './affichage-annonce/affichage-annonce.component';



const routes: Routes = [
	{
		path: "acceuil",
		component: AcceuilComponent,
	},{
		path: "entrepriseForm",
		component: FormulaireEntrepriseComponent,
	},{
		path: "annonceForm",
		component: FormulaireAnnonceComponent,
		canActivate: [AuthorisationGuard,EntrepriseGuard],
		resolve: { tags : TagsResolver}
	},{
		path: "annonce",
		component: AffichageAnnonceComponent,
		canActivate: [AuthorisationGuard,EntrepriseGuard],
	},{		
		path: "postulation",
		component: PostulationComponent,
		canActivate: [AuthorisationGuard,EntrepriseGuard],
	},{
		path: "signalement/entreprise",
		component: SignalementEntrepriseComponent,
		canActivate: [AuthorisationGuard,AdministrateurGuard],
		resolve: { page: EntrepriseSignalementResolver }
	},{
		path: "signalement/etudiant",
		component: SignalementEtudiantComponent,
		canActivate: [AuthorisationGuard,AdministrateurGuard],
		resolve: { page: EtudiantSignalementResolver }
	},{
		path: "administrateurForm",
		component: FormulaireAdministrateurComponent,
		canActivate: [AuthorisationGuard,AdministrateurGuard],
	},{
		path: "mesAnnonces",
		component: ListeAnnonceComponent,
		canActivate: [AuthorisationGuard,EntrepriseGuard],
		resolve: { page : AnnonceResolver }
	},{
		path: "profil",
		component: AffichageProfilComponent,
		canActivate: [AuthorisationGuard],
	},{
		path: "modifPassword",
		component: FormulaireChangelentPasswordComponent,
		canActivate: [AuthorisationGuard],
	},{
		path: "signalement/detail",
		component: AffichageSignalementComponent,
		canActivate: [AuthorisationGuard,AdministrateurGuard],
	},{
		path: "",
		redirectTo: "/acceuil",
		pathMatch: "full"
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
	providers: [
		EntrepriseSignalementResolver,
		EtudiantSignalementResolver,
		AnnonceResolver,
		TagsResolver

	]
})

export class AppRoutingModule { }
