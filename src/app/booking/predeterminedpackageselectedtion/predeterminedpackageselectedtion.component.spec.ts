import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PredeterminedpackageselectedtionComponent } from './predeterminedpackageselectedtion.component';

describe('PredeterminedpackageselectedtionComponent', () => {
  let component: PredeterminedpackageselectedtionComponent;
  let fixture: ComponentFixture<PredeterminedpackageselectedtionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PredeterminedpackageselectedtionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PredeterminedpackageselectedtionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
