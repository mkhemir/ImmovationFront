import {Component, Input, OnInit} from '@angular/core';
import {ResultatLmnpDto} from "../../../models/resultat-lmnp-dto";
import {ResultatMhDTO} from "../../../models/resultat-mh-dto";

@Component({
  selector: 'app-produit-card-mh',
  templateUrl: './produit-card-mh.component.html',
  styleUrls: ['./produit-card-mh.component.scss']
})
export class ProduitCardMhComponent implements OnInit {
  @Input() cardTitle : string;
  @Input() mh: ResultatMhDTO;
  @Input() rang : number;
  public chartDatasets: Array<any> ;
  public chartType : string;
  public chartLabels: Array<any> ; //= [ 'Yellow', 'Grey', 'Dark Grey'];
  public chartColors: Array<any> ;
  constructor() { }

  ngOnInit() {
    this.chartType = 'pie';
    this.chartDatasets = [
      {data: [ this.mh.coutTravaux, this.mh.mensualiteCredit, this.mh.economyImpotsInvest], label: 'Bouvard'}
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
