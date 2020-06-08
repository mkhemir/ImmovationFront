import {Component, Input, OnInit} from '@angular/core';
import {ResultatLoiPinelDTO} from "../../../models/resultat-loiPinel-dto";

@Component({
  selector: 'app-produit-card-lmnp',
  templateUrl: './produit-card-lmnp.component.html',
  styleUrls: ['./produit-card-lmnp.component.scss']
})
export class ProduitCardLmnpComponent implements OnInit {
  @Input() lmnp: ResultatLoiPinelDTO;
  @Input() cardTitle : string;
  public chartDatasets: Array<any> ;
  public chartType : string;
  public chartLabels: Array<any> ; //= [ 'Yellow', 'Grey', 'Dark Grey'];
  public chartColors: Array<any> ;
  constructor() { }

  ngOnInit() {
    this.chartType = 'pie';
    this.chartDatasets = [
      {data: [ this.lmnp.loyerMaximum, this.lmnp.economyImpots, this.lmnp.mensualiteCredit], label: 'lmnp'}
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
