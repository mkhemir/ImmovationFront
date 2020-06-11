import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProduitCardMhComponent } from './produit-card-mh.component';

describe('ProduitCardMhComponent', () => {
  let component: ProduitCardMhComponent;
  let fixture: ComponentFixture<ProduitCardMhComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProduitCardMhComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProduitCardMhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
