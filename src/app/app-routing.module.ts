import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InscriptionEntrepriseComponent } from './inscription-entreprise/inscription-entreprise.component';
import { AcceuilComponent } from './acceuil/acceuil.component';


const routes: Routes = [
	{
		path: "acceuil",
		component: AcceuilComponent,
		data: { title: "Details"}
	  },{
		path: "entreprise",
		component: InscriptionEntrepriseComponent,
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
