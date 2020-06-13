import {Component, Input, OnInit} from '@angular/core';
import {ResultatBouvardDTO} from "../../../models/resultat-bouvard-dto";
import {DeficitFoncierDTO} from "../../../models/deficit-foncier-dto";

@Component({
  selector: 'app-produit-card-df',
  templateUrl: './produit-card-df.component.html',
  styleUrls: ['./produit-card-df.component.scss']
})
export class ProduitCardDfComponent implements OnInit {
  @Input() deficit: DeficitFoncierDTO;
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
      {data: [ this.deficit.economyImpots, this.deficit.mensualiteCredit, this.deficit.gainImpots], label: 'Bouvard'}
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
