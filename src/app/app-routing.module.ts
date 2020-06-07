import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListProduitImmobilierComponent } from './list-produit-immobilier/list-produit-immobilier.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ProduitImmobilierDetailsComponent } from './produit-immobilier-details/produit-immobilier-details.component';
const routes: Routes = [
  {
    path: '',
    redirectTo: '/homePage',
    pathMatch: 'full'
  },
  {
    path: 'homePage',
    component: HomePageComponent
  },
  {
    path: 'listProduitImmobilier',
    component: ListProduitImmobilierComponent
  },
  {
    path: 'details/:id',
    component: ProduitImmobilierDetailsComponent
  }
  ];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
