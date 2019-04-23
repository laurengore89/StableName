import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RiderlistRiderComponent } from './rider.component';

describe('RiderComponent', () => {
  let component: RiderlistRiderComponent;
  let fixture: ComponentFixture<RiderlistRiderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RiderlistRiderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RiderlistRiderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
