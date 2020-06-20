import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayedproductComponent } from './displayedproduct.component';

describe('DisplayedproductComponent', () => {
  let component: DisplayedproductComponent;
  let fixture: ComponentFixture<DisplayedproductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayedproductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayedproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
