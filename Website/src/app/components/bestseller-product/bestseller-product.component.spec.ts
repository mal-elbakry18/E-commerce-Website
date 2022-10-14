import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BestsellerProductComponent } from './bestseller-product.component';

describe('BestsellerProductComponent', () => {
  let component: BestsellerProductComponent;
  let fixture: ComponentFixture<BestsellerProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BestsellerProductComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BestsellerProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
