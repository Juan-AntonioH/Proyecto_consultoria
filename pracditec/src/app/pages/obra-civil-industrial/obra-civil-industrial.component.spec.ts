import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObraCivilIndustrialComponent } from './obra-civil-industrial.component';

describe('ObraCivilIndustrialComponent', () => {
  let component: ObraCivilIndustrialComponent;
  let fixture: ComponentFixture<ObraCivilIndustrialComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ObraCivilIndustrialComponent]
    });
    fixture = TestBed.createComponent(ObraCivilIndustrialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
