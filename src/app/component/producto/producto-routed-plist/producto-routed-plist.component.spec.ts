import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductoRoutedPlistComponent } from './producto-routed-plist.component';

describe('ProductoRoutedPlistComponent', () => {
  let component: ProductoRoutedPlistComponent;
  let fixture: ComponentFixture<ProductoRoutedPlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProductoRoutedPlistComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductoRoutedPlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
