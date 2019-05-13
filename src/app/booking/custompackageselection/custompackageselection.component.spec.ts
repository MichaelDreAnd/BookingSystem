import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustompackageselectionComponent } from './custompackageselection.component';

describe('CustompackageselectionComponent', () => {
  let component: CustompackageselectionComponent;
  let fixture: ComponentFixture<CustompackageselectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustompackageselectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustompackageselectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
