import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProduitCardMalrauxComponent } from './produit-card-malraux.component';

describe('ProduitCardMalrauxComponent', () => {
  let component: ProduitCardMalrauxComponent;
  let fixture: ComponentFixture<ProduitCardMalrauxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProduitCardMalrauxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProduitCardMalrauxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
