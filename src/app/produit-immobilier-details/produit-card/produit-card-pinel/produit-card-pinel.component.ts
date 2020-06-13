import {Component, Input, OnInit} from '@angular/core';
import {ProduitImmobilierDTO} from "../../../models/produit-immobilier-dto";
import {DossierSimulationDTO} from "../../../models/dossier-simulation-dto";
import {ResultatLoiPinelDTO} from "../../../models/resultat-loiPinel-dto";
import {ResultatBouvardDTO} from "../../../models/resultat-bouvard-dto";

@Component({
  selector: 'app-produit-card-pinel',
  templateUrl: './produit-card-pinel.component.html',
  styleUrls: ['./produit-card-pinel.component.scss']
})
export class ProduitCardPinelComponent implements OnInit {
  @Input() pinel: ResultatLoiPinelDTO;
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
      {data: [ this.pinel.economyImpots, this.pinel.mensualiteCredit, this.pinel.loyerMaximum, this.pinel.fraisAnnexe], label: 'Pinel'}
    ];
    this.chartLabels = [];
    this.chartColors = [
      {
        backgroundColor: [ '#ECB608', '#BCBCBC', '#212121', '#f44336'],
        hoverBackgroundColor: [ '#FFC870', '#A8B3C5', '#616774', '#f44336'],
        borderWidth: 3,
      }
    ];
  }

  getChoice(): string {
    if(this.rang === 1) {
      return 'le meilleur choix pour vous';
    } else if (this.rang > 1 && this.rang <= 4) {
      return 'est un bon choix pour vous.'
    } else if (this.rang > 4 && this.rang <= 7) {
      return 'n`est pas un bon choix pour vous.'
    } else {
      return 'est un mauvais choix;'
    }
  }
}


