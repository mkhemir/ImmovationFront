import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-produit-chart',
  templateUrl: './produit-chart.component.html',
  styleUrls: ['./produit-chart.component.scss']
})
export class ProduitChartComponent {
  @Input() chartType : string; //= 'pie';

  @Input() chartDatasets: Array<any> ;

  @Input() chartLabels: Array<any> ; //= [ 'Yellow', 'Grey', 'Dark Grey'];

  @Input() chartColors: Array<any> ; /*= [
    {
      backgroundColor: [ '#FDB45C', '#949FB1', '#4D5360'],
      hoverBackgroundColor: [ '#FFC870', '#A8B3C5', '#616774'],
      borderWidth: 2,
    }
  ];*/

  public chartOptions: any = {
    responsive: true
  };

  public chartClicked(e: any): void {
  }

  public chartHovered(e: any): void {
  }

}
