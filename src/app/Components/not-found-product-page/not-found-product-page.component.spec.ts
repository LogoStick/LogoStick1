import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotFoundProductPageComponent } from './not-found-product-page.component';

describe('NotFoundProductPageComponent', () => {
  let component: NotFoundProductPageComponent;
  let fixture: ComponentFixture<NotFoundProductPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotFoundProductPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotFoundProductPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
