import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ListProduitImmobilierComponent } from './list-produit-immobilier/list-produit-immobilier.component';
import { ProduitImmobilierDetailsComponent } from './produit-immobilier-details/produit-immobilier-details.component';
import { HeaderComponent } from './header/header.component';
import { CommonModule } from '@angular/common';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import { HttpClientModule } from '@angular/common/http';
import { ProductLightComponent } from './product-light/product-light.component';

registerLocaleData(localeFr, 'fr');
declare var $: any;
console.log(`jQuery version: ${$.fn.jquery}`);


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ListProduitImmobilierComponent,
    ProduitImmobilierDetailsComponent,
    HeaderComponent,
    ProductLightComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
