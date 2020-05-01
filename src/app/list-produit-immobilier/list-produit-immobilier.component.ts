import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ListProduitImmobilierService} from './list-produit-immobilier.service';
import {Search} from '../models/Search';
import {ProduitImmobilierDTO} from '../models/produit-immobilier-dto';

@Component({
  selector: 'app-list-produit-immobilier',
  templateUrl: './list-produit-immobilier.component.html',
  styleUrls: ['./list-produit-immobilier.component.scss']
})
export class ListProduitImmobilierComponent implements OnInit {
  private annonces: ProduitImmobilierDTO[] = [];
  private search: Search = null;
  constructor(private router: Router, private listProduitImmobilierService: ListProduitImmobilierService) { }

  ngOnInit() {
    this.listProduitImmobilierService.getListProduitImmobilierDTO(this.search).subscribe( result => this.annonces = result);
  }

}
