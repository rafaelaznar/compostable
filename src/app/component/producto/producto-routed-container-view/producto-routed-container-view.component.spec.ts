import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductoRoutedContainerViewComponent } from './producto-routed-container-view.component';

describe('ProductoRoutedViewComponent', () => {
  let component: ProductoRoutedContainerViewComponent;
  let fixture: ComponentFixture<ProductoRoutedContainerViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProductoRoutedContainerViewComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductoRoutedContainerViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
