import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScorelistScoreComponent } from './score.component';

describe('ScoreComponent', () => {
  let component: ScorelistScoreComponent;
  let fixture: ComponentFixture<ScorelistScoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScorelistScoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScorelistScoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
