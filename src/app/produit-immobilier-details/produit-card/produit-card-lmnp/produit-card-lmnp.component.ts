import {Component, Input, OnInit} from '@angular/core';
import {ResultatLoiPinelDTO} from "../../../models/resultat-loiPinel-dto";
import {ResultatLmnpDto} from "../../../models/resultat-lmnp-dto";

@Component({
  selector: 'app-produit-card-lmnp',
  templateUrl: './produit-card-lmnp.component.html',
  styleUrls: ['./produit-card-lmnp.component.scss']
})
export class ProduitCardLmnpComponent implements OnInit {
  @Input() cardTitle : string;
  @Input() lmnp: ResultatLmnpDto;
  @Input() rang : number;
  public chartDatasets: Array<any> ;
  public chartType : string;
  public chartLabels: Array<any> ; //= [ 'Yellow', 'Grey', 'Dark Grey'];
  public chartColors: Array<any> ;
  constructor() { }

  ngOnInit() {
    this.chartType = 'pie';
    this.chartDatasets = [
      {data: [ this.lmnp.economyImpots, this.lmnp.mensualiteCredit, this.lmnp.loyerAnnuel], label: 'Bouvard'}
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
