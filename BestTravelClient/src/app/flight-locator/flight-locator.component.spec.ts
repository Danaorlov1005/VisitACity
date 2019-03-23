import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightLocatorComponent } from './flight-locator.component';

describe('FlightLocatorComponent', () => {
  let component: FlightLocatorComponent;
  let fixture: ComponentFixture<FlightLocatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlightLocatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlightLocatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
