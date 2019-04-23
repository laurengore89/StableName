import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RiderlistHorseComponent } from './horse.component';
import { Horse, HorseDTO } from '../../../models';

describe('HorseComponent', () => {
  let component: RiderlistHorseComponent;
  let fixture: ComponentFixture<RiderlistHorseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RiderlistHorseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RiderlistHorseComponent);
    component = fixture.componentInstance;
    component.horse = new Horse(new HorseDTO('Dobbin McElroy III', '100AZ100', 'Dobs', 'S', 16.2, 2000, 'Ch', 'SSSS', 'TB', 2015));
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
