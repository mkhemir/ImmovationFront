import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductLightComponent } from './product-light.component';

describe('ProductLightComponent', () => {
  let component: ProductLightComponent;
  let fixture: ComponentFixture<ProductLightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductLightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductLightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
