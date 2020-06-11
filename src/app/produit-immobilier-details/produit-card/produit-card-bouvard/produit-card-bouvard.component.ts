import {Component, Input, OnInit} from '@angular/core';
import {ResultatBouvardDTO} from "../../../models/resultat-bouvard-dto";

@Component({
  selector: 'app-produit-card-bouvard',
  templateUrl: './produit-card-bouvard.component.html',
  styleUrls: ['./produit-card-bouvard.component.scss']
})
export class ProduitCardBouvardComponent implements OnInit {
  @Input() bouvard: ResultatBouvardDTO;
  @Input() cardTitle : string;
  @Input() rang : number;
  public chartDatasets: Array<any> ;
  public chartType : string;
  public chartLabels: Array<any> ; //= [ 'Yellow', 'Grey', 'Dark Grey'];
  public chartColors: Array<any> ;
  constructor() { }

  ngOnInit() {
    this.chartType = 'pie';
    this.chartDatasets = [
      {data: [ this.bouvard.economyImpots, this.bouvard.mensualiteCredit, this.bouvard.montantTvaRecuperee], label: 'Bouvard'}
    ];
    this.chartLabels = [];
    this.chartColors = [
      {
        backgroundColor: [ '#ECB608', '#BCBCBC', '#212121'],
        hoverBackgroundColor: [ '#FFC870', '#A8B3C5', '#616774'],
        borderWidth: 2,
      }
    ];
  }
}
