/* tslint:disable */
import { NgModule, ModuleWithProviders } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ApiConfiguration, ApiConfigurationInterface } from './api-configuration';

import { AdministrateurService } from './services/administrateur.service';
import { AnnonceService } from './services/annonce.service';
import { EntrepriseService } from './services/entreprise.service';
import { EtudiantService } from './services/etudiant.service';
import { FaqService } from './services/faq.service';
import { JwtService } from './services/jwt.service';
import { PasswordService } from './services/password.service';
import { PostulationService } from './services/postulation.service';
import { TagService } from './services/tag.service';

/**
 * Provider for all Api services, plus ApiConfiguration
 */
@NgModule({
  imports: [
    HttpClientModule
  ],
  exports: [
    HttpClientModule
  ],
  declarations: [],
  providers: [
    ApiConfiguration,
    AdministrateurService,
    AnnonceService,
    EntrepriseService,
    EtudiantService,
    FaqService,
    JwtService,
    PasswordService,
    PostulationService,
    TagService
  ],
})
export class ApiModule {
  static forRoot(customParams: ApiConfigurationInterface): ModuleWithProviders {
    return {
      ngModule: ApiModule,
      providers: [
        {
          provide: ApiConfiguration,
          useValue: {rootUrl: customParams.rootUrl}
        }
      ]
    }
  }
}
