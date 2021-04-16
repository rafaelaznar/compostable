import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductoRoutedViewComponent } from './producto-routed-view.component';

describe('ProductoRoutedViewComponent', () => {
  let component: ProductoRoutedViewComponent;
  let fixture: ComponentFixture<ProductoRoutedViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProductoRoutedViewComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductoRoutedViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
