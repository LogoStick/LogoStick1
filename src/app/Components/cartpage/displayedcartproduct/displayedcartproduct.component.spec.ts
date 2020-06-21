import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayedcartproductComponent } from './displayedcartproduct.component';

describe('DisplayedcartproductComponent', () => {
  let component: DisplayedcartproductComponent;
  let fixture: ComponentFixture<DisplayedcartproductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayedcartproductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayedcartproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
