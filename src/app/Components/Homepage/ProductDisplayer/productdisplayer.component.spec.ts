import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductdisplayerComponent } from './productdisplayer.component';

describe('ProductdisplayerComponent', () => {
  let component: ProductdisplayerComponent;
  let fixture: ComponentFixture<ProductdisplayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductdisplayerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductdisplayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
