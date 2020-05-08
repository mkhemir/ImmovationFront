import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProduitChartComponent } from './produit-chart.component';

describe('ProduitChartComponent', () => {
  let component: ProduitChartComponent;
  let fixture: ComponentFixture<ProduitChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProduitChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProduitChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
