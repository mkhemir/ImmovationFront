import {Component, Input, OnInit} from '@angular/core';
import {ResultatMhDTO} from "../../../models/resultat-mh-dto";
import {ResultatMalrauxDTO} from "../../../models/resultat-malraux-dto";

@Component({
  selector: 'app-produit-card-malraux',
  templateUrl: './produit-card-malraux.component.html',
  styleUrls: ['./produit-card-malraux.component.scss']
})
export class ProduitCardMalrauxComponent implements OnInit {
  @Input() cardTitle : string;
  @Input() malraux: ResultatMalrauxDTO;
  @Input() rang : number;
  public chartDatasets: Array<any> ;
  public chartType : string;
  public chartLabels: Array<any> ; //= [ 'Yellow', 'Grey', 'Dark Grey'];
  public chartColors: Array<any> ;
  constructor() { }

  ngOnInit() {
    this.chartType = 'pie';
    this.chartDatasets = [
      {data: [ this.malraux.coutTravaux, this.malraux.mensualiteCredit, this.malraux.economyImpots], label: 'Bouvard'}
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
