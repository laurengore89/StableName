import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RiderlistComponent } from './riderlist.component';

describe('RiderlistComponent', () => {
  let component: RiderlistComponent;
  let fixture: ComponentFixture<RiderlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RiderlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RiderlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
