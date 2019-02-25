import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HorseComponent } from './horse.component';
import { Horse, Height } from '../models';
import { Colour, Studbook, Sex } from '../enums';

describe('HorseComponent', () => {
  let component: HorseComponent;
  let fixture: ComponentFixture<HorseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HorseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HorseComponent);
    component = fixture.componentInstance;
    component.horse = new Horse('Dobbin McElroy III', 'Dobs', Sex.Stallion, new Height(16, 2), 2000, Colour.Chestnut, Studbook.TB);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render name in a h2 tag', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h2').textContent).toContain('Dobbin McElroy III (Dobs)');
  });

  it('should render the rest of the description', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('p').textContent).toContain('yo chestnut stallion, 16.2hh, Thoroughbred');
  });
});
