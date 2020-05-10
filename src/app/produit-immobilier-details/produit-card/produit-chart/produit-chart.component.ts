import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-produit-chart',
  templateUrl: './produit-chart.component.html',
  styleUrls: ['./produit-chart.component.scss']
})
export class ProduitChartComponent {
  public chartType = 'pie';

  public chartDatasets: Array<any> = [
    {data: [ 100, 40, 120], label: 'My First dataset'}
  ];

  public chartLabels: Array<any> = [ 'Yellow', 'Grey', 'Dark Grey'];

  public chartColors: Array<any> = [
    {
      backgroundColor: [ '#FDB45C', '#949FB1', '#4D5360'],
      hoverBackgroundColor: [ '#FFC870', '#A8B3C5', '#616774'],
      borderWidth: 2,
    }
  ];

  public chartOptions: any = {
    responsive: true
  };

  public chartClicked(e: any): void {
  }

  public chartHovered(e: any): void {
  }

}
