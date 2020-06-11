import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProduitCardBouvardComponent } from './produit-card-bouvard.component';

describe('ProduitCardBouvardComponent', () => {
  let component: ProduitCardBouvardComponent;
  let fixture: ComponentFixture<ProduitCardBouvardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProduitCardBouvardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProduitCardBouvardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
