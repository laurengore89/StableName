import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HorselistHorseComponent } from './horse.component';

describe('HorseComponent', () => {
  let component: HorselistHorseComponent;
  let fixture: ComponentFixture<HorselistHorseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HorselistHorseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HorselistHorseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
