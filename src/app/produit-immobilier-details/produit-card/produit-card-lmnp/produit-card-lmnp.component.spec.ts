import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProduitCardLmnpComponent } from './produit-card-lmnp.component';

describe('ProduitCardLmnpComponent', () => {
  let component: ProduitCardLmnpComponent;
  let fixture: ComponentFixture<ProduitCardLmnpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProduitCardLmnpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProduitCardLmnpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
