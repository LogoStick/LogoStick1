import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayedProductComponent } from './displayed-product.component';

describe('DisplayedProductComponent', () => {
  let component: DisplayedProductComponent;
  let fixture: ComponentFixture<DisplayedProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayedProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayedProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
