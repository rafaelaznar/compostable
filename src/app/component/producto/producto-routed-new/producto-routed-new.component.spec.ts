import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductoRoutedNewComponent } from './producto-routed-new.component';

describe('ProductoRoutedNewComponent', () => {
  let component: ProductoRoutedNewComponent;
  let fixture: ComponentFixture<ProductoRoutedNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductoRoutedNewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductoRoutedNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
