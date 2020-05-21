import { AgmCoreModule } from '@agm/core';
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
import { MDBBootstrapModule, ChartsModule } from 'angular-bootstrap-md';
import { ProduitCardComponent } from './produit-immobilier-details/produit-card/produit-card.component';
import { ProduitChartComponent } from './produit-immobilier-details/produit-card/produit-chart/produit-chart.component';

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
    ProductLightComponent,
    ProduitCardComponent,
    ProduitChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    HttpClientModule,
    ChartsModule,
    AgmCoreModule,
    MDBBootstrapModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyA3nptWFYQVNZFsBws0egtBoEzbv-Qye_Q'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
