import {Component, Input, OnInit} from '@angular/core';
import {ProduitImmobilierDTO} from '../../models/produit-immobilier-dto';

@Component({
  selector: 'app-produit-card',
  templateUrl: './produit-card.component.html',
  styleUrls: ['./produit-card.component.scss']
})
export class ProduitCardComponent implements OnInit {
  @Input() produit: ProduitImmobilierDTO;
  constructor() { }

  ngOnInit() {
  }

}
