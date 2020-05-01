import {Component, Input, OnInit} from '@angular/core';
import {ProduitImmobilierDTO} from '../models/produit-immobilier-dto';

@Component({
  selector: 'app-product-light',
  templateUrl: './product-light.component.html',
  styleUrls: ['./product-light.component.scss']
})
export class ProductLightComponent implements OnInit {
   @Input() produit: ProduitImmobilierDTO;
  constructor() { }

  ngOnInit() {
  }

}
