import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScorelistRiderComponent } from './rider.component';

describe('RiderComponent', () => {
  let component: ScorelistRiderComponent;
  let fixture: ComponentFixture<ScorelistRiderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScorelistRiderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScorelistRiderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
