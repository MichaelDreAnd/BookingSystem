import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectofferComponent } from './selectoffer.component';

describe('SelectofferComponent', () => {
  let component: SelectofferComponent;
  let fixture: ComponentFixture<SelectofferComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectofferComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectofferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
