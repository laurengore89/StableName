import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScorelistComponent } from './scorelist.component';

describe('ScorelistComponent', () => {
  let component: ScorelistComponent;
  let fixture: ComponentFixture<ScorelistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScorelistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScorelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
