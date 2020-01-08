import { Component, OnInit, Input } from '@angular/core';
import { AdministrateurDTO } from '../api/models';

@Component({
  selector: 'app-affichage-administrateur',
  templateUrl: './affichage-administrateur.component.html',
  styleUrls: ['./affichage-administrateur.component.css']
})
export class AffichageAdministrateurComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() administrateur : AdministrateurDTO;

}
