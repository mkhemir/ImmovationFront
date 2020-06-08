import {Component, Input, OnInit} from '@angular/core';
import {ProduitImmobilierDTO} from "../../../models/produit-immobilier-dto";
import {DossierSimulationDTO} from "../../../models/dossier-simulation-dto";
import {ResultatLoiPinelDTO} from "../../../models/resultat-loiPinel-dto";

@Component({
  selector: 'app-produit-card-pinel',
  templateUrl: './produit-card-pinel.component.html',
  styleUrls: ['./produit-card-pinel.component.scss']
})
export class ProduitCardPinelComponent implements OnInit {
  @Input() pinel: ResultatLoiPinelDTO;
  @Input() cardTitle : string;
  public chartDatasets: Array<any> ;
  public chartType : string;
  public chartLabels: Array<any> ; //= [ 'Yellow', 'Grey', 'Dark Grey'];
  public chartColors: Array<any> ;
  constructor() { }

  ngOnInit() {
    this.chartType = 'pie';
    this.chartDatasets = [
      {data: [ this.pinel.loyerMaximum, this.pinel.economyImpots, this.pinel.mensualiteCredit], label: 'My First dataset'}
    ];
    this.chartLabels = [];
    this.chartColors = [
      {
        backgroundColor: [ '#FDB45C', '#949FB1', '#4D5360'],
        hoverBackgroundColor: [ '#FFC870', '#A8B3C5', '#616774'],
        borderWidth: 2,
      }
    ];
  }

}
