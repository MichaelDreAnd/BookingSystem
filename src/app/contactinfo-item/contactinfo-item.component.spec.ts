import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactinfoItemComponent } from './contactinfo-item.component';

describe('ContactinfoItemComponent', () => {
  let component: ContactinfoItemComponent;
  let fixture: ComponentFixture<ContactinfoItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactinfoItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactinfoItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
