import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductoViewComponent } from './producto-view.component';

describe('ProductoRoutedViewComponent', () => {
  let component: ProductoViewComponent;
  let fixture: ComponentFixture<ProductoViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProductoViewComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductoViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
