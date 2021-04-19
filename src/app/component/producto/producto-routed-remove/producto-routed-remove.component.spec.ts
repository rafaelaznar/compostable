import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductoRoutedRemoveComponent } from './producto-routed-remove.component';

describe('ProductoRoutedViewComponent', () => {
  let component: ProductoRoutedRemoveComponent;
  let fixture: ComponentFixture<ProductoRoutedRemoveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProductoRoutedRemoveComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductoRoutedRemoveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
