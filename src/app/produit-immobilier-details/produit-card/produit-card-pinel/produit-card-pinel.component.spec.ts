import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProduitCardPinelComponent } from './produit-card-pinel.component';

describe('ProduitCardPinelComponent', () => {
  let component: ProduitCardPinelComponent;
  let fixture: ComponentFixture<ProduitCardPinelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProduitCardPinelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProduitCardPinelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
