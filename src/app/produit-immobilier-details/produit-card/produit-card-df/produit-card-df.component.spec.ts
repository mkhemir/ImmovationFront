import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProduitCardDfComponent } from './produit-card-df.component';

describe('ProduitCardDfComponent', () => {
  let component: ProduitCardDfComponent;
  let fixture: ComponentFixture<ProduitCardDfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProduitCardDfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProduitCardDfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
