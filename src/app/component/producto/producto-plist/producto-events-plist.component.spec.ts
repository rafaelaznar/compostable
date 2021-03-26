import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductoEventsPlistComponent } from './producto-events-plist.component';

describe('ProductoEventsPlistComponent', () => {
  let component: ProductoEventsPlistComponent;
  let fixture: ComponentFixture<ProductoEventsPlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProductoEventsPlistComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductoEventsPlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
