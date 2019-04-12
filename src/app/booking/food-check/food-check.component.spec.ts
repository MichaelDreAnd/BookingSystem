import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodCheckComponent } from './food-check.component';

describe('FoodCheckComponent', () => {
  let component: FoodCheckComponent;
  let fixture: ComponentFixture<FoodCheckComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoodCheckComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
