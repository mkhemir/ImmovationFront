import {AfterViewInit, Component, OnInit} from '@angular/core';
import {ProduitImmobilierDTO} from '../models/produit-immobilier-dto';
import {Search} from '../models/Search';
import {Router} from '@angular/router';
import {ListProduitImmobilierService} from '../list-produit-immobilier/list-produit-immobilier.service';

@Component({
  selector: 'app-produit-immobilier-details',
  templateUrl: 'produit-immobilier-details.component.html',
})

export class ProduitImmobilierDetailsComponent implements OnInit {

  private annonces: ProduitImmobilierDTO[] = [];
  private search: Search = null;
  constructor(private router: Router, private listProduitImmobilierService: ListProduitImmobilierService) { }


  ngOnInit() {
    this.listProduitImmobilierService.getListProduitImmobilierDTO(this.search).subscribe( result => this.annonces = result);
  }
}
